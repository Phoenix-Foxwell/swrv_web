import { Link } from "@remix-run/react";
import { CusButton } from "./buttont";
import { useEffect, useState } from "react";

type CampaginCardProps = {
  id: string;
  title: string;
  image: string;
  name: string;
  category: string;
  currency: string;
  maxval: string;
  platforms: string[];
  weburl: string;
  btntext: string;
};

export const CampaginCard = (props: CampaginCardProps) => {
  const [color, setColor] = useState<string>("text-cyan-500");
  useEffect(() => {
    if (props.category == "Unboxing") {
      setColor("text-cyan-500");
    } else if (props.category == "Paid Promotion") {
      setColor("text-rose-500");
    } else if (props.category == "Revealing") {
      setColor("text-green-500");
    } else if (props.category == "Sponsored") {
      setColor("text-indigo-500");
    }
  });
  return (
    <>
      <div className="bg-white rounded-xl shadow-xl p-4 w-64 my-2 h-full">
        <div className="flex items-end gap-x-2">
          <div className="shrink-0">
            <img
              src={props.image}
              alt="error"
              className="object-cover w-16 h-16 rounded"
            />
          </div>
          <p className="text-black font-semibold text-xl content-end text-left">
            {props.name}
          </p>
          <div className="grow"></div>
          <div className="h-full flex flex-col">
            <p className={`font-semibold text-left ${color}`}>
              {props.category}
            </p>
            <div className="h-10"></div>
          </div>
        </div>
        <p className="text-black font-semibold text-md text-left my-4">
          {props.title}
        </p>
        <p className={`text-black font-semibold text-xs text-left mt-4`}>
          Category : {props.category}
        </p>
        <p className="text-black font-semibold text-xs text-left">
          {props.weburl}
        </p>
        <div className="w-full h-[1px] bg-black my-2"></div>
        <div className="flex">
          <p className="text-black font-semibold text-xs text-left">Platform</p>
          <div className="grow"></div>
          <p className="text-black font-semibold text-xs text-left">Budget</p>
        </div>
        <div className="flex">
          <div className="flex items-center w-32 overflow-x-scroll no-scrollbar">
            {props.platforms.map((val: any, index: number) => {
              return (
                <div
                  key={index}
                  className="p-1 shrink-0 mx-1 border-2 border-blue-500 rounded-full"
                >
                  <img src={val} alt="error" className="rounded-full w-8 h-8" />
                </div>
              );
            })}
          </div>
          <div className="grow"></div>
          <div>
            <p className="text-black font-bold  text-md text-right my-4">
              {props.maxval} <br />
              {props.currency} / post
            </p>
          </div>
        </div>
        <Link to={`/home/campaigns/${props.id}`}>
          <CusButton
            text={props.btntext}
            textColor={"text-black"}
            background={"bg-[#fbca8e]"}
            width={"w-full"}
            margin={"my-0"}
            fontwidth={"font-bold"}
          ></CusButton>
        </Link>
      </div>
    </>
  );
};
