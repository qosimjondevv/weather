import { Wind, Droplets, CloudRain, SunMedium } from "lucide-react";

export const weatherCards = (weather) => [
  {
    icon: Wind,
    title: "wind",
    value: weather.current_weather.windspeed,
    unit: "km/h",
  },

  {
    icon: Droplets,
    title: "humidity",
    value: weather.hourly.relativehumidity_2m[0],
    unit: "%",
  },

  {
    icon: CloudRain,
    title: "rain",
    value: weather.hourly.precipitation[0],
    unit: "mm",
  },

  {
    icon: SunMedium,
    title: "uv",
    value: weather.hourly.uv_index[0],
    unit: "",
  },
];
