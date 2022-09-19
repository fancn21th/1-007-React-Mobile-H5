const format1 = (origin) => {
  const result = origin.data.result.result;
  const resultList = Object.keys(result).map((key) => result[key]);
  return resultList;
};

export { format1 };
