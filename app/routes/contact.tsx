import { Footer } from "~/components/home/footer/footer";
import ContactPage from "~/components/contact/contact";
import { MyNavBar } from "~/components/home/navbar/mynavbar";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { BaseUrl } from "~/const";
import axios from "axios";
import { useLoaderData } from "@remix-run/react";


export const loader: LoaderFunction = async (props: LoaderArgs) => {
  const contact = await axios.post(`${BaseUrl}/api/get-home`);
  return json({ contact: contact.data.data });
};

const contact = () => {

  const contact = useLoaderData().contact[0];
  
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white">
        <MyNavBar></MyNavBar>
      </div>
      <div className="h-16"></div>
      <ContactPage address_1={contact["address_1"]} address_2={contact["address_2"]} address_3={contact["address_3"]}></ContactPage>
      <Footer></Footer>
    </>
  );
};
export default contact;
