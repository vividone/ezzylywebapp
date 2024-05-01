import * as React from "react";
import { SVGProps } from "react";
const Hamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_677_8987)">
      <path
        d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"
        fill="#356075"
      />
    </g>
    <defs>
      <clipPath id="clip0_677_8987">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default Hamburger;
