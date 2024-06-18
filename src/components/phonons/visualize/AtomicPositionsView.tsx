import { Card, Table } from "react-bootstrap";

import { Position } from "../interfaces";

const AtomicPositionsView = ({
  types,
  positions,
}: {
  types: string[];
  positions: Position[];
}) => {
  return (
    <Card>
      <Card.Header>Lattice parameters (Å)</Card.Header>
      <Card.Body>
        <Table className="text-center mb-0" striped bordered>
          <tbody>
            {types.map((type, i) => (
              <tr key={i}>
                <td>{type}</td>
                {positions[i].map((coordinate, j) => (
                  <td key={j}>{coordinate.toFixed(3)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default AtomicPositionsView;
