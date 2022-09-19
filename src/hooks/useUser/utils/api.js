import { axiosInstance } from "../../../core/utils";
import { format1 } from "./format";

const fetchUser = (id) => {
  console.log({ id });
  return new Promise((resolve, reject) => {
    axiosInstance.get("/api/users").then((result) => {
      console.log({
        result,
      });
      resolve(format1(id, result));
    });
  });
};

export { fetchUser };
