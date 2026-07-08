export const days = (date) => {
  const day = new Date(date).getDay();

  const weekDay = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  return weekDay[day];
};
