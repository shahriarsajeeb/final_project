import * as React from "react";
const ShadowSvg = (props:any) => (
  <svg
    width={813}
    height={900}
    viewBox="0 0 813 1717"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_f_0_16721)">
      <rect
        x={-4.52222}
        y={577}
        width={356.62}
        height={444.481}
        rx={178.31}
        transform="rotate(47.4565 -4.52222 577)"
        fill="url(#paint0_linear_0_16721)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_0_16721"
        x={-908.374}
        y={0.625732}
        width={1721.35}
        height={1716.03}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={325}
          result="effect1_foregroundBlur_0_16721"
        />
      </filter>
      <linearGradient
        id="paint0_linear_0_16721"
        x1={-4.52222}
        y1={799.24}
        x2={352.097}
        y2={799.24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1A2980" />
        <stop offset={1} stopColor="#26D0CE" />
      </linearGradient>
    </defs>
  </svg>
);
export default ShadowSvg;
