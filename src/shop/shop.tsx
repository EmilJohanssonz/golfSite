import { useState } from "react";
import allProducts from "./shoplist"



function Shop() {

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
          <h3 className="pl-19 text-left font-mono text-xl mt-6 font-bold">
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
                  <h4 className="text-lg font-bold text-center">{product.name}</h4>
                  <p className="text-gray-700 text-center ">{product.price}</p>
                </figcaption>
              </article>
            ))}
          </section>

          <button
            onClick={() => setSelectedCategory(null)}
            className="block mx-auto text-md mt-1 w-40 shadow-md bg-green-700 text-white font-mono p-2  rounded-lg hover:bg-emerald-500 transition-colors"
          >
            Show Categories
          </button>
        </>
      )}
    </>
  );
}

export default Shop;
