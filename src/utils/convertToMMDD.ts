export const convertToMMDD = (date: Date, kor?: boolean) => {
  return kor ? `${date.getMonth() + 1}월 ${date.getDate()}일` : `${date.getMonth() + 1}-${date.getDate()}`;
};
