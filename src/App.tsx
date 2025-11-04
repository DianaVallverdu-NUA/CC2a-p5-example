import { ReactP5Wrapper } from "@p5-wrapper/react";
import sketch from "./helpers/p5";
export default function App() {
  return <ReactP5Wrapper sketch={sketch} />;
}
