import { Footer } from "~/components/home/footer/footer";
import ContactPage from "~/components/contact/contact";
import { MyNavBar } from "~/components/home/navbar/mynavbar";
const contact = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white">
        <MyNavBar></MyNavBar>
      </div>
      <div className="h-16"></div>
      <ContactPage></ContactPage>
      <Footer></Footer>
    </>
  );
};
export default contact;
