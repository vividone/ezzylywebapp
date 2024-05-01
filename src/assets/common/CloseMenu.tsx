import * as React from "react";
import { SVGProps } from "react";
const CloseMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={48} height={48} rx={8} fill="#5E8090" />
    <path
      d="M30.9897 19.6776L19.676 30.9913C19.2895 31.3778 18.6483 31.3778 18.2618 30.9913C17.8752 30.6047 17.8752 29.9636 18.2618 29.5771L29.5755 18.2634C29.9621 17.8768 30.6032 17.8768 30.9897 18.2634C31.3763 18.6499 31.3763 19.291 30.9897 19.6776Z"
      fill="#FCFDFD"
    />
    <path
      d="M30.9897 30.9905C30.6032 31.3771 29.9621 31.3771 29.5755 30.9905L18.2618 19.6768C17.8752 19.2903 17.8752 18.6492 18.2618 18.2626C18.6483 17.8761 19.2895 17.8761 19.676 18.2626L30.9897 29.5763C31.3763 29.9629 31.3763 30.604 30.9897 30.9905Z"
      fill="#FCFDFD"
    />
  </svg>
);
export default CloseMenu;
