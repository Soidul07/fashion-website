"use client"
import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Layouts } from '../../Component'
import { ColursOne } from "../../assets/index";
import FindCategories from '../../Component/Widgets/Homepage/FindCategories';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { MenuThemeContext } from '../../globalstate/GlobalStateContext'; 
export default function page() {
    const { orderid } = useParams();
    const { loggedInUserData, accessToken } = useContext(MenuThemeContext);
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    // Fetch order details from the backend
    const fetchOrderDetails = async () => {
        if (!accessToken) return;
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/${orderid}`,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    },
                }
            );
            //console.log(response.data);
            if (response.data.status === "success") {
                setOrderDetails(response.data.order);
                setLoading(false);
            }
          } catch (error) {
            console.error(error.response?.data?.message || "Network Error");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (orderid) {
            fetchOrderDetails();
        }
    }, [orderid]);

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
                            {orderDetails && (
                                <div className='order_border order_details'>
                                    <div className='order_id'>
                                        {orderDetails?.id && <p>Order ID - {orderDetails.id}</p>}
                                        {orderDetails?.txn_id && <p>Transaction ID - {orderDetails.txn_id}</p>}
                                        {orderDetails?.payu_id && <p>Payu ID - {orderDetails.payu_id}</p>}
                                        {orderDetails?.created_at && (
                                            <p>
                                                Order Date - {new Date(orderDetails.created_at).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                })}
                                            </p>
                                        )}
                                        {orderDetails?.payment_status && <p>Order Status - <b>{orderDetails.payment_status.charAt(0).toUpperCase() + orderDetails.payment_status.slice(1)}</b></p>}
                                    </div>
                                    {/* <div className='product_div'>
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
                                                    <p>Wed, 4th sep 2024</p>
                                                </div>
                                                <div className='order_subdiv'>
                                                    <h4>Your has processed your order.</h4>
                                                    <p>Thu, 4th sep 2024</p>
                                                </div>
                                                <div className='order_subdiv'>
                                                    <h4>Your item has been picked up by courier partner.</h4>
                                                    <p>Fri, 5th sep 2024</p>
                                                </div>
                                            </li>
                                            <li>
                                                <h3>Shipped <span>Fri, 6th sep 2024</span></h3>
                                                <div className='order_subdiv'>
                                                    <h4>Your order has been shipped.</h4>
                                                    <p>Fri, 6th sep 2024</p>
                                                </div>
                                                <div className='order_subdiv'>
                                                    <h4>Your item has been receved in the hub nearest to you.</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <h3>Out for delivery <span>Sun, 8th sep 2024</span></h3>
                                                <div className='order_subdiv'>
                                                    <h4>Your item is out for delivery.</h4>
                                                    <p>Sun, 8th sep 2024</p>
                                                </div>
                                            </li>
                                            <li>
                                                <h3>Delivery <span>Sun, 8th sep 2024</span></h3>
                                                <div className='order_subdiv'>
                                                    <h4>Your item has been delivery.</h4>
                                                    <p>Sun, 8th sep 2024</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            )}
                            {orderDetails?.order_items?.length > 0 && (
                                <div className='order_border margin_top'>
                                    <div className='order_name'>
                                    <p>Price Details</p>
                                    </div>
                                    <div className='shipping_details'>
                                    <ul>
                                        {orderDetails.order_items.map((item, index) => (
                                        <li key={index}>
                                            <span>{item.product.title} ({item.quantity} items)</span>
                                            <span className='span_space'>₹ {item.price}</span>
                                        </li>
                                        ))}

                                        {orderDetails?.total_price && (
                                        <li>
                                            <span>Total Amount</span>
                                            <span className='span_space'>₹ {orderDetails.total_price}</span>
                                        </li>
                                        )}
                                    </ul>
                                    </div>
                                    {orderDetails?.payment_method && orderDetails?.total_price && (
                                    <div className='upi_price'>
                                        <p>{orderDetails.payment_method}: ₹ {orderDetails.total_price}</p>
                                    </div>
                                    )}
                                </div>
                            )}

                            {(orderDetails?.name || orderDetails?.address || orderDetails?.city || orderDetails?.state || orderDetails?.country || orderDetails?.pin_code || orderDetails?.email || orderDetails?.phone_number) && (
                                <div className='order_border margin_top'>
                                    <div className='order_name'>
                                        <p>Shipping Details</p>
                                    </div>
                                    <div className='shipping_details'>
                                        {orderDetails?.name && <p>{orderDetails.name}</p>}
                                        {orderDetails?.address && <p>{orderDetails.address}</p>}
                                        {(orderDetails?.city || orderDetails?.state || orderDetails?.country || orderDetails?.pin_code) && (
                                            <p>
                                                {orderDetails?.city && `${orderDetails.city}, `}
                                                {orderDetails?.state && `${orderDetails.state} `}
                                                {orderDetails?.country && `${orderDetails.country}, `}
                                                {orderDetails?.pin_code && orderDetails.pin_code}
                                            </p>
                                        )}
                                        {orderDetails?.email && <p>Mail: {orderDetails.email}</p>}
                                        {orderDetails?.phone_number && <p>Ph no: {orderDetails.phone_number}</p>}
                                    </div>
                                </div>
                            )}

                            <div className='pro_boxes'>
                                <FindCategories />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}