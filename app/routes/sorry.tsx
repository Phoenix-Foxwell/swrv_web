import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import axios from "axios";
import { useState } from "react";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
    const cookieHeader = request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);
    return json({ userid: cookie.user.id });
};


const Sorry = () => {
    const userid = useLoaderData().userid;
    const [error, setError] = useState<String | null>(null);
    const [sus, setSus] = useState<String | null>(null);
    const sendmain = async () => {
        setError(val => null);
        setSus(val => null);
        const sendverificationmail = await axios({
            method: "post",
            url: `${BaseUrl}/api/send-otp`,
            data: { userId: userid },
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

        if (sendverificationmail.data.status) {
            setSus(val => "E-mail sent successfully.")
        } else {
            setError(val => sendverificationmail.data.message);
        }
    }


    return (
        <>
            <div className="bg-[#eeeeee] min-h-screen p-6 grid place-items-center w-full">
                <div className="w-full bg-white rounded-lg shadow-lg p-10 mt-6 relative ">
                    <div className=" text-center text-[100px] font-black text-stroke text-white  absolute translate-y-40 grid place-items-center top-0 left-0 translate-x-52">
                        <div>
                            Sorry !!
                        </div>
                    </div>
                    <div className="w-full grid place-content-center relative">
                        <img src="/images/avatar/sorry.png" alt="error" className="h-[300px]" />
                    </div>
                    <div className="w-full grid place-items-center relative">
                        <p className="text-sm font-normal text-gray-500 text-left w-96">
                            Your email is not verified kindly verify your email before proceeding
                        </p>
                    </div>
                    <div className="flex gap-4 w-full justify-center mt-6">
                        <button
                            onClick={sendmain}
                            className="text-white text-lg bg-primary rounded-md py-1 px-2">Resend E-Mail</button>
                        <Link to={"/contact"} className="text-white text-lg bg-primary rounded-md py-1 px-2">Contact-US</Link>
                    </div>
                    <div className="w-full grid place-items-center my-4">
                        <Link to={"/logout"} className="text-white text-xl bg-secondary rounded-md py-1 px-2">Login</Link>
                    </div>

                    {error == "" || error == null || error == undefined ? null : (
                        <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">
                            {error}
                        </div>
                    )}

                    {sus == "" || sus == null || sus == undefined ? null : (
                        <div className="bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4">
                            {sus}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Sorry;