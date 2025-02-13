function Blogg() {
  const posts = [
    {
      title: "Welcome to the blog",
      content: "Here can all create and post yours blog.",
    },
    {
      title: "Second Blog Post",
      content: "This is the content of the second blog post.",
    },
    {
      title: "Third Blog Post",
      content: "This is the content of the third blog post.",
    },
  ];

  return (
    <>
        <h2 className="text-3xl font-bold mb-6 text-center text-emerald-400 mt-1.5">Blog Golfer</h2>
      <section className="max-w-2xl mx-auto p-4 font-mono grid grid-cols-2 gap-15">
        {posts.map((post, index) => (
          <article
            key={index}
            className="mb-8 bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
            <p className="text-gray-700">{post.content}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export default Blogg;
