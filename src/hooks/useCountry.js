import { country } from "@/api/countr";
import { regions } from "@/utils/regions";
import { useEffect, useState } from "react";

export const useCountry = () => {
  const [search, setSearch] = useState("");

  const [region, setRegion] = useState([]);

  const [selectRegion, setSelectRegion] = useState(regions[0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      load();
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  const load = async () => {
    if (!search.trim()) {
      setRegion([]);
      return;
    }

    const data = await country(search);

    setRegion(
      (data.results || []).map((item) => ({
        name: item.name,
        lat: item.latitude,
        lon: item.longitude,
      })),
    );
  };

  const chooseCity = (city) => {
    setSelectRegion(city);
    setSearch("");
    setRegion([]);
  };
  return {
    search,
    setSearch,
    region,
    selectRegion,
    setSelectRegion,
    chooseCity,
  };
};
