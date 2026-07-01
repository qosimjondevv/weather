import { Sun, Cloud, CloudRain, Snowflake } from "lucide-react";

export const weatherIcons = (code) => {
  if (code === 0) return Sun;

  if (code < 51) return Cloud;

  if (code < 70 || (code >= 80 && code < 90)) {
    return CloudRain;
  }

  if (code < 90) return Snowflake;

  return Cloud;
};
