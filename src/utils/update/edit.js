import { api } from "../../config/api/api";

const put = async (route, value) =>
   api.put(route, value).then((res) => {
      return res;
   });

const patch = async (route, value) =>
   api.patch(route, value).then((res) => {
      return res;
   });

export { put, patch };
