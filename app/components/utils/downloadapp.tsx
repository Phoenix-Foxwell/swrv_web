import { Link } from "@remix-run/react";
import { CusButton } from "./buttont";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faAppStore, faApple } from "@fortawesome/free-brands-svg-icons";

export const DownloadApp = () => {
  return (
    <>
      <div className="bg-[#adadad] rounded-xl flex mt-8 p-6 md:pl-24 flex-col md:flex-row h-full">
        <div>
          <h3 className="text-white text-4xl font-bold">
            Join the largest <br /> influencer network
          </h3>
          <h3 className="text-white text-md font-normal mt-4">
            Instant access to top influencers
          </h3>
        </div>
        <div className="grow"></div>
        <div className="flex flex-col md:h-36 lg:pr-20">
          <Link to={"/login"}>
            <button className="py-2 px-4 text-white rounded-lg bg-black">Download <FontAwesomeIcon icon={faAndroid}></FontAwesomeIcon> App</button>
          </Link>
          <div className="grow"></div>
          <Link to={"/login"}>
            <button className="py-2 px-4 text-white rounded-lg bg-black">Download  <FontAwesomeIcon icon={faApple}></FontAwesomeIcon> App</button>
          </Link>
        </div>
      </div>
    </>
  );
};
