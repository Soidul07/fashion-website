"use client"
import React, { useState, useContext } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Layouts } from '../Component'
import { MenuThemeContext } from '../globalstate/GlobalStateContext';
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function page() {
  const { wishlistItems, addToWishlist, removeFromWishlist, addToCart } = useContext(MenuThemeContext);
  const [isLoadingCart, setIsLoadingCart] = useState({});
  const [quantity, setQuantity] = useState(1);
  const currentDate = new Date();
  console.log(wishlistItems);
  const handleAddToCart = (product) => {
    if (product && quantity > 0) {
        // Set loading state only for the specific product
        setIsLoadingCart((prevStatus) => ({
            ...prevStatus,
            [product.id]: true
        }));

        addToCart(product, quantity)
            .then(() => {
                // After successfully adding to cart, reset the loading state for that product
                setIsLoadingCart((prevStatus) => ({
                    ...prevStatus,
                    [product.id]: false
                }));
            })
            .catch(err => {
                console.error("Error adding to cart:", err);
                // In case of an error, reset the loading state for that product
                setIsLoadingCart((prevStatus) => ({
                    ...prevStatus,
                    [product.id]: false
                }));
            });
    }
  };
  return (
    <Layouts>
      <div className='wishlist_panel'>
        <div className='container'>
          <div className='row'>
            <div className='cart_panel_top'>
              <div>
                <h3>Your Wishlist</h3>
              </div>
            </div>
            <div className='cart_panel_bottom'>
              {wishlistItems.length === 0 ? (
                <div className='start_shoping'>
                  <div className='start_shoping_icon'>
                    <FaRegHeart />
                    <span>No products in the wishlist</span>
                  </div>
                  <div className='start_shoping_btns'>
                    <ul>
                      <li>
                        <Link href="/products">Start Shopping</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className='view_shoping'>
                  <div className='view_list'>
                    <ul>
                      {wishlistItems.map((item, index) => (
                        <li key={index}>
                          <div className='left'>
                            <div className='image'>
                              <Image src={item?.product?.product_image || BlankImage} width="307" height="356" alt='product-image' />
                            </div>
                            <div className='text'>
                              <div>
                                <h4>{item?.product?.title || ''}</h4>
                                <h5>{item?.product?.category?.name || ''}</h5>
                                <p>
                                  <span>
                                    {item.product.sale_price && 
                                      new Date(item.product.sale_start) <= currentDate && 
                                      currentDate <= new Date(item.product.sale_end) 
                                      ? "₹"+item.product.sale_price 
                                      : "₹"+item.product.regular_price}
                                  </span>
                                  {item.product.sale_price && 
                                    new Date(item.product.sale_start) <= currentDate && 
                                    currentDate <= new Date(item.product.sale_end) && (
                                      <span className='line_text'>
                                        {"₹"+item.product.regular_price}
                                      </span>
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className='right'>
                            {item.product.stock > 0 ? (
                                <button className='add_cart_btn' onClick={() => handleAddToCart(item.product)} disabled={isLoadingCart[item.product.id] || quantity <= 0}>
                                    {isLoadingCart[item?.product?.id] ? "Adding..." : "Add to Cart"} {/* Show loading state for only the clicked product */}
                                </button>
                            ):(
                                <button className='add_cart_btn' disabled>
                                    Out of stock
                                </button>
                            )}
                            <button onClick={() => removeFromWishlist(item?.product?.id)}>
                              <RiDeleteBin5Line />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='view_cart_btn'>
                    <ul>
                      <li>
                        <Link href="/">Return To The Homepage</Link>
                      </li>
                    </ul>
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