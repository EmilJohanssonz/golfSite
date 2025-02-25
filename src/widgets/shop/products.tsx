import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ProductsProps } from "../../types/productProps";

const Products: React.FC<ProductsProps> = ({
  selectedCategory,
  selectedType,
  setSelectedType,
  isDropdownOpen,
  setIsDropdownOpen,
  productTypes,
  filteredProducts,
  addToCart,
  setSelectedCategory,
}) => {
  const clubOrder = [
    "Set",
    "Driver",
    "Woods",
    "Hybrid",
    "Utility",
    "Irons",
    "Wedges",
    "Putter",
  ];

  // Sort the filteredProducts array based on the clubOrder array
  const sortedProducts = filteredProducts.sort((a, b) => {
    const indexA = clubOrder.indexOf(a.type);
    const indexB = clubOrder.indexOf(b.type);
    return indexA - indexB;
  });

  return (
    <>
      <h3 className="text-left font-mono text-xl mt-6 font-bold pl-18">
        Showing: {selectedCategory}
      </h3>

      <div className="relative inline-block text-left mb-4 pl-18">
        <div className="flex space-x-4">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-48 p-2 bg-white border border-green-600 rounded-md shadow-md text-black flex justify-between items-center"
          >
            {selectedType || "Filter by Type"}
            <ChevronDownIcon
              className={`w-5 h-5 text-green-600 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <button
            onClick={() => {
              setSelectedCategory(null);
              setSelectedType(null); // Reset the filter
            }}
            className="text-md w-40 shadow-md bg-green-700 text-white font-mono p-2 rounded-lg hover:bg-emerald-500 transition-colors"
          >
            Show Categories
          </button>
        </div>
        {isDropdownOpen && (
          <ul className="absolute z-10 w-48 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
            <li
              className="px-4 py-2 cursor-pointer hover:bg-green-500 hover:text-white transition"
              onClick={() => {
                setSelectedType(null);
                setIsDropdownOpen(false);
              }}
            >
              Show All
            </li>
            {productTypes.map((type, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedType(type);
                  setIsDropdownOpen(false);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-green-500 hover:text-white transition"
              >
                {type}
              </li>
            ))}
          </ul>
        )}
      </div>

      <section className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product, index) => (
          <article
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-fit bg-[#EBEEEF] "
            />
            <figcaption className="p-4 text-center">
              <h4 className="text-lg font-semibold text-center">
                {product.name}
              </h4>
              <p className="text-gray-700 text-center">{product.price}</p>
              <button
                className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                onClick={() =>
                  addToCart({
                    name: product.name,
                    price: product.price,
                    priceValue: parseFloat(product.price.replace("$", "")),
                  })
                }
              >
                Add to Cart
              </button>
            </figcaption>
          </article>
        ))}
      </section>
    </>
  );
};

export default Products;
