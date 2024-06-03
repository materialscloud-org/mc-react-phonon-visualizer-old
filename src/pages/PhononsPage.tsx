import { Route, Routes } from "react-router-dom";

import SelectPage from "./SelectPage";
import VisualizerPage from "./VisualizerPage";

const PhononsPage = () => {
  return (
    <Routes>
      <Route path="" element={<SelectPage />} />
      <Route path="visualizer" element={<VisualizerPage />} />
    </Routes>
  );
};

export default PhononsPage;
