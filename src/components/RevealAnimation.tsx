import { keyframes } from "@emotion/react";
import type { ReactNode } from "react";
import Reveal from "react-awesome-reveal";

const RevealAnimation = ({ children }: { children: ReactNode }) => {
    const customAnimation = keyframes`
    from {
      opacity: 0;
      transform: translateY(200px);
    }
  
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;
    return (
        <Reveal keyframes={customAnimation} triggerOnce>
            {children}
        </Reveal>
    );
};

export default RevealAnimation;
