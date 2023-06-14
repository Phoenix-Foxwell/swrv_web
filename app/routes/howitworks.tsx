import { Footer } from "~/components/home/footer/footer";
import AboutPage from "~/components/about/about";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import HowItWorks from "~/components/about/howitworks";
import { MyNavBar } from "~/components/home/navbar/mynavbar";
const howitworks = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white">
        <MyNavBar></MyNavBar>
      </div>
      <div className="h-16"></div>
      <HowItWorks></HowItWorks>
      <Footer></Footer>
    </>
  );
};
export default howitworks;
