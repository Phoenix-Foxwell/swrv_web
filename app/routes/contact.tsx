import { Footer } from "~/components/home/footer/footer";
import ContactPage from "~/components/contact/contact";
import { MyNavBar } from "~/components/home/navbar/mynavbar";
const contact = () => {
  return (
    <>
      <MyNavBar></MyNavBar>
      <ContactPage></ContactPage>
      <Footer></Footer>
    </>
  );
};
export default contact;
