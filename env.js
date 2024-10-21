const env = import.meta.env.MODE;

let envApiUrl = "";

if (env === "production") {
  envApiUrl = window.location.origin;
} else {
  //ip:port...
  envApiUrl = "http://localhost:8000";
}

export const apiUrl = envApiUrl;
