import { useSearchParams } from "react-router-dom";

type Props = {
  provinces: any[];
  regencies: any[];
  districts: any[];
};

export default function BreadCrumb({ provinces, regencies, districts }: Props) {
  const [params] = useSearchParams();

  const provinceId = params.get("province");
  const regencyId = params.get("regency");
  const districtId = params.get("district");

  const province = provinces.find(p => String(p.id) === provinceId);
  const regency = regencies.find(r => String(r.id) === regencyId);
  const district = districts.find(d => String(d.id) === districtId);

  return (
   <nav className="breadcrumb text-sm m-4 flex items-center space-x-1 ">
  {/* Level 1: Indonesia */}
  <span className={!province ? "text-blue-500 font-poppins font-semibold" : "text-gray-600"}>
    Indonesia
  </span>

  {/* Level 2: Province */}
  {province && (
    <span className={!regency && !district ? "text-blue-500 font-poppins font-semibold" : "text-gray-600"}>
      &gt; {province.name}
    </span>
  )}

  {/* Level 3: Regency */}
  {regency && (
    <span className={!district ? "text-blue-500 font-poppins font-semibold" : "text-gray-600"}>
      &gt; {regency.name}
    </span>
  )}

  {/* Level 4: District */}
  {district && (
    <span className="text-blue-500 font-poppins   font-semibold">&gt; {district.name}</span>
  )}
</nav>
  );
}