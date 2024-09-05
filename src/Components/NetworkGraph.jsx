// src/NetworkGraph.js
import React, { useEffect, useRef } from "react";
import { Network } from "vis-network";

const data = {
  nodes: [
    { id: 1, label: "", color: "#00008B" },
    { id: 2, label: "", color: "#00008B" },
    { id: 3, label: "", color: "#00008B" },
    { id: 4, label: "", color: "#00008B" },
    { id: 5, label: "", color: "#00008B" },
    { id: 6, label: "", color: "#00008B" },
    { id: 7, label: "", color: "#00008B" },
    { id: 8, label: "", color: "#00008B" },
    { id: 9, label: "", color: "#00008B" },
    { id: 10, label: "", color: "#00008B" },
    { id: 11, label: "", color: "#00008B" },
    { id: 12, label: "", color: "#00008B" },
    { id: 13, label: "", color: "#00008B" },
    { id: 14, label: "", color: "#00008B" },
    { id: 15, label: "", color: "#00008B" },
    { id: 16, label: "", color: "#00008B" },
    { id: 17, label: "", color: "#00008B" },
    { id: 18, label: "", color: "#00008B" },
    { id: 19, label: "", color: "#00008B" },
    { id: 20, label: "", color: "#00008B" },
    { id: 21, label: "", color: "#00008B" },
    { id: 22, label: "", color: "#00008B" },
    { id: 23, label: "", color: "#00008B" },
    { id: 24, label: "", color: "#00008B" },
    { id: 25, label: "", color: "#00008B" },
    { id: 26, label: "", color: "#00008B" },
    { id: 27, label: "", color: "#00008B" },
    { id: 28, label: "", color: "#00008B" },
    { id: 29, label: "", color: "#00008B" },
    { id: 30, label: "", color: "#00008B" },
    // Addmore nodes herewith different colors
  ],
  edges: [
    { from: 1, to: 12 },
    { from: 1, to: 13 },
    { from: 1, to: 14 },
    { from: 1, to: 15 },
    { from: 1, to: 16 },
    { from: 1, to: 17 },
    { from: 1, to: 18 },
    { from: 1, to: 20 },
    { from: 1, to: 21 },
    { from: 1, to: 22 },
    { from: 1, to: 23 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 5, to: 6 },
    { from: 6, to: 7 },
    { from: 7, to: 8 },
    { from: 8, to: 9 },
    { from: 9, to: 10 },
    { from: 10, to: 11 },
    { from: 11, to: 12 },
    { from: 12, to: 13 },
    { from: 13, to: 14 },
    { from: 14, to: 15 },
    { from: 15, to: 16 },
    { from: 16, to: 17 },
    { from: 17, to: 18 },
    { from: 18, to: 19 },
    { from: 19, to: 20 },
    { from: 20, to: 21 },
    { from: 21, to: 22 },
    { from: 22, to: 23 },
    { from: 23, to: 1 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 6 },
    { from: 2, to: 7 },
    { from: 2, to: 8 },
    { from: 2, to: 9 },
    { from: 2, to: 10 },
    { from: 2, to: 11 },
    { from: 2, to: 12 },
    { from: 2, to: 13 },
    { from: 2, to: 14 },
    { from: 2, to: 15 },
    { from: 2, to: 16 },
    { from: 2, to: 17 },
    { from: 2, to: 18 },
    { from: 2, to: 19 },
    { from: 2, to: 20 },
    { from: 2, to: 21 },
    { from: 2, to: 22 },
    { from: 2, to: 23 },
    { from: 3, to: 1 },
    // { from: 3, to: 5 },
    { from: 3, to: 5 },
    { from: 3, to: 7 },
    { from: 3, to: 8 },
    { from: 3, to: 9 },
    { from: 3, to: 10 },
    { from: 3, to: 11 },
    { from: 3, to: 12 },
    { from: 3, to: 13 },
    { from: 3, to: 14 },
    { from: 3, to: 15 },
    { from: 3, to: 16 },
    { from: 3, to: 17 },
    { from: 3, to: 18 },
    { from: 3, to: 19 },
    { from: 3, to: 20 },
    { from: 3, to: 21 },
    { from: 3, to: 22 },
    { from: 3, to: 23 },
    { from: 24, to: 11 },
    { from: 24, to: 12 },
    { from: 24, to: 13 },
    { from: 25, to: 14 },
    { from: 24, to: 15 },
    { from: 24, to: 16 },
    { from: 26, to: 17 },
    { from: 24, to: 18 },
    { from: 24, to: 19 },
    { from: 27, to: 20 },
    { from: 24, to: 21 },
    { from: 24, to: 22 },
    { from: 28, to: 3 },
    { from: 28, to: 2 },
    { from: 29, to: 1 },
    { from: 30, to: 18 },
    { from: 30, to: 19 },
    { from: 30, to: 20 },
    { from: 24, to: 1 },
    { from: 24, to: 2 },
    { from: 24, to: 3 },
    { from: 25, to: 1 },
    { from: 24, to: 4 },
    { from: 24, to: 5 },
    { from: 26, to: 1 },
    { from: 24, to: 6 },
    { from: 24, to: 7 },
    { from: 27, to: 2 },
    { from: 24, to: 2 },
    { from: 24, to: 8 },
    { from: 28, to: 3 },
    { from: 28, to: 2 },
    { from: 29, to: 1 },
    { from: 30, to: 1 },
    { from: 30, to: 9 },
    { from: 30, to: 20 },
    // Add more edges here
  ],
};

const options = {
  nodes: {
    shape: "dot",
    size: 5,
    font: {
      size: 14,
      color: "#ffffff",
    },
    borderWidth: 1,
  },
  edges: {
    width: 1,
    color: {
      color: "rgba(0, 0, 0, 0.8)",
      highlight: "rgba(255, 255, 255, 1)",
      //   hover: 'rgba(255, 255, 255, 1)',
    },
    smooth: {
      type: "continuous",
    },
  },
  physics: {
    enabled: true,
    stabilization: {
      iterations: 2000,
    },
    barnesHut: {
      avoidOverlap: 0.1,
    },
  },
  interaction: {
    hover: true,
  },
};

const NetworkGraph = () => {
  const networkRef = useRef(null);

  useEffect(() => {
    const network = new Network(networkRef.current, data, options);
    return () => network.destroy();
  }, []);

  return (
    <div
      className=" w-full h-full "
      ref={networkRef}
      style={{ background: "#2042B6" }}
    />
  );
};

export default NetworkGraph;
