const API = import.meta.env.VITE_CITY_API;

export const country = async (name) => {
  const res = await fetch(`${API}/search?name=${name}&count=10`);

  return res.json();
};
