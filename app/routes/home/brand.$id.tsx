import {
  faHandshake,
  faHeart,
  faNetworkWired,
  faRemove,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { CusButton } from "~/components/utils/buttont";
import { CampaginCard } from "~/components/utils/campagincard";
import ExtraBrandCard from "~/components/utils/extrabrandcard";
import PastBrandCard from "~/components/utils/pastbrandcard";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";
import { getCampaignType } from "~/utils";

export const loader: LoaderFunction = async (props: LoaderArgs) => {
  const id = props.params.id;
  const branddata = await axios.post(`${BaseUrl}/api/get-brand`, { id: id });
  const cookieHeader = props.request.headers.get("Cookie");
  const cookie = await userPrefs.parse(cookieHeader);

  const reqdata = await axios.post(`${BaseUrl}/api/get-brand-connection`, {
    brandId: id,
  });
  const reqdata1 = await axios.post(`${BaseUrl}/api/get-brand-com-cam`, {
    brandId: id,
  });

  return json({
    brand: branddata.data.data,
    user: cookie.user,
    brandConnection: reqdata.data.data,
    brandComCam: reqdata1.data.data,
  });
};

const BrandPage = () => {
  const brand = useLoaderData().brand;
  const user = useLoaderData().user;
  const [isPast, setPast] = useState(false);
  const brandConnection = useLoaderData().brandConnection.influencer_count;
  const brandComCam = useLoaderData().brandComCam.completed_campaign;
  const logo =
    brand.logo == "" ||
    brand.logo == undefined ||
    brand.logo == null ||
    brand.logo == "0"
      ? "images/avatar.png"
      : brand.logo;
  const [fav, setFav] = useState<boolean>(false);

  const [myfavBrand, setMyfavBrand] = useLocalStorageState<brandData[]>(
    "favbrand",
    {
      defaultValue: [],
    }
  );

  type brandData = {
    id: string;
    logo: string;
    name: string;
    email: string;
    website: string;
  };

  const setFavBrand = (brand: brandData) => {
    setMyfavBrand([...myfavBrand, brand]);
    setFav(true);
  };

  const revmoceFavBrand = (brand: brandData) => {
    let savebrand: brandData[] = [];
    for (let i: number = 0; i < myfavBrand.length; i++) {
      if (myfavBrand[i]["id"] != brand["id"]) {
        savebrand.push(myfavBrand[i]);
      }
    }
    setMyfavBrand(savebrand);
    setFav(false);
  };

  const [sum, setSum] = useState({
    rowCount: 0,
    constCount: 3,
    rate: 0,
  });

  const init = async () => {
    const req = {
      search: {
        type: "3",
        brand: brand.id,
      },
    };
    const apireq = await axios({
      method: "post",
      url: `${BaseUrl}/api/search-review`,
      data: req,
    });
    let myrate: number = 0;
    for (let i: number = 0; i < apireq.data.data.length; i++) {
      myrate +=
        parseInt(apireq.data.data[i].rating1) +
        parseInt(apireq.data.data[i].rating2) +
        parseInt(apireq.data.data[i].rating3);
    }
    setSum((val) => ({
      rowCount: apireq.data.data.length,
      rate: myrate,
      constCount: 3,
    }));
  };

  useEffect(() => {
    let res: boolean = false;
    myfavBrand.map((val: brandData, index: number) => {
      if (val.id == brand.id) res = true;
    });
    if (res) {
      setFav(true);
    } else {
      setFav(false);
    }
    init();
  }, []);

  const [error, setError] = useState<string | null>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [connectBox, setConnectBox] = useState<boolean>(false);

  return (
    <>
      <div
        className={`w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${
          connectBox ? "fixed" : "hidden"
        }`}
        style={{ zIndex: 100 }}
      >
        <div className="p-6 bg-white rounded-xl shadow-xl w-96">
          <div className="flex">
            <div className="grow"></div>
            <div
              onClick={() => {
                setConnectBox(false);
              }}
            >
              <FontAwesomeIcon
                icon={faRemove}
                className="font-bold text-2xl text-center text-primary"
              ></FontAwesomeIcon>
            </div>
          </div>
          <h1 className="text-primary text-lg font-bold text-left">Connect</h1>
          <textarea
            ref={messageRef}
            className="p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none mt-4"
            placeholder="message"
          ></textarea>
          {error == "" || error == null || error == undefined ? null : (
            <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">
              {error}
            </div>
          )}
          <div className="flex">
            <div className="grow"></div>
            <div
              onClick={async () => {
                if (
                  messageRef.current?.value == null ||
                  messageRef.current?.value == undefined ||
                  messageRef.current?.value == ""
                )
                  return setError("Message can't be blank");

                let req = {
                  campaignDraftId: "0",
                  fromUserId: user.id,
                  toUserId: brand.id,
                  comment: messageRef.current?.value,
                };

                const data = await axios({
                  method: "post",
                  url: `${BaseUrl}/api/add-chat`,
                  data: req,
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

                if (!data.data.status) return setError(data.data.message);
                return setConnectBox(false);
              }}
            >
              <CusButton
                text="send"
                background="bg-primary"
                textColor={"text-white"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 shadow-xl bg-white rounded-xl">
        <div className="w-full relative">
          <div className="absolute top-5 right-5">
            <FontAwesomeIcon
              onClick={() => {
                let brandval: brandData = {
                  id: brand.id,
                  logo: logo,
                  name: brand.name,
                  email: brand.email,
                  website: brand.webUrl,
                };
                if (fav) return revmoceFavBrand(brandval);
                return setFavBrand(brandval);
              }}
              icon={faHeart}
              className={`${fav ? "text-red-500" : "text-gray-500"} h-12 w-12`}
            ></FontAwesomeIcon>
          </div>
          <img
            src="/images/products/shoe1.jpg"
            alt="error"
            className="w-full h-60 object-cover rounded-t-xl"
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="p-8 flex flex-row gap-x-3 lg:flex-col">
            <div>
              <img
                src={logo}
                alt="brand logo"
                className="w-32 h-32 rounded-md"
              />
            </div>
            <div>
              <h1 className="text-primary text-lg font-medium my-2">
                {brand.name}
              </h1>
              <p className="text-primary text-md font-normal">
                Category: Consumer Electronics
              </p>
              <p className="text-primary text-md font-normal">
                website: {brand.webUrl}
              </p>
              <div
                onClick={() => {
                  setConnectBox(true);
                }}
              >
                <CusButton
                  text="Connect"
                  background="bg-secondary"
                  fontwidth="font-bold"
                ></CusButton>
              </div>
            </div>
          </div>
          <div className="h-72 w-[2px] bg-gray-300 hidden lg:block mt-8"></div>
          <div className="p-8">
            <div className="flex gap-x-4 flex-col md:flex-row gap-y-2">
              <Rating
                rate={
                  isNaN(Math.round(sum.rate / sum.rowCount / sum.constCount))
                    ? "0"
                    : Math.round(
                        sum.rate / sum.rowCount / sum.constCount
                      ).toString()
                }
              ></Rating>
              <Completed completed={brandComCam.toString()}></Completed>
              <Connection connection={brandConnection.toString()}></Connection>
            </div>
            <h1 className="text-primary text-lg font-medium mt-4 mb-2">
              Brand info
            </h1>
            <p className="text-black text-sm font-normal">{brand.info}</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 shadow-xl bg-white rounded-xl">
        <div className="flex mx-4 gap-4">
          <div
            onClick={() => {
              setPast(false);
            }}
          >
            <CusButton
              text="Available Campaigns"
              background={`${isPast ? "bg-gray-100" : "bg-[#01FFF4]"}`}
              fontwidth="font-bold"
              textColor={`${isPast ? "text-gray-600" : "text-black"}`}
            ></CusButton>
          </div>
          <div
            onClick={() => {
              setPast(true);
            }}
          >
            <CusButton
              text="Past associations"
              background={`${isPast ? "bg-[#01FFF4]" : "bg-gray-100"}`}
              fontwidth="font-bold"
              textColor={`${isPast ? "text-black" : "text-gray-600"}`}
            ></CusButton>
          </div>
        </div>
        {isPast ? (
          <PastBrandAssociation
            userId={user.id}
            brandId={brand.id}
          ></PastBrandAssociation>
        ) : (
          <AvailableCampaigns brandId={brand.id}></AvailableCampaigns>
        )}
      </div>
    </>
  );
};

export default BrandPage;

interface RatingProps {
  rate: string;
}

const Rating: React.FC<RatingProps> = (props: RatingProps): JSX.Element => {
  return (
    <>
      <div className="bg-gray-100 flex rounded-lg gap-x-4">
        <div className="bg-gray-200 p-2 rounded-md grid place-items-center">
          <FontAwesomeIcon
            className="text-black text-3xl"
            icon={faStar}
          ></FontAwesomeIcon>
        </div>
        <div className="p-2">
          <h1 className="text-black text-lg font-bold">{props.rate}</h1>
          <p className="text-black text-sm font-normal">Rating</p>
        </div>
      </div>
    </>
  );
};

interface ConnectionProps {
  connection: string;
}

const Connection: React.FC<ConnectionProps> = (
  props: ConnectionProps
): JSX.Element => {
  return (
    <>
      <div className="bg-gray-100 flex rounded-lg gap-x-4">
        <div className="bg-gray-200 p-2 rounded-md grid place-items-center">
          <FontAwesomeIcon
            className="text-black text-3xl"
            icon={faHandshake}
          ></FontAwesomeIcon>
        </div>
        <div className="p-2">
          <h1 className="text-black text-lg font-bold">{props.connection}</h1>
          <p className="text-black text-sm font-normal">Connections</p>
        </div>
      </div>
    </>
  );
};

interface CompletedProps {
  completed: string;
}

const Completed: React.FC<CompletedProps> = (
  props: CompletedProps
): JSX.Element => {
  return (
    <>
      <div className="bg-gray-100 flex rounded-lg gap-x-4">
        <div className="bg-gray-200 p-2 rounded-md grid place-items-center">
          <FontAwesomeIcon
            className="text-black text-3xl"
            icon={faNetworkWired}
          ></FontAwesomeIcon>
        </div>
        <div className="p-2">
          <h1 className="text-black text-lg font-bold">{props.completed}</h1>
          <p className="text-black text-sm font-normal">Completed Campaigns</p>
        </div>
      </div>
    </>
  );
};

interface AvailableCampaignsProps {
  brandId: string;
}

const AvailableCampaigns: React.FC<AvailableCampaignsProps> = (
  props: AvailableCampaignsProps
): JSX.Element => {
  const [topChampaing, setTopChampaing] = useState<any[]>([]);
  const [campaignCards, setCampaignCards] = useState<React.ReactNode[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const apidata = await axios({
        method: "post",
        url: `${BaseUrl}/api/campaign-search`,
        data: { brand: props.brandId },
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
                currency={val["currency"]["code"]}
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
      {campaignCards.length == 0 ? (
        <div className="text-center w-full px-4 py-8 text-2xl text-gray-600 font-semibold ">
          This brand haven't created any campaign.
        </div>
      ) : (
        <div className="flex flex-wrap gap-6 pb-8 pt-6">{campaignCards}</div>
      )}
    </>
  );
};

interface PastBrandAssociationProps {
  brandId: string;
  userId: string;
}
const PastBrandAssociation: React.FC<PastBrandAssociationProps> = (
  props: PastBrandAssociationProps
): JSX.Element => {
  const [resDarft, setResDarft] = useState<any[]>([]);

  const init = async () => {
    let req = {
      search: {
        fromUser: props.userId,
        influencer: props.userId,
        brand: props.brandId,
      },
    };

    const responseData = await axios.post(`${BaseUrl}/api/search-draft`, req);

    if (responseData.data.status == true) {
      setResDarft(responseData.data.data);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {resDarft.length == 0 ? (
        <div className="text-center w-full px-4 py-8 text-2xl text-gray-600 font-semibold ">
          This brand have no past associations with you.
        </div>
      ) : (
        <div className="flex flex-wrap gap-6 pb-8 pt-6">
          {resDarft.map((val: any, index: number) => {
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
              <div
                key={index}
                className="my-2 p-4 bg-white rounded-lg shadow-lg w-60"
              >
                <div className="flex">
                  <img
                    src={image}
                    alt="influencer pic"
                    className="w-10 h-10 shrink-0 rounded-md"
                  />
                  <div className="ml-2">
                    <p className="text-md font-medium">{val.brand.name}</p>
                    <p className="text-sm font-medium">{val.brand.email}</p>
                  </div>
                </div>
                <p className="mt-2 text-md font-medium">Description</p>
                <p className="text-sm font-medium">{val.description}</p>
                <p className="mt-2 text-md font-medium">Attachment</p>
                <a
                  target="_blank"
                  className="mt-2 text-sm font-normal border-2 border-blue-500 inline-block my-2 py-1 px-4  text-blue-500 hover:text-white hover:bg-blue-500"
                  href={val.attach01}
                >
                  View pdf
                </a>
                <p className="mt-2 text-md font-medium">Status</p>
                <p
                  className={`mt-2 text-md text-white font-medium text-center rounded-md ${
                    val.status.name == "ACCEPTED"
                      ? "bg-green-500"
                      : val.status.name == "PENDING"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {val.status.name}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
    // <>

    //   <div className="flex flex-wrap gap-6 px-10">
    //     <PastBrandCard></PastBrandCard>
    //     <PastBrandCard></PastBrandCard>
    //   </div>
    // </>
  );
};

export { Rating, Connection, Completed };
