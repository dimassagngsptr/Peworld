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
      job: "IT Consultant",
      img: profileImg_1,
      desc: "Peworld membantu kami mengisi posisi kritis dalam waktu yang sangat singkat. Alat screening mereka sangat membantu dalam menyaring kandidat yang paling sesuai. Sangat puas dengan hasilnya",
    },
    {
      job: "IT Company",
      img: profileImg_2,
      desc: "Peworld telah menjadi mitra terpercaya dalam menemukan kandidat berkualitas tinggi. Database mereka yang luas dan alat pencarian yang efisien memastikan bahwa kami selalu menemukan talenta terbaik untuk posisi yang kami butuhkan",
    },
    {
      job: "IT Consultant",
      img: profileImg_3,
      desc: "Saya sangat terkesan dengan Peworld. Proses pengisian lowongan pekerjaan menjadi lebih cepat dan efisien. Selain itu, sistem pencocokan kandidat yang mereka miliki sangat akurat, membuat kami lebih mudah menemukan kandidat yang tepat.",
    },
    {
      job: "IT Company",
      img: profileImg_3,
      desc: "Peworld memberikan pengalaman rekrutmen yang luar biasa. Dari memasang iklan lowongan hingga menyaring kandidat, semuanya berjalan dengan lancar. Kami berhasil menemukan beberapa kandidat hebat melalui platform ini.",
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
