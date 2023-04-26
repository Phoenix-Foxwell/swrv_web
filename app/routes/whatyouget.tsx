import { Footer } from "~/components/home/footer/footer";
import AboutPage from "~/components/about/about";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import WhatYouGet from "~/components/about/whatyouget";
import { MyNavBar } from "~/components/home/navbar/mynavbar";
const about = () => {
  return (
    <>
      <MyNavBar></MyNavBar>
      <WhatYouGet></WhatYouGet>
      <Footer></Footer>
    </>
  );
};
export default about;
