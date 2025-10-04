import React from "react";
import { Parallax } from "react-scroll-parallax";

export default function FloatingOnScroll({ speed = -5, translateY, children }) {
  return (
    <Parallax speed={speed} translateY={translateY}>
      {children}
    </Parallax>
  );
}
