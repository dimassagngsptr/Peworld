import { api } from "../../config/api/api";
export const getApi = (route, params) =>
   api
      .get(route, {
         params,
      })
      .then((res) => {
         return res;
      });

//cofig params
