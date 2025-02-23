import React from "react";
import { CategoriesProps } from "../../types/categoriesProps";



const Categories: React.FC<CategoriesProps> = ({
  categories,
  categoryImages,
  setSelectedCategory,
}) => {
  return (
    <section className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((category, index) => (
        <article
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:bg-gray-100 transition"
          onClick={() => setSelectedCategory(category)}
        >
          <img
            src={categoryImages[category]}
            alt={category}
            className="w-full h-48 object-cover"
          />
          <figcaption className="p-4 text-center">
            <h4 className="text-lg font-semibold">{category}</h4>
          </figcaption>
        </article>
      ))}
    </section>
  );
};

export default Categories;
