import {
  faHeart,
  faIdBadge,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import { Link, useLoaderData, useNavigate, useSearchParams } from "@remix-run/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrandCard } from "~/components/utils/brandcard";
import { CusButton } from "~/components/utils/buttont";
import { CampaginCard } from "~/components/utils/campagincard";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";
import ProfileComleteStore from "~/state/home/profilecompletestat";
import { InfluencerSearch } from "./findcampaign";
import TopInfluencerCard from "~/components/utils/topinfluencercard";
import { getCampaignType } from "~/utils";
import ScrollContainer from "react-indiana-drag-scroll";

export const loader: LoaderFunction = async (props: LoaderArgs) => {
  const cookieHeader = props.request.headers.get("Cookie");
  const cookie = await userPrefs.parse(cookieHeader);
  if (cookie == null || cookie == undefined) {
    return redirect("/login");
  } else {
    if (cookie.isLogin == false) {
      return redirect("/login");
    }
  }
  const platformRes = await axios.post(`${BaseUrl}/api/getplatform`);
  const categoryRes = await axios.post(`${BaseUrl}/api/getcategory`);
  const countryRes = await axios.post(`${BaseUrl}/api/getcountry`);
  return json({
    user: cookie.user,
    platform: platformRes.data.data,
    category: categoryRes.data.data,
    country: countryRes.data.data,
  });
};

const HomePage = () => {
  const user = useLoaderData();
  const userdata = user.user;
  const profilecomplted: String = userdata["profileCompleteness"];
  const isbrand = user.user.role.code != 10;
  const isOpen = ProfileComleteStore((state) => state.isOpen);
  const isOpenChange = ProfileComleteStore((state) => state.change);
  const navigator = useNavigate();
  const init = async () => { };

  useEffect(() => {
    isOpenChange(profilecomplted == "1" ? false : true);
    init();
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        {isbrand ? (
          userdata.brand.length == 0 ||
            userdata.brand == null ||
            userdata.brand == undefined ? (
            <BrandCreate></BrandCreate>
          ) : null
        ) : null}

        {isOpen ? <ProfileComplete></ProfileComplete> : null}
        <Intro isBrand={isbrand}></Intro>
        {isbrand ? (
          <>
            {/* brand section */}
            <InfluencerSearch
              platform={user.platform}
              country={user.country}
              category={user.category}
              isCompleted={true}
            ></InfluencerSearch>
            <TopInfluencer></TopInfluencer>
          </>
        ) : (
          <>
            {/* influencer section */}
            <EarnSection></EarnSection>
            <SponsoredPosts></SponsoredPosts>
            <NewCampaign></NewCampaign>
            <TopBrands></TopBrands>
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;

const ProfileComplete = () => {
  const changeState = ProfileComleteStore((state) => state.change);
  return (
    <>
      <div className="w-full bg-secondary rounded-xl p-2 my-4 flex">
        <div className="flex grow flex-col md:flex-row">
          <div className="grow grid place-items-center">
            <div className="py-10 md:w-[400px]">
              <h1 className="text-2xl text-white font-bold">
                Please Complete Your Profile
              </h1>
              <h1 className="text-md text-white font-normal">
                Kindly complete your profile to proceed with acitvities on SWRV website.
              </h1>
            </div>
          </div>
          <div className="xl:w-96 grid place-items-center">
            <Link to="/home/profilecomplete">
              <CusButton
                text="Click here to complete"
                textColor={"text-white"}
                background={"bg-primary"}
              ></CusButton>
            </Link>
          </div>
        </div>
        <div
          onClick={() => {
            changeState(false);
          }}
        >
          {" "}
          <FontAwesomeIcon
            className="text-white text-2xl font-bold"
            icon={faXmark}
          ></FontAwesomeIcon>{" "}
        </div>
      </div>
    </>
  );
};

interface IntroProps {
  isBrand: boolean;
}

const Intro: React.FC<IntroProps> = (props: IntroProps): JSX.Element => {
  const navigator = useNavigate();
  const [brand, setBrand] = useState<any[]>([]);
  let data = [
    { image: "74.jfif", id: "74" },
    { image: "75.jfif", id: "75" },
    { image: "76.jfif", id: "76" },
    { image: "77.jfif", id: "77" },
    { image: "78.jfif", id: "78" },
    { image: "79.jfif", id: "79" },
    { image: "80.jfif", id: "80" },
    { image: "81.jfif", id: "81" },
    { image: "82.jfif", id: "82" },
    { image: "83.jfif", id: "83" },
    { image: "84.jfif", id: "84" },
    { image: "85.jfif", id: "85" },
    { image: "86.jfif", id: "86" },
    { image: "87.jfif", id: "87" },
    { image: "88.jfif", id: "88" },
  ];
  const init = async () => {
    const apidata = await axios({
      method: "post",
      url: `${BaseUrl}/api/search-brand`,
    });
    setBrand(apidata.data.data);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <div>
        <div className="grid place-items-center w-full mt-10">
          <h1 className="text-4xl text-primary font-bold text-center">
            Welcome to SWRV
          </h1>
          <h1 className="text-xl text-primary font-normal text-center">
            Reach the next billion
          </h1>
        </div>
        {props.isBrand ? (
          <ScrollContainer className="flex gap-6 items-center mb-6 overflow-x-scroll no-scrollbar mt-6">
            {data.map((val: any, index: number) => {
              return (
                <div
                  key={index}
                  className="block shrink-0 cursor-pointer"
                  onClick={() => {
                    navigator(`/home/user/${val.id}`);
                  }}
                >
                  <img
                    src={`/images/inf/${val.image}`}
                    alt="error"
                    className="rounded-md w-40 h-40 object-center object-cover"
                  />
                </div>
              );
            })}
          </ScrollContainer>
        ) : (
          <ScrollContainer className="flex gap-6 items-center mb-6 overflow-x-scroll no-scrollbar mt-6">
            {brand.slice(0, 10).map((val: any, index: number) => {
              return (
                <div
                  key={index}
                  className="block shrink-0 cursor-pointer"
                  onClick={() => {
                    navigator(`/home/brand/${val.id}`);
                  }}
                >
                  <img
                    src={val.logo}
                    alt="error"
                    className="rounded-md w-40 h-40 object-center object-cover"
                  />
                </div>
              );
            })}
          </ScrollContainer>
        )}
      </div>
    </>
  );
};

const EarnSection = () => {
  return (
    <>
      <div className="w-full rounded-xl flex flex-col sm:flex-row bg-yellow-500 mt-12">
        <div className="grow grid place-items-center shrink-0">
          <img src="/images/cashgirl.png" alt="error" className="h-40 md:h-80" />
        </div>
        <div className="p-4 md:p-12 bg-[#F7941D] rounded-r-xl grid place-items-center">
          <div>
            <h1 className="text-2xl text-black font-bold text-left">
              To earn more money?
            </h1>
            <h1 className="text-md text-black font-normal text-left md:w-80">
              Search, apply for brands campaigns and create more great content.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

const SponsoredPosts = () => {
  const [topChampaing, setTopChampaing] = useState<any[]>([]);
  const [campaignCards, setCampaignCards] = useState<React.ReactNode[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const apidata = await axios({
        method: "post",
        url: `${BaseUrl}/api/get-top-campaigns`,
      });
      setTopChampaing(apidata.data.data.campaigns);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const createCampaignCards = async () => {
      const cards = await Promise.all(
        topChampaing.map(async (val: any, index: number) => {
          let platforms: string[] = [];
          for (let i: number = 0; i < val["platforms"].length; i++) {
            platforms.push(val["platforms"][i]["platformLogoUrl"]);
          }
          let campaignType = await getCampaignType(val["campaignTypeId"]);
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
          return (
            <div key={index}>
              <CampaginCard
                id={val.id}
                title={val["name"]}
                weburl={val.brand.webUrl}
                platforms={platforms}
                maxval={val.costPerPost.split(".")[0]}
                category={campaignType}
                image={image}
                name={val.brand.name}
                // currency={val["currency"]["code"]}
                currency={"USD"}
                btntext="View More & Learn"
              ></CampaginCard>
            </div>
          );
        })
      );
      setCampaignCards(cards);
    };
    createCampaignCards();
  }, [topChampaing]);

  return (
    <>
      <div className="bg-white rounded-2xl my-3 shadow-xl p-4 lg:px-14 py-8">
        <div className="w-60 rounded-xl text-xl font-bold text-black p-2">
          {" "}
          <FontAwesomeIcon
            icon={faHeart}
            className="text-md text-secondary"
          ></FontAwesomeIcon>{" "}
          Sponsored Posts{" "}
        </div>
        <div className="flex gap-x-10 flex-wrap gap-y-6">{campaignCards}</div>
      </div>
    </>
  );
};

const NewCampaign = () => {
  const [topChampaing, setTopChampaing] = useState<any[]>([]);
  const [campaignCards, setCampaignCards] = useState<React.ReactNode[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const apidata = await axios({
        method: "post",
        url: `${BaseUrl}/api/campaign-search`,
      });
      setTopChampaing(apidata.data.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const createCampaignCards = async () => {
      let counter = 0;
      const cards = await Promise.all(
        topChampaing.map(async (val: any, index: number) => {
          if (counter >= 5) return null;
          counter++;
          let platforms: string[] = [];
          for (let i: number = 0; i < val["platforms"].length; i++) {
            platforms.push(val["platforms"][i]["platformLogoUrl"]);
          }
          let campaignType = await getCampaignType(val["campaignTypeId"]);
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
          return (
            <div key={index}>
              <CampaginCard
                id={val.id}
                title={val["campaignName"]}
                weburl={val.brand.webUrl}
                platforms={platforms}
                maxval={val.costPerPost.split(".")[0]}
                category={campaignType}
                image={image}
                name={val.brand.name}
                // currency={val["currency"]["code"]}
                currency={"USD"}
                btntext="View More & Learn"
              ></CampaginCard>
            </div>
          );
        })
      );
      setCampaignCards(cards);
    };
    createCampaignCards();
  }, [topChampaing]);

  return (
    <>
      <div className="bg-white rounded-2xl my-3 shadow-xl p-4 lg:px-14 py-8">
        <div className="w-60 rounded-xl text-xl font-bold text-black">
          {" "}
          <FontAwesomeIcon
            icon={faIdBadge}
            className="text-md text-secondary"
          ></FontAwesomeIcon>{" "}
          New Campaign{" "}
        </div>
        <div className="flex gap-x-10 flex-wrap gap-y-6">{campaignCards}</div>
      </div>
    </>
  );
};

const TopBrands = () => {
  const [topBrands, setTopBarnds] = useState<any[]>([]);
  const init = async () => {
    const apidata = await axios({
      method: "post",
      url: `${BaseUrl}/api/get-top-brands`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Options": "*",
        "Access-Control-Allow-Methods": "*",
        "X-Content-Type-Options": "*",
        "Content-Type": "application/json",
        Accept: "*",
      },
    });
    setTopBarnds(apidata.data.data);
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <div className="bg-white rounded-2xl my-3 shadow-xl p-4 lg:px-14 py-8">
        <div className="w-60  rounded-xl text-xl font-bold text-black my-4">
          {" "}
          <FontAwesomeIcon
            icon={faStar}
            className="text-md text-secondary"
          ></FontAwesomeIcon>{" "}
          Top brands{" "}
        </div>
        <div className="flex gap-x-10 flex-wrap gap-y-6">
          {topBrands.map((val: any, index: number) => {
            return (
              <div key={index}>
                <BrandCard
                  id={val.id}
                  email={val.email}
                  image={val.logo}
                  name={val.name}
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

const TopInfluencer = () => {
  const [topInfluencer, setTopInfluencer] = useState<any[]>([]);
  const init = async () => {
    const apidata = await axios({
      method: "post",
      url: `${BaseUrl}/api/user-search`,
      data: { role: 10 },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Options": "*",
        "Access-Control-Allow-Methods": "*",
        "X-Content-Type-Options": "*",
        "Content-Type": "application/json",
        Accept: "*",
      },
    });
    for (let i: number = 0; i < 5; i++) {
      setTopInfluencer((prevdata) => [...prevdata, apidata.data.data[i]]);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div className="bg-white rounded-2xl my-3 shadow-xl p-4 lg:px-14 py-8">
        <div className="w-60 rounded-xl text-xl font-bold text-black p-2">
          {" "}
          <FontAwesomeIcon
            icon={faHeart}
            className="text-md text-secondary"
          ></FontAwesomeIcon>{" "}
          Top influencer{" "}
        </div>
        <div className="flex gap-10 flex-wrap">
          {topInfluencer.map((val: any, index: number) => {
            const avatar =
              val["pic"] == "0" ||
                val["pic"] == null ||
                val["pic"] == undefined ||
                val["pic"] == ""
                ? "/images/avatar/user.png"
                : val["pic"];
            return (
              <Link to={`/home/myuser/${val.id}`} key={index}>
                <TopInfluencerCard
                  star={parseInt(val.rating)}
                  image={avatar}
                  name={val.userName}
                  // currency={val.currency.code}
                  currency={"USD"}
                  dob={val.dob}
                ></TopInfluencerCard>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

const BrandCreate: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="bg-rose-500 my-4 rounded-lg w-full p-4 py-10">
        <p className="text-center font-semibold text-white text-2xl">
          Your Haven't created Brand
        </p>
        <p className="text-center font-semibold text-white text-lg">
          Create your brand to begin the journey
        </p>
        <div className="w-full text-center mt-6">
          <Link
            className="bg-primary text-white py-2 px-6 text-center font-semibold rounded-md"
            to={"/createbrand"}
          >
            Click Here to create brand
          </Link>
        </div>
      </div>
    </>
  );
};
