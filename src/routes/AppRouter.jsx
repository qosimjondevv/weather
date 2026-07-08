import { Home, Setting } from "@/pages";
import { Routes, Route } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="setting" element={<Setting />} />
    </Routes>
  );
};
