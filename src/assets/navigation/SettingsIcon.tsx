import * as React from "react";
import { SVGProps } from "react";
const SettingsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 10.5C6.62 10.5 5.5 9.38 5.5 8C5.5 6.62 6.62 5.5 8 5.5C9.38 5.5 10.5 6.62 10.5 8C10.5 9.38 9.38 10.5 8 10.5ZM8 6.5C7.17333 6.5 6.5 7.17333 6.5 8C6.5 8.82667 7.17333 9.5 8 9.5C8.82667 9.5 9.5 8.82667 9.5 8C9.5 7.17333 8.82667 6.5 8 6.5Z"
      fill="#356075"
    />
    <path
      d="M10.1399 14.7932C9.99992 14.7932 9.85992 14.7732 9.71992 14.7399C9.30659 14.6265 8.95992 14.3665 8.73992 13.9999L8.65992 13.8665C8.26659 13.1865 7.72659 13.1865 7.33325 13.8665L7.25992 13.9932C7.03992 14.3665 6.69325 14.6332 6.27992 14.7399C5.85992 14.8532 5.42659 14.7932 5.05992 14.5732L3.91325 13.9132C3.50659 13.6799 3.21325 13.2999 3.08659 12.8399C2.96659 12.3799 3.02659 11.9065 3.25992 11.4999C3.45325 11.1599 3.50659 10.8532 3.39325 10.6599C3.27992 10.4665 2.99325 10.3532 2.59992 10.3532C1.62659 10.3532 0.833252 9.55987 0.833252 8.58653V7.4132C0.833252 6.43987 1.62659 5.64653 2.59992 5.64653C2.99325 5.64653 3.27992 5.5332 3.39325 5.33987C3.50659 5.14653 3.45992 4.83987 3.25992 4.49987C3.02659 4.0932 2.96659 3.6132 3.08659 3.15987C3.20659 2.69987 3.49992 2.31987 3.91325 2.08653L5.06659 1.42653C5.81992 0.979865 6.81325 1.23987 7.26659 2.00653L7.34659 2.13987C7.73992 2.81987 8.27992 2.81987 8.67325 2.13987L8.74659 2.0132C9.19992 1.23987 10.1933 0.979865 10.9533 1.4332L12.0999 2.0932C12.5066 2.32653 12.7999 2.70653 12.9266 3.16653C13.0466 3.62653 12.9866 4.09987 12.7533 4.50653C12.5599 4.84653 12.5066 5.1532 12.6199 5.34653C12.7333 5.53987 13.0199 5.6532 13.4133 5.6532C14.3866 5.6532 15.1799 6.44653 15.1799 7.41987V8.5932C15.1799 9.56653 14.3866 10.3599 13.4133 10.3599C13.0199 10.3599 12.7333 10.4732 12.6199 10.6665C12.5066 10.8599 12.5533 11.1665 12.7533 11.5065C12.9866 11.9132 13.0533 12.3932 12.9266 12.8465C12.8066 13.3065 12.5133 13.6865 12.0999 13.9199L10.9466 14.5799C10.6933 14.7199 10.4199 14.7932 10.1399 14.7932ZM7.99992 12.3265C8.59325 12.3265 9.14659 12.6999 9.52659 13.3599L9.59992 13.4865C9.67992 13.6265 9.81325 13.7265 9.97325 13.7665C10.1333 13.8065 10.2933 13.7865 10.4266 13.7065L11.5799 13.0399C11.7533 12.9399 11.8866 12.7732 11.9399 12.5732C11.9933 12.3732 11.9666 12.1665 11.8666 11.9932C11.4866 11.3399 11.4399 10.6665 11.7333 10.1532C12.0266 9.63986 12.6333 9.34653 13.3933 9.34653C13.8199 9.34653 14.1599 9.00653 14.1599 8.57987V7.40653C14.1599 6.98653 13.8199 6.63987 13.3933 6.63987C12.6333 6.63987 12.0266 6.34653 11.7333 5.8332C11.4399 5.31987 11.4866 4.64653 11.8666 3.9932C11.9666 3.81987 11.9933 3.6132 11.9399 3.4132C11.8866 3.2132 11.7599 3.0532 11.5866 2.94653L10.4333 2.28653C10.1466 2.1132 9.76659 2.2132 9.59325 2.50653L9.51992 2.6332C9.13992 3.2932 8.58659 3.66653 7.99325 3.66653C7.39992 3.66653 6.84659 3.2932 6.46659 2.6332L6.39325 2.49987C6.22659 2.21987 5.85325 2.11987 5.56659 2.28653L4.41325 2.9532C4.23992 3.0532 4.10659 3.21987 4.05325 3.41987C3.99992 3.61987 4.02659 3.82653 4.12659 3.99987C4.50659 4.6532 4.55325 5.32653 4.25992 5.83987C3.96659 6.3532 3.35992 6.64653 2.59992 6.64653C2.17325 6.64653 1.83325 6.98653 1.83325 7.4132V8.58653C1.83325 9.00653 2.17325 9.3532 2.59992 9.3532C3.35992 9.3532 3.96659 9.64653 4.25992 10.1599C4.55325 10.6732 4.50659 11.3465 4.12659 11.9999C4.02659 12.1732 3.99992 12.3799 4.05325 12.5799C4.10659 12.7799 4.23325 12.9399 4.40659 13.0465L5.55992 13.7065C5.69992 13.7932 5.86659 13.8132 6.01992 13.7732C6.17992 13.7332 6.31325 13.6265 6.39992 13.4865L6.47325 13.3599C6.85325 12.7065 7.40659 12.3265 7.99992 12.3265Z"
      fill="#356075"
    />
  </svg>
);
export default SettingsIcon;
