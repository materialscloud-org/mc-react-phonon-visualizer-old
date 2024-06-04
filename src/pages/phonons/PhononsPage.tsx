import { useState } from "react";

import SelectPage from "./SelectPage";
import VisualizerPage from "./VisualizerPage";

import "./styles.scss";

const PhononsPage = ({
  aboutLinkHandler,
}: {
  aboutLinkHandler: CallableFunction;
}) => {
  const [currentPage, setCurrentPage] = useState("select");

  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    // TODO pass form info to visualizer
    console.log("Submitted");
    event.preventDefault();
    setCurrentPage("visualizer");
  };

  return (
    <>
      {currentPage == "select" ? (
        <SelectPage
          aboutLinkHandler={aboutLinkHandler}
          formHandler={formHandler}
        />
      ) : (
        <VisualizerPage callback={() => setCurrentPage("select")} />
      )}
    </>
  );
};

export default PhononsPage;
