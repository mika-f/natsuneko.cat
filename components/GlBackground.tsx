import React, { useEffect } from "react";
import createRegl from "regl";

const GlBackground: React.VFC<{}> = () => {
  useEffect(() => {
    const vertexes = [
      [-1.0, 1.0],
      [1.0, 1.0],
      [-1.0, -1.0],
      [1.0, 1.0],
      [1.0, -1.0],
      [-1.0, -1.0],
    ];
    const regl = createRegl();
    const drawShader = regl({
      vert: `
        precision mediump float;
        attribute vec2 position;

        void main() {
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `,
      frag: `
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
      `,
      attributes: {
        position: [...vertexes],
      },
      count: vertexes.length,
    });

    regl.frame(() => {
      regl.clear({ color: [0, 0, 0, 0], depth: 1 });

      drawShader();
    });

    return () => {
      regl.destroy();
    };
  }, []);

  return <></>;
};

export default GlBackground;
