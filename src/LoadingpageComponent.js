/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const LoadingpageComponent = ({ svgRef }) => (
  <svg width={600} height={1300} viewBox="0 0 600 1300" ref={svgRef}>
    <defs>
      <style>
        {
          ".a{clip-path:url(#b);}.b{fill:#fd3;}.c{fill:#fcf7e4;font-size:55px;font-family:Inter;font-weight:800;letter-spacing:0.029em;}.d{fill:#343434;}"
        }
      </style>
      <clipPath id="b">
        <rect width={600} height={1300} />
      </clipPath>
    </defs>
    <g id="a" className="a">
      <rect className="d" width={600} height={1300} />
      <path
        className="b"
        d="M12.1,15.505l.33.281"
        transform="translate(240 1241)"
      />
      <text className="c" transform="translate(90.563 582)">
        <tspan x={-182.979} y={53}>
          {"BUCKETLIST"}
        </tspan>
      </text>
    </g>
  </svg>
);

const ForwardRef = React.forwardRef((props, ref) => (
  <LoadingpageComponent svgRef={ref} {...props} />
));
export default ForwardRef;
