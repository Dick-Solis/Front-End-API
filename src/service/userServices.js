import apiFetch from "./apiFetch";
import { tokenKey } from "../config";

export function createUser(userData) {
  return apiFetch("/users", { body: userData }).then((u) => {
    const { token, ...user } = u;
    sessionStorage.setItem(tokenKey, token);
    return user;
  });
}

export function getUser() {
  return apiFetch("/users")
  .then((u) => {
    const { token, ...user } = u;
    return user;
  });
}
