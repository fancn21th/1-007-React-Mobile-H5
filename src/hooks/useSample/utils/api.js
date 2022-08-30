import { axiosInstance } from "../../../core/utils";
import { format1 } from "./format";

const fetchSample = () => {
  return new Promise((resolve, reject) => {
    axiosInstance.get("/api/sample").then((result) => {
      console.log("result", result);
      resolve(format1(result));
    });
  });
};

export { fetchSample };
