import React, { useState } from "react";

type Blogg = {
  title: string;
  content: string;
  img: string;
};

function Blogg() {
  const [visiblePosts, setVisiblePosts] = useState(1);

  const posts = [
    {
      title: "Welcome to the blog",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  ",
      img: "./golf-bag.jpg",
    },
    {
      title: "Second Blog Post",
      content: "This is the content of the second blog post.",
    },
    {
      title: "Third Blog Post",
      content: "This is the content of the third blog post.",
    },
    {
      title: " Blog Post",
      content: "This is the content of the third blog post.",
    },
  ];

  const showMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) =>
      Math.min(prevVisiblePosts + 1, posts.length),
    );
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-center text-emerald-400 mt-1.5">
        Blog Golfer
      </h2>
      <section className="max-w-2xl mx-auto p-4 font-mono grid grid-cols-1 gap-6  rounded-lg">
        {posts.slice(0, visiblePosts).map((post, index) => (
          <article
            key={index}
            className="mb-8 bg-white rounded-lg shadow-md p-6  border-b-2"
          >
            <h3 className="text-2xl font-bold mb-4 text-emerald-600 underline">
              {post.title}
            </h3>
            <p className="text-gray-700">{post.content}</p>
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-auto mb-4 rounded-lg pt-2"
            />
          </article>
        ))}
        <div className="flex justify-center mt-4">
          <button
            onClick={showMorePosts}
            className="bg-emerald-400 text-white p-2 rounded-lg shadow-md hover:bg-emerald-500 transition-colors"
          >
            Show More
          </button>
        </div>
      </section>
    </>
  );
}

export default Blogg;
