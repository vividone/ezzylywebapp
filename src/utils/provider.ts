import ActiveFeeAdvance from "@/assets/navigation/ActiveFeeAdvance";
import ActiveHomeIcon from "@/assets/navigation/ActiveHomeIcon";
import FeeAdvanceIcon from "@/assets/navigation/FeeAdvanceIcon";
import HomeIcon from "@/assets/navigation/HomeIcon";

export const providerRoutes = [
  {
    name: "Home",
    icon: HomeIcon,
    activeIcon: ActiveHomeIcon,
    path: "/dashboard/overview",
  },
  {
    name: "Service",
    icon: FeeAdvanceIcon,
    activeIcon: ActiveFeeAdvance,
    path: "/dashboard/service/",
  },
];
