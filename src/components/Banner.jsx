"use client";
import BannerCards from "./BannerCards";
import { Search, LocateFixed, Images, ScanSearch, Users } from "lucide-react";

const Banner = () => {
  return (
    <div className="relative h-[551px]">
      <img
        className="h-full w-screen object-fill"
        src="https://s3-alpha-sig.figma.com/img/857f/aee2/71dc5c589789000ce83345d194190acc?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RFr8K6pu7o08I2f45fjQzN~0wIrXK2LBq4uY53ErD5g8AvFsHL7PGfLx3-uZgI-mugmcwUVfbeM29B2F6XvthFYbDnZZisum3PdrRxasnm7wsGKIuWRspORh6h2ZusPs6X~nGXKopw2Xb5WcLY1mg6bdf67JqV7jqCjG2wdn~cVyiVzyrshm5nd542EafKixb1jYagKEKsRmHm8S4~dzdn5hZ1Cd13bvICZTxXwy1P4CdBfPw0RDn3J6sPpmhNX5CYScGFN0kiPDmFMYWpaRF23gFxNpYw8GjvOemqxp-089z2yYIaOZgdbXyiSa5-7iQtzHy5LohE62XRLsSGpPZA__"
        alt="Banner"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-center mx-20 space-y-6">
        <h1 className="text-4xl font-medium">
          We set up your space to
          <br />
          celebrate your
          <strong> Birthday Party</strong>
        </h1>
        <div className="flex gap-10 font-semibold">
          <div className="flex gap-2">
            <Images color="#DE3163" />
            Browse gallery
          </div>
          <div className="flex gap-2">
            <ScanSearch color="#DE3163" />
            Find Inspiration
          </div>
          <div className="flex gap-2">
            <Users color="#DE3163" />
            Hire Professionals
          </div>
        </div>
        <div className="flex">
          {/* First input with icon */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Service, Professional etc."
              className="p-3 pr-10 border rounded-md w-full"
            />
            <Search className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Second input with icon */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Enter Location"
              className="p-3 pr-32 border rounded-md w-full"
            />
            <LocateFixed className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        <div>
          <button className="bg-[#DE3163] text-white rounded-lg p-4 font-semibold">
            Search Professionals
          </button>
        </div>
      </div>
      <div className="absolute -my-20 w-full">
        <BannerCards />
      </div>
    </div>
  );
};

export default Banner;
