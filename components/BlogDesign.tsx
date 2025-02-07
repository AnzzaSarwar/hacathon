import React from "react";
import { CiAlarmOn } from "react-icons/ci";
import { LiaCommentSolid } from "react-icons/lia";
import Image from 'next/image';

const BlogDesign = () => {
  const posts = [
    {
      id: 1,
      image: "/unsplash.png", // Replace with your actual image path
      title: "Loudest à la Madison #1 (L'intégral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      tags: ["Google", "Trending", "New"],
    },
    {
      id: 2,
      image: "/unsplash2.png", // Replace with your actual image path
      title: "Loudest à la Madison #1 (L'intégral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      tags: ["Google", "Trending", "New"],
    },
    {
      id: 3,
      image: "/unsplash3.png", // Replace with your actual image path
      title: "Loudest à la Madison #1 (L'intégral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      tags: ["Google", "Trending", "New"],
    },
  ];

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-sm font-medium text-blue-600">Practice Advice</h2>
        <h1 className="text-4xl font-bold mt-2">Featured Posts</h1>
        <p className="text-gray-500 mt-3 text-base leading-relaxed">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <div className="relative">
              {/* Use Next.js Image component for optimized image rendering */}
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover" // Adjust image size based on screen size
                width={328} // Specify width
                height={200} // Set height for small screens, adjusted for larger screens via classes
              />
              <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                NEW
              </span>
            </div>
            <div className="p-5">
              {/* Tags Section */}
              <div className="flex flex-wrap items-center space-x-2 text-xs text-gray-500 mb-3">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`font-medium ${
                      tag === "New"
                        ? "text-red-500"
                        : tag === "Trending"
                        ? "text-blue-500"
                        : ""
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-bold text-lg text-gray-800">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{post.description}</p>
              <div className="flex justify-between items-center text-gray-500 text-sm mt-4">
                {/* Date with react-icons */}
                <span className="flex items-center space-x-1">
                  <CiAlarmOn className="text-lg text-blue-500" />
                  <span>{post.date}</span>
                </span>
                {/* Comments with react-icons */}
                <span className="flex items-center space-x-1">
                  <LiaCommentSolid className="text-lg text-green-700" />
                  <span>{post.comments} comments</span>
                </span>
              </div>
              {/* Learn More Section */}
              <div className="mt-6 flex items-center">
                <a
                  href="#"
                  className="text-blue-600 text-sm font-semibold flex items-center hover:underline"
                >
                  Learn More
                  <span className="ml-1 text-xl font-bold">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogDesign;
