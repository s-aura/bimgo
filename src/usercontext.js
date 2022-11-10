import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

const UserContext = createContext();

export default UserContext;

export const UserContextProvider = ({ children }) => {
  const [userstate, setuserstate] = useState({
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
    isLoggedin: false,
  });

  useEffect(() => {
    // get from local storage
    const user = localStorage.getItem("bimgo-user");
    const token = localStorage.getItem("bimgo-token");
    if (user && token) {
      setuserstate({ user: JSON.parse(user), token });
    }
  }, []);

  useEffect(() => {
    // set to local storage
    if (userstate.user && userstate.token) {
      localStorage.setItem("bimgo-user", JSON.stringify(userstate.user));
      localStorage.setItem("bimgo-token", userstate.token);
    } else {
      localStorage.setItem(
        "bimgo-user",
        JSON.stringify({
          name: "Guest",
          email: "Guest@123",
        })
      );
      localStorage.setItem("bimgo-token", "uertyuwoeihsuislirt");
    }
  }, [userstate]);

  return (
    <UserContext.Provider value={{ userstate, setuserstate }}>
      {children}
    </UserContext.Provider>
  );
};
