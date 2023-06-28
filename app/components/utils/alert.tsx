import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "@remix-run/react";

export const ConAlert = () => {
    return (
        <>
            <div className="rounded-2xl bg-primary flex p-4 w-[800px]">
                <div className="p-4">
                    <img src="./images/icons/confetti.png" alt="errro" className="w-60" />
                </div>
                <div className="py-8 grow">
                    <h1 className="text-white font-semibold text-2xl text-left">Congratulations!</h1>
                    <p className="text-white font-normal text-xl text-left">Your account has been created and confirmation link was sent to an <span className="font-semibold">email ivankbfc@gmail.com</span> </p>
                    <p className="text-white font-normal text-xl text-left">Can't find a confirmation email.</p>
                </div>
                <Link to={"/home"}> <FontAwesomeIcon className="text-white text-2xl font-bold" icon={faXmark}></FontAwesomeIcon> </Link>
            </div>
        </>
    );
}