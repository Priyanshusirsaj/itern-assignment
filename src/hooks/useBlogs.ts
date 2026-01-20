import { useQuery } from "@tanstack/react-query";

const fetchBlogs = async () => {
  const res = await fetch("http://localhost:3001/blogs");
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
};

export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });
};
