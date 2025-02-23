import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import allProducts from "./shoplist";

function Shop() {
  const categories = [...new Set(allProducts.map((p) => p.category))];
  const categoryImages: Record<string, string> = allProducts.reduce(
    (acc, product) => {
      if (!acc[product.category]) acc[product.category] = product.image;
      return acc;
    },
    {} as Record<string, string>,
  );

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cart, setCart] = useState<
    { name: string; price: string; priceValue: number; quantity: number }[]
  >([]);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  const productTypes = [
    ...new Set(
      allProducts
        .filter((p) => p.category === selectedCategory)
        .map((p) => p.type),
    ),
  ];

  const filteredProducts = allProducts.filter(
    (p) =>
      p.category === selectedCategory &&
      (!selectedType || p.name === selectedType),
  );

  const addToCart = (product: {
    name: string;
    price: string;
    priceValue: number;
  }) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.name === product.name,
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productName: string) => {
    setCart(cart.filter((item) => item.name !== productName));
  };

  const updateQuantity = (productName: string, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === productName ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const totalPrice = cart.reduce(
    (total, product) => total + product.priceValue * product.quantity,
    0,
  );

  const categoriesContent = (
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

  const productsContent = (
    <>
      <h3 className="text-left font-mono text-xl mt-6 font-bold pl-17.5">
        Showing: {selectedCategory}
      </h3>

      <div className="relative inline-block text-left mb-4 pl-17.5">
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
        {filteredProducts.map((product, index) => (
          <article
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
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

      {/* Kundvagn */}
      {cart.length > 0 && (
        <div className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold mb-4">Your Cart</h4>
          <ul className="list-disc pl-6 mb-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="text-sm text-gray-700 flex justify-between items-center mb-3"
              >
                <span>
                  {item.name} - {item.price}
                </span>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.name, Number(e.target.value))
                    }
                    min="1"
                    className="w-12 ml-2 p-1 border border-gray-300 rounded-md"
                  />
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="font-semibold text-lg mb-4">
            <span>Total Price: </span>
            <span className="text-green-600">${totalPrice.toFixed(2)}</span>
          </div>

          {/* Betalsätt */}
          <h5 className="text-xl font-semibold mb-2">Select Payment Method</h5>
          <div className="flex space-x-4">
            <button
              onClick={() => setPaymentMethod("Credit Card")}
              className={`px-4 py-2 w-1/3 bg-gray-200 rounded-lg ${paymentMethod === "Credit Card" ? "bg-green-500 text-white" : ""}`}
            >
              Credit Card
            </button>
            <button
              onClick={() => setPaymentMethod("PayPal")}
              className={`px-4 py-2 w-1/3 bg-gray-200 rounded-lg ${paymentMethod === "PayPal" ? "bg-green-500 text-white" : ""}`}
            >
              PayPal
            </button>
            <button
              onClick={() => setPaymentMethod("Bitcoin")}
              className={`px-4 py-2 w-1/3 bg-gray-200 rounded-lg ${paymentMethod === "Bitcoin" ? "bg-green-500 text-white" : ""}`}
            >
              Bitcoin
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => {
          setSelectedCategory(null);
          setSelectedType(null);
          setCart([]);
          setPaymentMethod(null);
        }}
        className="block mx-auto text-md mt-4 w-40 shadow-md bg-green-700 text-white font-mono p-2 rounded-lg hover:bg-emerald-500 transition-colors"
      >
        Show Categories
      </button>
    </>
  );

  return (
    <>
      <h3 className="text-center font-mono font-bold text-2xl mt-4">
        Master-Shop of Golf
      </h3>

      {!selectedCategory ? categoriesContent : productsContent}
    </>
  );
}

export default Shop;
