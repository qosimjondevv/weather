const API = import.meta.env.VITE_WEATHER_API;

export const weatherAPI = async (lat, lon) => {
  const res = await fetch(
    `${API}/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relativehumidity_2m,precipitation,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,sunrise,sunset&timezone=auto`,
  );

  return res.json();
};



