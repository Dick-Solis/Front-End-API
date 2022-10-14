import { tokenKey } from "../config";
import apiFetch from "./apiFetch";

export function sessionLogin(credentials) {
  return apiFetch("/login", { body: credentials }).then((u) => {
    const { token, ...user } = u;
    sessionStorage.setItem(tokenKey, token);
    sessionStorage.setItem("id", u.user_id);
    sessionStorage.setItem("rol", u.roles);
    return user;
  });
}

export function sessionLogout() {
  return apiFetch("/logout", { method: "DELETE" });
}
