import { Button, Col, Form, Row } from "react-bootstrap";

const ExampleSelector = ({ callback }: { callback: CallableFunction }) => {
  const options = ["Silicon", "Diamond"];
  return (
    <Form>
      <Row>
        <Col>
          <Form.Label htmlFor="exampleSelector">Example</Form.Label>
        </Col>
        <Col md="8">
          <Form.Select id="exampleSelector">
            {options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      <Button type="submit" className="mb-2" onClick={() => callback()}>
        Calculate phonon dispersion
      </Button>
    </Form>
  );
};

export default ExampleSelector;
