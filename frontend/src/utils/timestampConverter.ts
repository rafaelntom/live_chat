export const convertTimestampToTime = (mongoTimestamp: string) => {
  const date = new Date(mongoTimestamp);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};
