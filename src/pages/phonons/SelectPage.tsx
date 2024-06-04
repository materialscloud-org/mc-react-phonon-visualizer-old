import { Card, Col, Row } from "react-bootstrap";

import ExampleSelector from "../../components/ExampleSelector";
import FileSelector from "../../components/FileSelector";

const SelectPage = ({
  aboutLinkHandler,
  formHandler,
}: {
  aboutLinkHandler: CallableFunction;
  formHandler: React.FormEventHandler<HTMLElement>;
}) => {
  return (
    <Row className="selectors g-4">
      <Col xxl="6">
        <Card>
          <Card.Header>Upload your files</Card.Header>
          <Card.Body>
            <FileSelector
              aboutLinkHandler={aboutLinkHandler}
              formHandler={formHandler}
            />
          </Card.Body>
        </Card>
      </Col>
      <Col xxl="6">
        <Card>
          <Card.Header>Pick an example</Card.Header>
          <Card.Body>
            <ExampleSelector formHandler={formHandler} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SelectPage;
