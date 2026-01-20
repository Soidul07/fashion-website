"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Layouts } from '../Component'
import { ColursOne } from "../assets/index";

export default function page() {

    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    // active class
    const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsScrollingDown(true);
    } else {
        // Scrolling up
        setIsScrollingDown(false);
    }

    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    };

    useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, [lastScrollTop]);
  
    return (
        <Layouts>
            <div className='wishlist_panel'>
                <div className='container'>
                    <div className='row'>
                        <div className='cart_panel_top'>
                            <div>
                                <h3>Order Summary</h3>
                            </div>
                        </div>
                        <div className='order_details_div order_summery'>
                            <div className='order_border'>
                                <div className='order_name order_summery_edit'>
                                    <p>Deliver to:</p>
                                    <Link href="/">Changes</Link>
                                </div>
                                <div className='shipping_details'>
                                    <p>Sumit Paul <span>Home</span></p>
                                    <p>Plot No: 1</p>
                                    <p>Ganti , p.o- ganganagar, p.s- airport, kol-132</p>
                                    <p>Ph no: 9804372258</p>
                                </div>
                            </div>
                            <div className='order_border order_details margin_top'>
                                <div className='product_div'>
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <div className='image_text'>
                                                    <div className='order_image'>
                                                        <Image src={ColursOne} alt='order-image' width="100" height="100" />
                                                    </div>
                                                    <div className='order_text'>
                                                        <h3>Delivery On Sep 03</h3>
                                                        <p>POCO C65 (Matte Black, 12Gb Ram 128 Rom)</p>
                                                        <h3>Katan</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='order_border margin_top'>
                                <div className='order_name'>
                                    <p>Price Details</p>
                                </div>
                                <div className='shipping_details'>
                                    <ul>
                                        <li>
                                            <span>List Price (1 items)</span>
                                            <span>₹ 999</span>
                                        </li>
                                        <li>
                                            <span>Selling Price</span>
                                            <span>₹ 279</span>
                                        </li>
                                        <li>
                                            <span>Discount</span>
                                            <span className='green_colour'>₹ -71</span>
                                        </li>
                                        <li>
                                            <span>Delivery Charge</span>
                                            <span className='green_colour'>Free</span>
                                        </li>
                                        <li>
                                            <span>Platform Fee</span>
                                            <span>₹ 3</span>
                                        </li>
                                        <li>
                                            <span>Total Amount</span>
                                            <span>₹ 211</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='discount'>
                                    <p>You will be save ₹ 771</p>
                                </div>
                                <div className='price_cart'>
                                    <p>₹ 211 <span>999</span></p>
                                    <button>Continue</button>
                                </div>
                                <div className={`price_cart cart_hidden ${isScrollingDown ? 'active' : ''}`}>
                                    <p>₹ 211 <span>999</span></p>
                                    <button>Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}