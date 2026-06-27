import { Cloud, CloudRain, Snowflake, Sun } from "lucide-react";

export const weatherIcons = (code) => {
  if (code === 0) return Sun;

  if (code < 60) return Cloud;

  if (code < 80) return CloudRain;

  return Snowflake;
};
