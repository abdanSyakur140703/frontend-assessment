import { useLoaderData } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import MainContent from "../components/MainContent";
import FilterForm from "../components/FilterForm";

export default function FilterPage() {
  const data: any = useLoaderData();

  return (
   <div className="flex flex-col md:flex-row h-screen bg-gray-100 overflow-hidden">

  {/* FILTER: sekitar 18% */}
  <aside className="bg-gray-50 p-7 shadow w-full md:w-[18%] md:rounded-l-lg rounded-b-lg">
    {/* HEADER FRONTEND ASSESSMENT */}
    <div className="flex items-center mb-10 space-x-3">
      <div className="bg-gray-100 text-white w-8 h-8 flex items-center justify-center rounded-[12px] -translate-y-1 translate-x-1">
        🌎
      </div>
      <h2 className=" font-inter font-bold text-lg whitespace-nowrap">
        Frontend Assessment
      </h2>
    </div>

    <h2 className="text-xs text-gray-500 font-sans mb-4">Filter Wilayah</h2>
    <FilterForm />
  </aside>

  {/* CONTENT */}
  <section className="flex-1 bg-white overflow-hidden -translate-x-1">
    <Breadcrumb
      provinces={data.provinces}
      regencies={data.regencies}
      districts={data.districts}
    />
    <MainContent
      provinces={data.provinces}
      regencies={data.regencies}
      districts={data.districts}
    />
  </section>
</div>
  );
}