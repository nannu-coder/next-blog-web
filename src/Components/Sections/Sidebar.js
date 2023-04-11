import React from "react";
import FeatureCard from "../FeatureCard";
import Taglist from "../Taglist";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-white shadow-cs rounded-md p-4">
      <h1 className="text-lg font-semibold">Featured posts</h1>
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />

      <div className="tag-list mt-8">
        <h1 className="text-lg font-semibold">Tags</h1>
        <div className="tags flex flex-wrap">
          <Taglist name="Food" color="#B43ADF" />
          <Taglist name="Health" color="#1dbf2f" />
          <Taglist name="Inspiration" color="#4d61ff" />
          <Taglist name="Lifestyle" color="#4d61ff" />
          <Taglist name="Nature" color="#fd94ff" />
          <Taglist name="Technology" color="#f18509" />
          <Taglist name="Travel" color="#FB2576" />
        </div>
      </div>

      <div className="latest-post mt-8">
        <h1 className="text-lg font-semibold">Latest Post</h1>
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>

      <div className="newsletter mt-10">
        <div className="news-card bg-[#FB2576] p-4 rounded-md text-center">
          <h1 className="text-2xl font-bold text-white">Newsletter</h1>
          <p className="text-xl px-10 text-white ">
            Get the latest posts delivered straight to your inbox.
          </p>

          <form action="#">
            <input type="text" />
          </form>
        </div>
      </div>

      <div className="follow-sec mt-10">
        <h1 className="text-lg font-semibold">Follow us</h1>

        <div className="social-icons flex">
          <Link
            className="w-8 h-8 bg-[#E8EAEE] text-center leading-8 rounded-full inline-block"
            href="/"
          >
            <FaTwitter />
          </Link>
          <Link href="/">
            <FaFacebookF />
          </Link>
          <Link href="/">
            <FaLinkedinIn />
          </Link>
          <Link href="/">
            <BsInstagram />
          </Link>
          <Link href="/">
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
