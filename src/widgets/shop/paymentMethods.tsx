import React, { useState } from "react";
import { PaymentMethodsProps } from "../../types/paymentProps";


const PaymentMethods: React.FC<PaymentMethodsProps> = ({
  paymentMethod,
  setPaymentMethod,
}) => {
  const [isReadyToPay, setIsReadyToPay] = useState(false);

  return (
    <div>
      <h5 className="text-xl font-semibold mb-2 mt-1 pl-50">Select Payment Method</h5>
      <div className="flex space-x-4 justify-center items-center">
        <button
          onClick={() => setPaymentMethod("Credit Card")}
          className={`px-4 py-2 w-1/5 bg-gray-200 rounded-lg ${
            paymentMethod === "Credit Card" ? "bg-green-500 text-white" : ""
          }`}
        >
          Credit Card
        </button>
        <button
          onClick={() => setPaymentMethod("PayPal")}
          className={`px-4 py-2 w-1/5 bg-gray-200 rounded-lg ${
            paymentMethod === "PayPal" ? "bg-green-500 text-white" : ""
          }`}
        >
          PayPal
        </button>
        <button
          onClick={() => setPaymentMethod("Bitcoin")}
          className={`px-4 py-2 w-1/5 bg-gray-200 rounded-lg ${
            paymentMethod === "Bitcoin" ? "bg-green-500 text-white" : ""
          }`}
        >
          Bitcoin
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center">
        <label className="text-lg font-semibold mr-2">Ready to pay?</label>
        <input
          type="checkbox"
          checked={isReadyToPay}
          onChange={(e) => setIsReadyToPay(e.target.checked)}
          className="w-5 h-5"
        />
      </div>

      {isReadyToPay && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => alert("Proceeding to payment...")}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentMethods;