import { getHours } from "date-fns";

const currentTime = new Date();
const currentHour = getHours(currentTime);

let periodOfDay;

export const getPeriod = () => {
  if (currentHour >= 0 && currentHour < 12) {
    periodOfDay = "morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    periodOfDay = "afternoon";
  } else {
    periodOfDay = "evening";
  }

  return periodOfDay;
};
