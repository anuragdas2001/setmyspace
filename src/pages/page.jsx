import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Testimonial from "@/components/Testimonial";
import Carousal from "@/components/Carousal";
const Home = () => {
  return (
    <div>
      <Banner />
      <Card users={users} />
      <Testimonial />
      <Carousal />
    </div>
  );
};
export default Home;
