"use client"
import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Layouts } from '../Component/index'
import { FaAngleRight } from "react-icons/fa6";
import { ColursOne } from "../assets/index";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MenuThemeContext } from '../globalstate/GlobalStateContext'; 
import axios from 'axios';

export default function page() {
    const { loggedInUserData, accessToken } = useContext(MenuThemeContext);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    // Function to fetch products by category from the API
    const fetchOrders = async () => {
        if (!accessToken) return;
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
            if (response.data.status === "success") {
                setOrders(response.data.orders);
            }
        } catch (error) {
            console.error(error.response?.data?.message || "Network Error");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchOrders();
    }, []);
    
    return (
        <Layouts>

            <div className='wishlist_panel cart_panel_table my_oder_table'>
                <div className='container'>
                    <div className='row'>
                        <div className='cart_panel_top'>
                        <div>
                            <h3>My Order</h3>
                        </div>
                        </div>
                        <div className='cart_panel_bottom'>
                            {orders.length === 0 ? (
                                <div className='start_shoping'>
                                    <div className='start_shoping_icon'>
                                        <MdOutlineShoppingBag />
                                        <span>No order found.</span>
                                    </div>
                                    <div className='start_shoping_btns'>
                                        <ul>
                                        <li><Link href="/products">Start Shopping</Link></li>
                                        <li><Link href="/return-and-refund-policy">Return Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <div className='view_shoping'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='view_list'>
                                                <div className='heading_table'>
                                                    <div className='table_head icon_order'>
                                                        <ul>
                                                            <li>Order ID</li>
                                                            <li>Order Date</li>
                                                            <li>Order Status</li>
                                                            <li>Order Total</li>
                                                            <li>Action</li>
                                                        </ul>
                                                    </div>
                                                    <div className='table_body icon_order'>
                                                        {orders.map(order => (
                                                            <ul key={order.id}>
                                                                <li>
                                                                    <div className='price'>
                                                                        #{order.id}
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className='price'>
                                                                        <p>
                                                                        {new Date(order.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className='price border_none'>
                                                                        <p>
                                                                            {order.payment_status.charAt(0).toUpperCase() + order.payment_status.slice(1)}
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className='total_price'>
                                                                        <p>
                                                                            {"₹"+order.total_price}
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className='delete_button'>
                                                                        <Link href={`/order-details/${order.id}`}>
                                                                            View
                                                                        </Link>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </Layouts>
    )
}