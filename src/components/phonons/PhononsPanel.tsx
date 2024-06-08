import { useCallback, useState } from "react";

import { VisualizerProps } from "./interfaces";
import SelectPanel from "./select/SelectPanel";
import VisualizerPanel from "./visualize/VisualizerPanel";

const PhononsPanel = ({
  aboutLinkHandler,
}: {
  aboutLinkHandler: CallableFunction;
}) => {
  const [currentPanel, setCurrentPanel] = useState("select");
  const [visualizerProps, setVisualizerProps] = useState<VisualizerProps>({
    title: "",
  });

  const handleExampleForm = (form: HTMLFormElement) => {
    const example = form.querySelector("select");
    if (!example || !example.value) {
      throw new Error("Example not found");
    }
    setVisualizerProps({ title: example.value, isExample: true });
  };

  const handleFileForm = (form: HTMLFormElement) => {
    const inputFormat = form.querySelector("select")?.value;
    if (inputFormat === "Quantum ESPRESSO") {
      let scfInputFile: File;
      const scfInput = form.querySelector("#scfInput") as HTMLInputElement;
      if (scfInput?.files) {
        scfInputFile = scfInput.files[0];
      } else {
        throw new Error("SCF input file not found");
      }

      let scfOutputFile: File;
      const scfOutput = form.querySelector("#scfOutput") as HTMLInputElement;
      if (scfOutput?.files) {
        scfOutputFile = scfOutput.files[0];
      } else {
        throw new Error("SCF output file not found");
      }

      let matdynModesFile: File;
      const matdynModes = form.querySelector(
        "#matdynModes"
      ) as HTMLInputElement;
      if (matdynModes?.files) {
        matdynModesFile = matdynModes.files[0];
      } else {
        throw new Error("matdyn modes file not found");
      }

      setVisualizerProps({
        title: scfInputFile.name,
        scfInputFile: scfInputFile,
        scfOutputFile: scfOutputFile,
        matdynModesFile: matdynModesFile,
      });
    } else if (inputFormat === "PhononVis") {
      let phononVisJsonFile: File;
      const phononVisJson = form.querySelector(
        "#phononVisJson"
      ) as HTMLInputElement;
      if (phononVisJson?.files) {
        phononVisJsonFile = phononVisJson.files[0];
      } else {
        throw new Error("Phonon Visualizer JSON file not found");
      }
      setVisualizerProps({
        title: phononVisJsonFile.name,
        phononVisJsonFile: phononVisJsonFile,
      });
    } else {
      throw new Error("Invalid input format");
    }
  };

  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.id == "exampleForm") {
      handleExampleForm(form);
    } else if (form.id == "fileForm") {
      handleFileForm(form);
    } else {
      throw new Error("Invalid form ID");
    }
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
        <VisualizerPanel
          callback={switchToSelectPanel}
          props={visualizerProps}
        />
      )}
    </>
  );
};

export default PhononsPanel;
