import { Days, HeroWeather, TopBar, WeatherCards } from "@/components";
import { useHome } from "@/hooks/useHome";
import { useWeather } from "@/hooks/useWeather";

import { Loader2 } from "lucide-react";

export const Home = () => {
  const country = useHome();
  const { weather, loading, error } = useWeather(country.selectRegion);
  return (
    <>
      <TopBar {...country} />
      <main className="my-container">
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center">
            <Loader2 className="w-10 h-10 " />
          </div>
        )}
        {error && <div className=" text-center text-red-500">{error}</div>}
        {weather && (
          <>
            <div className="grid lg:grid-cols-[2fr_1fr] gap-4 py-5">
              <HeroWeather weather={weather} city={country.selectRegion} />
              <Days weather={weather} />
            </div>

            <WeatherCards weather={weather} />
          </>
        )}
      </main>
    </>
  );
};
