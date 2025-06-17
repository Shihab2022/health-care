import dayjs from "dayjs";

export const dateFormatter = (value: string) => {
  const date = dayjs(value);
  const day = date.date(); // 17 (day of month)
  const month = date.month() + 1; // 6 (months are 0-indexed, so +1)
  const year = date.year();
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};
