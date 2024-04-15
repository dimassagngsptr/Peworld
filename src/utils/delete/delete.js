import { api } from "../../config/api/api";
export const deleteApi = (route) =>
   api.delete(route).then((res) => {
      return res;
   });
