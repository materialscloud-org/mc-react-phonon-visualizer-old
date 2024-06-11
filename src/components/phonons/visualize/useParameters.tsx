import { useState } from "react";

const useParameters = () => {
  const [nx, setNx] = useState(5);
  const [ny, setNy] = useState(5);
  const [nz, setNz] = useState(1);
  const [cameraDirection, setCameraDirection] = useState("z");
  const [showCell, setShowCell] = useState(true);
  const [amplitude, setAmplitude] = useState(0.65);
  const [vectorLength, setVectorLength] = useState(0.35);
  const [showVectors, setShowVectors] = useState(true);
  const [speed, setSpeed] = useState(0.25);
  const [isAnimated, setIsAnimated] = useState(true);
  const [mode, setMode] = useState("Γ");

  return {
    nx,
    setNx,
    ny,
    setNy,
    nz,
    setNz,
    cameraDirection,
    setCameraDirection,
    showCell,
    setShowCell,
    amplitude,
    setAmplitude,
    vectorLength,
    setVectorLength,
    showVectors,
    setShowVectors,
    speed,
    setSpeed,
    isAnimated,
    setIsAnimated,
    mode,
    setMode,
  };
};

export default useParameters;
