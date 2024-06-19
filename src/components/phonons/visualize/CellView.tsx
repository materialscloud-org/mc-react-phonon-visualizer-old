import { useCallback, useContext, useState } from "react";
import { Card } from "react-bootstrap";

import ParametersContext from "./ParametersContext";

const CellView = ({ mode }: { mode: string }) => {
  const [isInteractive, setIsInteractive] = useState(false);
  const {
    nx,
    ny,
    nz,
    cameraDirection,
    showCell,
    amplitude,
    vectorLength,
    showVectors,
    speed,
    isAnimated,
  } = useContext(ParametersContext);

  const toggleOverlay = useCallback(() => {
    setIsInteractive((prevState) => !prevState);
  }, []);

  const overlay = (
    <div className="overlay-div">
      <span>
        Double-click to toggle interactions on and off <br />{" "}
        <small>(This feature is not available on iPad and iPhone)</small>
      </span>
    </div>
  );

  return (
    <Card>
      <Card.Header>Drag to rotate, scroll to zoom</Card.Header>
      <Card.Body onDoubleClick={toggleOverlay}>
        {!isInteractive && overlay}
        <p>nx: {nx}</p>
        <p>ny: {ny}</p>
        <p>nz: {nz}</p>
        <p>cameraDirection: {cameraDirection}</p>
        <p>showCell: {String(showCell)}</p>
        <p>amplitude: {amplitude}</p>
        <p>vectorLength: {vectorLength}</p>
        <p>showVectors: {String(showVectors)}</p>
        <p>speed: {speed}</p>
        <p>isAnimated: {String(isAnimated)}</p>
        <p>mode: {mode}</p>
      </Card.Body>
    </Card>
  );
};

export default CellView;
