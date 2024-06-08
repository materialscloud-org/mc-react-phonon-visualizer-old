import { Card, Table } from "react-bootstrap";

const AtomicPositionsView = ({
  atoms,
}: {
  atoms: { label: string; position: number[] }[];
}) => {
  return (
    <Card>
      <Card.Header>Lattice parameters (Å)</Card.Header>
      <Card.Body>
        <Table className="text-center mb-0" striped bordered>
          <tbody>
            {atoms.map((atom, i) => (
              <tr key={i}>
                <td>{atom.label}</td>
                {atom.position.map((coordinate, j) => (
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
