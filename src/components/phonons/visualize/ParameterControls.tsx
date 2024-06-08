import { Button, Card, Col, Form, Row } from "react-bootstrap";

const ParameterControls = () => {
  return (
    <Card>
      <Card.Header>Settings</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group as={Row}>
            <Form.Label>Repetitions</Form.Label>
            <Col xs="3">
              <Form.Control
                id="cellRepetitionX"
                type="number"
                defaultValue="1"
              />
            </Col>
            <Col xs="3">
              <Form.Control
                id="cellRepetitionY"
                type="number"
                defaultValue="1"
              />
            </Col>
            <Col xs="3">
              <Form.Control
                id="cellRepetitionZ"
                type="number"
                defaultValue="1"
              />
            </Col>
            <Col>
              <Button>
                <i className="bi bi-repeat" />
              </Button>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col xs="3">
              <Form.Label>Camera</Form.Label>
            </Col>
            <Col xs="1" className="me-3">
              <Button variant="secondary">X</Button>
            </Col>
            <Col xs="1" className="me-3">
              <Button variant="secondary">Y</Button>
            </Col>
            <Col xs="1" className="me-3">
              <Button variant="secondary">Z</Button>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col xs="3">
              <Form.Label>Cell</Form.Label>
            </Col>
            <Col xs="1">
              <Form.Check label="On" defaultChecked />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label>Amplitude</Form.Label>
            <Col xs="8">
              <Form.Range min="0" max="1" step="0.01" />
            </Col>
            <Col>
              <Form.Control type="number" step="0.1" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label>Vectors</Form.Label>
            <Col xs="8">
              <Form.Range min="0" max="1" step="0.01" />
            </Col>
            <Col>
              <Form.Check label="On" defaultChecked />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label>Speed</Form.Label>
            <Col xs="8">
              <Form.Range min="0" max="1" step="0.01" />
            </Col>
            <Col>
              <Button>Pause</Button>
            </Col>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ParameterControls;
