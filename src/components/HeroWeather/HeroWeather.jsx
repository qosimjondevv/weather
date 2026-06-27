import { Card } from "@/components/ui/card";
import { weatherIcons } from "@/utils/weatherIcons";
import { MapPin, Sun } from "lucide-react";

export const HeroWeather = ({ weather, city }) => {
  if (!weather) return null;

  const WeatherIcon = weatherIcons(weather.current_weather.weathercode);
  return (
    <Card className=" bg-[#1A1F2E] border-white/10 rounded-2xl  p-10 ">
      <div className="h-full flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 text-[#C2C6D6]">
            <MapPin size={24} />
            <span className="text-2xl">{city.name}</span>
          </div>
          <h1 className="text-6xl text-[#ADC6FF] font-bold mt-4">
            {weather.current_weather.temperature} °C
          </h1>
          <p className="text-3xl text-[#E2E2EB] mt-3">Clear Sky</p>
          <p className="text-gray-400 text-xl mt-4">
            Hi: {weather.daily.temperature_2m_max[0]}° Lo:
            {weather.daily.temperature_2m_min[0]}°
          </p>
        </div>

        <WeatherIcon size={260} className="text-[#a8c5ff]" />
      </div>
    </Card>
  );
};
