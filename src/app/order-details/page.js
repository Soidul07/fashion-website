"use client"
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Layouts } from '../Component'
import { ColursOne } from "../assets/index";
import FindCategories from '../Component/Widgets/Homepage/FindCategories';

export default function page() {
  
    return (
        <Layouts>
            <div className='wishlist_panel'>
                <div className='container'>
                    <div className='row'>
                        <div className='cart_panel_top'>
                            <div>
                                <h3>Order Details</h3>
                            </div>
                        </div>
                        <div className='order_details_div'>
                            <div className='order_border order_details'>
                                <div className='order_id'>
                                    <p>Oreder ID - OD2545215414154</p>
                                </div>
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
                                <div className='order_details'>
                                    <ul>
                                        <li className='active'>
                                            <h3>Order Confirmed <span>Wed, 4th sep 2024</span></h3>
                                            <div className='order_subdiv'>
                                                <h4>Your order has been placed.</h4>
                                                <p>Wed, 4th sep 2024 - 9:26pm</p>
                                            </div>
                                            <div className='order_subdiv'>
                                                <h4>Your has processed your order.</h4>
                                                <p>Thu, 5th sep 2024 - 9:26am</p>
                                            </div>
                                            <div className='order_subdiv'>
                                                <h4>Your item has been picked up by courier partner.</h4>
                                                <p>Fri, 6th sep 2024 - 9:26am</p>
                                            </div>
                                        </li>
                                        <li>
                                            <h3>Shipped <span>Fri, 6th sep 2024</span></h3>
                                            <div className='order_subdiv'>
                                                <h4>Your order has been shipped.</h4>
                                                <p>Fri, 6th sep 2024 - 9:26pm</p>
                                            </div>
                                            <div className='order_subdiv'>
                                                <h4>Your item has been receved in the hub nearest to you.</h4>
                                            </div>
                                        </li>
                                        <li>
                                            <h3>Out for delivery <span>Sun, 8th sep 2024</span></h3>
                                            <div className='order_subdiv'>
                                                <h4>Your item is out for delivery.</h4>
                                                <p>Sun, 8th sep 2024 - 9:26pm</p>
                                            </div>
                                        </li>
                                        <li>
                                            <h3>Delivery <span>Sun, 8th sep 2024</span></h3>
                                            <div className='order_subdiv'>
                                                <h4>Your item has been delivery.</h4>
                                                <p>Sun, 8th sep 2024 - 9:26pm</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='pro_boxes'>
                                <FindCategories />
                            </div>
                            <div className='order_border margin_top'>
                                <div className='order_name'>
                                    <p>Shipping Details</p>
                                </div>
                                <div className='shipping_details'>
                                    <p>Sumit Paul</p>
                                    <p>Plot No: 1</p>
                                    <p>Ganti , p.o- ganganagar, p.s- airport, kol-132</p>
                                    <p>Ph no: 9804372258</p>
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
                                            <span>₹ -71</span>
                                        </li>
                                        <li>
                                            <span>Delivery Charge</span>
                                            <span>Free</span>
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
                                <div className='upi_price'>
                                    <p>UPI: ₹ 211</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}