import { api } from "./api";

export const getData = async (query: string) => {
  try {
    const response = await api().get("/", {
      params: {
        q: query
      }
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getDatail = async (path: string) => {
  try {
    const response = await api().get(`/${path}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
