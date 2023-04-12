import { LoaderArgs, redirect } from "@remix-run/node";
import { adminUser, userPrefs } from "~/cookies";

export async function loader({ request }: LoaderArgs) {
    return redirect("/adminlogin", {
        headers: {
            "Set-Cookie": await adminUser.serialize({ AdminLogin: false }),
        },
    });
}

const Logout = () => {
    return (
        <>
            <h1>This is admin logout page.</h1>
        </>
    );
}
export default Logout;