"use client"
import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import { Layouts } from '../Component'
import { FaArrowUpRightDots } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { ShopingGif} from "../assets/index";
import Link from 'next/link';
import { MenuThemeContext } from '../globalstate/GlobalStateContext';

export default function page() {
  const { setCartItems, setSubtotal, setTotal } = useContext(MenuThemeContext);
  useEffect(() => {
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartSubtotal");
    localStorage.removeItem("cartTotal");
    setCartItems([]);
    setSubtotal(0);
    setTotal(0);
}, []);
  return (
    <Layouts>
      <div className="thanku_page">
        <div className="container">
          <div className="row">
            <div className="thanku_image">
                <Image src={ShopingGif} alt="thanku-gif" width="100" height="100" />
            </div>
            <div className="text">
                <p>Thank you for, Your order has been recevied</p>
            </div>
            <div className="all_btn">
                <ul>
                    <li>
                        <Link href="/products">Continue Shopping</Link>
                    </li>
                    <li>
                        <Link href="/">Go To Homepage</Link>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  )
}