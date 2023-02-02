const API = "https://api.themoviedb.org/3";
export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTg0NGQ2ZGNmNjVlNGViYTY0YTVmNWQ0ZjI5ZTRjMiIsInN1YiI6IjYzZGE5YzAzODU3MDJlMDUxYzQ0MmFkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rnbDvzBu-hHd5fVzwpoWDyMx2Utf2YeLCKHWZYfRNrk",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then(data => data.json());

}
