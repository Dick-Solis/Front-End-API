import apiFetch from "./apiFetch";

export function getJobs(){
  return apiFetch("/jobs")
}

export function showJob(id){
  return apiFetch(`/jobs/${id}`)
}