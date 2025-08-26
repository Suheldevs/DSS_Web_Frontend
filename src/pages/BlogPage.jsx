import { ArrowRight, Clock, Tag } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { useGetAllBlogsQuery } from "../api/blog.api";
import formatDate from "../utils/FormateDate";
import Loader from "../utils/Loader";
import { useEffect } from "react";

function BlogPage() {
  const backendUrl = import.meta.env.VITE_BACKEND;
  const { data: blogData, isLoading, isError } = useGetAllBlogsQuery();

  if (isLoading) {
    return <Loader/>;
  }

  if (isError) {
    return <div className="text-center text-red-500 py-10">Failed to load blogs</div>;
  }

  return (
    <>
      <Breadcrumb
        title="Our Latest Articles"
        items={[
          { label: "Home", link: "/" },
          { label: "Blog", link: "/blog" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-8 gap-6">
        {blogData?.data?.map((post) => (
          <div key={post._id}>
            <div className="bg-white flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 group rounded-md">
              {/* Image section */}
              <div className="h-52 overflow-hidden">
                <img
                  src={post?.image?.public_url || `${backendUrl}/${post?.image?.url}`}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content section */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Date and Category row */}
                <div className="flex justify-between items-center mb-3 text-xs">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                   {formatDate(post?.updatedAt)}
                  </div>
                  <div className="inline-flex items-center bg-green-600 px-2 py-1 rounded-sm text-xs font-medium text-white">
                    <Tag className="h-3 w-3 mr-1" />
                  {post?.category || "Uncategorized"}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-black mb-2 line-clamp-2 group-hover:text-green-600 group-hover:underline transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Description */}
                <div
                  className="text-gray-600 mb-4 line-clamp-2 flex-grow text-sm"
                  dangerouslySetInnerHTML={{ __html: post.description }}
                />

                {/* Read More button */}
                <div className="mt-auto">
                  <Link
                    to={`/blog-detail/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BlogPage;
