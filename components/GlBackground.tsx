import React, { useEffect, useRef } from "react";
import createRegl from "regl";

import useWindowSize from "../hooks/useWindowSize";

const GlBackground: React.VFC<{}> = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const window = useWindowSize();

  useEffect(() => {
    const vertexes = [
      [-1.0, 1.0],
      [1.0, 1.0],
      [-1.0, -1.0],
      [1.0, 1.0],
      [1.0, -1.0],
      [-1.0, -1.0],
    ];
    const regl = createRegl(canvas.current);
    const drawShader = regl({
      vert: `
        precision mediump float;
        attribute vec2 position;

        void main() {
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `,
      frag: `
        precision mediump float;
        uniform float time;
        uniform float height;
        uniform float width;

        #define COLOR_SAKURA vec4(255.0 / 255.0, 179.0 / 255.0, 217.0 / 255.0, 1.0)
        #define COLOR_AJISAI vec4(179.0 / 255.0, 202.0 / 255.0, 255.0 / 255.0, 1.0)
        #define COLOR_YELLOW vec4(255.0 / 255.0, 232.0 / 255.0, 179.0 / 255.0, 1.0)
        #define COLOR_WHITE  vec4(255.0 / 255.0, 255.0 / 255.0, 255.0 / 255.0, 1.0)

        #define LAYERS 5
        #define SPEED  0.25
        #define ZOOM   1.25

        float random(vec2 seed) {
          return fract(sin(dot(seed.xy, vec2(12.9898, 78.233))) * 43758.5453);
        }

        vec2 random2(vec2 seed) {
          vec2 r = vec2(dot(seed, vec2(12.9898, 78.233)), dot(seed, vec2(4.898, 78.233)));
          return fract(sin(r) * 43758.5453);
        }

        float drawCircle(vec2 point, float radius) {
          return length(point) - radius;
        }

        float drawLineOnly(float d, float width) {
          return abs(d) < width ? 1.0 : 0.0;
        }

        vec4 drawColor(float d, vec4 color) {
          return d > 0.0 ? color : vec4(1.0);
        }

        // ref: https://www.iquilezles.org/www/articles/voronoilines/voronoilines.htm
        vec3 voronoi(in vec2 x, out vec2 id) {
          vec2 p = floor(x);
          vec2 f = fract(x);
          float res = 8.0;
          vec2 mr;
          vec2 mb;

          for (int j = -1; j <= 1; j++) {
            for (int i = -1; i <= 1; i++) {
              vec2 b = vec2(float(i), float(j));
              vec2 r = vec2(b) + random2(p + b) - f;
              float d = dot(r, r);

              if (d < res) {
                res = d;
                mr = r;
                mb = b;
              }
            }
          }

          res = 8.0;

          for (int j = -2; j <= 2; j++) {
            for (int i = -2; i <= 2; i++) {
              vec2 b = mb + vec2(float(i), float(j));
              vec2 r = vec2(b) + random2(p + b) - f;
              float d = dot(0.5 * (mr + r), normalize(r - mr));

              res = min(res, d);
            }
          }

          id = p + mb;

          return vec3(res, mr);
        }

        void mainImage(out vec4 color, in vec2 fragCoord) {
          vec2 resolution = vec2(width, height);
          vec2 originalCoord = (fragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

          color = COLOR_WHITE;

          for (int i = 1; i < LAYERS + 1; i++) {
            vec2 coord = originalCoord;
            coord.x += SPEED * float(i);
            coord.y += time * SPEED * float(i);

            vec2 id;
            vec3 a = voronoi(coord / ZOOM, id);

            float s = mix(0.025, 0.075, sin(id.x - id.y) * 0.5 + 0.5);
            float c = floor(mix(0.025, 0.1, cos(id.x - id.y) * 0.5 + 0.5) / 0.025);
            float t = floor(mix(0.025, 0.075, sin(id.x - id.y) * cos(id.x - id.y) * 0.5 + 0.5) / 0.025);

            float u = floor(id.x);
            float v = drawCircle(a.yz, s);
            float w = 1.0 - smoothstep(0.0, 0.05, v);
            float r = t == 2.0 ? drawLineOnly(v, 0.005) : w;

            color *= drawColor(r, c == 1.0 ? COLOR_SAKURA : (c == 2.0 ? COLOR_YELLOW : COLOR_AJISAI));
          }
        }

        void main() {
          vec4 color;

          mainImage(color, gl_FragCoord.xy);
          gl_FragColor = color;
        }
      `,
      attributes: {
        position: [...vertexes],
      },
      uniforms: {
        time: regl.context("time"),
        height: regl.context("viewportHeight"),
        width: regl.context("viewportWidth"),
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

  return (
    <div className="relative">
      <canvas
        height={window.resHeight}
        width={window.resWidth}
        className="absolute h-screen h-[100dvh] w-screen"
        ref={canvas}
      />
    </div>
  );
};

export default GlBackground;
