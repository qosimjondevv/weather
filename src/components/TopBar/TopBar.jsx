import { Search, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { regions } from "@/utils/regions";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const TopBar = ({
  search,
  setSearch,
  region,
  chooseCity,
  setSelectRegion,
  selectRegion,
}) => {
  const handleRegion = (e) => {
    const seelectd = regions.find((i) => i.name === e.target.value);
    setSelectRegion(seelectd);
  };

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <header className="border-b border-white/10">
      <div className="my-container h-16 flex items-center justify-between gap-5">
        <div className="flex gap-10 items-center ">
          <h1 className="text-[#3B82F6] dark:text-[#ADC6FF] font-bold text-2xl">
            WeatherFlow
          </h1>

          <select
            className=" w-[260px] h-10 rounded-lg bg-white dark:bg-[#101826] px-3 border   dark:border-white/10"
            onChange={handleRegion}
            value={selectRegion.name}
          >
            {regions.map((item) => (
              <option value={item.name} key={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-6">
          <div className="flex-1 relative ">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2"
              size={18}
            />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("search")}
              className="pl-10  w-[420px] bg-white dark:bg-[#101826] dark:border-white/10 h-10 rounded-full "
            />
            {!!region.cities.length && (
              <div className="absolute top-12 w-full  z-20 cursor-pointer  shadow-xl/30 bg-white dark:bg-[#101826] rounded-2xl overflow-hidden ">
                {region.cities.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => chooseCity(item)}
                    className="px-4 py-3"
                  >
                    {item.name} , {item.country}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            className="cursor-pointer"
            onClick={() => navigate("/setting")}
          >
            <Settings size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};
