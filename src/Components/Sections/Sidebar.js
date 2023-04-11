import React from "react";
import FeatureCard from "../FeatureCard";

const Sidebar = () => {
  return (
    <div className="bg-white shadow-cs rounded-md p-4">
      <h1 className="text-lg font-semibold">Featured posts</h1>
      <FeatureCard />
    </div>
  );
};

export default Sidebar;
