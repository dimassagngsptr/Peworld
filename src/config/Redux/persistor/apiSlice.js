// import {
//    createApi,
//    fetchBaseQuery,
//    setupListeners,
// } from "@reduxjs/toolkit/query";

// const getTokenFromLocalStorage = () => {
//    return localStorage.getItem("token");
// };

// export const customApi = createApi({
//    reducerPath: "api",
//    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
//    prepareHeaders: (headers) => {
//       const token = getTokenFromLocalStorage();
//       if (token) {
//          headers.set("Authorization", `Bearer ${token}`);
//       }
//       return headers;
//    },
//    endpoints: (builder) => ({
//       checkRoleUser: builder.query({
//          query: () => ({
//             url: "auth/check-role",
//          }),
//       }),
//       getActiveUser: builder.query({
//          query: (role) => ({
//             url: `${role}/profile`,
//          }),
//       }),
//       getSkills: builder.query({
//          query: {
//             url: "skills",
//          },
//       }),
//    }),
// });

// export const {
//    useCheckRoleQuery,
//    useGetActiveUserQuery,
//    useGetSkillsQuery,
// } = customApi;

// setupListeners(customApi);
