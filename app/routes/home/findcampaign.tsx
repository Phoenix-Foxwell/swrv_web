import {
  faSortDown,
  faTrash,
  faSearch,
  faAdd,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CusButton } from "~/components/utils/buttont";
import ReactSwitch from "react-switch";
import { useEffect, useRef, useState } from "react";
import { CampaginCard } from "~/components/utils/campagincard";
import { CampaignSearchMode } from "~/types/projectenums";
import axios from "axios";
import { BaseUrl } from "~/const";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getCampaignType } from "~/utils";
import { BrandCard } from "~/components/utils/brandcard";
import { userPrefs } from "~/cookies";
import InfluencerCard from "~/components/utils/influencercard";
import useLocalStorageState from "use-local-storage-state";
export const loader: LoaderFunction = async (props: LoaderArgs) => {
  const cookieHeader = props.request.headers.get("Cookie");
  const cookie = await userPrefs.parse(cookieHeader);
  const platformRes = await axios.post(`${BaseUrl}/api/getplatform`);
  const categoryRes = await axios.post(`${BaseUrl}/api/getcategory`);
  const countryRes = await axios.post(`${BaseUrl}/api/getcountry`);
  const type = await axios.post(`${BaseUrl}/api/get-campaign-type`);


  return json({
    user: cookie.user,
    platform: platformRes.data.data,
    category: categoryRes.data.data,
    country: countryRes.data.data,
    type: type.data.data,
  });
};

const FindCampaign = () => {
  const loader = useLoaderData();
  const isCompleted = loader.user.profileCompleteness == 1 ? true : false;
  const isbrand = loader.user.role.code != 10;
  const [searchBrand, setSearchBrand] = useState<boolean>(false);
  return (
    <>
      {isbrand ? (
        <>
          {/* brand search options start here */}
          <div>
            <div className="flex my-6 md:flex-row flex-col">
              <div>
                <h1 className="text-2xl font-bold text-black text-left mt-4">
                  Find Influencer
                </h1>
                <p className="text-md font-normal text-black text-left">
                  Here you can manage all the influecner.
                </p>
              </div>
            </div>
            {/* add search option here */}
            <InfluencerSearch
              platform={loader.platform}
              country={loader.country}
              category={loader.category}
              isCompleted={isCompleted}
            ></InfluencerSearch>
          </div>
          {/* brand search options start here */}
        </>
      ) : (
        <>
          {/* influencer search options start from here */}
          <div>
            <div className="flex my-6 md:flex-row flex-col">
              <div>
                <h1 className="text-2xl font-bold text-black text-left mt-4">
                  Find {searchBrand ? "brand" : "campaign"}
                </h1>
                <p className="text-md font-normal text-black text-left">
                  Here you can search manage all the{" "}
                  {searchBrand ? "brand" : "campaign"} that you are
                  participating in.
                </p>
              </div>
              <div className="hidden md:block md:grow"></div>
              <div className="flex justify-center">
                <div
                  onClick={() => {
                    setSearchBrand(false);
                  }}
                >
                  <CusButton
                    height="h-12"
                    text="Campaign"
                    fontwidth="font-bold"
                    background={searchBrand ? "bg-gray-300" : "bg-cyan-300"}
                    textColor={searchBrand ? "text-gray-600" : "text-black"}
                  ></CusButton>
                </div>
                <div className="w-8"></div>
                <div
                  onClick={() => {
                    setSearchBrand(true);
                  }}
                >
                  <CusButton
                    height="h-12"
                    text="Brand"
                    fontwidth="font-bold"
                    background={searchBrand ? "bg-cyan-300" : "bg-gray-300"}
                    textColor={searchBrand ? "text-black" : "text-gray-600"}
                  ></CusButton>
                </div>
              </div>
            </div>
            {searchBrand ? (
              <BrandSearch isCompleted={isCompleted}></BrandSearch>
            ) : (
              <CampaignSearch
                platform={loader.platform}
                country={loader.country}
                category={loader.category}
                type={loader.type}
                isCompleted={isCompleted}
              ></CampaignSearch>
            )}
          </div>
          {/* influencer search otption end here */}
        </>
      )}
    </>
  );
};

export default FindCampaign;

type CampaignSearchProps = {
  country: any;
  platform: any;
  category: any;
  type: any;
  isCompleted: boolean;
};

const CampaignSearch = (props: CampaignSearchProps) => {
  const country = props.country;
  const platform = props.platform;
  const category = props.category;
  const champtype = props.type;

  const [searchType, setSearchType] = useState<CampaignSearchMode>(
    CampaignSearchMode.TextSearch
  );

  const [active, setActive] = useState(false);
  const [camSearchResult, setCamSearchResult] = useState<any[]>([]);
  const champTextSearch = useRef<HTMLInputElement>(null);
  const [selCountry, setSelCountry] = useState<any[]>([]);
  const [con, setcon] = useState<boolean>(false);
  const [selPlatform, setSelectedPlatform] = useState<any[]>([]);

  const [selcategory, setSelcategory] = useState<any[]>([]);
  const [cat, setcat] = useState<boolean>(false);


  const [selchamptype, setSelchamptype] = useState<any[]>([]);
  const [type, setType] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);

  const minReachSearch = useRef<HTMLInputElement>(null);
  const endDateSearch = useRef<HTMLInputElement>(null);
  const cppSearch = useRef<HTMLInputElement>(null);
  const minTargetSearch = useRef<HTMLInputElement>(null);
  const minRatingSearch = useRef<HTMLInputElement>(null);

  const camptextsearch = async () => {
    setError(null);
    let req: any = {
      active: active ? "1" : "0",
      complete: true,
    };

    if (
      champTextSearch!.current!.value != null &&
      champTextSearch!.current!.value != undefined &&
      champTextSearch!.current!.value != ""
    )
      req.name = champTextSearch!.current!.value;
    if (
      minReachSearch.current?.value != null &&
      minReachSearch.current?.value != undefined &&
      minReachSearch.current?.value != ""
    )
      req.minReach = minReachSearch.current?.value;
    if (
      endDateSearch.current?.value != null &&
      endDateSearch.current?.value != undefined &&
      endDateSearch.current?.value != ""
    )
      req.endDate = endDateSearch.current?.value;
    if (
      cppSearch.current?.value != null &&
      cppSearch.current?.value != undefined &&
      cppSearch.current?.value != ""
    )
      req.costPerPost = cppSearch.current?.value;
    if (
      minTargetSearch.current?.value != null &&
      minTargetSearch.current?.value != undefined &&
      minTargetSearch.current?.value != ""
    )
      req.minTarget = minTargetSearch.current?.value;

    if (
      selcategory.length != 0
    )
      req.category = selcategory[0]["id"];
    if (
      minRatingSearch.current?.value != null &&
      minRatingSearch.current?.value != undefined &&
      minRatingSearch.current?.value != ""
    )
      req.minRating = minRatingSearch.current?.value;

    const data = await axios.post(`${BaseUrl}/api/campaign-search`, req);
    if (data.data.status == false) return setError(data.data.message);
    setCamSearchResult(data.data.data);
  };

  const campadvancesearch = async () => {
    setError(null);
    // if (selcategory.length == 0) return setError("Select the category");
    // if (selPlatform.length == 0) return setError("Select the platform");
    // if (selCountry.length == 0) return setError("Select the country");
    let req: any = {
      // country: selcategory[0]["id"],
      // platform: selPlatform.join(","),
      // category: selCountry[0]["id"],
      complete: true,
      active: active ? "1" : "0",
    };

    if (
      selchamptype.length != 0
    )
      req.type = selchamptype[0]["id"];

    if (
      selPlatform.length != 0
    )
      req.platform = selPlatform.join(",");
    if (
      selCountry.length != 0
    )
      req.country = selCountry[0]["id"];


    const data = await axios.post(`${BaseUrl}/api/campaign-search`, req);
    if (data.data.status == false) return setError(data.data.message);
    setCamSearchResult(data.data.data);
  };

  const delsearch = () => {
    window.location.reload();
  };
  //all filter box
  const [showFilter, setFilter] = useState<boolean>(false);

  //save filter fox
  const [filterName, setFilterName] = useState<boolean>(false);

  //for filter error
  const [nameError, setNameError] = useState<string | null>(null);

  const [localFilter, setLocalFilter] = useLocalStorageState<any[]>(
    "CampaignSearch",
    {
      defaultValue: [],
    }
  );
  const nameFilterRef = useRef<HTMLInputElement>(null);
  const saveFilter = (name: string) => {
    if (name == "" || name == null || name == undefined)
      return setNameError("Enter the Filter name");
    if (selchamptype.length == 0) return setNameError("Select the campaign type");
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
      type: selchamptype,
      active: active,
    };
    setLocalFilter([...localFilter, filter]);
    nameFilterRef!.current!.value = "";
    setFilterName(false);
  };
  const loadFilter = (filterdata: any) => {
    setSelchamptype(filterdata["type"]);
    setSelectedPlatform(filterdata["platform"]);
    setSelCountry(filterdata["country"]);
    setActive(filterdata["active"]);
    setFilter(false);
  };

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    const regex = /^[0-9\b]*$/;
    if (!regex.test(keyValue)) {
      event.preventDefault();
    }
  }

  return (
    <>
      <div>
        <div className="rounded-xl shadow-xl p-6 bg-white">
          <div className="flex px-2 my-4">
            <h2 className="text-black text-xl text-left font-bold">Filter</h2>
            <div className="grow"></div>
            {searchType == CampaignSearchMode.TextSearch ? (
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
          {searchType == CampaignSearchMode.AdvanceSearch ? (
            <div className="w-full">
              {/* search options */}
              <div className="w-full flex flex-wrap gap-6 justify-between">
                <div className="w-80">
                  <p className="text-xl font-semibold text-primary">Search</p>
                  <div className="bg-gray-200 rounded-md py-1 px-4 flex items-center">
                    <input
                      ref={champTextSearch}
                      type="text"
                      className="bg-transparent w-full outline-none py-1 px-2"
                      placeholder="Start typing to search.."
                    />
                  </div>
                </div>
                <div className="w-80">
                  <p className="text-xl font-semibold text-primary">
                    Min. Brand Reach
                  </p>
                  <div className="bg-gray-200 rounded-md py-1 px-4 flex items-center">
                    <input
                      ref={minReachSearch}
                      type="text"
                      className="bg-transparent w-full outline-none py-1 px-2"
                      placeholder="Min Reach"
                      onKeyDown={handleKeyPress}
                    />
                  </div>
                </div>
                <div className="w-80">
                  <p className="text-xl font-semibold text-primary">
                    Min. Campaign End Date
                  </p>
                  <div className="bg-gray-200 rounded-md py-1 px-4 flex items-center">
                    <input
                      ref={endDateSearch}
                      type="date"
                      className="bg-transparent w-full outline-none py-1 px-2"
                      placeholder="End Date"
                    />
                  </div>
                </div>
                <div className="w-80">
                  <p className="text-xl font-semibold text-primary">
                    Min. Price Per Post
                  </p>
                  <div className="bg-gray-200 rounded-md py-1 px-4 flex items-center">
                    <input
                      ref={cppSearch}
                      type="text"
                      className="bg-transparent w-full outline-none py-1 px-2"
                      placeholder="Cost Per Post"
                      onKeyDown={handleKeyPress}
                    />
                  </div>
                </div>
                <div className="w-80">
                  <p className="text-xl font-semibold text-primary">
                    Min Target
                  </p>
                  <div className="bg-gray-200 rounded-md py-1 px-4 flex items-center">
                    <input
                      ref={minTargetSearch}
                      type="text"
                      className="bg-transparent w-full outline-none py-1 px-2"
                      placeholder="Min Target"
                      onKeyDown={handleKeyPress}
                    />
                  </div>
                </div>
                <div className="w-80">
                  <p className="text-xl font-semibold text-primary">
                    Min. Brand Rating
                  </p>
                  <div className="bg-gray-200 rounded-md py-1 px-4 flex items-center">
                    <input
                      ref={minRatingSearch}
                      type="text"
                      className="bg-transparent w-full outline-none py-1 px-2"
                      placeholder="Min Target"
                      onKeyDown={handleKeyPress}
                    />
                  </div>
                </div>
                <div className="w-80">
                  {/* category search start here */}
                  <p className="text-xl font-semibold text-primary">
                    Category
                  </p>
                  <div className="bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 w-full relative">
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
                        setcat(!cat);
                      }}
                    >
                      <FontAwesomeIcon
                        icon={cat ? faXmark : faAdd}
                      ></FontAwesomeIcon>
                    </div>
                    <div
                      className={`bg-gray-200 w-full h-80 overflow-y-scroll no-scrollbar absolute top-12 z-50 rounded-lg ${cat ? "" : "hidden"
                        }`}
                    >
                      <div className="min-h-80 w-full p-4 overflow-y-scroll no-scrollbar">
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
                              className={`text-lg text-left text-gray-600 font-semibold cursor-pointer w-full my-2 border-b-2 ${selcategory.includes(val)
                                ? "border-green-500 text-green-500"
                                : "border-gray-500 text-black"
                                }  no-scrollbar`}
                            >
                              {val["categoryCode"]} - {val["categoryName"]}{" "}
                            </h1>
                          );
                        })}
                        <div onClick={() => setcat(false)} className="text-rose-500 text-center font-semibold text-lg bg border-2 border-rose-500 rounded-md bg-rose-500 bg-opacity-20 cursor-pointer">Close</div>
                      </div>
                    </div>
                  </div>
                  {/* category search end here */}
                  {/* <p className="text-xl font-semibold text-primary">
                    Total target
                  </p>
                  <div className="bg-gray-200 rounded-md py-1 px-4 flex items-center">
                    <input
                      ref={totalTargetSearch}
                      type="text"
                      className="bg-transparent w-full outline-none py-1 px-2"
                      placeholder="Total Target"
                      onKeyDown={handleKeyPress}
                    />
                  </div> */}
                </div>
              </div>

              {/* search button */}
              <div className="flex items-center">
                <div className="flex">
                  <ReactSwitch
                    onChange={() => setActive(!active)}
                    checked={active}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onColor="#03125E"
                  ></ReactSwitch>
                  <p className="text-primary font-bold text-ld ml-2">
                    Show only active campaigns
                  </p>
                </div>
                <div className="grow"></div>
                <div
                  className="text-primary text-sm font-semibold cursor-pointer"
                  onClick={() => {
                    setSearchType(CampaignSearchMode.TextSearch);
                  }}
                >
                  <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon> Normal
                  filter
                </div>
                <div className="w-10"></div>
                <FontAwesomeIcon
                  onClick={delsearch}
                  className="text-primary text-2xl mx-2"
                  icon={faTrash}
                ></FontAwesomeIcon>
                <div className="w-4"></div>
                <div
                  onClick={() => {
                    if (!props.isCompleted) return setError("Complete your profile in order to search.");
                    camptextsearch();
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
          {searchType == CampaignSearchMode.TextSearch ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4">
              <div className="px-2">
                {/* category start here */}
                <h1 className="text-primary text-lg font-bold mb">Campaign Type</h1>
                <div className="bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 w-full relative">
                  <div className="flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar">
                    {selchamptype.map((value: any, i: number) => {
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
                      setType(!type);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={type ? faXmark : faAdd}
                    ></FontAwesomeIcon>
                  </div>
                  <div
                    className={`bg-gray-200 w-full h-80 overflow-y-scroll no-scrollbar absolute top-12 z-50 rounded-lg ${type ? "" : "hidden"
                      }`}
                  >
                    <div className="min-h-80 w-full p-4 overflow-y-scroll no-scrollbar">
                      {champtype.map((val: any, i: number) => {
                        return (
                          <h1
                            onClick={() => {
                              if (selchamptype.includes(val)) {
                                let addcur = selchamptype.filter(
                                  (data) => data != val
                                );
                                setSelchamptype(addcur);
                              } else {
                                setSelchamptype([val]);
                              }
                              setType(false);
                            }}
                            key={i}
                            className={`text-lg text-left text-gray-600 font-semibold cursor-pointer w-full my-2 border-b-2 ${selchamptype.includes(val)
                              ? "border-green-500 text-green-500"
                              : "border-gray-500 text-black"
                              }  no-scrollbar`}
                          >
                            {val["categoryCode"]} - {val["categoryName"]}{" "}
                          </h1>
                        );
                      })}
                      <div onClick={() => setType(false)} className="text-rose-500 text-center font-semibold text-lg bg border-2 border-rose-500 rounded-md bg-rose-500 bg-opacity-20 cursor-pointer">Close</div>
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
                    Show only active campaigns
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
                <div className="bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 w-full relative">
                  <div className="flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar">
                    {selCountry.map((value: any, i: number) => {
                      return (
                        <div
                          key={i}
                          className="flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4 cursor-pointer"
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
                      setcon(!con);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={con ? faXmark : faAdd}
                    ></FontAwesomeIcon>
                  </div>
                  <div
                    className={`bg-gray-200 w-full h-80 overflow-y-scroll no-scrollbar absolute top-12 z-50 rounded-lg p-4 ${con ? "" : "hidden"
                      }`}
                  >
                    {" "}
                    <div className="min-h-80 overflow-y-scroll no-scrollbar">
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
                            className={`text-lg text-gray-600 text-left font-semibold  w-full my-2 border-b-2 ${selCountry.includes(val)
                              ? "border-green-500 text-green-500"
                              : "border-gray-400 text-black"
                              }  no-scrollbar`}
                          >
                            {val["code"]} - {val["name"]}
                          </h1>
                        );
                      })}

                      <div onClick={() => setcon(false)} className="text-rose-500 text-center font-semibold text-lg bg border-2 border-rose-500 rounded-md bg-rose-500 bg-opacity-20 cursor-pointer">Close</div>
                    </div>
                  </div>
                </div>
                {/* country end here */}
                <div className="flex mt-4 items-center">
                  <div
                    className="text-primary text-md font-semibold cursor-pointer"
                    onClick={() => {
                      setSearchType(CampaignSearchMode.AdvanceSearch);
                    }}
                  >
                    <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon>{" "}
                    Advanced filter
                  </div>
                  <div className="grow"></div>
                  <FontAwesomeIcon
                    onClick={delsearch}
                    className="text-primary text-2xl"
                    icon={faTrash}
                  ></FontAwesomeIcon>
                  <div className="w-4"></div>
                  <div onClick={() => {
                    if (!props.isCompleted) return setError("Complete your profile in order to search.");
                    campadvancesearch();
                  }}>
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
          <SearchedCampaign data={camSearchResult}></SearchedCampaign>
        ) : null}
      </div>
    </>
  );
};

type InfluencerSearchProps = {
  country: any;
  platform: any;
  category: any;
  isCompleted: boolean;
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

    // if (selcategory.length == 0) {
    //   setCamSearchResult([]);
    //   return setError("Select the category");
    // }
    // if (selPlatform.length == 0) {
    //   setCamSearchResult([]);
    //   return setError("Select the platform");
    // }
    // if (selCountry.length == 0) {
    //   setCamSearchResult([]);
    //   return setError("Select the country");
    // }

    let req: any = {
      // country: selCountry[0]["id"],
      // platform: selPlatform.join(","),
      // category: selcategory[0]["id"],
      active: active ? "1" : "0",
      role: 10,
    };


    if (
      selcategory.length != 0
    )
      req.category = selcategory[0]["id"];

    if (
      selPlatform.length != 0
    )
      req.platform = selPlatform.join(",");
    if (
      selCountry.length != 0
    )
      req.country = selCountry[0]["id"];


    const data = await axios.post(`${BaseUrl}/api/user-search`, req);
    if (data.data.status == false) return setError(data.data.message);
    setCamSearchResult(data.data.data);
  };

  const delsearch = () => {
    window.location.reload();

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
        <div className="rounded-xl shadow-xl p-6 bg-white">
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
                  <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon> Normal filter
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
                    if (!props.isCompleted) return setError("Complete your profile in order to search.");
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
                <div className="bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 w-full relative" >
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
                      setcat(val => !val);
                    }}
                  >
                    <FontAwesomeIcon icon={cat ? faXmark : faAdd}></FontAwesomeIcon>
                  </div>

                  <div
                    className={`w-full bg-gray-300 bg-opacity-20 absolute top-12 left-0 ${cat ? "" : "hidden"
                      } grid place-items-center z-20`}
                  >
                    <div className="bg-white shadow-lg p-4 cursor-pointer rounded-md">
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
                        <div onClick={() => setcat(false)} className="text-center font-semibold text-lg bg border-2 border-rose-500 rounded-md bg-rose-500 bg-opacity-20 text-rose-500">Close</div>
                      </div>
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
                <div className="gap-2 flex  overflow-x-scroll flex-nowrap no-scrollbar pb-2">
                  {platform.map((val: any, i: number) => {
                    return (
                      <div
                        key={i}
                        className={`p-1 shrink-0 w-10 h-10 rounded-full  ${selPlatform.includes(val.id)
                          ? " border-2 border-blue-500"
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
                          className="object-cover w-full h-full inline-block rounded-full"
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
                <div className="bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full relative">
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
                      setcon(val => !val);
                    }}
                  >
                    <FontAwesomeIcon icon={con ? faXmark : faAdd}></FontAwesomeIcon>
                  </div>


                  <div
                    className={`w-full  absolute top-12 left-0 ${con ? "" : "hidden"
                      } grid place-items-center`}
                    onClick={val => setcon(false)}
                  >
                    <div className="bg-white rounded-md p-4 cursor-pointer" onClick={(e) => e.stopPropagation()}>
                      <div className="min-h-80 overflow-y-scroll no-scrollbar w-80">
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
                        <div onClick={() => setcon(false)} className="text-center font-semibold text-lg bg border-2 border-rose-500 rounded-md bg-rose-500 bg-opacity-20 text-rose-500">Close</div>
                      </div>
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
                    <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon> Advanced filter
                  </div>
                  <div className="grow"></div>
                  <FontAwesomeIcon
                    onClick={delsearch}
                    className="text-primary text-2xl"
                    icon={faTrash}
                  ></FontAwesomeIcon>
                  <div className="w-4"></div>
                  <div onClick={() => {
                    if (!props.isCompleted) return setError("Complete your profile in order to search.");
                    campadvancesearch();
                  }}>
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
          <SearchedInfluencer data={camSearchResult}></SearchedInfluencer>
        ) : null}
      </div>
    </>
  );
};

interface BrandSearchProps { isCompleted: boolean; }

const BrandSearch: React.FC<BrandSearchProps> = (props: BrandSearchProps): JSX.Element => {
  const [brandSearchResult, setBrandSearchResult] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const delsearch = () => {
    window.location.reload();
  };

  const brandTextSearch = useRef<HTMLInputElement>(null);
  const brandtextsearch = async (searchtext: string) => {
    setError(null);
    brandTextSearch!.current!.value = "";
    if (searchtext == "" || searchtext == null || searchtext == undefined) return setError("Fill the field to start searching");
    let req = { search: searchtext };
    const data = await axios.post(`${BaseUrl}/api/search-brand`, req);
    if (data.data.status == false) return setError(data.data.message);
    setBrandSearchResult(data.data.data);
  };

  return (
    <>
      <div>
        <div className="rounded-xl shadow-xl p-6 bg-white">
          <h2 className="text-black text-xl text-left font-bold mt-2">
            Filter
          </h2>
          {/* brand text search start here */}
          <div className="flex flex-col lg:flex-row">
            <div className="grid place-items-start lg:place-content-center">
              <div className="bg-gray-200 rounded-md py-1 px-4 w-full flex items-center mt-2">
                <FontAwesomeIcon
                  className="text-gray-600"
                  icon={faSearch}
                ></FontAwesomeIcon>
                <input
                  ref={brandTextSearch}
                  type="text"
                  className="bg-transparent w-full outline-none py-1 px-2"
                />
              </div>
            </div>
            <div className="w-8"></div>
            <div className="flex items-center">
              <div className="grow"></div>
              <FontAwesomeIcon
                onClick={delsearch}
                className="text-primary text-2xl mx-2"
                icon={faTrash}
              ></FontAwesomeIcon>
              <div className="w-4"></div>
              <div
                onClick={() => {
                  if (!props.isCompleted) return setError("Complete your profile in order to search.");
                  brandtextsearch(brandTextSearch!.current!.value);
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
          {/* brand text search end here */}
          {error == "" || error == null || error == undefined ? null : (
            <div className="bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">
              {error}
            </div>
          )}
        </div>
      </div>
      {brandSearchResult.length != 0 ? (
        <SearchedBrand data={brandSearchResult}></SearchedBrand>
      ) : null}
    </>
  );
};

type SearchedCampaignProps = {
  data: any[];
};

const SearchedCampaign = (props: SearchedCampaignProps) => {
  const [campaignCards, setCampaignCards] = useState<React.ReactNode[]>([]);
  useEffect(() => {
    const resolveCampaignCards = async () => {
      const resolvedCampaignCards = await Promise.all(
        props.data.map(async (val: any, index: number) => {
          let platforms: string[] = [];
          for (let i: number = 0; i < val["platforms"].length; i++) {
            platforms.push(val["platforms"][i]["platformLogoUrl"]);
          }
          let image =
            val["brand"].length == 0 ||
              val["brand"] == undefined ||
              val["brand"] == null ||
              val["brand"] == ""
              ? "/images/avatar/user.png"
              : val["brand"]["logo"] == "0" ||
                val["brand"]["logo"] == undefined ||
                val["brand"]["logo"] == null ||
                val["brand"]["logo"] == ""
                ? "/images/avatar/user.png"
                : val["brand"]["logo"];
          let campaignType = await getCampaignType(val["campaignTypeId"]);
          return (
            <div key={val["id"]} className="h-full">
              <CampaginCard
                id={val["id"]}
                title={val.campaignName}
                weburl={val["brand"]["webUrl"]}
                platforms={platforms}
                maxval={val.costPerPost.split(".")[0]}
                category={campaignType}
                image={image}
                name={val.brand.name}
                // currency={val["currency"]["code"]}
                currency={"USD"}
                btntext="Learn More & Apply"
              ></CampaginCard>
            </div>
          );
        })
      );
      setCampaignCards(resolvedCampaignCards);
    };

    resolveCampaignCards();
  }, [props.data]);

  return (
    <>
      <div className="bg-white rounded-2xl my-6 shadow-xl p-4">
        <div className="w-60 text-md font-bold text-primary p-2 my-2">
          Found: {props.data.length} Campaigns{" "}
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-6">{campaignCards}</div>
      </div>
    </>
  );
};

type SearchedBrandProps = {
  data: any[];
};

const SearchedBrand = (props: SearchedBrandProps) => {
  return (
    <>
      <div className="bg-white rounded-2xl my-6 shadow-xl p-4">
        <div className="w-60 text-md font-bold text-primary p-2 my-2">
          Found: {props.data.length} Brand{" "}
        </div>
        <div className="flex gap-6 flex-wrap">
          {props.data.map((val: any, index: number) => {
            const avatar = val["logo"];
            const name = val["name"];
            const email = val["email"];
            return (
              <div key={index}>
                <BrandCard
                  id={val.id}
                  image={avatar}
                  name={name}
                  email={email}
                  website={val.webUrl}
                ></BrandCard>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

type SearchedInfluencerProps = {
  data: any[];
};

const SearchedInfluencer = (props: SearchedInfluencerProps) => {
  return (
    <>
      <div className="bg-white rounded-2xl my-6 shadow-xl p-4">
        <div className="w-60 text-md font-bold text-primary p-2 my-2">
          Found: {props.data.length} Influencer{" "}
        </div>
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
                ></InfluencerCard>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
