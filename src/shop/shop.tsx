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
      name: "Putter",
      category: "Clubs",
      price: "$199.99",
      image: "/golf-putter.jpg",
    },
    {
      name: "Driver",
      category: "Clubs",
      price: "$299.99",
      image: "/golf-driver.jpg",
    },
    {
      name: "Golf Balls",
      category: "Balls",
      price: "$19.99",
      image: "/golf-balls.jpg",
    },
    {
      name: "Practice Balls",
      category: "Balls",
      price: "$9.99",
      image: "/golf-practice-balls.jpg",
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

  const categories = [...new Set(allProducts.map((p) => p.category))]; // Hämtar unika kategorier
  const categoryImages: Record<string, string> = allProducts.reduce(
    (acc, product) => {
      if (!acc[product.category]) acc[product.category] = product.image;
      return acc;
    },
    {} as Record<string, string>,
  );

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = allProducts.filter(
    (p) => p.category === selectedCategory,
  );

  return (
    <>
      <h3 className="text-center font-mono font-bold text-2xl mt-4">
        Master-Shop of Golf
      </h3>

      {/* Visar kategorier om ingen kategori är vald */}
      {!selectedCategory && (
        <section className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:bg-gray-100 transition"
              onClick={() => setSelectedCategory(category)}
            >
              <img
                src={categoryImages[category]}
                alt={category}
                className="w-full h-48 object-cover"
              />
              <figcaption className="p-4 text-center">
                <h4 className="text-lg font-bold">{category}</h4>
              </figcaption>
            </article>
          ))}
        </section>
      )}

      {/* Visar produkter inom vald kategori */}
      {selectedCategory && (
        <>
          <h3 className="text-center font-mono text-xl mt-6">
            Showing: {selectedCategory}
          </h3>

          <section className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                  <h4 className="text-lg font-bold">{product.name}</h4>
                  <p className="text-gray-700">{product.price}</p>
                </figcaption>
              </article>
            ))}
          </section>

          <button
            onClick={() => setSelectedCategory(null)}
            className="block mx-auto mt-6 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
          >
            Show Categories
          </button>
        </>
      )}
    </>
  );
}

export default Shop;
