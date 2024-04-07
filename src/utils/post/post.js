import { api } from "../../config/api/api";
export const postApi = (route, value) =>
   api.post(route, value).then((res) => {
      return res;
   });
