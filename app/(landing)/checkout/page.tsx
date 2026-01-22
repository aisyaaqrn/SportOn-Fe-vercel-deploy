"use client";

import { useState } from "react";
import CartItems from "../components/checkout/cart-items";
import OrderInformation from "../components/checkout/order-information";
import { useRouter } from "next/navigation";
import { CustomerInfo, useCartStore } from "@/app/hooks/use-cart-store";

const Checkout = () => {
  const { push } = useRouter();
  const { customerInfo, setCustomerInfo } = useCartStore();
  const [formData, setFromData] = useState<CustomerInfo>({
    customerName: "",
    customerContact: "",
    customerAddress: "",
  });


  const handlePayment = () => {
    if (!formData.customerName || !formData.customerContact || !formData.customerAddress) {
        alert("Please fill in all fields");
        return;
    }
    setCustomerInfo(formData);
    push("/payment");
  };

  return (
    <main className="bg-gray-100 min-h-[80vh] pt-20">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-11">Checkout Now</h1>
        <div className="grid grid-cols-2 gap-14">
          <OrderInformation formData={formData} setFormData={setFromData} />
          <CartItems handlePayment={handlePayment} />
        </div>
      </div>
    </main>
  );
};

export default Checkout;
