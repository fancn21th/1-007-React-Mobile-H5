import { useQuery } from "@tanstack/react-query";
import { fetchSample } from "./utils/api";
import initialData from "./utils/initialData";

const useSample = () => {
  return useQuery(["sample"], fetchSample, {
    initialData,
  });
};

export default useSample;
