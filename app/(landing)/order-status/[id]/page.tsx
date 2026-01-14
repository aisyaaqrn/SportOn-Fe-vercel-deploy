"use client";

import { useState } from "react";
import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmitted from "../../components/order-status/order-submitted";

const Orderstatus = () => {
    const [isConfirmed, setIsConfirmed] = useState(true);
    return (
        <main className="bg-gray-100 min-h-screen flex flex-col">
            <div className="max-w-5xl mx-auto pt-10 pb-6">
                <h1 className="text-5xl font-bold text-center mb-11">Order Status</h1>
            </div>
            {isConfirmed ?  <OrderSubmitted/> : <OrderConfirmed/> }
        </main>
    );
};

export default Orderstatus;