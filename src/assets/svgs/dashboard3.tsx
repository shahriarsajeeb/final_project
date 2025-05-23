import * as React from "react";
const DashboardThree = (props: any) => (
  <svg
    width={46}
    height={46}
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={46} height={46} fill="url(#pattern0_0_389)" />
    <defs>
      <pattern
        id="pattern0_0_389"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_0_389" transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_0_389"
        width={64}
        height={64}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export default DashboardThree;
