import * as React from "react";
import { SVGProps } from "react";
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={8}
    height={12}
    viewBox="0 0 6 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.45502 8.96004L4.71502 5.70004C5.10002 5.31504 5.10002 4.68504 4.71502 4.30004L1.45502 1.04004"
      stroke="#AEBFC8"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ArrowRight;
