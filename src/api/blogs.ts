// backend ko request bhejne ke liye

export const createBlog = async (blog: any) => {
    const res = await fetch("http://localhost:3001/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
  
    if (!res.ok) {
      throw new Error("Blog create failed");
    }
  
    return res.json();
  };
  