import Body from "../../components/module/Landing/Body";
import Header from "../../components/module/Landing/Header";
import profileImg_1 from "../../assets/images/landing-page/testimonial_1.png";
import profileImg_2 from "../../assets/images/landing-page/testimonial_2.png";
import profileImg_3 from "../../assets/images/landing-page/testimonial_3.png";
import Testimoni from "../../components/module/Testimoni";
import Footer from "../../components/module/Landing/Footer";
import Layout from "../Layout";

const LandingPage = () => {
   const cardItems = [
      {
         job: "Web Developer",
         img: profileImg_1,
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
      },
      {
         job: "Web Developer",
         img: profileImg_2,
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
         job: "Web Developer",
         img: profileImg_3,
         desc: "Lorem ipsum dolor sit amet, consectetur ",
      },
      {
         job: "Web Developer",
         img: profileImg_3,
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
      },
   ];
   return (
      <>
         <Layout>
            <Header />
            <Body />
            <Testimoni cardItems={cardItems} />
            <Footer />
         </Layout>
      </>
   );
};
export default LandingPage;
