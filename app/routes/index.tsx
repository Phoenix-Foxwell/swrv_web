import { Footer } from "~/components/home/footer/footer";
import { HomeIntro } from "~/components/homepage/homeintro";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { BaseUrl } from "~/const";
import axios from "axios";
import { useLoaderData, useNavigate, useNavigation } from "@remix-run/react";
import { MyNavBar } from "~/components/home/navbar/mynavbar";
import ProgressBar from "~/components/progressbr";
import { useEffect } from "react";


export const loader: LoaderFunction = async (props: LoaderArgs) => {

  // const blog = await axios({
  //   method: "post",
  //   url: `${BaseUrl}/api/get-neb-bytype`,
  //   data: { type: 1 },
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Headers": "*",
  //     "Access-Control-Allow-Options": "*",
  //     "Access-Control-Allow-Methods": "*",
  //     "X-Content-Type-Options": "*",
  //     "Content-Type": "application/json",
  //     "Accept": "*",
  //   },
  // });

  const blog = await axios.post(`${BaseUrl}/api/get-neb-bytype`, { type: 1 });

  return json({ blog: blog.data.data });

};

const index = () => {
  let blogdata = useLoaderData().blog[0];


  // useEffect(() => {

  //   if ("geolocation" in navigator) {
  //     console.log("Available");
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       console.log("Latitude is :", position.coords.latitude);
  //       console.log("Longitude is :", position.coords.longitude);
  //     });
  //   } else {
  //     console.log("Not Available");
  //   }
  // }, []);

  return (
    <>
      <div>
        <div className="fixed top-0 left-0 w-full z-50 bg-white">
          <MyNavBar></MyNavBar>
        </div>
        <div className="h-16"></div>
        <HomeIntro blogdata={blogdata}></HomeIntro>
        <Footer></Footer>
      </div>
    </>
  );
};
export default index;
