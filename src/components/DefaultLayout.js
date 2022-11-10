import React, { useContext } from "react";
import { UNSAFE_DataRouterStateContext } from "react-router-dom";
import "../resources/Default-Layout.css";
import UserContext from "../usercontext";

function DefaultLayout(props) {
  
  const {userstate} = useContext(UserContext);
  console.log(userstate);
  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
        <h1 className="logo"> brokeOswald </h1>
        <div>
          <h1 className="username">{userstate.user.name}</h1>
        </div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
