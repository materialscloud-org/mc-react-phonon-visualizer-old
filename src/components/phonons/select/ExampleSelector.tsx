import { Button, Col, Form, Row } from "react-bootstrap";

const ExampleSelector = ({
  formHandler,
}: {
  formHandler: React.FormEventHandler;
}) => {
  const options = [
    { value: "Graphene", label: "C (2D)" },
    { value: "Bi", label: "Bi (2D)" },
    { value: "BN", label: "BN (2D)" },
    { value: "PbI₂", label: "PbI₂ (2D)" },
    { value: "MoS₂", label: "MoS₂ (2D)" },
    { value: "PbTe", label: "PbTe (2D)" },
    { value: "AgNO₂", label: "AgNO₂ (2D)" },
    { value: "BaTiO₃", label: "BaTiO₃ (3D)" },
  ];
  return (
    <Form onSubmit={formHandler}>
      <Row>
        <Col>
          <Form.Label htmlFor="exampleSelector">Example</Form.Label>
        </Col>
        <Col md="8">
          <Form.Select id="exampleSelector">
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      <Button type="submit" className="mb-2">
        Calculate phonon dispersion
      </Button>
    </Form>
  );
};

export default ExampleSelector;
