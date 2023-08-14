import { useMutation, useQuery } from "@tanstack/react-query";
import API from "@/network/API";
import { QueryKey } from "./QueryKey";

export const useGetPost = () => useQuery([QueryKey.POSTS],() => API.getPost());

export const useCreatePost = () => useMutation((params) => API.createPost(params));
