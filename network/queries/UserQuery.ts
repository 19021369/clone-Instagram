import { useQuery } from "@tanstack/react-query";
import API from "@/network/API";
import { QueryKey } from "./QueryKey";


export const useUserProfile = () => useQuery([QueryKey.USERS],() => API.getAllUsers());
