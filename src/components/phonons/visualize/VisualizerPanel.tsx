import { useCallback, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

import { VisualizerProps } from "../interfaces";
import AtomicPositionsView from "./AtomicPositionsView";
import CellView from "./CellView";
import LatticeParametersView from "./LatticeParametersView";
import ParameterControls from "./ParameterControls";
import ParametersContext from "./ParametersContext";
import PhononBandsView from "./PhononBandsView";
import useParameters from "./useParameters";

import "./styles.scss";

const VisualizerPanel = ({
  callback,
  props,
}: {
  callback: () => void;
  props: VisualizerProps;
}) => {
  const parameters = useParameters();
  const [mode, setMode] = useState("Γ");

  const updateMode = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setMode(event.target.value);
    },
    [setMode]
  );

  // dummy data
  const lattice = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];
  const atoms = [
    { label: "O", position: [0, 0.5, 0] },
    { label: "H", position: [0.4, 0.6, 0] },
  ];

  return (
    <>
      <Button onClick={callback}>
        <i className="bi bi-arrow-left" /> Back
      </Button>
      <h1 className="text-center mb-4 mt-3">
        Phonon dispersion: {props.title}
      </h1>
      <ParametersContext.Provider value={parameters}>
        <Row className="mb-xxl-4">
          <Col xxl="3" className="visualizer-panel">
            <ParameterControls />
          </Col>
          <Col xxl="4" className="visualizer-panel">
            <CellView mode={mode} />
          </Col>
          <Col xxl="5" className="visualizer-panel">
            <PhononBandsView updateMode={updateMode} />
          </Col>
        </Row>
        <Row>
          <Col xxl="6" className="visualizer-panel">
            <LatticeParametersView lattice={lattice} />
          </Col>
          <Col xxl="6" className="visualizer-panel">
            <AtomicPositionsView atoms={atoms} />
          </Col>
        </Row>
      </ParametersContext.Provider>
    </>
  );
};

export default VisualizerPanel;
