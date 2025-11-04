import { P5CanvasInstance } from "@p5-wrapper/react";

export default function sketch(p5: P5CanvasInstance) {

  p5.setup = () => {
    p5.createCanvas(600, 600);
    p5.background(100);
  };

  p5.draw = () => {
  };
};
