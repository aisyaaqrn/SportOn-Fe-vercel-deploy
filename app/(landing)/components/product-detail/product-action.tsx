"use client";

import { FiArrowRight, FiChevronDown, FiChevronUp, FiShoppingBag, FiShoppingCart } from "react-icons/fi"
import Button from "../ui/button"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { Product } from "@/app/types";

type TProductActionsProps = {
  product: Product;
  stock: number;
};

const ProductActions = ({product, stock}: TProductActionsProps) => {
    const {addItem} = useCartStore();  
  const {push} = useRouter()
    const [qty, setQty] = useState(1);

    const handleAddToCart = () => {
      addItem (product, qty)
    }

    const handleCheckout = () => {
      push("/checkout");
    };

    return (
            <div className="flex items-center gap-4 w-full">
          
              {/* Qty */}
              <div className="border border-gray-500 inline-flex h-14 shrink-0">
                <div className="w-14 text-xl font-medium border-r border-gray-500 flex justify-center items-center">
                  {qty}
                </div>
                <div className="flex flex-col w-10">
                  <button
                    className="border-b border-gray-500 flex-1 flex items-center justify-center"
                    onClick={() => setQty(qty < stock ? qty + 1 : qty)}
                  >
                    <FiChevronUp />
                  </button>
                  <button
                    className="flex-1 flex items-center justify-center"
                    onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
                  >
                    <FiChevronDown />
                  </button>
                </div>
              </div>
          
              {/* Add to Cart */}
              <Button
                className="h-14 flex-1 flex items-center justify-center gap-3"
                onClick={handleAddToCart}
              >
                <FiShoppingBag size={20} />
                <span>Add to Cart</span>
              </Button>
          
              {/* Checkout */}
              <Button
                variant="dark"
                className="h-14 flex-1 flex items-center justify-center gap-3"
                onClick={() => push("/checkout")}
              >
                <span>Checkout Now</span>
                <FiArrowRight size={20} />
              </Button>
          
            </div>
          );
          
          
};

export default ProductActions;