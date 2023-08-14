import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

export default function formatDate(date: Date) {
  // const new_date = new Date(date);
  // return new_date.toLocaleDateString("en-IN");
  dayjs.extend(LocalizedFormat);
  return dayjs(date).format("MMMM D, YYYY");
}
