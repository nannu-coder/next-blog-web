import React from "react";
import Taglist from "../Taglist";
import Link from "next/link";
import banner1 from "../../../public/banner.jpg";
import Image from "next/image";
import { BsCalendarDate, BsClock } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="mt-14">
      <div className="grid gap-4 grid-cols-4">
        <div className="col-span-2">
          <div className="taglist">
            <Taglist name="Travel" color="#E10689" />
          </div>
          <div className="title mt-3">
            <Link href="/" className="text-4xl font-bold">
              Never let your memories be greater than your dreams
            </Link>
          </div>
          <div className="body mt-3">
            <p className="line-clamp-3">
              Before long the searchlight discovered some distance away a
              schooner with all sails set, apparently the same vessel which had
              been noticed earlier in the evening. The wind had by this time
              backed to the east, and there was a shudder amongst the watchers
              on.
            </p>
          </div>
          <div className="duration mt-5 flex">
            <div className="date flex items-center mr-4 text-[#808495]">
              <span className="mr-[7px]">
                <BsCalendarDate />
              </span>
              May 2, 2022
            </div>
            <div className="time flex items-center text-[#808495]">
              <span className="mr-[7px]">
                <BsClock />
              </span>
              4 min read
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div
            style={{ width: "100%", height: "400px" }}
            className="img-container p-4 rounded-md bg-white shadow-cs  overflow-hidden"
          >
            <Link
              style={{ width: "100%", height: "100%" }}
              className="overflow-hidden group block rounded-md"
              href="/"
            >
              <Image
                width={0}
                className="object-cover rounded-md group-hover:scale-105 transition-all duration-75"
                src={banner1}
                alt="banner image"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  transformOrigin: "center",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
