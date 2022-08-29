import { useQuery } from "@tanstack/react-query";
import { fetchSample } from "./utils/api";

const useSample = () => {
  return useQuery(["sample"], fetchSample);
};

export default useSample;
