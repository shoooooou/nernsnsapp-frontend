import React, { useEffect, useState } from "react";
import "./Profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Timeline from "../../components/timeline/Timeline";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile() {
  const username = useParams().username;
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `http://localhost:4000/api/users?username=${username}`
      );
      setUser(response.data);
      console.log(response.data);
    };
    fetchUser();
  }, []);
  return (
    <>
      <div className="aaa"></div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={PUBLIC_FOLDER + "/post/3.jpeg"}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={PUBLIC_FOLDER + "/person/1.jpeg"}
                alt="aiueo"
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Timeline username={user.username} />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
