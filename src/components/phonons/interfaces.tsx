export type LatticeVector = [number, number, number];
export type Position = [number, number, number];
export type HighSymPoint = [number, string];

export interface VisualizerProps {
  title: string;
  name: string;
  natoms: number;
  lattice: LatticeVector[];
  atom_types: string[];
  atom_numbers: number[];
  formula: string;
  qpoints: Position[];
  repetitions: number[];
  atom_pos_car: Position[];
  atom_pos_red: Position[];
  eigenvalues: number[][];
  distances: number[];
  highsym_qpts: HighSymPoint[];
  vectors: number[][][][];
}
