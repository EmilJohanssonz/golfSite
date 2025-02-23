import React from "react";

interface CartProps {
  cart: { name: string; price: string; priceValue: number; quantity: number }[];
  updateQuantity: (productName: string, newQuantity: number) => void;
  removeFromCart: (productName: string) => void;
  totalPrice: number;
}

const Cart: React.FC<CartProps> = ({
  cart,
  updateQuantity,
  removeFromCart,
  totalPrice,
}) => {
  return (
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

      <div className="font-semibold text-lg mb-4 pl-1">
        <span>Total Price: </span>
        <span className="text-green-600">${totalPrice.toFixed(2)}</span>
        {/* TODO:Checkbox for öppna modal/ i modalen fyller man i uppgifter */}
      </div>
    </div>
  );
};

export default Cart;
