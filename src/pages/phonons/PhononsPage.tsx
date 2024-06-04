import { useState } from "react";

import SelectPage from "./SelectPage";
import VisualizerPage from "./VisualizerPage";

import "./styles.scss";

const PhononsPage = () => {
  const [currentPage, setCurrentPage] = useState("select");

  return (
    <>
      {currentPage === "select" ? (
        <SelectPage callback={() => setCurrentPage("visualizer")} />
      ) : (
        <VisualizerPage callback={() => setCurrentPage("select")} />
      )}
    </>
  );
};

export default PhononsPage;
