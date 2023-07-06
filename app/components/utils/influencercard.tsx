import { Link } from "@remix-run/react";
import { CusButton } from "./buttont";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

type InfluencerCardProps = {
  image: string;
  name: string;
  star: number;
  id: string;
  bio: string;
};
const InfluencerCard = (props: InfluencerCardProps) => {

  function truncateText(text: string) {
    if (text.length > 100) {
      return text.substring(0, 100) + "...";
    }
    return text;
  }
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
  return (
    <>
      <div className="bg-white rounded-xl shadow-xl w-64 my-2 h-full">
        <img
          src={props.image}
          alt="error"
          className="w-full h-40 object-cover rounded-t-md"
        />
        <div className="px-4 pb-2 flex flex-col h-full">
          <div className="flex items-start justify-between">
            <div className="grow">
              <p className="text-black font-semibold text-lg text-left">
                {props.name == undefined || props.name == null ? "" : props.name.split("@")[0]}
              </p>
              <p className="text-black font-semibold text-sm text-left mt-2">
                {truncateText(props.bio)}
              </p>
              <div className="flex">
                <Star></Star>
              </div>
            </div>
            {/* <div>
                            <p className="text-black font-bold  text-md text-right">3500 <br />USD / post</p>
                        </div> */}
          </div>
          <div className="grow"></div>
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
        </div>
      </div>
    </>
  );
};

export default InfluencerCard;
