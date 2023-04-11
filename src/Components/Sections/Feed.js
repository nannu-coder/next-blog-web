import React from "react";
import Post from "./Post";
import Sidebar from "./Sidebar";

const Feed = () => {
  return (
    <div className="mt-14">
      <div className="grid gap-4 grid-cols-3">
        <div className="post col-span-2">
          <Post />
        </div>
        <div className="sidebar col-span-1">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Feed;
