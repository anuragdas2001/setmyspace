import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ContactId = () => {
  const router = useRouter();
  const { id } = router.query;
  const [userInfo, setUserInfo] = useState(null);
  console.log(id);
  const FetchUserInfo = async () => {
    const response = await axios.get(`https://dummyjson.com/users/${id}`);
    console.log(response.data);
    setUserInfo(response.data);
  };
  useEffect(() => {
    FetchUserInfo();
  }, [id]);
  if (!userInfo) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }
  console.log(userInfo);
  return (
    <div className="min-h-screen flex justify-center py-10">
      <div className="bg-white shadow-md rounded-lg p-6 w-3/4 md:w-1/2">
        <div className="flex flex-col items-center">
          <img
            src={userInfo.image}
            alt={`${userInfo.firstName} ${userInfo.lastName}`}
            className="w-32 h-32 rounded-full mb-4 border-2 border-gray-300"
          />
          <h1 className="text-2xl font-bold text-gray-700">{`${userInfo.firstName} ${userInfo.lastName}`}</h1>
          <p className="text-gray-500 text-sm">@{userInfo.username}</p>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center border-b py-2">
            <span className="text-gray-600 font-medium">Email:</span>
            <span className="text-gray-700">{userInfo.email}</span>
          </div>
          <div className="flex justify-between items-center border-b py-2">
            <span className="text-gray-600 font-medium">Phone:</span>
            <span className="text-gray-700">{userInfo.phone}</span>
          </div>
          <div className="flex justify-between items-center border-b py-2">
            <span className="text-gray-600 font-medium">Birth Date:</span>
            <span className="text-gray-700">{userInfo.birthDate}</span>
          </div>
          <div className="flex justify-between items-center border-b py-2">
            <span className="text-gray-600 font-medium">Blood Group:</span>
            <span className="text-gray-700">{userInfo.bloodGroup}</span>
          </div>
          <div className="flex justify-between items-center border-b py-2">
            <span className="text-gray-600 font-medium">Maiden Name:</span>
            <span className="text-gray-700">{userInfo.maidenName}</span>
          </div>
          <div className="flex justify-between items-center border-b py-2">
            <span className="text-gray-600 font-medium">Gender:</span>
            <span className="text-gray-700 capitalize">{userInfo.gender}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactId;
