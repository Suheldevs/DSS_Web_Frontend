import React from "react";
import { Link, useParams } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";
import { Calendar, Tag } from "lucide-react";

const formattedDate = (date) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
// blogData.js (static file)
const blogData = [
  {
    slug: "future-of-digital-signage-2025",
    title: "The Future of Digital Signage in 2025",
    description: `
      <p>Digital signage is transforming how businesses communicate with their customers. 
      From retail stores to corporate offices, digital displays are being used to deliver 
      personalized, real-time content.</p>
      <ul>
        <li><strong>AI Integration:</strong> Smarter content recommendations</li>
        <li><strong>Cloud-Based Solutions:</strong> Manage displays remotely</li>
        <li><strong>Interactive Screens:</strong> Enhanced customer engagement</li>
      </ul>
    `,
    category: "Trends",
    imageUrl: "https://picsum.photos/seed/digital1/600/400",
    updatedAt: "2025-08-15T10:00:00Z",
  },
  {
    slug: "benefits-of-digital-signage",
    title: "Top 5 Benefits of Digital Signage for Businesses",
    description: `
      <p>Adopting digital signage solutions offers several benefits that help companies 
      stand out and improve customer experience.</p>
      <ol>
        <li>Boosts customer engagement with dynamic content</li>
        <li>Reduces printing and operational costs</li>
        <li>Increases brand visibility and awareness</li>
        <li>Enables real-time promotions and updates</li>
        <li>Improves internal communication for employees</li>
      </ol>
    `,
    category: "Business",
    imageUrl: "https://picsum.photos/seed/digital2/600/400",
    updatedAt: "2025-08-18T14:20:00Z",
  },
  {
    slug: "digital-signage-industries",
    title: "Industries Using Digital Signage in 2025",
    description: `
      <p>Digital signage is no longer limited to advertising. Multiple industries 
      are leveraging it for both customer-facing and internal communication purposes:</p>
      <ul>
        <li><strong>Retail:</strong> Product promotions and in-store offers</li>
        <li><strong>Hospitality:</strong> Interactive guest information boards</li>
        <li><strong>Corporate:</strong> Employee communication dashboards</li>
        <li><strong>Healthcare:</strong> Patient queue management and awareness</li>
        <li><strong>Education:</strong> Smart campus announcements</li>
      </ul>
    `,
    category: "Industries",
    imageUrl: "https://picsum.photos/seed/digital3/600/400",
    updatedAt: "2025-08-21T09:45:00Z",
  },
  {
    slug: "choosing-digital-signage",
    title: "How to Choose the Right Digital Signage Solution",
    description: `
      <p>With so many options available, selecting the right digital signage solution 
      can be overwhelming. Here are some factors to consider:</p>
      <ul>
        <li>Define your business goals (marketing, communication, engagement)</li>
        <li>Choose cloud-based vs. on-premise solutions</li>
        <li>Check compatibility with existing hardware</li>
        <li>Evaluate content management system (CMS) features</li>
        <li>Consider scalability for future expansion</li>
      </ul>
    `,
    category: "Guides",
    imageUrl: "https://picsum.photos/seed/digital4/600/400",
    updatedAt: "2025-08-23T11:10:00Z",
  },
  {
    slug: "case-study-digital-signage",
    title: "Case Study: How Retailers Boosted Sales with Digital Signage",
    description: `
      <p>Retailers adopting digital signage have seen a measurable increase in sales 
      and customer satisfaction. Here are some results from real implementations:</p>
      <ul>
        <li>20% increase in impulse purchases through digital promotions</li>
        <li>Improved customer flow with interactive wayfinding</li>
        <li>Higher engagement with personalized content in stores</li>
      </ul>
      <p>This proves digital signage is not just a tool, but a long-term business asset.</p>
    `,
    category: "Case Studies",
    imageUrl: "https://picsum.photos/seed/digital5/600/400",
    updatedAt: "2025-08-24T08:30:00Z",
  },
];


const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogData.find((item) => item.slug === slug);
  const relatedBlogs = blogData.filter((item) => item.slug !== blog?.slug);

  if (!blog)
    return (
      <div className="text-red-600 text-xl my-24 font-semibold text-center">
        Blog Not Found!
      </div>
    );

  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrumb
        title="Blog Detail"
        items={[
          { label: "Home", link: "/" },
          { label: "Blogs", link: "/blogs" },
          { label: blog?.title, link: `/blogs/${blog?.slug}` },
        ]}
      />

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Blog Details */}
        <div className="lg:col-span-3">
          <div className="relative">
            <img
              src={`${blog.imageUrl}`} // place blog1.jpg, blog2.jpg, blog3.jpg in assets
              alt={blog.title}
              className="w-full h-[400px] object-cover shadow-md"
            />
            <div className="flex absolute gap-4 top-5 left-3 justify-between">
              <p className="text-gray-50 text-sm bg-gray-500 px-2 py-2 rounded-full">
                <Calendar className="inline-flex mr-1 h-4 w-4" />
                {formattedDate(blog.updatedAt)}
              </p>
              <div className="flex justify-center items-center bg-sky-500 px-2 py-1 rounded-full text-xs font-medium text-white">
                <Tag className="h-4 w-4 mr-1 inline-flex" />
                {blog.category}
              </div>
            </div>
          </div>

          <h1 className="lg:text-2xl mt-4 text-xl font-semibold">
            {blog.title}
          </h1>
          <div
            className="mt-4 lg:text-lg text-gray-950 blog"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />

          {/* Back to Blogs Button */}
          <Link
            to="/blogs"
            className="mt-6 inline-block bg-sky-600-btn text-white px-6 py-3 hover:bg-[#7A5F4D] transition-all duration-300"
          >
            Back to Blogs
          </Link>
        </div>

        {/* Related Blogs */}
        <div className="lg:col-span-1 border p-2 border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 messiri">Other Blogs</h2>
          <div className="space-y-4 overflow-y-auto">
            {relatedBlogs.map((relatedBlog) => (
              <Link
                to={`/blog-detail/${relatedBlog.slug}`}
                key={relatedBlog.slug}
                className="block p-4 bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={`${relatedBlog.imageUrl}`}
                  alt={relatedBlog.title}
                  className="w-full h-28 object-cover"
                />
                <p className="text-gray-500 text-sm mt-2">
                  {formattedDate(relatedBlog.updatedAt)}
                </p>
                <h3 className="text-lg font-semibold mt-1 line-clamp-1">
                  {relatedBlog.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
