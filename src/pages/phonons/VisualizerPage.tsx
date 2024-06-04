import { Button } from "react-bootstrap";

const VisualizerPage = ({ callback }: { callback: CallableFunction }) => {
  return (
    <>
      <Button onClick={() => callback()}>Back to select page</Button>
    </>
  );
};

export default VisualizerPage;
