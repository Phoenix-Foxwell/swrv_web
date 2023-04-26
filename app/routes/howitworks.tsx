import { Footer } from "~/components/home/footer/footer";
import AboutPage from "~/components/about/about";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import HowItWorks from "~/components/about/howitworks";
import { MyNavBar } from "~/components/home/navbar/mynavbar";
const howitworks = () => {
  return (
    <>
      <MyNavBar></MyNavBar>
      <HowItWorks></HowItWorks>
      <Footer></Footer>
    </>
  );
};
export default howitworks;
