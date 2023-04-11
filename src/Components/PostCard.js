import React from "react";
import post from "../../public/post.jpg";
import Image from "next/image";
import Taglist from "./Taglist";
import { BsCalendarDate, BsClock } from "react-icons/bs";
import Link from "next/link";

const PostCard = () => {
  return (
    <div>
      <div className="bg-white shadow-cs rounded-md p-4">
        <div className="card grid gap-4 grid-cols-3 auto-rows-fr">
          <div className="card-image col-span-1">
            <Link
              href="/post/1"
              className="group overflow-hidden block h-full rounded-md"
            >
              <Image
                src={post}
                alt="Post Image"
                className="rounded-md w-full h-full block group-hover:scale-105 transition-all duration-75"
              />
            </Link>
          </div>
          <div className="card-content col-span-2">
            <Taglist name="Nature" color="#fd94ff" />
            <Link
              href="/post/1"
              className="font-bold text-3xl mt-3 mb-3 hover:border-b-2 border-[#FB2576] transition-all duration-75"
            >
              Autumn is a second spring when every leaf is a flower
            </Link>
            <p className="line-clamp-3 leading-7 text-[#2D3350]">
              She then expatiated very warmly upon the advantages I should reap
              from her plan; talked in a high style of my future grandeur;
              assured me how heartily I should despise almost every body and
              every thing I had hitherto seen; predicted my marrying into some
              family of the
            </p>

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
        </div>
      </div>
    </div>
  );
};

export default PostCard;
