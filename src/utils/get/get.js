import { api } from "../../config/api/api";
export const getApi = (route) =>
   api.get(route).then((res) => {
      return res;
   });
