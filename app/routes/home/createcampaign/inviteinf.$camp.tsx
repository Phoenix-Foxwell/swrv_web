import {
  faAdd,
  faSearch,
  faSortDown,
  faStar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import axios from "axios";
import { useRef, useState } from "react";
import ReactSwitch from "react-switch";
import useLocalStorageState from "use-local-storage-state";
import { CusButton } from "~/components/utils/buttont";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";
import { CampaignSearchMode } from "~/types/projectenums";

export const loader: LoaderFunction = async (props: LoaderArgs) => {
  const id = props.params.camp;
  const cookieHeader = props.request.headers.get("Cookie");
  const cookie = await userPrefs.parse(cookieHeader);

  const platformRes = await axios.post(`${BaseUrl}/api/getplatform`);
  const categoryRes = await axios.post(`${BaseUrl}/api/getcategory`);
  const countryRes = await axios.post(`${BaseUrl}/api/getcountry`);

  return json({
    user: cookie.user,
    campid: id,
    platform: platformRes.data.data,
    category: categoryRes.data.data,
    country: countryRes.data.data,
  });
};

const InviteInfluencer: React.FC = (): JSX.Element => {
  const user = useLoaderData();
  const brandUserId = user.user.id;
  const campId = user.campid;

  return (
    <>
      <InfluencerSearch
        platform={user.platform}
        country={user.country}
        category={user.category}
        brandUserId={brandUserId}
        campaignId={campId}
      ></InfluencerSearch>
    </>
  );
};

export default InviteInfluencer;

type InfluencerSearchProps = {
  country: any;
  platform: any;
  category: any;
  campaignId: string;
  brandUserId: string;
};
export const InfluencerSearch = (props: InfluencerSearchProps) => {
  const country = props.country;
  const platform = props.platform;
  const category = props.category;
  const [searchType, setSearchType] = useState<CampaignSearchMode>(
    CampaignSearchMode.AdvanceSearch
  );

  const [active, setActive] = useState(false);
  const [camSearchResult, setCamSearchResult] = useState<any[]>([]);
  const champTextSearch = useRef<HTMLInputElement>(null);
  const [selCountry, setSelCountry] = useState<any[]>([]);
  const [con, setcon] = useState<boolean>(false);
  const [selPlatform, setSelectedPlatform] = useState<any[]>([]);

  const [selcategory, setSelcategory] = useState<any[]>([]);
  const [cat, setcat] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);

  const camptextsearch = async (searchtext: string) => {
    setError(null);
    champTextSearch!.current!.value = "";
    if (searchtext == "" || searchtext == null || searchtext == undefined)
      return setError("Fill the field to start searching");
    let req = { search: searchtext, role: 10 };
    const data = await axios.post(`${BaseUrl}/api/user-search`, req);
    if (data.data.status == false) {
      setCamSearchResult([]);
      return setError(data.data.message);
    }
    setCamSearchResult(data.data.data);
  };

  const campadvancesearch = async () => {
    setError(null);
    if (selcategory.length == 0) {
      setCamSearchResult([]);
      return setError("Select the category");
    }
    if (selPlatform.length == 0) {
      setCamSearchResult([]);
      return setError("Select the platform");
    }
    if (selCountry.length == 0) {
      setCamSearchResult([]);
      return setError("Select the country");
    }
    let req = {
      country: selCountry[0]["id"],
      platform: selPlatform.join(","),
      category: selcategory[0]["id"],
      active: active ? "1" : "0",
      role: 10,
    };
    const data = await axios.post(`${BaseUrl}/api/user-search`, req);
    if (data.data.status == false) return setError(data.data.message);
    setCamSearchResult(data.data.data);
  };

  const delsearch = () => {
    setCamSearchResult([]);
  };

  //all filter box
  const [showFilter, setFilter] = useState<boolean>(false);

  //save filter fox
  const [filterName, setFilterName] = useState<boolean>(false);

  //for filter error
  const [nameError, setNameError] = useState<string | null>(null);

  const [localFilter, setLocalFilter] = useLocalStorageState<any[]>(
    "InfluencerSearch",
    {
      defaultValue: [],
    }
  );
  const nameFilterRef = useRef<HTMLInputElement>(null);
  const saveFilter = (name: string) => {
    if (name == "" || name == null || name == undefined)
      return setNameError("Enter the Filter name");
    if (selcategory.length == 0) return setNameError("Select the category");
    if (selPlatform.length == 0) return setNameError("Select the platform");
    if (selCountry.length == 0) return setNameError("Select the country");

    for (let i: number = 0; i < localFilter.length; i++) {
      if (name == localFilter[i]["name"]) {
        return setNameError("Filter name already exist.");
      }
    }
    const filter = {
      name: name,
      country: selCountry,
      platform: selPlatform,
      category: selcategory,
      active: active,
    };
    setLocalFilter([...localFilter, filter]);
    nameFilterRef!.current!.value = "";
    setFilterName(false);
  };
  const loadFilter = (filterdata: any) => {
    setSelcategory(filterdata["category"]);
    setSelectedPlatform(filterdata["platform"]);
    setSelCountry(filterdata["country"]);
    setActive(filterdata["active"]);
    setFilter(false);
  };

  return (
    <>
      <div>
        <div className="flex w-full my-4">
          <div className="grow"></div>
          <Link to={"/home/mycampaings"} className="rounded-lg py-1 px-2 text-white bg-secondary text-lg">Skip This Step</Link>
        </div>
        <div className="rounded-xl shadow-xl p-6 bg-white mt-6">
          <div className="flex px-2 my-4">
            <h2 className="text-black text-xl text-left font-bold">Filter</h2>
            <div className="grow"></div>
            {searchType == CampaignSearchMode.AdvanceSearch ? (
              <div className="flex gap-x-2">
                <div className="relative">
                  <button
                    className="bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center"
                    onClick={() => {
                      setFilterName(!filterName);
                    }}
                  >
                    Save filter
                  </button>
                  <div
                    className={`w-80 right-0 max-h-56 overflow-y-scroll no-scrollbar p-2 bg-gray-100 shadow-xl absolute translate-y-2 rounded-lg ${filterName ? "" : "hidden"
                      }`}
                  >
                    <p className="text-center text-sm text-slate-900 font-semibold my-2">
                      Filter name
                    </p>
                    <input
                      ref={nameFilterRef}
                      type="text"
                      className="bg-transparent w-full outline-none border-2 rounded-md my-2 border-green-500 px-2 py-1"
                    />
                    {nameError == "" ||
                      nameError == null ||
                      nameError == undefined ? null : (
                      <div className="bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2">
                        {nameError}
                      </div>
                    )}
                    <button
                      onClick={() => {
                        saveFilter(nameFilterRef!.current!.value);
                      }}
                      className="text-center font-semibold text-md text-green-500 hover:text-white w-full hover:bg-green-500 border border-green-500"
                    >
                      SAVE
                    </button>
                    <button
                      onClick={() => {
                        setFilterName(false);
                      }}
                      className="text-center font-semibold text-md text-red-500 hover:text-white w-full hover:bg-red-500 border border-red-500 my-1"
                    >
                      Close
                    </button>
                  </div>
                </div>
                <div className="w-6"></div>
                <div className="relative">
                  <button
                    className="bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center"
                    onClick={() => {
                      setFilter(!showFilter);
                    }}
                  >
                    Saved filter
                    <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon>{" "}
                  </button>
                  <div
                    className={`w-full max-h-56 overflow-y-scroll no-scrollbar p-2 bg-white shadow-xl absolute translate-y-2 rounded-lg ${showFilter ? "" : "hidden"
                      }`}
                  >
                    {localFilter.map((val: any, index: number) => {
                      return (
                        <div
                          key={index}
                          className="w-full text-slate-900 py-1 text-center text hover:bg-green-500 hover:bg-opacity-20 rounded-md hover:border-l-2 hover:border-green-400 cursor-pointer"
                          onClick={() => {
                            loadFilter(val);
                          }}
                        >
                          {val["name"]}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          {/* campaign text search start here */}
          {searchType == CampaignSearchMode.TextSearch ? (
            <div className="flex flex-col lg:flex-row">
              <div className="grid place-items-start lg:place-content-center">
                <div className="bg-gray-200 rounded-md py-1 px-4 w-full flex items-center">
                  <FontAwesomeIcon
                    className="text-gray-600"
                    icon={faSearch}
                  ></FontAwesomeIcon>
                  <input
                    ref={champTextSearch}
                    type="text"
                    className="bg-transparent w-full outline-none py-1 px-2"
                  />
                </div>
              </div>
              <div className="w-8"></div>
              <div className="flex items-center">
                <div
                  className="text-primary text-sm font-semibold cursor-pointer"
                  onClick={() => {
                    setSearchType(CampaignSearchMode.AdvanceSearch);
                  }}
                >
                  <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon> Advanced
                  filter
                </div>
                <div className="grow"></div>
                <FontAwesomeIcon
                  onClick={delsearch}
                  className="text-primary text-2xl mx-2"
                  icon={faTrash}
                ></FontAwesomeIcon>
                <div className="w-4"></div>
                <div
                  onClick={() => {
                    camptextsearch(champTextSearch!.current!.value);
                  }}
                >
                  <CusButton
                    text="Search"
                    textColor={"text-white"}
                    background={"bg-primary"}
                    fontwidth={"font-bold"}
                    width={"w-32"}
                  ></CusButton>
                </div>
              </div>
            </div>
          ) : null}
          {/* campaign text search end here */}
          {/* campaign advance search start here */}
          {searchType == CampaignSearchMode.AdvanceSearch ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4">
              <div className="px-2">
                {/* category start here */}
                <h1 className="text-primary text-lg font-bold mb">Category</h1>
                <div className="bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full">
                  <div className="flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar">
                    {selcategory.map((value: any, i: number) => {
                      return (
                        <div
                          key={i}
                          className="flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4"
                        >
                          <h1 className=" text-black font-semibold text-center w-40">
                            {`${value["categoryName"]} - [${value["categoryCode"]}]`}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                  <div className="grow"></div>
                  <div
                    className="grid place-items-center px-4 bg-gray-300 rounded-lg"
                    onClick={() => {
                      setcat(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                  </div>
                </div>

                <div
                  className={`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${cat ? "" : "hidden"
                    } grid place-items-center`}
                >
                  <div className="bg-white p-6 rounded-md cursor-pointer">
                    <div className="min-h-80 w-80 overflow-y-scroll no-scrollbar">
                      {category.map((val: any, i: number) => {
                        return (
                          <h1
                            onClick={() => {
                              if (selcategory.includes(val)) {
                                let addcur = selcategory.filter(
                                  (data) => data != val
                                );
                                setSelcategory(addcur);
                              } else {
                                setSelcategory([val]);
                              }
                              setcat(false);
                            }}
                            key={i}
                            className={`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selcategory.includes(val)
                              ? "border-green-500 text-green-500"
                              : "border-gray-800 text-black"
                              }  no-scrollbar`}
                          >
                            {val["categoryCode"]} - {val["categoryName"]}{" "}
                          </h1>
                        );
                      })}
                      <button
                        onClick={() => setcat(false)}
                        className="w-full border-red-500 border-2 rounded-md text-center text-rose-500 text-xl py bg-rose-500 bg-opacity-20">Close</button>
                    </div>
                  </div>
                </div>
                {/* category end here */}
                <div className="flex mt-8">
                  <ReactSwitch
                    onChange={() => setActive(!active)}
                    checked={active}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onColor="#03125E"
                  ></ReactSwitch>
                  <p className="text-primary font-bold text-ld ml-2">
                    Show only active influecner
                  </p>
                </div>
              </div>
              <div className="ml-2">
                <h1 className="text-primary text-lg font-bold mb">Platforms</h1>
                <div className="gap-2 flex  overflow-x-scroll flex-nowrap no-scrollbar pb-4">
                  {platform.map((val: any, i: number) => {
                    return (
                      <div
                        key={i}
                        className={`shrink-0 p-1 w-10 h-10 shadow-lg rounded-full ${selPlatform.includes(val.id)
                          ? "border-2 border-blue-500"
                          : ""
                          } `}
                        onClick={() => {
                          if (selPlatform.includes(val.id)) {
                            let setdata = selPlatform.filter(
                              (platdata) => platdata != val.id
                            );
                            setSelectedPlatform(setdata);
                          } else {
                            setSelectedPlatform([...selPlatform, val.id]);
                          }
                        }}
                      >
                        <img
                          src={platform[i]["platformLogoUrl"]}
                          alt="error"
                          className="object-cover rounded-full w-full h-full inline-block"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="px-2">
                {/* country start here */}
                <p className="text-primary text-left font-bold text-lg">
                  Country
                </p>
                <div className="bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full">
                  <div className="flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar">
                    {selCountry.map((value: any, i: number) => {
                      return (
                        <div
                          key={i}
                          className="flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4"
                        >
                          <h1 className=" text-black font-semibold text-center w-40">
                            {`${value["name"]} - [${value["code"]}]`}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                  <div className="grow"></div>
                  <div
                    className="grid place-items-center px-4 bg-gray-300 rounded-lg"
                    onClick={() => {
                      setcon(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                  </div>
                </div>
                <div
                  className={`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${con ? "" : "hidden"
                    } grid place-items-center`}
                >
                  <div className="bg-white p-6 cursor-pointer rounded-md">
                    <div className="min-h-80 overflow-y-scroll no-scrollbar w-80 h-[400px]">
                      {country.map((val: any, i: number) => {
                        return (
                          <h1
                            onClick={() => {
                              if (selCountry.includes(val)) {
                                let addcur = selCountry.filter(
                                  (data) => data != val
                                );
                                setSelCountry(addcur);
                              } else {
                                setSelCountry([val]);
                              }
                              setcon(false);
                            }}
                            key={i}
                            className={`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selCountry.includes(val)
                              ? "border-green-500 text-green-500"
                              : "border-gray-800 text-black"
                              }  no-scrollbar`}
                          >
                            {val["code"]} - {val["name"]}
                          </h1>
                        );
                      })}

                      <button
                        onClick={() => setcon(false)}
                        className="w-full border-red-500 border-2 rounded-md text-center text-rose-500 text-xl py bg-rose-500 bg-opacity-20">Close</button>
                    </div>
                  </div>
                </div>
                {/* country end here */}
                <div className="flex mt-4 items-center">
                  <div
                    className="text-primary text-md font-semibold cursor-pointer"
                    onClick={() => {
                      setSearchType(CampaignSearchMode.TextSearch);
                    }}
                  >
                    <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon> Text
                    search{" "}
                  </div>
                  <div className="grow"></div>
                  <FontAwesomeIcon
                    onClick={delsearch}
                    className="text-primary text-2xl"
                    icon={faTrash}
                  ></FontAwesomeIcon>
                  <div className="w-4"></div>
                  <div onClick={campadvancesearch}>
                    <CusButton
                      text="Search"
                      textColor={"text-white"}
                      background={"bg-primary"}
                      fontwidth={"font-bold"}
                    ></CusButton>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {/* campaign advance search end here */}
          {error == "" || error == null || error == undefined ? null : (
            <div className="bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">
              {error}
            </div>
          )}
        </div>
        {camSearchResult.length != 0 ? (
          <SearchedInfluencer
            campaignId={props.campaignId}
            brandUserId={props.brandUserId}
            data={camSearchResult}
          ></SearchedInfluencer>
        ) : null}
      </div >
    </>
  );
};

type SearchedInfluencerProps = {
  data: any[];
  campaignId: string;
  brandUserId: string;
};

const SearchedInfluencer = (props: SearchedInfluencerProps) => {
  return (
    <>
      <div className="bg-white rounded-2xl my-6 shadow-xl p-4">
        <div className="w-60 text-md font-bold text-primary p-2 my-2">
          Found: {props.data.length} Influencer{" "}
        </div>
        {props.data.length == 0 ?
          <div >

          </div>
          :
          <div className="grid place-items-center lg:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {props.data.map((val: any, index: number) => {
              const avatar =
                val["pic"] == "0" ||
                  val["pic"] == null ||
                  val["pic"] == undefined ||
                  val["pic"] == ""
                  ? "/images/inf/inf14.png"
                  : val["pic"];
              const name = val["userName"];
              return (
                <div key={index}>
                  <InfluencerCard
                    id={val["id"]}
                    image={avatar}
                    name={name}
                    star={parseInt(val.rating)}
                    bio={val.bio}
                    campaignId={props.campaignId}
                    brandUserId={props.brandUserId}
                  ></InfluencerCard>
                </div>
              );
            })}
          </div>
        }
      </div>
    </>
  );
};

type InfluencerCardProps = {
  image: string;
  name: string;
  star: number;
  id: string;
  bio: string;
  campaignId: string;
  brandUserId: string;
};
const InfluencerCard = (props: InfluencerCardProps) => {
  const [error, setError] = useState<string | null>(null);
  const [sus, setSus] = useState<string | null>(null);

  const Star = () => {
    const fullStars = Math.floor(props.star);
    const fractionalStar = props.star - fullStars;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          className="text-xs text-pink-500"
          icon={faStar}
        />
      );
    }

    if (fractionalStar > 0) {
      stars.push(
        <FontAwesomeIcon
          key={fullStars}
          className="text-xs text-pink-500"
          icon={faStar}
          style={{ width: `${fractionalStar * 100}%` }}
        />
      );
    }

    for (let i = 0; i < 5 - fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={5 + i}
          className="text-xs text-gray-300"
          icon={faStar}
        />
      );
    }

    return <>{stars}</>;
  };

  const invite = async () => {
    const search_invite = await axios.post(`${BaseUrl}/api/search-invite`, {
      search: {
        status: "1",
        campaign: props.campaignId,
        influencer: props.id
      },
    });
    if (search_invite.data.status) {
      setError("Invite already sent.");
    } else {


      let req = {
        campaignId: props.campaignId,
        influencerId: props.id,
        fromUserId: props.brandUserId,
        toUserId: props.id,
        inviteMessage: "A brand invited you to there campaign.",
      };

      const data = await axios.post(`${BaseUrl}/api/add-invite`, req);
      if (data.data.status == false) {
        setError(data.data.message);
      } else {
        setSus("Request has been sent.");
      }
    }
  };

  function truncateText(text: string) {
    if (text.length > 100) {
      return text.substring(0, 100) + "...";
    }
    return text;
  }
  return (
    <>
      <div className="bg-white rounded-xl shadow-xl w-64 my-2">
        <img
          src={props.image}
          alt="error"
          className="w-full h-40 object-cover rounded-t-md"
        />
        <div className="px-4 pb-2">
          <div className="flex items-start justify-between">
            <div className="grow">
              <p className="text-black font-semibold text-lg text-left">
                {props.name.toString().split("@")[0]}
              </p>
              <p className="text-black font-semibold text-sm text-left mt-2">
                {truncateText(props.bio)}
              </p>
              <div className="flex">
                <Star></Star>
              </div>
            </div>
          </div>
          {error == "" || error == null || error == undefined ? null : (
            <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">
              {error}
            </div>
          )}
          <div onClick={invite}>
            <CusButton
              text="Invite"
              textColor={"text-white"}
              background={"bg-secondary"}
              width={"w-full"}
              margin={"my-2"}
              fontwidth={"font-bold"}
            ></CusButton>
          </div>
          <Link to={`/home/myuser/${props.id}`}>
            <CusButton
              text="View Profile"
              textColor={"text-black"}
              background={"bg-[#01FFF4]"}
              width={"w-full"}
              margin={"my-2"}
              fontwidth={"font-bold"}
            ></CusButton>
          </Link>
          {sus == "" || sus == null || sus == undefined ? null : (
            <div className="bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4">
              {sus}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
