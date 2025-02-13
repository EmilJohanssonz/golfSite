function Shop() {
  const products = [
    {
      name: "Golf Club Set",
      price: "$499.99",
      image: "/golf-clubs.jpg",
    },
    {
      name: "Golf Balls",
      price: "$19.99",
      image: "/golf-balls.jpg",
    },
    {
      name: "Golf Shoes",
      price: "$89.99",
      image: "/golf-shoes.jpg",
    },
    {
      name: "Golf Bag",
      price: "$129.99",
      image: "/golf-bag.jpg",
    },
  ];

  return (
    <>
      <h3 className="text-center font-mono font-bold text-2xl mt-4">
        Master-Shop of Golf
      </h3>
      <section className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <article
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <figcaption className="p-4">
              <h4 className="text-lg font-bold mb-2">{product.name}</h4>
              <p className="text-gray-700 mb-4">{product.price}</p>
              <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
                Add to Cart
              </button>
            </figcaption>
          </article>
        ))}
      </section>
        <h3 className="text-center font-mono">Waiting for more items...</h3>
    </>
  );
}

export default Shop;
