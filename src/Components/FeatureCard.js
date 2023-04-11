import Image from "next/image";
import React from "react";
import feature from "../../public/feature.jpg";
import { BsClock } from "react-icons/bs";
import Link from "next/link";

const FeatureCard = () => {
  return (
    <div className="bg-white mt-3">
      <div className="ft-card flex">
        <div className="img">
          <Link href="/" className="block overflow-hidden group rounded-md">
            <Image
              className="rounded-md w-44 h-24 group-hover:scale-105 transition-all duration-75"
              src={feature}
              alt="feature image"
            />
          </Link>
        </div>
        <div className="content ml-2">
          <Link
            href="/"
            className="text-[#090C1E] line-clamp-2  hover:underline hover:decoration-[#FB2576] transition-all duration-75"
          >
            Never let your memories be greater than your dreams
          </Link>
          <div className="duration mt-2 flex">
            <div className="time flex items-center text-[#808495]">
              <span className="mr-[7px]">
                <BsClock />
              </span>
              4 min read
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
