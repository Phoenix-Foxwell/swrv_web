import { faDraft2digital } from "@fortawesome/free-brands-svg-icons";
import {
  IconDefinition,
  faBinoculars,
  faChevronLeft,
  faChevronRight,
  faCircleQuestion,
  faEnvelope,
  faEnvelopeOpen,
  faFolder,
  faHandHoldingDollar,
  faHeart,
  faPeopleLine,
  faRightFromBracket,
  faSearch,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import SideBarStore from "~/state/home/sidebarstate";
import SideBarNavStore, { SideBarTabs } from "~/state/navigation/sidebar";
type SideBarProps = {
  isBrand: boolean;
};

export const SideBar = (props: SideBarProps) => {
  const currentPage = SideBarNavStore((state) => state.currentIndex);
  const sidebar = SideBarNavStore((state) => state.changeTab);
  const isOpen = SideBarStore((state) => state.isOpen);
  const changeSidebar = SideBarStore((state) => state.change);

  useEffect(() => {
    changeSidebar(true);
  }, []);
  return (
    <>
      <div
        className={` ${isOpen ? "w-60" : "w-20"
          } h-screen p-2 fixed top-0 left-0 md:block hidden z-30`}
      >
        <div className="w-full h-full bg-primary rounded-2xl flex flex-col py-8 px-3">
          <div
            onClick={() => {
              changeSidebar(!isOpen);
            }}
            className="w-full flex cursor-pointer"
          >
            <div className="grow"></div>
            <div
              className={`w-10 h-10 rounded-xl grid place-items-center text-white text-lg font-bold my-1 bg-[#053497] `}
            >
              {" "}
              <FontAwesomeIcon
                icon={isOpen ? faChevronLeft : faChevronRight}
              ></FontAwesomeIcon>{" "}
            </div>
          </div>
          <Link
            to={"/home/mycampaings"}
            onClick={() => {
              sidebar(SideBarTabs.MyCampaigns);
              changeSidebar(false);
            }}
          >
            <NavTab
              title="My campaigns"
              isOpen={isOpen}
              isActive={currentPage === SideBarTabs.MyCampaigns}
              icon={faFolder}
            ></NavTab>
          </Link>
          <Link
            to={"/home/findcampaign"}
            onClick={() => {
              sidebar(SideBarTabs.FindCampaigns);
              changeSidebar(false);
            }}
          >
            <NavTab
              title="Find campaigns"
              isOpen={isOpen}
              isActive={currentPage === SideBarTabs.FindCampaigns}
              icon={faBinoculars}
            ></NavTab>
          </Link>
          <Link
            to={"/home/inbox"}
            onClick={() => {
              sidebar(SideBarTabs.Inbox);
              changeSidebar(false);
            }}
          >
            <NavTab
              title="Inbox"
              isOpen={isOpen}
              isActive={currentPage === SideBarTabs.Inbox}
              icon={faEnvelopeOpen}
            ></NavTab>
          </Link>

          {/* only for influencer options */}
          {props.isBrand ? null : (
            <>
              <Link
                to={"/home/revenues"}
                onClick={() => {
                  sidebar(SideBarTabs.MyEarnings);
                  changeSidebar(false);
                }}
              >
                <NavTab
                  title="My earnings"
                  isOpen={isOpen}
                  isActive={currentPage === SideBarTabs.MyEarnings}
                  icon={faHandHoldingDollar}
                ></NavTab>
              </Link>
              <Link
                to={"/home/drafts"}
                onClick={() => {
                  sidebar(SideBarTabs.Drafts);
                  changeSidebar(false);
                }}
              >
                <NavTab
                  title="Drafts"
                  isOpen={isOpen}
                  isActive={currentPage === SideBarTabs.Drafts}
                  icon={faDraft2digital}
                ></NavTab>
              </Link>
              <Link
                to={"/home/favourite"}
                onClick={() => {
                  sidebar(SideBarTabs.Favourite);
                  changeSidebar(false);
                }}
              >
                <NavTab
                  title="Favourite"
                  isOpen={isOpen}
                  isActive={currentPage === SideBarTabs.Favourite}
                  icon={faHeart}
                ></NavTab>
              </Link>
            </>
          )}

          <Link
            to={"/home/invite"}
            onClick={() => {
              sidebar(SideBarTabs.Invite);
              changeSidebar(false);
            }}
          >
            <NavTab
              title="Invite"
              isOpen={isOpen}
              isActive={currentPage === SideBarTabs.Invite}
              icon={faUserGroup}
            ></NavTab>
          </Link>
          <div className="grow"></div>
          <Link
            to={"/home/help"}
            onClick={() => {
              sidebar(SideBarTabs.Help);
              changeSidebar(false);
            }}
          >
            <NavTab
              title="Help"
              isOpen={isOpen}
              isActive={currentPage === SideBarTabs.Help}
              icon={faCircleQuestion}
            ></NavTab>
          </Link>
          <Link to={"/logout"}>
            <NavTab
              title="Logout"
              isOpen={isOpen}
              isActive={currentPage === SideBarTabs.None}
              icon={faRightFromBracket}
            ></NavTab>
          </Link>
        </div>
      </div>
    </>
  );
};

type NavTabProps = {
  icon: IconDefinition;
  isActive: boolean;
  isOpen: boolean;
  title: string;
  fun?: (e: Event) => void;
};

export const NavTab = (props: NavTabProps) => {
  return (
    <>
      <div
        className={`${props.isOpen ? "w-full" : "w-10"} h-10 rounded-xl ${props.isOpen ? "flex items-center " : "grid place-items-center"
          }  text-white text-lg font-bold my-1 ${props.isActive ? "bg-[#053497]" : ""
          } ${props.isOpen ? "px-4" : ""}`}
      >
        {" "}
        <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>{" "}
        {props.isOpen ? (
          <p className="ml-4 font-normal text-md">{props.title}</p>
        ) : null}{" "}
      </div>
    </>
  );
};
