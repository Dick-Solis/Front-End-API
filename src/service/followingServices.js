import apiFetch from "./apiFetch";

export function getFollowings(){
  return apiFetch("/followings")
}