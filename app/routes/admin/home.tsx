import { IconDefinition, faBarChart, faBars, faBlog, faChartPie, faCity, faDollarSign, faFlag, faHome, faLanguage, faLocationPin, faMap, faPeopleGroup, faRightToBracket, faShop, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBandcamp, faDeploydog, faFacebook } from "@fortawesome/free-brands-svg-icons";
import AsideBarStore, { AdminSideBarTabs } from "~/state/siderbar";
import { adminUser } from "~/cookies";
import { LoaderArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useNavigate } from "@remix-run/react";
import { useEffect } from "react";


export const loader: LoaderFunction = async (props: LoaderArgs) => {
    const cookieHeader = props.request.headers.get("Cookie");
    const cookie = await adminUser.parse(cookieHeader);

    if (cookie == null || cookie == undefined) {
        return redirect("/adminlogin");
    } else {
        if (cookie.AdminLogin == false) {
            return redirect("/adminlogin");
        }
    }
    return json({ user: cookie.user });
}


const DashBoard = () => {
    const userData = useLoaderData().user;
    const isMobile = AsideBarStore((state) => state.isOpen);
    const changeMobile = AsideBarStore((state) => state.change);
    const useravatar = (userData.userPicUrl == null || userData.userPicUrl == undefined || userData.userPicUrl == "" || userData.userPicUrl == "0") ? "/images/avatar/user.png" : userData.userPicUrl;
    const asideindex = AsideBarStore((state) => state.currentIndex);
    const achangeindex = AsideBarStore((state) => state.changeTab);
    const navigator = useNavigate();
    // useEffect(() => {
    //     if(asideindex === AdminSideBarTabs.None){
    //         navigator("/admin/home");
    //     }
    // }, []);
    return (
        <>
            <div className="flex w-full p-4 bg-[#31353f] min-h-screen gap-4">
                <div className={`w-full md:w-60 bg-[#1b2028] rounded-md p-2 md:flex flex-col absolute top-0 left-0 min-h-full md:h-auto md:relative ${isMobile ? "grid place-items-center" : "hidden"}`}>
                    <div className="md:flex flex-col md:h-full">
                        <div className="text-white text-center mb-4">
                            <h4 className="text-3xl">SWRV</h4>
                            <p className="text-xs font-bold">ADMIN PANEL</p>
                        </div>
                        <div className="flex flex-col grow">
                            <Link to={"/admin/home"} onClick={() => achangeindex(AdminSideBarTabs.None)}>
                                <SidebarTab icon={faBarChart} title="DASHBOARD" active={asideindex === AdminSideBarTabs.None}></SidebarTab>
                            </Link>

                            {/* status change */}
                            <Link to={"/admin/home/brand/"} onClick={() => { achangeindex(AdminSideBarTabs.BRAND); changeMobile(false); }}>
                                <SidebarTab icon={faBandcamp} title="BRAND" active={asideindex === AdminSideBarTabs.BRAND}></SidebarTab>
                            </Link>
                            <Link to={"/admin/home/campaign/"} onClick={() => { achangeindex(AdminSideBarTabs.CAMPAIGN); changeMobile(false); }}>
                                <SidebarTab icon={faFlag} title="CAMPAIGN" active={asideindex === AdminSideBarTabs.CAMPAIGN}></SidebarTab>
                            </Link>
                            <Link to={"/admin/home/user/"} onClick={() => { achangeindex(AdminSideBarTabs.USER); changeMobile(false); }}>
                                <SidebarTab icon={faUser} title="USER" active={asideindex === AdminSideBarTabs.USER}></SidebarTab>
                            </Link>

                            {/* edit delete view */}
                            <Link to={"/admin/home/category/"} onClick={() => { achangeindex(AdminSideBarTabs.CATEGORY); changeMobile(false); }}>
                                <SidebarTab icon={faChartPie} title="CATEGORY" active={asideindex === AdminSideBarTabs.CATEGORY}></SidebarTab>
                            </Link>
                            <Link to={"/admin/home/market/"} onClick={() => { achangeindex(AdminSideBarTabs.MARKET); changeMobile(false); }}>
                                <SidebarTab icon={faShop} title="MARKET" active={asideindex === AdminSideBarTabs.MARKET}></SidebarTab>
                            </Link>

                            <Link to={"/admin/home/team/"} onClick={() => { achangeindex(AdminSideBarTabs.TEAM); changeMobile(false); }}>
                                <SidebarTab icon={faPeopleGroup} title="TEAM" active={asideindex === AdminSideBarTabs.TEAM}></SidebarTab>
                            </Link>

                            <Link to={"/admin/home/blognews/"} onClick={() => { achangeindex(AdminSideBarTabs.BLOGNEWS); changeMobile(false); }}>
                                <SidebarTab icon={faBlog} title="BLOG NEWS EVENT" active={asideindex === AdminSideBarTabs.BLOGNEWS}></SidebarTab>
                            </Link>

                            <Link to={"/admin/home/country/"} onClick={() => { achangeindex(AdminSideBarTabs.COUNTRY); changeMobile(false); }}>
                                <SidebarTab icon={faMap} title="COUNTRY" active={asideindex === AdminSideBarTabs.COUNTRY}></SidebarTab>
                            </Link>
                            <Link to={"/admin/home/state/"} onClick={() => { achangeindex(AdminSideBarTabs.STATE); changeMobile(false); }}>
                                <SidebarTab icon={faLocationPin} title="STATE" active={asideindex === AdminSideBarTabs.STATE}></SidebarTab>
                            </Link>
                            <Link to={"/admin/home/city/"} onClick={() => { achangeindex(AdminSideBarTabs.CITY); changeMobile(false); }}>
                                <SidebarTab icon={faCity} title="CITY" active={asideindex === AdminSideBarTabs.CITY}></SidebarTab>
                            </Link>
                            <Link to={"/admin/home/language/"} onClick={() => { achangeindex(AdminSideBarTabs.LANGUAGES); changeMobile(false); }}>
                                <SidebarTab icon={faLanguage} title="LANGUAGES" active={asideindex === AdminSideBarTabs.LANGUAGES}></SidebarTab>
                            </Link>
                            <Link to={"/admin/home/currency/"} onClick={() => { achangeindex(AdminSideBarTabs.CURRENCY); changeMobile(false); }}>
                                <SidebarTab icon={faDollarSign} title="CURRENCY" active={asideindex === AdminSideBarTabs.CURRENCY}></SidebarTab>
                            </Link>
                            <Link to={"/admin/home/platforms/"} onClick={() => { achangeindex(AdminSideBarTabs.PLATFORMS); changeMobile(false); }}>
                                <SidebarTab icon={faFacebook} title="PLATFORMS" active={asideindex === AdminSideBarTabs.PLATFORMS}></SidebarTab>
                            </Link>
                            <Link to={"/admin/home/campaigntype/"} onClick={() => { achangeindex(AdminSideBarTabs.CAMPAIGNTYPE); changeMobile(false); }}>
                                <SidebarTab icon={faBars} title="CAMPAIGN TYPE" active={asideindex === AdminSideBarTabs.CAMPAIGNTYPE}></SidebarTab>
                            </Link>
                            <div className="grow"></div>
                            <Link to={"/adminlogout"}>
                                <SidebarTab icon={faRightToBracket} title="LOGOUT" active={false}></SidebarTab>
                            </Link>
                            <div onClick={() => changeMobile(false)} className={`md:hidden flex gap-2 items-center my-1 b  py-1 px-2 rounded-md hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer`}>
                                <FontAwesomeIcon icon={faXmark} className="w-6"></FontAwesomeIcon>
                                <p>CLOSE</p>
                            </div>
                        </div>
                    </div >
                </div >
                <div className="flex flex-col w-full grow">
                    <TopNavBar name={userData.userName} pic={useravatar}></TopNavBar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </div >
        </>
    );
}

export default DashBoard;


type SideBarTabProps = {
    title: string
    icon: IconDefinition
    active: boolean
}
const SidebarTab = (props: SideBarTabProps) => {
    return (
        <div className={`w-60 md:w-auto flex gap-2 items-center my-1 b  py-1 px-2 rounded-md text-sm cursor-pointer ${props.active ? "border border-green-400 g-green-500 bg-opacity-10 text-green-500 " : "text-gray-300 hover:bg-[#31353f] "}`}>
            <FontAwesomeIcon icon={props.icon} className="w-6"></FontAwesomeIcon>
            <p>{props.title}</p>
        </div>
    );
}

type TopNavBarProps = {
    name: string
    pic: string
}


const TopNavBar = (props: TopNavBarProps) => {
    const isMobile = AsideBarStore((state) => state.isOpen);
    const changeMobile = AsideBarStore((state) => state.change);
    return (
        <div className="bg-[#1b2028] text-xl w-full text-center text-white rounded-md py-2 font-medium flex px-2 gap-4">
            <div className="px md:hidden" onClick={() => changeMobile(!isMobile)}>
                {/* on change will be here */}
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </div>
            <div className="px hidden md:block">
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            </div>
            <div className="text-center hidden md:block">Home</div>
            <div className="grow"></div>
            {/* <div className="bg-[#31353f] hidden sm:flex rounded-md px-2 gap-2 content-center align-middle items-center text-sm ">
                <FontAwesomeIcon
                    className="text-gray-300"
                    icon={faSearch}
                ></FontAwesomeIcon>
                <input
                    type="text"
                    className="bg-transparent outline-none placeholder:text-gray-300"
                    placeholder="Start typing to search.."
                />
            </div>
            <div className="grow"></div> */}
            <div>
                <img
                    src={props.pic}
                    alt="avatar"
                    className="w-6 h-6 rounded-md object-cover object-center"
                />
            </div>
            <div className="text-white font-medium text-lg text-center">{props.name}</div>
        </div>
    );
};

const Footer = () => {
    return (
        <div className="w-full h-10 bg-[#1b2028] rounded-md text-center grid place-items-center text-white font-medium text-lg">
            SWRV ADMIN PANEL
        </div>
    );
};
