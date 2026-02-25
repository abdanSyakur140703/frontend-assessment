import { useLoaderData, useSearchParams } from "react-router-dom";

export default function FilterForm() {
  const data: any = useLoaderData();
  const [params, setParams] = useSearchParams();

  const province = params.get("province") || "";
  const regency = params.get("regency") || "";
  const district = params.get("district") || "";

  // Filter data
  const filteredRegencies = data.regencies.filter(
    (r: any) => String(r.province_id) === province
  );

  const filteredDistricts = data.districts.filter(
    (d: any) => String(d.regency_id) === regency
  );

  function handleChange(key: string, value: string) {
    const newParams = new URLSearchParams(params);

    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }

    // reset cascade
    if (key === "province") {
      newParams.delete("regency");
      newParams.delete("district");
    }

    if (key === "regency") {
      newParams.delete("district");
    }

    setParams(newParams);
  }

  function handleReset() {
    setParams({});
  }

  return (
  <div className="flex flex-col space-y-4">
  {/* PROVINSI */}
  <div>
    <label className="block text-sm mb-1">Provinsi</label>
    <select
      name="province"
      value={province}
      onChange={(e) => handleChange("province", e.target.value)}
      className="w-full border rounded-[15px] p-2"
    >
      <option value="">🗺️ Pilih Provinsi</option>
      {data.provinces.map((p: any) => (
        <option key={p.id} value={p.id}>🗺️ {p.name}</option>
      ))}
    </select>
  </div>

  {/* KABUPATEN */}
  <div>
    <label className="block text-sm mb-1">Kota / Kabupaten</label>
    <select
      name="regency"
      value={regency}
      onChange={(e) => handleChange("regency", e.target.value)}
      disabled={!province}
      className="w-full border rounded-[15px] p-2 disabled:bg-gray-100"
    >
      <option value="">🏢 Pilih Kota/Kabupaten</option>
      {filteredRegencies.map((r: any) => (
        <option key={r.id} value={r.id}>🏢 {r.name}</option>
      ))}
    </select>
  </div>

  {/* KECAMATAN */}
  <div>
    <label className="block text-sm mb-1">Kecamatan</label>
    <select
      name="district"
      value={district}
      onChange={(e) => handleChange("district", e.target.value)}
      disabled={!regency}
      className="w-full border rounded-[15px] p-2 disabled:bg-gray-100"
    >
      <option value="">📍 Pilih Kecamatan</option>
      {filteredDistricts.map((d: any) => (
        <option key={d.id} value={d.id}>📍 {d.name}</option>
      ))}
    </select>
  </div>

  {/* RESET */}
  <button
    onClick={handleReset}
    className="mt-1 w-full bg-gray-100 text-black py-2 rounded-[15px] hover:bg-gray-600 transition flex items-center justify-center space-x-2"
  >
    <span>⟲</span>
    <span>Reset</span>
  </button>
</div>
  );
}