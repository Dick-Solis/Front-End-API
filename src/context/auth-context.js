import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { tokenKey } from "../config";
import * as auth from "../service/sessionServices";
import { getUser } from "../service/userServices";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((u) => setUser(u))
      .catch((error) => console.log(error));
  }, []);

  function login(credentials) {
    auth
      .sessionLogin(credentials)
      .then((u) => setUser(u))
      .catch((error) => console.log(error));
  }

  function logout() {
    auth.sessionLogout().then(() => {
      sessionStorage.removeItem(tokenKey);
      sessionStorage.removeItem("id");
      sessionStorage.removeItem("rol");
      setUser(null);
    });
  }

  // function signup(userData) {
  //   createUser(userData)
  //     .then((u) => setUser(u))
  //     .catch((error) => console.log(error));
  // }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        // signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
