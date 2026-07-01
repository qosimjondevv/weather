export const weatherText = (code) => {
  if (code === 0) return "Clear Sky";

  if (code < 51) return "Cloudy";

  if (code < 70 || (code >= 80 && code < 90)) {
    return "Rainy";
  }

  if (code < 90) return "Snow";

  return "Storm";
};
