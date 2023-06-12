import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionArgs, ActionFunction, LoaderArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData, useNavigate } from "@remix-run/react";
import axios from "axios";
import { useRef, useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";
import UserInputStore from "~/state/user/firstinput";
import { UploadFile } from "~/utils";

export const loader: LoaderFunction = async (props: LoaderArgs) => {

    const cookieHeader = props.request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);
    return json({ user: cookie.user });
}



const ExtraPage = () => {
    const userdata = useLoaderData();
    const userId: string = userdata.user.id
    const isBrand: boolean = userdata.user.role.code == "50" ? true : false;


    const [error, setError] = useState<String | null>(null);
    const [sus, setSus] = useState<String | null>(null);

    const setIndex = UserInputStore((state) => state.setIndex);

    const nextButton = useRef<HTMLButtonElement>(null);

    const bankName = useRef<HTMLInputElement>(null);
    const branchName = useRef<HTMLInputElement>(null);
    const ifsc = useRef<HTMLInputElement>(null);
    const accountNumber = useRef<HTMLInputElement>(null);


    const doc1 = useRef<HTMLInputElement>(null);
    const doc2 = useRef<HTMLInputElement>(null);
    const doc3 = useRef<HTMLInputElement>(null);

    const [files1, setFiles1] = useState<File>();
    const [files2, setFiles2] = useState<File>();
    const [files3, setFiles3] = useState<File>();

    const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/[^0-9]/g, '');
        e.target.value = numericValue;
    };




    return (
        <>
            <div className="p-8 w-full">
                <h1 className="text-2xl text-black font-bold">Documents</h1>
                {/* {isBrand ? */}
                <>
                    <div className="hidden">
                        <input
                            type="file"
                            accept="*/*"
                            ref={doc1}
                            onChange={(value) => {
                                let file_size = parseInt(
                                    (value!.target.files![0].size / 1024 / 1024).toString()
                                );
                                if (file_size < 4) {
                                    setError(null);
                                    setFiles1(val => value!.target.files![0])
                                } else {
                                    setError("File size must be less then 4 mb");
                                }
                            }}
                        />
                        <input
                            type="file"
                            accept="*/*"
                            ref={doc2}
                            onChange={(value) => {
                                let file_size = parseInt(
                                    (value!.target.files![0].size / 1024 / 1024).toString()
                                );
                                if (file_size < 4) {
                                    setError(null);
                                    setFiles2(val => value!.target.files![0])
                                } else {
                                    setError("File size must be less then 4 mb");
                                }
                            }}
                        />
                        <input
                            type="file"
                            accept="*/*"
                            ref={doc3}
                            onChange={(value) => {
                                let file_size = parseInt(
                                    (value!.target.files![0].size / 1024 / 1024).toString()
                                );
                                if (file_size < 4) {
                                    setError(null);
                                    setFiles3(val => value!.target.files![0])
                                } else {
                                    setError("File size must be less then 4 mb");
                                }
                            }}
                        />
                    </div>
                    {/* doc section end here */}
                    <div className="flex gap-4 my-2">
                        <div className="w-full text-center bg-gray-100 text-lg font-semibold text-gray-700 rounded-md py-1 cursor-pointer" onClick={() => doc1.current?.click()}>
                            {files1 == null ? <>
                                Add Doc <FontAwesomeIcon className="mx-2" icon={faCirclePlus}></FontAwesomeIcon>
                            </> :
                                files1.name.length < 25 ? files1.name : `${files1.name.toString().slice(0, 25)}...`
                            }
                        </div>
                        {files1 != null ?
                            <a target="_blank" href={URL.createObjectURL(files1)} className="text-white text-center px-4 text-lx font-semibold rounded-md bg-cyan-500  py-2">VIEW</a>
                            : null
                        }
                    </div>

                    <div className="flex gap-4 my-2">
                        <div className="w-full text-center bg-gray-100 text-lg font-semibold text-gray-700 rounded-md py-1 cursor-pointer"
                            onClick={() => doc2.current?.click()}>

                            {files2 == null ? <>
                                Add Doc <FontAwesomeIcon className="mx-2" icon={faCirclePlus}></FontAwesomeIcon>
                            </> :
                                files2.name.length < 25 ? files2.name : `${files2.name.toString().slice(0, 25)}...`
                            }

                        </div>
                        {files2 != null ?
                            <a target="_blank" href={URL.createObjectURL(files2)} className="text-white text-center px-4 text-lx font-semibold rounded-md bg-cyan-500  py-2">VIEW</a>
                            : null
                        }
                    </div>

                    <div className="flex gap-4 my-2">
                        <div className="w-full text-center bg-gray-100 text-lg font-semibold text-gray-700 rounded-md py-1 cursor-pointer"
                            onClick={() => doc3.current?.click()}>
                            {files3 == null ? <>
                                Add Doc <FontAwesomeIcon className="mx-2" icon={faCirclePlus}></FontAwesomeIcon>
                            </> :
                                files3.name.length < 25 ? files3.name : `${files3.name.toString().slice(0, 25)}...`
                            }
                        </div>
                        {files3 != null ?
                            <a target="_blank" href={URL.createObjectURL(files3)} className="text-white text-center px-4 text-lx font-semibold rounded-md bg-cyan-500 py-2">VIEW</a>
                            : null
                        }
                    </div>
                    <div className="w-full h-[2px] bg-gray-400 my-4"></div>
                </>
                <h1 className="text-2xl text-black font-bold">Documents</h1>

                <p className="text-black text-left font-normal text-lg  mt-4">
                    Bank Name
                </p>
                <input
                    ref={bankName}
                    type={"text"}
                    className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"
                />
                <p className="text-black text-left font-normal text-lg  mt-4">
                    Branch Name
                </p>
                <input
                    ref={branchName}
                    type={"text"}
                    className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"
                />
                <p className="text-black text-left font-normal text-lg  mt-4">
                    IFSC
                </p>
                <input
                    ref={ifsc}
                    type={"text"}
                    className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"
                />
                <p className="text-black text-left font-normal text-lg  mt-4">
                    Account Number
                </p>
                <input
                    ref={accountNumber}
                    type={"text"}
                    className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"
                    onInput={handleNumberInput}
                />
                {(error == "" || error == null || error == undefined) ? null :
                    <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                }
                {(sus == "" || sus == null || sus == undefined) ? null :
                    <div className="bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4">{sus}</div>
                }

                <div onClick={async () => {

                    if (
                        bankName.current?.value == null ||
                        bankName.current?.value == undefined ||
                        bankName.current?.value == ""
                    ) {
                        setError("Enter Bank name.");
                    } else if (
                        branchName.current?.value == null ||
                        branchName.current?.value == undefined ||
                        branchName.current?.value == ""
                    ) {
                        setError("Enter Branch name.");
                    } else if (
                        ifsc.current?.value == null ||
                        ifsc.current?.value == undefined ||
                        ifsc.current?.value == ""
                    ) {
                        setError("Enter IFSC code.");
                    } else if (
                        accountNumber.current?.value == null ||
                        accountNumber.current?.value == undefined ||
                        accountNumber.current?.value == ""
                    ) {
                        setError("Enter Account Number.");
                    } else {
                        const updoc1 = await UploadFile(files1!);
                        const updoc2 = await UploadFile(files2!);
                        const updoc3 = await UploadFile(files3!);

                        let req: any = {
                            id: userId,
                            bankName: bankName.current?.value,
                            branchName: branchName.current?.value,
                            ifsc: ifsc.current?.value,
                            acNo: accountNumber.current?.value,
                        };

                        if (updoc1.status) {
                            req["doc1"] = updoc1.data;
                        }
                        if (updoc2.status) {
                            req["doc2"] = updoc2.data;
                        }
                        if (updoc3.status) {
                            req["doc3"] = updoc3.data;
                        }
                        console.log(req);
                        const data = await axios({
                            method: "post",
                            url: `${BaseUrl}/api/updateuser`,
                            data: req,
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                "Access-Control-Allow-Headers": "*",
                                "Access-Control-Allow-Options": "*",
                                "Access-Control-Allow-Methods": "*",
                                "X-Content-Type-Options": "*",
                                "Content-Type": "application/json",
                                Accept: "*",
                            },
                        });
                        if (data.data.status == false) {
                            return setError(data.data.message);
                        }
                        setIndex(5);
                        nextButton.current!.click();
                    }
                }}>
                    <CusButton text="Next" textColor={"text-white"} width={'w-full'} background={"bg-primary"} fontwidth={"font-bold"}></CusButton>
                </div>
                <Form method="post" className="hidden">
                    <input type="hidden" name="id" value={userId.toString()} />
                    <button ref={nextButton} name="submit">Submit</button>
                </Form>
            </div >
        </>
    );
}

export default ExtraPage;


export const action: ActionFunction = async ({ request }: ActionArgs) => {
    const formData = await request.formData();
    const value = Object.fromEntries(formData);


    const userdata = await axios({
        method: 'post',
        url: `${BaseUrl}/api/getuser`,
        data: { "id": value.id },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Options': '*',
            'Access-Control-Allow-Methods': '*',
            'X-Content-Type-Options': '*',
            'Content-Type': 'application/json',
            'Accept': '*'
        }
    });
    if (userdata.data.status == false) {
        return { message: userdata.data.message };
    } else {
        return redirect("/home/profilecomplete/forthpage", {
            headers: {
                "Set-Cookie": await userPrefs.serialize({ user: userdata.data.data[0], isLogin: true }),
            },
        });
    }
}
