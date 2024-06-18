import { useCallback, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import { PlotMouseEvent } from "plotly.js";

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
    (event: PlotMouseEvent) => {
      const point = `(${event.points[0].x}, ${event.points[0].y})`;
      setMode(point);
    },
    [setMode]
  );

  if (!props.title) return <></>;

  return (
    <>
      <Button onClick={callback}>
        <i className="bi bi-arrow-left" /> Back
      </Button>
      <h1 className="text-center mb-4 mt-3">
        Phonon dispersion: {props.title}
      </h1>
      <ParametersContext.Provider value={parameters}>
        <Container fluid>
          <Row className="mb-xxl-4">
            <Col xxl="3" className="visualizer-panel">
              <ParameterControls />
            </Col>
            <Col xxl="4" className="visualizer-panel">
              <CellView mode={mode} />
            </Col>
            <Col xxl="5" className="visualizer-panel">
              <PhononBandsView
                distances={props.distances}
                highSymPoints={props.highsym_qpts}
                eigenvalues={props.eigenvalues}
                updateMode={updateMode}
              />
            </Col>
          </Row>
          <Row>
            <Col xxl="6" className="visualizer-panel">
              <LatticeParametersView lattice={props.lattice} />
            </Col>
            <Col xxl="6" className="visualizer-panel">
              <AtomicPositionsView
                types={props.atom_types}
                positions={props.atom_pos_car}
              />
            </Col>
          </Row>
        </Container>
      </ParametersContext.Provider>
    </>
  );
};

export default VisualizerPanel;
