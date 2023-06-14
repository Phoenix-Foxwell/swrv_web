import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";


export const loader: LoaderFunction = async (props: LoaderArgs) => {


    const cookieHeader = props.request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);
    return json({ user: cookie.user });
}

const UserDrafts = () => {
    const userid = useLoaderData().user.id;
    const [resDarft, setResDarft] = useState<any[]>([]);

    const init = async () => {
        let req = {
            "search": {
                "fromUser": userid,
                "influencer": userid,
            }
        };

        const responseData = await axios.post(`${BaseUrl}/api/search-draft`, req);

        if (responseData.data.status == true) {
            setResDarft(responseData.data.data);
        }
    }


    useEffect(() => {
        init();
    }, []);

    return (
        <>
            <div className="p-4 rounded-xl shadow-xl bg-white my-4">
                {
                    resDarft.length == 0 ?
                        <div>You haven't created any drafts yet.</div>
                        :
                        <div>
                            <p className="text-md font-medium">User Created draft</p>
                            <div className="w-full bg-gray-400 h-[1px] my-2"></div>
                            <div className="flex gap-8 flex-wrap">
                                {
                                    resDarft.map((val: any, index: number) => {
                                        let image = val["brand"].length == 0 || val["brand"] == undefined || val["brand"] == null || val["brand"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"] == "0" || val["brand"]["logo"] == undefined || val["brand"]["logo"] == null || val["brand"]["logo"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"];
                                        return <div key={index} className="my-2 p-4 bg-white rounded-lg shadow-lg w-60">
                                            <div className="flex">
                                                <img src={image} alt="influencer pic" className="w-10 h-10 shrink-0 rounded-md" />
                                                <div className="ml-2">
                                                    <p className="text-md font-medium">{val.brand.name}</p>
                                                    <p className="text-sm font-medium">{val.brand.email}</p>
                                                </div>
                                            </div>
                                            <p className="mt-2 text-md font-medium">Description</p>
                                            <p className="text-sm font-medium">{val.description}</p>
                                            <p className="mt-2 text-md font-medium">Handle Info</p>
                                            <div className="flex gap-4">
                                                <img src={val.handle.platform.logo} alt="platform" className="w-14 h-14 shrink-0 rounded-md object-fill object-center" />
                                                <p className="text-xl font-semibold text-center">{val.handle.name}</p>
                                            </div>
                                            <p className="mt-2 text-md font-medium">Publication Time</p>
                                            {val.draft_approval != null ?
                                                <p className="text-sm font-medium">{new Date(val.draft_approval.toString()).toLocaleString()}</p> :
                                                <p className="text-sm font-medium">No Publication Time is set</p>
                                            }
                                            <p className="mt-2 text-md font-medium">Attachment</p>
                                            <a target="_blank" className="mt-2 text-sm font-normal border-2 border-blue-500 inline-block my-2 py-1 px-4  text-blue-500 hover:text-white hover:bg-blue-500" href={val.attach01}>View Doc</a>
                                            {val.status.name == "REJECTED" ?
                                                <>
                                                    <p className="mt-2 text-md font-medium">Rejection Reason</p>
                                                    <p className="text-sm font-medium">{val.status.message}</p>
                                                </>
                                                : null}
                                            <p className="mt-2 text-md font-medium">Status</p>
                                            <p className={`mt-2 text-md text-white font-medium text-center rounded-md ${val.status.name == "ACCEPTED" ? "bg-green-500" : val.status.name == "PENDING" ? "bg-yellow-500" : "bg-red-500"}`}>{val.status.name}</p>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                }
            </div>
        </>
    );
}


export default UserDrafts;