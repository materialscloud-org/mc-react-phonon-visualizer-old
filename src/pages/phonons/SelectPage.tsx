import { Card, Col, Row } from "react-bootstrap";

import ExampleSelector from "../../components/ExampleSelector";
import FileSelector from "../../components/FileSelector";

const SelectPage = ({ callback }: { callback: CallableFunction }) => {
  return (
    <Row className="selectors g-4">
      <Col xxl="6">
        <Card>
          <Card.Header>Upload your files</Card.Header>
          <Card.Body>
            <FileSelector callback={callback} />
          </Card.Body>
        </Card>
      </Col>
      <Col xxl="6">
        <Card>
          <Card.Header>Pick an example</Card.Header>
          <Card.Body>
            <ExampleSelector callback={callback} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SelectPage;
