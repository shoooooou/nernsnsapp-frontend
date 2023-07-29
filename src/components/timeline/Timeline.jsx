import React from "react";
import "./Timeline.css";
import Share from "../share/Share";
import {Posts} from "../../dummyData"

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {Posts.map((post)=>(
          <Post post={post} key={post.key}/>
        ))}
      </div>
    </div>
  );
}
