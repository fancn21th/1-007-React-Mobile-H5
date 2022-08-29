import { format1 } from "./format";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchSample = () => {
  return new Promise((resolve, reject) => {
    delay(2000).then(() => {
      resolve(format1(result));
    });
  });
};

export { fetchSample };

const result = {
  gsl_zz_info: [
    {
      GSL_NUM: 13,
      ADMINI_LEVEL: null,
    },
    {
      GSL_NUM: 1,
      ADMINI_LEVEL: "全国",
    },
    {
      GSL_NUM: 1,
      ADMINI_LEVEL: "未知",
    },
    {
      GSL_NUM: 354,
      ADMINI_LEVEL: "地市级",
    },
    {
      GSL_NUM: 32,
      ADMINI_LEVEL: "省级",
    },
    {
      GSL_NUM: 3085,
      ADMINI_LEVEL: "区县级",
    },
  ],
  gsl_wh_ry: [
    {
      WUHAO_ORG_NUM: 0,
      EMPLOYEE_ACT_NUM: 6,
      PREPARED_NUM: 6,
      YEAR: "2078",
    },
    {
      WUHAO_ORG_NUM: 544,
      EMPLOYEE_ACT_NUM: 3893,
      PREPARED_NUM: 3338,
      YEAR: "2022",
    },
    {
      WUHAO_ORG_NUM: 979,
      EMPLOYEE_ACT_NUM: 8931,
      PREPARED_NUM: 8380,
      YEAR: "2021",
    },
    {
      WUHAO_ORG_NUM: 124,
      EMPLOYEE_ACT_NUM: 3638,
      PREPARED_NUM: 13978,
      YEAR: "2020",
    },
    {
      WUHAO_ORG_NUM: 22,
      EMPLOYEE_ACT_NUM: 8118,
      PREPARED_NUM: 9985,
      YEAR: "2019",
    },
    {
      WUHAO_ORG_NUM: 5,
      EMPLOYEE_ACT_NUM: 6025,
      PREPARED_NUM: 6426,
      YEAR: "2018",
    },
    {
      WUHAO_ORG_NUM: 2,
      EMPLOYEE_ACT_NUM: 18337,
      PREPARED_NUM: 15330,
      YEAR: "2017",
    },
    {
      WUHAO_ORG_NUM: 1,
      EMPLOYEE_ACT_NUM: 6532,
      PREPARED_NUM: 5477,
      YEAR: "2016",
    },
    {
      WUHAO_ORG_NUM: 1,
      EMPLOYEE_ACT_NUM: 7438,
      PREPARED_NUM: 6181,
      YEAR: "2015",
    },
    {
      WUHAO_ORG_NUM: 0,
      EMPLOYEE_ACT_NUM: 20193,
      PREPARED_NUM: 16825,
      YEAR: "2014",
    },
    {
      WUHAO_ORG_NUM: 1,
      EMPLOYEE_ACT_NUM: 3550,
      PREPARED_NUM: 3006,
      YEAR: "2013",
    },
    {
      WUHAO_ORG_NUM: 0,
      EMPLOYEE_ACT_NUM: 628,
      PREPARED_NUM: 614,
      YEAR: "2012",
    },
    {
      WUHAO_ORG_NUM: 0,
      EMPLOYEE_ACT_NUM: 8261,
      PREPARED_NUM: 6743,
      YEAR: "2011",
    },
    {
      WUHAO_ORG_NUM: 0,
      EMPLOYEE_ACT_NUM: 7876,
      PREPARED_NUM: 6537,
      YEAR: "2010",
    },
    {
      WUHAO_ORG_NUM: 0,
      EMPLOYEE_ACT_NUM: 6,
      PREPARED_NUM: 6,
      YEAR: "2009",
    },
    {
      WUHAO_ORG_NUM: 0,
      EMPLOYEE_ACT_NUM: 0,
      PREPARED_NUM: 3,
      YEAR: "2008",
    },
  ],
};
