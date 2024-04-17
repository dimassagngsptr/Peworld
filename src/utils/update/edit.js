import { api } from "../../config/api/api";

const put = (route, value) =>
   api.put(route, value).then((res) => {
      return res;
   });

const patch = (route, value) =>
   api.patch(route, value).then((res) => {
      return res;
   });

export { put, patch };
