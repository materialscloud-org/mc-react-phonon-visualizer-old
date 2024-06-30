import { memo } from "react";
import { Card } from "react-bootstrap";
import Plot from "react-plotly.js";

import { PlotMouseEvent } from "plotly.js";

import { HighSymPoint } from "../interfaces";

const PhononBandsView = ({
  distances,
  highSymPoints,
  eigenvalues,
  updateMode,
}: {
  distances: number[];
  highSymPoints: HighSymPoint[];
  eigenvalues: number[][];
  updateMode: (event: PlotMouseEvent) => void;
}) => {
  const bands = eigenvalues[0].map((_, colIndex) =>
    eigenvalues.map((row) => row[colIndex])
  );
  return (
    <Card>
      <Card.Header>Phonon band structure (select phonon)</Card.Header>
      <Card.Body>
        <Plot
          data={bands.map((band) => ({
            x: distances,
            y: band,
            mode: "lines",
            hovertemplate: "(%{x:.3f}, %{y:.3f})<extra></extra>",
          }))}
          layout={{
            showlegend: false,
            xaxis: {
              linewidth: 0,
              linecolor: "transparent",
              tickvals: highSymPoints.map(([index]) => distances[index]),
              ticktext: highSymPoints.map(([, label]) => label),
            },
            yaxis: {
              title: "Frequency (cm-1)",
              linewidth: 0,
              linecolor: "transparent",
              ticklen: 5,
              range: [
                Math.min(...eigenvalues.flat()),
                Math.max(...eigenvalues.flat()),
              ],
            },
            // vertical lines at high-symmetry points
            shapes: highSymPoints.map(([index]) => ({
              type: "line",
              yref: "paper",
              x0: distances[index],
              y0: 0,
              x1: distances[index],
              y1: 1,
              line: {
                width: 0.5,
              },
            })),
            dragmode: "zoom",
            autosize: true,
            margin: {
              l: 55,
              r: 10,
              b: 25,
              t: 40,
            },
          }}
          onClick={updateMode}
          config={{
            scrollZoom: true,
            displayModeBar: true,
            displaylogo: false,
            modeBarButtons: [["toImage", "resetScale2d"]],
          }}
          useResizeHandler={true}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Card.Body>
    </Card>
  );
};

const MemoizedPhononBandsView = memo(PhononBandsView);

export default MemoizedPhononBandsView;
