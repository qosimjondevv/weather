import { country } from "@/api/countr";
import { useEffect, useState } from "react";

export const useCountry = (search) => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search.trim().length < 2) {
      setCities([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const data = await country(search);
        setCities(data.results || []);
      } catch {
        setCities([]);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  return { cities, loading };
};
