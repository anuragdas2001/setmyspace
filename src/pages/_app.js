import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Carousal from "@/components/Carousal";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
export default function App({ Component, pageProps }) {
  return (
    <div className="bg-pink-100">
      <Navbar />
      <Banner />
      <Card />
      <Testimonial />
      <Carousal/>
      <Footer/>
    </div>
  );
}
