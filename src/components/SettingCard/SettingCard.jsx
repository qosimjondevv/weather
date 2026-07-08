import { Languages, SunMoon } from "lucide-react";
import { Card } from "../ui/card";
import { Switch } from "../ui/switch";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";

export const SettingCard = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const { theme, toggleTheme } = useTheme();
  return (
    <div className="my-container  ">
      <h1 className="mt-5 text-4xl">{t("setting")}</h1>

      <Card className=" mt-5 p-5   bg-white dark:bg-[#1A1F2E]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div className="bg-blue-500 dark:bg-[#8083FF]/20 p-2 rounded-xl">
              <SunMoon className="text-white dark:text-[#C0C1FF] " size={28} />
            </div>
            <h3 className="text-xl text-black dark:text-white">{t("theme")}</h3>
          </div>
          <Switch
            className=""
            checked={theme === "dark"}
            onCheckedChange={toggleTheme}
          />
        </div>
      </Card>

      <Card className=" mt-5 p-5  dark:bg-[#1A1F2E]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div className=" bg-blue-500 dark:bg-[#8083FF]/20 p-2 rounded-xl">
              <Languages className="text-white dark:text-white" size={28} />
            </div>
            <h3 className="text-xl text-black dark:text-white">
              {t("language")}
            </h3>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => changeLanguage("uz")}
              className="bg-[#3B82F6] dark:bg-[#8083FF]/20 p-3 cursor-pointer rounded-xl font-bold text-white "
            >
              Uzb
            </button>

            <button
              onClick={() => changeLanguage("ru")}
              className="bg-[#3B82F6] dark:bg-[#8083FF]/20 p-3 cursor-pointer rounded-xl font-bold text-black text-white"
            >
              Rus
            </button>

            <button
              onClick={() => changeLanguage("en")}
              className="bg-[#3B82F6] dark:bg-[#8083FF]/20 p-3 cursor-pointer rounded-xl font-bold text-black text-white"
            >
              Eng
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};
