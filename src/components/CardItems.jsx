import React from "react";
import {
  Heart,
  Share2,
  Star,
  MapPin,
  MessageSquare,
  Mail,
  Phone,
} from "lucide-react";
import { useRouter } from "next/navigation";
const CardItems = ({ item, user }) => {
  console.log("user", user);
  const router = useRouter();
  const handleContactNow = (userId) => {
    console.log("userId", userId);
    router.push(`/contact/${userId}`);
  };
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-600/20 mix-blend-overlay" />
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />

        {/* Floating Action Buttons */}
        <div className="absolute top-3 right-3 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 rounded-full bg-white/90 hover:bg-white">
            <Heart className="h-4 w-4 text-gray-700" />
          </button>
          <button className="p-2 rounded-full bg-white/90 hover:bg-white">
            <Share2 className="h-4 w-4 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mt-2">
        {/* Price Tag - Right-aligned */}
        <div className="flex justify-end -mt-2 mb-2">
          <div className="bg-[#8E44AD] px-4 py-1 rounded-bl-xl">
            <p className="text-lg font-medium text-white">₨. {item.price}</p>
          </div>
        </div>

        <div className="px-4 space-y-2">
          {/* Title */}
          <h2 className="text-base font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
            {item.name}
          </h2>

          {/* Decorator Info with Avatar */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200">
              {user ? (
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={item.decoratorImg}
                  alt={item.decoratorName}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <p className="text-sm font-medium text-gray-600">
              {user ? `${user.firstName} ${user.lastName}` : item.decoratorName}
            </p>
          </div>

          {/* Contact Information */}
          {user && (
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>{user.phone}</span>
              </div>
            </div>
          )}

          {/* Rating and Reviews */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{item.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                {item.review} reviews
              </span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 text-gray-600">
            <MapPin className="h-4 w-4" color="#DE3163" />
            <span className="text-sm">
              {user
                ? `${user.address.city}, ${user.address.stateCode}`
                : item.location}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-end mt-4 pt-4">
          <button
            onClick={()=>handleContactNow(user.id)}
            className="px-4 py-2 w-full m-3 border-2 border-[#DE3163] text-[#DE3163] rounded-lg font-semibold hover:bg-[#DE3163] hover:text-white transition-colors"
          >
            CONTACT NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
