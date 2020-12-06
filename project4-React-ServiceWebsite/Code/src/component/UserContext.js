import { createContext } from "react";

export const UserContext = createContext(sessionStorage.getItem("islogin"))
