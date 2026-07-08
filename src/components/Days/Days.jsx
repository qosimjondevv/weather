import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { days } from "@/utils/days";
import { weatherIcons } from "@/utils/weatherIcons";
import { useTranslation } from "react-i18next";

export const Days = ({ weather }) => {
  if (!weather?.daily) return null;

  const maxTemp = Math.max(...weather.daily.temperature_2m_max);

  const { t, i18n } = useTranslation();
  return (
    <Card className="dark:bg-[#1A1F2E] border-white/10 rounded-2xl p-6">
      <h3 className="dark:text-white mb-8 font-bold text-xl">{t("days")}</h3>

      <div className="flex flex-col gap-5">
        {weather.daily.time.map((date, i) => {
          const WeatherIcon = weatherIcons(weather.daily.weathercode[i]);

          return (
            <div key={date} className="flex gap-6 items-center">
              <div className="w-[90px]">
                <span className="font-bold dark:text-white/60">
                  {i === 0 ? t("today") : t(days(date))}
                </span>
              </div>

              <div className="flex  justify-center">
                <WeatherIcon
                  size={20}
                  className="text-[#3B82F6] dark:text-blue-400"
                />
              </div>

              <div className="flex items-center gap-5 flex-1">
                <span className="w-[35px] text-right dark:text-white/60">
                  {weather.daily.temperature_2m_min[i]}°
                </span>

                <Progress
                  className="flex-1  "
                  value={(weather.daily.temperature_2m_max[i] / maxTemp) * 100}
                />

                <span className="w-[35px] dark:text-white/60">
                  {weather.daily.temperature_2m_max[i]}°
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
