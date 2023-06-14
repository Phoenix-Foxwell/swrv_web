import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
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

  return (
    <>
      <div className="flex md:relative bg-background">
        <SideBar isBrand={isbrand}></SideBar>
        <div
          className={`w-full transition-all  relative md:relative ${isOpen ? "md:ml-60" : "md:ml-20"
            }  p-2 pr-4`}
        >
          <div className={`fixed top-0 left-0 w-full my-4 mx-2 pr-6 z-20 ${isOpen ? "pl-60" : "pl-20"}`}>
            <MainNavBar
              isBrand={isbrand}
              name={userdata.user.userName}
              role={userdata.user.role.name}
              avatar={userdata.user.pic}
            ></MainNavBar>
          </div>
          <div className="h-14"></div>
          <Outlet />
          <HomeFooter></HomeFooter>
        </div>
      </div>
    </>
  );
};
export default HomePage;
