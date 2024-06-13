import { useContext } from "react";
import { Card } from "react-bootstrap";

import ParametersContext from "./ParametersContext";

const CellView = ({ mode }: { mode: string }) => {
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
  return (
    <Card>
      <Card.Header>Drag to rotate, scroll to zoom</Card.Header>
      <Card.Body>
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
