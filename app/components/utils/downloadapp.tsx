import { Link } from "@remix-run/react";
import { CusButton } from "./buttont";

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
            <CusButton
              text="Download Android App"
              background={"bg-green-500"}
            ></CusButton>
          </Link>
          <div className="grow"></div>
          <Link to={"/login"}>
            <CusButton
              text="Download IOS App"
              background={"bg-black"}
            ></CusButton>
          </Link>
        </div>
      </div>
    </>
  );
};
