import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import { getCurrenciesAPI } from "@/api/wallet.ts";
getCurrenciesAPI().then((res) => {
  console.log(res.data);
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
