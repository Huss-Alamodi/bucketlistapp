/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const LoginPageComponent = ({ svgRef }) => (
  <svg width={600} height={1300} viewBox="0 0 600 1300" ref={svgRef}>
    <defs>
      <style>
        {
          ".a{clip-path:url(#b);}.b{fill:#fcf7e4;font-size:55px;font-weight:800;}.b,.e,.g{font-family:Inter;letter-spacing:0.029em;}.c{fill:#fd3;}.d{fill:rgba(249,235,183,0.13);}.e{fill:#e3dfce;font-size:20px;}.f{fill:#f9ebb7;}.g,.h{fill:#343434;}.g{font-size:21px;font-weight:500;}"
        }
      </style>
      <clipPath id="b">
        <rect width={600} height={1300} />
      </clipPath>
    </defs>
    <g id="a" className="a">
      <rect className="h" width={600} height={1300} />
      <text className="b" transform="translate(-18.438 224)">
        <tspan x={136.521} y={53}>
          {"BUCKETLIST"}
        </tspan>
      </text>
      <path
        className="c"
        d="M12.1,15.505l.33.281"
        transform="translate(240 1241)"
      />
      <g transform="translate(-17 -37)">
        <rect
          className="d"
          width={493}
          height={105}
          rx={52.5}
          transform="translate(71 582)"
        />
        <text className="e" transform="translate(143 621)">
          <tspan x={0} y={19}>
            {"Username or Email"}
          </tspan>
        </text>
      </g>
      <g transform="translate(-17 98)">
        <rect
          className="d"
          width={493}
          height={105}
          rx={52.5}
          transform="translate(71 582)"
        />
        <text className="e" transform="translate(143 621)">
          <tspan x={0} y={19}>
            {"Password"}
          </tspan>
        </text>
      </g>
      <g transform="translate(-17 217.672)">
        <rect
          className="f"
          width={242.242}
          height={69.247}
          rx={34.624}
          transform="translate(196.379 594.876)"
        />
        <text className="g" transform="translate(285 616.328)">
          <tspan x={0} y={20}>
            {"Login"}
          </tspan>
        </text>
      </g>
    </g>
  </svg>
);

const ForwardRef = React.forwardRef((props, ref) => (
  <LoginPageComponent svgRef={ref} {...props} />
));
export default ForwardRef;
