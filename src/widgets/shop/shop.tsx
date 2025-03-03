import { useEffect, useState } from "react";
import allProducts from "../../data/allproduct";
import Categories from "./categories";
import Products from "./products";
import Cart from "./cart";
import PaymentMethods from "./paymentMethods";

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

  // useEffect Hämta varukorgen från localStorage vid första renderingen
  useEffect(() => {
    const saveCart = localStorage.getItem("cart");
    if (saveCart) {
      setCart(JSON.parse(saveCart));
    }
  }, []);

  // spara varakorigen i local när cart har ändras
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
      (!selectedType || p.type === selectedType),
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

  return (
    <>
      <h3 className="text-center font-mono font-bold text-2xl mt-4">
        Master-Shop of Golf
      </h3>

      {!selectedCategory ? (
        <Categories
          categories={categories}
          categoryImages={categoryImages}
          setSelectedCategory={setSelectedCategory}
        />
      ) : (
        <>
          <Products
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
            productTypes={productTypes}
            filteredProducts={filteredProducts}
            addToCart={addToCart}
          />
          {cart.length > 0 && (
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
              totalPrice={totalPrice}
            />
          )}
          <PaymentMethods
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
        </>
      )}
    </>
  );
}

export default Shop;
