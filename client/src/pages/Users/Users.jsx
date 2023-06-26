import React from "react";
import { useLocation } from "react-router-dom";
import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = ({ slideIn, handleSlideIn }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="home-container-1">
      <LeftSidebar/>
      <div className="home-container-2" style={{ marginTop: "30px" }}>
       {
          location.pathname === '/Users' ?
          <UsersList/>:
          <></>
       }
        
      </div>
    </div>
  );
};

export default Users;