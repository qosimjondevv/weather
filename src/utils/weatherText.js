export const weatherText = (code) => {
  if (code === 0) return "Clear Sky";

  if (code < 60) return "Cloudy";

  if (code < 80) return "Rainy";

  return "Snow";
};
