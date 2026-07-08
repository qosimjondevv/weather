export const weatherText = (code) => {
  if (code === 0) return "clearSky";

  if (code < 51) return "cloudy";

  if (code < 70 || (code >= 80 && code < 90)) {
    return "rainy";
  }

  if (code < 90) return "snow";

  return "storm";
};
