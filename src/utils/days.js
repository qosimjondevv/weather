export const days = (date) => {
  return new Date(date).toLocaleDateString("en", { weekday: "short" });
};
