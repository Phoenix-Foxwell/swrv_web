import { LoaderArgs, redirect } from "@remix-run/node";
import { userPrefs } from "~/cookies";

export async function loader({ request }: LoaderArgs) {
    return redirect("/admin/home");
}

const Logout = () => {
    return (
        <>
            <h1>This is admin main page</h1>
        </>
    );
}
export default Logout;