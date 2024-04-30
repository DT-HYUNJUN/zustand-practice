import { format } from "date-fns";

const convertToMMDD = (date: Date, kor?: boolean) => {
  return kor ? `${date.getMonth() + 1}월 ${date.getDate()}일` : `${date.getMonth() + 1}-${date.getDate()}`;
};

const convertToYMD = (date: Date) => {
  return `${format(date, "yyyy-MM-dd")}`;
};

export { convertToMMDD, convertToYMD };
