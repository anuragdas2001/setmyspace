import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Testimonial from "@/components/Testimonial";
import Carousal from "@/components/Carousal";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [users, setUsers] = useState([]);
  const FetchUser = async () => {
    const response = await axios.get("https://dummyjson.com/users?limit=6");
    console.log(response.data);
    setUsers(response.data.users);
  };
  useEffect(() => {
    FetchUser();
  }, []);
  console.log("users", users);
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
