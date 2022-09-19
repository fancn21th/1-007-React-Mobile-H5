import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "./utils/api";
import initialData from "./utils/initialData";

const useUser = (id) => {
  return useQuery(["user", id], () => fetchUser(id), {
    // enabled: !!id,
    initialData,
  });
};

export default useUser;
