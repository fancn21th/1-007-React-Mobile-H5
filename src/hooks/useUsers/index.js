import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./utils/api";
import initialData from "./utils/initialData";

const useUsers = () => {
  return useQuery(["users"], fetchUsers, {
    initialData,
  });
};

export default useUsers;
