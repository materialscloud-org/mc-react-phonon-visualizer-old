import { useCallback, useState } from "react";

import SelectPanel from "./select/SelectPanel";
import VisualizerPanel from "./visualize/VisualizerPanel";

const PhononsPanel = ({
  aboutLinkHandler,
}: {
  aboutLinkHandler: CallableFunction;
}) => {
  const [currentPanel, setCurrentPanel] = useState("select");

  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    // TODO pass form info to visualizer
    console.log("Submitted");
    event.preventDefault();
    setCurrentPanel("visualizer");
  };

  const switchToSelectPanel = useCallback(() => {
    setCurrentPanel("select");
  }, []);

  return (
    <>
      {currentPanel == "select" ? (
        <SelectPanel
          aboutLinkHandler={aboutLinkHandler}
          formHandler={formHandler}
        />
      ) : (
        <VisualizerPanel callback={switchToSelectPanel} />
      )}
    </>
  );
};

export default PhononsPanel;
