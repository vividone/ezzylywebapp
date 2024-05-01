import * as React from "react";
import { SVGProps } from "react";
const InActiveCheckbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 18.9583H7.49996C2.97496 18.9583 1.04163 17.025 1.04163 12.5V7.5C1.04163 2.975 2.97496 1.04167 7.49996 1.04167H12.5C17.025 1.04167 18.9583 2.975 18.9583 7.5V12.5C18.9583 17.025 17.025 18.9583 12.5 18.9583ZM7.49996 2.29167C3.65829 2.29167 2.29163 3.65833 2.29163 7.5V12.5C2.29163 16.3417 3.65829 17.7083 7.49996 17.7083H12.5C16.3416 17.7083 17.7083 16.3417 17.7083 12.5V7.5C17.7083 3.65833 16.3416 2.29167 12.5 2.29167H7.49996Z"
      fill="#86A0AC"
    />
  </svg>
);
export default InActiveCheckbox;
