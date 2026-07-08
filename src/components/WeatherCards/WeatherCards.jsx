import { Card } from "@/components/ui/card";
import { weatherCards } from "@/utils/weatherCards";
import { useTranslation } from "react-i18next";

export const WeatherCards = ({ weather }) => {
  if (!weather) return null;
  const cards = weatherCards(weather);

  const { t, i18n } = useTranslation();
  return (
    <div className="grid md:grid-cols-4 gap-5">
      {cards.map(({ title, value, unit, icon: Icon }) => (
        <Card
          key={title}
          className="  dark:bg-[#1A1F2E] border-white/10 rounded-2xl p-6 "
        >
          <div className="flex gap-4 items-center">
            <p className="dark:text-[#C2C6D6]">{t(title)}</p>
            <Icon className="text-[#3B82F6] dark:text-[#ADC6FF]" />
          </div>

          <h2 className=" dark:text-[#C2C6D6]   text-4xl mt-4">
            {value} {unit}
          </h2>
        </Card>
      ))}
    </div>
  );
};
