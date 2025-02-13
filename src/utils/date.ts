import dayjs from "dayjs";
import AdvancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(AdvancedFormat);

export function displayDate(date: string | Date) {
  return dayjs(date).format("Do [of] MMMM YYYY");
}

export function parsePictureDate(date: string) {
  return dayjs(date).format("YYYY-MM-DD");
}
