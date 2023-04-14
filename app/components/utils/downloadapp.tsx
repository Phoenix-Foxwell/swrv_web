import { Link } from "@remix-run/react";
import { CusButton } from "./buttont";

export const DownloadApp = () => {
  return (
    <>
      <div className="bg-[#0000004C] rounded-xl flex mt-8 p-6 flex-col md:flex-row h-full">
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
          <div className="grow"></div>
          <Link to={"/login"}>
            <CusButton
              text="Download Our app"
              background={"bg-secondary"}
            ></CusButton>
          </Link>
        </div>
      </div>
    </>
  );
};
