import { createBrowserRouter } from "react-router-dom";
import FilterPage from "./pages/FilterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <FilterPage />,
    loader: async () => {
      const res = await fetch("/data/indonesia_regions.json");
      const data = await res.json();

      return {
        provinces: data.provinces,
    regencies: data.regencies,
    districts: data.districts,
      };
    },
  },
]);