import { Days, HeroWeather, TopBar, WeatherCards } from "@/components";
import { useHome } from "@/hooks/useHome";
import { useWeather } from "@/hooks/useWeather";

export const Home = () => {
  const country = useHome();

  const { weather, loading, error } = useWeather(country.selectRegion);

  if (loading)
    return <div className="flex justify-center p-12 ">Loading..</div>;

  if (error) return <div> {error} </div>;
  return (
    <>
      <TopBar {...country} />

      <main className="my-container">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-4 py-5">
          <HeroWeather weather={weather} city={country.selectRegion} />

          <Days weather={weather} />
        </div>

        <WeatherCards weather={weather} />
      </main>
    </>
  );
};
