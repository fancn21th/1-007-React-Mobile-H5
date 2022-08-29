const format1 = (origin) => {
  const validLevelList = ["地市级", "省级", "区县级"];

  const a = origin["gsl_zz_info"].reduce((acc, cur) => {
    if (validLevelList.includes(cur.ADMINI_LEVEL)) {
      acc += cur.GSL_NUM;
    }
    return acc;
  }, 0);

  return {
    a,
    b: "hello",
    c: "hi",
  };
};

export { format1 };
