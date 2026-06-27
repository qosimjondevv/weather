import { weatherAPI } from "@/api/weather";
import { useEffect, useState } from "react";

export const useWeather = (city) => {
  const [weather, setWeather] = useState(null);

  const [loading, setLoanding] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    load();
  }, [city]);

  const load = async () => {
    try {
      if (!city?.lat || !city?.lon) return;

      setLoanding(true);
      setError("");

      const data = await weatherAPI(city.lat, city.lon);
      setWeather(data);
    } catch {
      setError("Error");
    } finally {
      setLoanding(false);
    }
  };

  return { weather, loading, error };
};
