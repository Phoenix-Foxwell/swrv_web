import axios from "axios";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { BaseUrl } from "~/const";

interface RatingProps {
  reviewType: string;
  influencerId: string;
  brandId: string;
  campaignId: string;
}
const MyRating: React.FC<RatingProps> = (props: RatingProps): JSX.Element => {
  const [crating, setCRating] = useState<number>(0);
  const [arating, setARating] = useState<number>(0);
  const [prating, setPRating] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const handlecReset = (rate: number) => {
    setCRating(rate);
  };
  const handleaReset = (rate: number) => {
    setARating(rate);
  };
  const handlepReset = (rate: number) => {
    setPRating(rate);
  };

  const submit = async () => {
    if (crating == 0) {
      setError("Communication rating should be more then 0.");
    } else if (arating == 0) {
      setError("Approvals rating should be more then 0.");
    } else if (prating == 0) {
      setError("Payments rating should be more then 0.");
    } else {
      setError(null);

      const req = {
        influencerId: props.influencerId,
        brandId: props.brandId,
        campaignId: props.campaignId,
        rating1: crating.toString(),
        rating2: arating.toString(),
        rating3: prating.toString(),
        reviewType: props.reviewType,
        remark: "User To Brand",
      };

      const apireq = await axios({
        method: "post",
        url: `${BaseUrl}/api/add-review`,
        data: req,
      });
      if (apireq.data.status == false) {
        setError(apireq.data.message);
      } else {
        window.location.reload();
      }
    }
  };

  return (
    <>
      <div className="w-80 bg-white rounded-md my-2 px-6 py-2">
        <p className="text-xl text-gray-800 text-center font-semibold">
          Rate your Experience
        </p>
        <div className="h-[2px] bg-gray-400 w-full my-2"></div>
        <p className="text-lg font-semibold text-gray-600">Communication</p>
        <Rating
          initialValue={crating}
          onClick={handlecReset}
          size={35}
        ></Rating>
        <p className="text-lg font-semibold text-gray-600">Approvals</p>
        <Rating
          initialValue={arating}
          onClick={handleaReset}
          size={35}
        ></Rating>
        <p className="text-lg font-semibold text-gray-600">Payments</p>
        <Rating
          initialValue={prating}
          onClick={handlepReset}
          size={35}
        ></Rating>
        <div className="h-6"></div>
        {error == "" || error == null || error == undefined ? null : (
          <div className="bg-rose-500 bg-opacity-10 border-2 text-center border-rose-500 rounded-md text-rose-500 text-lg font-normal text-md my-4">
            {error}
          </div>
        )}
        <button
          className="text-white bg-secondary rounded-md py-1 px-4 text-xl"
          onClick={submit}
        >
          SUBMIT
        </button>
      </div>
    </>
  );
};

export default MyRating;
