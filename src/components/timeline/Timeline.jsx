import React from "react";
import "./Timeline.css";

import Post from "../post/Post";
import Share from "../share/Share";

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  );
}
