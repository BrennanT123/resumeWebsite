import React from "react";
import { useRef } from "react";
import canvasStyles from "../styles/canvasStyles.module.css";
import { useCircles } from "./canvasHook";

const Canvas = ({ containerRef, mouseRef, ...props }) => {
  const canvasRef = useRef(null);

  useCircles(canvasRef, mouseRef, containerRef);

  return (
    <canvas
      className={canvasStyles.canvasSetup}
      ref={canvasRef}
      {...props}
    />
  );
};

export default Canvas;
