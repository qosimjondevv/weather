import { Settings } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const SettingTopBar = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="border-b border-white/10">
        <div className=" my-container  flex justify-between items-center gap-5  h-16">
          <Link
            to="/"
            className="text-[#3B82F6] dark:text-[#ADC6FF] font-bold text-2xl"
          >
            WeatherFlow
          </Link>
          <div className="flex items-center gap-5">
            <Link to="/" className="">
              {t("home")}
            </Link>
            <h3 className="text-[#3B82F6] dark:text-[#ADC6FF] cursor-pointer">
              {t("setting")}
            </h3>
            <div className="h-5 w-px bg-white/10"></div>
            <Settings className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};
