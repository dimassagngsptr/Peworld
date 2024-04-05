import axios from "axios";
const base = import.meta.env.VITE_API_URL;
console.log(base);
export const api = axios.create({
   baseUrl: base,
   timeout: 5000,
});
// export { api };
