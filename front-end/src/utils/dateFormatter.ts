import dayjs from "dayjs";

export const dateFormatter = (value: string) => {
  const date = dayjs(value);
  const day = date.date(); // 17 (day of month)
  const month = date.month() + 1; // 6 (months are 0-indexed, so +1)
  const year = date.year();
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};


export const  getTimeIn12HourFormat =(dateTimeString: string): string =>{
  const date: Date = new Date(dateTimeString);
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();
  const ampm: string = hours >= 12 ? "PM" : "AM";
  const formattedHours: number = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes: string =
    minutes < 10 ? "0" + minutes : minutes.toString();
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}