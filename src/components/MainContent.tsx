import { useSearchParams } from "react-router-dom";

type Props = {
  provinces: any[];
  regencies: any[];
  districts: any[];
};

export default function MainContent({ provinces, regencies, districts }: Props) {
  const [params] = useSearchParams();

  const provinceId = params.get("province");
  const regencyId = params.get("regency");
  const districtId = params.get("district");

  const province = provinces.find(p => String(p.id) === provinceId);
  const regency = regencies.find(r => String(r.id) === regencyId);
  const district = districts.find(d => String(d.id) === districtId);

 return (
<main className="bg-gray-50 shadow flex flex-col items-center h-screen w-full overflow-hidden">

  {/* PROVINSI */}
  {province && (
    <div className="flex-1 flex flex-col items-center justify-center w-full relative">
      <span className="text-xs text-blue-500 uppercase font-poppins">Provinsi</span>
      <span className="text-6xl font-bold">{province.name}</span>
      {regency && (
        <div className="absolute bottom-1 w-full flex justify-center">
          <span className="text-gray-400 text-xl">↓</span>
        </div>
      )}
    </div>
  )}

  {/* KABUPATEN */}
  {regency && (
    <div className="flex-1 flex flex-col items-center justify-center w-full relative">
      <span className="text-xs text-blue-500 uppercase font-poppins">Kabupaten / Kota</span>
      <span className="text-5xl font-bold">{regency.name}</span>
      {district && (
        <div className="absolute bottom-1 w-full flex justify-center">
          <span className="text-gray-400 text-xl">↓</span>
        </div>
      )}
    </div>
  )}

  {/* KECAMATAN */}
  {district && (
    <div className="flex-1 flex flex-col items-center justify-center w-full">
      <span className="text-xs text-blue-500 uppercase font-poppins">Kecamatan</span>
      <span className="text-4xl font-bold">{district.name}</span>
    </div>
  )}

  {!province && (
    <p className="text-gray-400 flex-1 flex items-center justify-center w-full">
      Belum ada wilayah yang dipilih.
    </p>
  )}
</main>
  );
}