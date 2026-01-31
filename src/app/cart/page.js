"use client"
import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Layouts } from '../Component';
import { BlankImage } from "../assets/index";
import { MenuThemeContext } from '../globalstate/GlobalStateContext';
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";


export default function CartPage() {
  const { cartItems, addToCart, removeFromCart, subtotal, total } = useContext(MenuThemeContext);
  const currentDate = new Date();

  // Function to handle quantity increment for each item
  const handleIncrement = (item) => {
    addToCart(item.product, 1); // Increment quantity by 1 using global context
  };

  // Function to handle quantity decrement for each item
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      addToCart(item.product, -1); // Decrement quantity by 1 using global context
    }
  };

  return (
    <Layouts>
      <div className='wishlist_panel cart_panel'>
        <div className='container'>
          <div className='row'>
            <div className='cart_panel_top'>
              <div>
                <h3>Your Cartlist</h3>
              </div>
            </div>
            <div className='cart_panel_bottom'>
              {!cartItems || cartItems.length === 0 ? (
                <div className='start_shoping'>
                  <div className='start_shoping_icon'>
                    <MdOutlineShoppingBag />
                    <span>No products in the cart</span>
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
                    <div className='col-md-8 col-12'>
                      <div className='view_list'>
                        <div className='heading_table'>
                          {/* <div className='table_head'>
                            <ul>
                              <li>Product</li>
                              <li>Price</li>
                              <li>Quantity</li>
                              <li>Total</li>
                              <li></li>
                            </ul>
                          </div> */}
                          <div className='table_body'>
                            <ul >
                            {cartItems.map((item, index) => (
                              <li key={index}>
                                <div className='left'>
                                  <div className='image'>
                                    <Image src={item?.product?.product_image || BlankImage} width="307" height="356" alt='product-image' />
                                  </div>
                                  <div className='text'>
                                    <div>
                                      <h4>{item?.product?.title || ''}</h4>
                                      <h5>{item?.product?.category?.name || ''}</h5>
                                      <div className='quantity_flex'>
                                        <p>
                                          <span>
                                              {item.product.sale_price
                                                ? "₹"+item.product.sale_price 
                                                : "₹"+item.product.regular_price}
                                            </span>
                                            {item.product.sale_price && (
                                                <span className='line_text'>
                                                  {"₹"+item.product.regular_price}
                                                </span>
                                            )}
                                        </p>
                                        <div className='quantity'>
                                          <button onClick={() => handleDecrement(item)}>-</button>
                                          <p>{item.quantity}</p>
                                          <button onClick={() => handleIncrement(item)}>+</button>
                                        </div>
                                        <h6>
                                          Total = 
                                          ₹{(
                                            (item.product.sale_price
                                              ? item.product.sale_price 
                                              : item.product.regular_price) 
                                            * item.quantity
                                          ).toFixed(2)}
                                        </h6>
                                        
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='right'>
                                  <button onClick={() => removeFromCart(item?.product?.id)}>
                                    <RiDeleteBin5Line />
                                  </button>
                                </div>
                              </li>
                            ))}
                            </ul>
                          </div>
                        </div>
                        {/* <div className='coupon_update'>
                          <div className='coupen'>
                            <input type='text' placeholder='Coupon Code' />
                            <button type='submit'>Apply Coupon</button>
                          </div>
                          <div className='update_btn'>
                            <button>
                              Update Cart
                            </button>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className='col-md-4 col-12'>
                      <div className='total_div'>
                        <p>Cart Total</p>
                        <table className='total_table'>
                          <tbody>
                            <tr>
                              <td>Sub Total</td>
                              <td>₹{subtotal.toFixed(2)}</td>
                            </tr>
                            {cartItems.some(item => item.product.sale_price && parseFloat(item.product.regular_price) > parseFloat(item.product.sale_price)) && (
                              <tr>
                                <td>You have save</td>
                                <td>
                                  ₹{cartItems.reduce((total, item) => {
                                    if (item.product.sale_price && parseFloat(item.product.regular_price) > parseFloat(item.product.sale_price)) {
                                      return total + ((parseFloat(item.product.regular_price) - parseFloat(item.product.sale_price)) * item.quantity);
                                    }
                                    return total;
                                  }, 0).toFixed(2)}
                                </td>
                              </tr>
                            )}
                            <tr>
                              <td>Total</td>
                              <td>₹{total.toFixed(2)}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className='view_cart_btn'>
                    <ul>
                      <li><Link href="/wishlist">View Wishlist</Link></li>
                      <li><Link href="/checkout">Checkout</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}
