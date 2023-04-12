import {
  faCalendar,
  faHandshake,
  faHeart,
  faNetworkWired,
  faRemove,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { CusButton } from "~/components/utils/buttont";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";

enum UserDetailsType {
  insights,
  payments,
  camapaign,
}

export const loader: LoaderFunction = async (props: LoaderArgs) => {
  const id = props.params.id;

  const cookieHeader = props.request.headers.get("Cookie");
  const cookie = await userPrefs.parse(cookieHeader);

  const userdata = await axios.post(`${BaseUrl}/api/getuser`, { id: id });
  return json({ user: userdata.data.data[0], curUser: cookie.user });
};

const BrandPage = () => {
  const user = useLoaderData().user;
  const curUser = useLoaderData().curUser;

  const [userDetails, setUserDetails] = useState<UserDetailsType>(
    UserDetailsType.insights
  );

  const avatar =
    user["pic"] == "0" ||
    user["pic"] == null ||
    user["pic"] == undefined ||
    user["pic"] == ""
      ? "/images/avatar/user.png"
      : user["pic"];

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
                  fromUserId: curUser.id,
                  toUserId: user.id,
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
        <img
          src="/images/products/shoe1.jpg"
          alt="error"
          className="w-full h-60 object-cover rounded-t-xl"
        />
        <div className="flex flex-col lg:flex-row">
          <div className="p-8 flex flex-row gap-x-3 lg:flex-col">
            <div>
              <img
                src={avatar}
                alt="user avatar"
                className="w-32 h-32 rounded-md object-cover object-center"
              />
            </div>
            <div>
              <h1 className="text-black text-lg font-medium my-2">
                {user.userName}
              </h1>
              <h1 className="text-gray-600 text-sm font-medium my-2">
                {user.knownAs}
              </h1>
              <p className="text-gray-800 text-md font-normal">{user.email}</p>
              <div
                onClick={() => {
                  setConnectBox(true);
                }}
              >
                <CusButton
                  text="Message"
                  background="bg-secondary"
                  fontwidth="font-bold"
                ></CusButton>
              </div>
            </div>
          </div>
          <div className="h-72 w-[2px] bg-gray-300 hidden lg:block mt-8"></div>
          <div className="p-8">
            <div className="flex gap-x-4 flex-col md:flex-row gap-y-2"></div>
            <h1 className="text-primary text-lg font-medium mt-4 mb-2">
              User Bio
            </h1>
            <p className="text-black text-sm font-normal">{user.bio}</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 shadow-xl bg-white rounded-xl">
        <div className="flex mx-4 gap-4">
          <div
            onClick={() => {
              setUserDetails(UserDetailsType.insights);
            }}
          >
            <CusButton
              text="Insights"
              background={`${
                userDetails == UserDetailsType.insights
                  ? "bg-[#01FFF4]"
                  : "bg-gray-100"
              }`}
              fontwidth="font-bold"
              textColor={`${
                userDetails == UserDetailsType.insights
                  ? "text-black"
                  : "text-gray-600"
              }`}
            ></CusButton>
          </div>
          <div
            onClick={() => {
              setUserDetails(UserDetailsType.payments);
            }}
          >
            <CusButton
              text="Payments"
              background={`${
                userDetails == UserDetailsType.payments
                  ? "bg-[#01FFF4]"
                  : "bg-gray-100"
              }`}
              fontwidth="font-bold"
              textColor={`${
                userDetails == UserDetailsType.payments
                  ? "text-black"
                  : "text-gray-600"
              }`}
            ></CusButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandPage;
