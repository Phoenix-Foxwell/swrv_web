import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { userPrefs } from "~/cookies";

export const loader: LoaderFunction = async (props: LoaderArgs) => {
    console.log(props.params.mail);
    const cookieHeader = props.request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);
    return json({ user: cookie.user });
};

const verifyuser: React.FC = (): JSX.Element => {

    return (
        <>
            <div className="w-full bg-[#eeeeee] grid place-content-center h-screen">
                <div className="bg-white rounded-lg shadow-md p-6 mx-10">
                    <div className="rounded-md bg-red-500 text-white text-2xl text-center font-semibold py-2 px-4">This is an error</div>
                    <div className="rounded-md bg-green-500 text-white text-2xl text-center font-semibold py-2 px-4">This completed message</div>
                    <div className="h-10"></div>
                    <div className="w-full grid place-items-center">
                        <Link to="/" className="text-xl text-center font-semibold text-blue ">Go back to website</Link>
                    </div>
                </div>
            </div>
        </>
    );
}


export default verifyuser;