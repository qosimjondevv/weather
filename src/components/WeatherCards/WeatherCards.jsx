import { Card } from "@/components/ui/card";
import { weatherCards } from "@/utils/weatherCards";

export const WeatherCards = () => {
  return (
    <div className="grid md:grid-cols-4 gap-5">
      {weatherCards.map(([title, value]) => (
        <Card
          key={title}
          className="  bg-[#1A1F2E] border-white/10 rounded-2xl p-6 "
        >
          <p className="text-[#C2C6D6]">{title}</p>

          <h2 className=" text-[#C2C6D6]   text-4xl mt-4">{value}</h2>
        </Card>
      ))}
    </div>
  );
};
