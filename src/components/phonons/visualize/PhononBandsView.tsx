import { useContext } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

import ParametersContext from "./ParametersContext";

const PhononBandsView = () => {
  const { setMode } = useContext(ParametersContext);

  const updateMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.value);
  };

  return (
    <Card>
      <Card.Header>Phonon band structure (select phonon)</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group as={Row}>
            <Col xs="3">
              <Form.Label htmlFor="modes">Mode</Form.Label>
            </Col>
            <Col>
              {["Γ", "M", "K"].map((mode) => (
                <Form.Check
                  id={`mode-${mode}`}
                  key={mode}
                  inline
                  type="radio"
                  name="modes"
                  label={mode}
                  value={mode}
                  defaultChecked={mode === "Γ"}
                  onChange={updateMode}
                />
              ))}
            </Col>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default PhononBandsView;
