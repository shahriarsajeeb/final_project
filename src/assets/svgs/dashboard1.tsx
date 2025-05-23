import * as React from "react";
const DashboardOne = (props: any) => (
  <svg
    width={45}
    height={45}
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={45} height={45} fill="url(#pattern0_0_379)" />
    <defs>
      <pattern
        id="pattern0_0_379"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_0_379" transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_0_379"
        width={64}
        height={64}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export default DashboardOne;
