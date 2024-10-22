import axios from "axios";
import { apiUrl } from "../../env";

axios.defaults.withCredentials = true;

export const axiosDataSourceApi = axios.create({
  baseURL: `${apiUrl}/datasources`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosDataSourceConfigApi = axios.create({
  baseURL: `${apiUrl}/datasource-configs`,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function listDatasources(signal) {
  return axiosDataSourceApi.get("/all", { signal });
}

export async function postDatasources(params) {
  return axiosDataSourceApi.post("", { params });
}

export async function getDatasourceConfigsTypes(signal) {
  return axiosDataSourceConfigApi.get("/types", { signal });
}

export async function getDatasourceConfigsRequiredKeys(signal, params) {
  return axiosDataSourceConfigApi.get("/required-keys", { signal, params });
}
