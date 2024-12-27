const Footer = () => {
  return (
    <div className="bg-black">
      <div className=" flex text-white py-8 mt-10">
        <div className="px-10">
          <span>
            SET<span className="text-[#DE3163] font-bold">MySpace</span>
          </span>
          <p className="text-[#6C6C6C] line-clamp-5">
            A Unit of UrbanBorrow Pvt. Ltd. <p>Whitefield, Bangalore</p>{" "}
            Karnataka, India 560066
          </p>
        </div>
        <div className="flex mx-20 justify-center items-center gap-10 ">
          <div>Help & Support</div>
          <div>Signup As Partner</div>
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
        </div>
      </div>
      <div className="flex py-10 text-[#7F7f7F] justify-center">
        All Rights reserved 2022 setmyspace
      </div>
    </div>
  );
};

export default Footer;
