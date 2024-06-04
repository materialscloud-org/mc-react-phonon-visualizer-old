import { Button } from "react-bootstrap";

const VisualizerPanel = ({ callback }: { callback: CallableFunction }) => {
  return (
    <>
      <Button onClick={() => callback()}>Back to file selection</Button>
    </>
  );
};

export default VisualizerPanel;
