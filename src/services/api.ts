import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const appId = import.meta.env.VITE_APP_ID;
const appKey = import.meta.env.VITE_APP_KEY;
const type = import.meta.env.VITE_TYPE;

export const api = () =>
  axios.create({
    baseURL: baseUrl,
    params: {
      type: type,
      app_id: appId,
      app_key: appKey
    }
  });
