import { useState } from "react";

function Shop() {
  const allProducts = [
    {
      name: "Golf Club Set",
      category: "Clubs",
      price: "$499.99",
      image: "/golf-clubs.jpg",
    },
    {
      name: "Golf Balls",
      category: "Balls",
      price: "$19.99",
      image: "/golf-balls.jpg",
    },
    {
      name: "Golf Shoes",
      category: "Shoes",
      price: "$89.99",
      image: "/golf-shoes.jpg",
    },
    {
      name: "Golf Bag",
      category: "Bags",
      price: "$129.99",
      image: "/golf-bag.jpg",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? allProducts.filter((p) => p.category === selectedCategory)
    : allProducts;

  return (
    <>
      <h3 className="text-center font-mono font-bold text-2xl mt-4">
        Master-Shop of Golf
      </h3>

      <section className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map((product, index) => (
          <article
            key={index}
            className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer ${
              selectedCategory === product.category
                ? "ring-4 ring-blue-400"
                : ""
            }`}
            onClick={() => setSelectedCategory(product.category)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <figcaption className="p-4 text-center">
              <h4 className="text-lg font-bold mb-2">{product.name}</h4>
              <p className="text-gray-700">{product.price}</p>
            </figcaption>
          </article>
        ))}
      </section>

      <h3 className="text-center font-mono mt-6">
        {selectedCategory
          ? `Showing: ${selectedCategory}`
          : "Click a product to filter"}
      </h3>

      {selectedCategory && (
        <section className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredProducts.map((product, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <figcaption className="p-4 text-center">
                <h4 className="text-lg font-bold mb-2">{product.name}</h4>
                <p className="text-gray-700">{product.price}</p>
              </figcaption>
            </article>
          ))}
        </section>
      )}

      {selectedCategory && (
        <button
          onClick={() => setSelectedCategory(null)}
          className="block mx-auto mt-6 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
        >
          Show All
        </button>
      )}
    </>
  );
}

export default Shop;
