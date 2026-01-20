"use client";
import React, { useEffect, useState, useContext } from 'react';
import { MenuThemeContext } from "../../../globalstate/GlobalStateContext";
import Image from 'next/image';
import Link from 'next/link';
import { BlankImage } from "../../../assets/index";
import axios from 'axios';
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

export default function BestProducts() {
    const [getTrendingBestSellingProducts, setTrendingBestSellingProducts] = useState(null);
    const { addToCart, addToWishlist } = useContext(MenuThemeContext);
    const [isLoadingCart, setisLoadingCart] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const currentDate = new Date();
    const fetchTrendingBestSellingProducts = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/trending-best-selling-products`);
            if (response.data.status === "success") {
              setTrendingBestSellingProducts(response.data.data || []);
            }
        } catch (error) {
          //console.error(error.response?.data?.msg || "Network Error");
        }
    };

    useEffect(() => {
        fetchTrendingBestSellingProducts();
    }, []);

    const handleAddToCart = (product) => {
        if (product && quantity > 0) {
          setisLoadingCart(true);
    
          addToCart(product, quantity)
            .then(() => {
              setisLoadingCart(false);
            })
            .catch(err => {
              console.error("Error adding to cart:", err);
              setisLoadingCart(false);
            });
        }
    };

    const handleWishlist = (product) => {
        addToWishlist(product)
            .catch(err => console.error("Error adding to wishlist:", err));
    };

    return (
        <div className='best_products best_product_center'>
            <div className='container'>
                <div className='row'>
                    {getTrendingBestSellingProducts && getTrendingBestSellingProducts.length > 0 && (
                        <>
                        <div className='top'>
                            <div className='heading'>
                                <h2>Trending Best Selling Products</h2>
                            </div>
                            <div className='all_product'>
                                <Link href='/products'>
                                    <span className="btn-text" data-hover="All Products"></span>
                                    <HiArrowNarrowRight  />
                                </Link>
                            </div>
                        </div>
                        <div className='bottom'>
                            <div className='row'>
                                {getTrendingBestSellingProducts.map((product) => (
                                    <div className='col-xl-3 col-md-4 col-sm-6 padding' key={product.id}>
                                        <div className='product_box'>
                                            <div className='pro_box_po'>
                                                <Link href={`/products/${product.slug}`} className='product_box_image'>
                                                    <div className='images'>
                                                        <Image
                                                            src={product.product_image || BlankImage}
                                                            alt={product.title}
                                                            width={500}
                                                            height={300}
                                                            className='productOne'
                                                        />
                                                        <Image 
                                                            src={product.product_image2 || BlankImage} 
                                                            alt={product.title}
                                                            width={500}
                                                            height={300}
                                                            className='productTwo' 
                                                        />
                                                    </div>
                                                    {product.sale_price && 
                                                        new Date(product.sale_start) <= currentDate && 
                                                        currentDate <= new Date(product.sale_end) && (
                                                        <div className="discount">
                                                            <p>{product.discount_percentage}% off</p>
                                                        </div>
                                                    )}
                                                </Link>
                                                {product.stock > 0 ? (
                                                    <div className="cart_btn">
                                                        <button onClick={() => handleAddToCart(product)} disabled={isLoadingCart || quantity <= 0}>
                                                            {isLoadingCart ? 
                                                                (
                                                                    "Adding.."
                                                                ) : (
                                                                    <>
                                                                        <MdOutlineShoppingBag />
                                                                    </>
                                                                )
                                                            }
                                                        </button>
                                                    </div>
                                                ):(
                                                    <div className="cart_out_btn">
                                                        <button disabled>
                                                            Out of stock
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                            <div className='like'>
                                                <button onClick={() => handleWishlist(product)}>
                                                    <FaHeart />
                                                </button>
                                            </div>
                                            <div className='product_box_text'>
                                                <h2>{product.title}</h2>
                                                <p>
                                                    {product.sale_price && 
                                                      new Date(product.sale_start) <= currentDate && 
                                                      currentDate <= new Date(product.sale_end) 
                                                      ? "₹"+product.sale_price 
                                                      : "₹"+product.regular_price}
                                                    
                                                    {product.sale_price && 
                                                      new Date(product.sale_start) <= currentDate && 
                                                      currentDate <= new Date(product.sale_end) && (
                                                        <span>
                                                          {"₹"+product.regular_price}
                                                        </span>
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}