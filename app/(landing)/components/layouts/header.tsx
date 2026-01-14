"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import { useRef, useState, useEffect } from "react";

const Header = () => {
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);

  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
  });

  const navRef = useRef<HTMLDivElement>(null);

  const moveUnderline = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    const parentRect = navRef.current!.getBoundingClientRect();

    setUnderlineStyle({
      left: rect.left - parentRect.left + rect.width * 0.25,
      width: rect.width * 0.5,
    });
  };

  useEffect(() => {
    // set default ke Home saat pertama load
    const firstLink = navRef.current?.querySelector("a");
    if (firstLink) moveUnderline(firstLink as HTMLElement);
  }, []);

  return (
    <header>
      <div className="flex justify-between gap-10 container mx-auto py-7">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="sporton logo"
            width={127}
            height={30}
          />
        </Link>

        {/* NAV */}
        <div className="relative">
          <nav ref={navRef} className="flex gap-44 font-medium relative">
            <Link
              href="/"
              onClick={(e) => moveUnderline(e.currentTarget)}
              className="cursor-pointer"
            >
              Home
            </Link>

            <Link
              href="/#category-section"
              onClick={(e) => moveUnderline(e.currentTarget)}
              className="cursor-pointer"
            >
              Category
            </Link>

            <Link
              href="/#products-section"
              onClick={(e) => moveUnderline(e.currentTarget)}
              className="cursor-pointer"
            >
              Explore Products
            </Link>

            {/* UNDERLINE */}
            <span
              className="absolute -bottom-2 h-[3px] bg-primary rounded-full transition-all duration-300 ease-in-out"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
              }}
            />
          </nav>
        </div>

        <div className="relative flex gap-10">
          <FiSearch size={24} />
          <button
            className="relative cursor-pointer"
            onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
          >
            <FiShoppingBag size={24} />
            <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white text-center">
              3
            </div>
          </button>
          {isCartPopupOpen && <CartPopup />}
        </div>
      </div>
    </header>
  );
};

export default Header;
