import { regions } from "@/utils/regions";
import { useState } from "react";
import { useCountry } from "./useCountry";

export const useHome = () => {
  const [search, setSearch] = useState("");
  const [selectRegion, setSelectRegion] = useState(regions[0]);
  const region = useCountry(search);

  const chooseCity = (city) => {
    setSelectRegion({
      name: city.name,
      lat: city.latitude,
      lon: city.longitude,
    });
    setSearch("");
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
