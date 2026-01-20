import { useMutation, useQueryClient } from "@tanstack/react-query";

// blogs create karne ka code

const createBlog = async (blog: any) => {
  const res = await fetch("http://localhost:3001/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });

  if (!res.ok) {
    throw new Error("Failed to create blog");
  }

  return res.json();
};


export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBlog,

    
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};
