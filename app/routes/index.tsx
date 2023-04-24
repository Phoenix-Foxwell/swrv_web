import { Footer } from "~/components/home/footer/footer";
import { HomeIntro } from "~/components/homepage/homeintro";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { BaseUrl } from "~/const";
import axios from "axios";
import { useLoaderData } from "@remix-run/react";
import { MyNavBar } from "~/components/home/navbar/mynavbar";
export const loader: LoaderFunction = async (props: LoaderArgs) => {
  const blog = await axios.post(`${BaseUrl}/api/get-neb-bytype`, { type: 1 });
  return json({ blog: blog.data.data });
};
const index = () => {
  let blogdata = useLoaderData().blog[0];
  return (
    <>
      <MyNavBar></MyNavBar>
      <HomeIntro blogdata={blogdata}></HomeIntro>
      <Footer></Footer>
    </>
  );
};
export default index;
