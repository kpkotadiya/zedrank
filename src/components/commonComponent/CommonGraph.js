import React from "react";
import Plot from "react-plotly.js";

export default function CommonGraph(props) {
  return (
    <Plot
      data={[
        {
          x: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          y: [
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
            props.horsePrice,
          ],
          type: "scatter",
          name: "ETH",
          mode: "lines+markers",
          marker: { color: "#f24e77" },
          hoverlabel: {
            bgcolor: "#f24e77",
            bordercolor: "#e3aab8",
          },
          line: {
            color: "#f24e77",
            width: 2.5,
          },

          fill: "tozeroy",
          fillcolor: "rgba(237, 114, 145,0.29)",
        },
      ]}
      layout={{
        width: 400,
        height: 260,
        // title: `Horse Data - ${props.horseName}`,
        yaxis: { ticksuffix: " ETH" },
      }}
      config={{
        responsive: true,
        displaylogo: false,
        modeBarButtonsToRemove: [
          "hoverCompareCartesian",
          "toggleSpikelines",
          "hoverClosestCartesian",
          "select2d",
          "resetScale2d",
          "lasso2d",
        ],
      }}
    />
  );
}
