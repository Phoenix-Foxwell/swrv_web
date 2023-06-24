import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { Outlet, useLoaderData, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { HomeFooter } from "~/components/home/footer/homefooter";
import { MainNavBar } from "~/components/home/navbar/mainnavbar";
import { SideBar } from "~/components/home/sidebar/sidebar";
import { userPrefs } from "~/cookies";
import SideBarStore from "~/state/home/sidebarstate";

export const loader: LoaderFunction = async (props: LoaderArgs) => {
  const cookieHeader = props.request.headers.get("Cookie");
  const cookie = await userPrefs.parse(cookieHeader);
  return json({ user: cookie.user });
};

const HomePage = () => {
  const userdata = useLoaderData();

  const isbrand = userdata.user.role.code != 10;
  const isOpen = SideBarStore((state) => state.isOpen);
  const navigator = useNavigate();
  useEffect(() => {
    if (userdata.user.status.code == "0" || userdata.user.status.code == 0) {
      navigator("/sorry");
    }
  }, []);
  return (
    <>
      <div className="flex md:relative bg-background">
        <SideBar isBrand={isbrand}></SideBar>
        <div
          className={`w-full min-h-screen transition-all  relative md:relative ${isOpen ? "md:ml-60" : "md:ml-20"
            }  p-2 pr-4`}
        >
          <div className={`fixed top-0 left-0 w-full my-4 mx-2 pl-2 pr-6 z-20 ${isOpen ? "md:pl-60" : "md:pl-20"}`}>
            <MainNavBar
              isBrand={isbrand}
              name={userdata.user.userName}
              role={userdata.user.role.name}
              avatar={userdata.user.pic}
              id={userdata.user.id}
            ></MainNavBar>
          </div>
          {/* main section start here */}
          <div className="relative min-h-full">
            <div className="pb-16">
              <div className="h-16"></div>
              <Outlet />
            </div>
            <div className="w-full absolute bottom-0 left-0 h-16">
              <HomeFooter></HomeFooter>
            </div>
          </div>
          {/* main section end here */}
        </div>
      </div>
    </>
  );
};
export default HomePage;
