import { useLoadScript } from "@react-google-maps/api";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ConAlert } from "~/components/utils/alert";

export const loader: LoaderFunction = (request: LoaderArgs) => {
    console.log(request.params.email)
    return json({ email: request.params.email });
}

const Welcome: React.FC = (): JSX.Element => {
    const email = useLoaderData().email;
    console.log(email);
    return (
        <>
            <div className="min-h-screen w-full grid place-items-center">
                <ConAlert email={email}></ConAlert>
            </div>
        </>
    );
}

export default Welcome;