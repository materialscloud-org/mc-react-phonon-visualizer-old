import { Button } from "react-bootstrap";

const VisualizerPanel = ({ callback }: { callback: () => void }) => {
  return (
    <>
      <Button onClick={callback}>
        <i className="bi bi-arrow-left" /> Back
      </Button>
    </>
  );
};

export default VisualizerPanel;
