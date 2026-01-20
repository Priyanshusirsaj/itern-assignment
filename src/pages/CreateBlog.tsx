import { FaShareAlt } from "react-icons/fa";
import { useState } from "react";
import { useBlogs } from "../hooks/useBlogs";
import { useCreateBlog } from "../hooks/useCreateBlogs";

const CreateBlog = () => {
 
 
  const { data: blogs, isLoading, isError } = useBlogs();


  const { mutate, isPending } = useCreateBlog();

  
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

//  form ka state 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleCreate = () => {
    if (!title || !description || !content) {
      alert("All fields are required");
      return;
    }

    mutate({
      title,
      description,
      content,
      category: ["TECH", "FINANCE"],
      date: new Date().toISOString(),
      coverImage:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
    });

    setTitle("");
    setDescription("");
    setContent("");
  };

  return (
    <div className="px-5 md:flex md:w-[] w-full  bg-[#ddd] py-2 gap-2">


                <div className="min-h-full md:w-[40%] rounded-xl bg-gray-200 px-3 py-3 overflow-y-auto">
                  <h1 className="font-bold py-2">Latest Articles</h1>

                  {isLoading && <p>Loading blogs...</p>}
                  {isError && <p className="text-red-500">Failed to load blogs</p>}

        <div className="flex flex-col gap-4">
          {blogs?.map((blog: any) => (
                          <div
                            key={blog.id}
                            onClick={() => setSelectedBlog(blog)}
                            className="p-3 rounded-xl bg-white shadow cursor-pointer hover:border-l-4 border-purple-600"
                          >
                            <div className="flex justify-between text-sm text-gray-500">
                              <span>{blog.category?.[0]}</span>
                              <span>{new Date(blog.date).toDateString()}</span>
                            </div>

              <h2 className="font-bold">{blog.title}</h2>
              <p className="text-gray-500 text-sm">
                {blog.description}
              </p>
            </div>
          ))}
        </div>
      </div>

  
      <div className="bg-[#E5E7EB] w-full rounded-xl px-12 py-4 space-y-6">

  
  {/* create blog form code */}


        <div className="bg-white rounded-xl p-4 shadow">
          <h2 className="text-xl font-bold mb-3">Create New Blog</h2>

                      <input className="w-full border p-2 rounded mb-2"   placeholder="Blog Title"  value={title}   onChange={(e) => setTitle(e.target.value)} />

          <input
            className="w-full border p-2 rounded mb-2"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

                <textarea
                  className="w-full border p-2 rounded mb-2"
                  placeholder="Content"
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />

          <button
            onClick={handleCreate}
            disabled={isPending}
            className="bg-purple-600 text-white px-4 py-2 rounded"
          >
                            {isPending ? "Creating..." : "Create Blog"}
                        
                          </button>
                        </div>

      
        <div className="w-full rounded-xl">
          {!selectedBlog ? (
            <p className="text-center text-gray-500 mt-20">
              👈 Select a blog from sidebar
            </p>
          ) : (
            <>
                              <img
                                src={selectedBlog.coverImage}
                                className="w-full h-80 rounded-xl object-cover"
                              />

                              <div className="py-4 my-3">
                                <h1 className="font-extrabold text-4xl">
                                  {selectedBlog.title}
                                </h1>

                                <button className="px-4 my-2 bg-purple-600 py-1 mt-5 text-white rounded-xl flex items-center gap-2">
                                  <FaShareAlt /> Share Article
                                </button>
                              </div>

              <div className="bg-gray-300 rounded-xl px-3 py-2 flex justify-between">
                <p>{selectedBlog.category?.join(", ")}</p>
                <p>{new Date(selectedBlog.date).toDateString()}</p>
              </div>

              <p className="mt-4 text-gray-700 whitespace-pre-line">
                {selectedBlog.content}
              </p>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default CreateBlog;
