"use client";
import React, { useEffect, useState, useContext } from 'react';
import { MenuThemeContext } from "../../../globalstate/GlobalStateContext";
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import { BlankImage } from "../../../assets/index";
import axios from 'axios';
import { LuFilter } from "react-icons/lu";
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

export default function FindCategories() {
    const { addToCart, addToWishlist } = useContext(MenuThemeContext);
    const [isLoadingCart, setisLoadingCart] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [categories, setCategories] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [isDivActive, setIsDivActive] = useState(false);
    const [isDataStatus, setIsDataStatus] = useState(false);
    const currentDate = new Date();

    const toggleDivActive = () => {
        setIsDivActive(!isDivActive);
    };

    const fetchGetHomeCatProTabs = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/get-home-cat-pro-tabs`);
            if (response.data.status === "success") {
                setIsDataStatus(true);
                setCategories(response.data.data.subcategories);
                setAllProducts(response.data.data.all_products.products);
            }
        } catch (error) {
            // Handle error appropriately
            //console.error(error.response?.data?.msg || "Network Error");
        }
    };

    useEffect(() => {
        fetchGetHomeCatProTabs();
    }, []);

    var sliderFindCategories = {
        infinite:false, 
        speed: 2000,
        slidesToShow:4, 
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        fade: false,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
    }; 
    
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

    return  (
        <div className='best_products'>
            <div className='container'>
                <div className='row'>
                    {isDataStatus && (
                        <>
                        <div className='top'>
                            <div className='heading'>
                                <h2>Find by Categories</h2>
                            </div>
                            <div className={isDivActive ? 'tab_btn active' : 'tab_btn'}>
                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-Allproducts-tab" data-bs-toggle="pill" data-bs-target="#pills-Allproducts" type="button" role="tab" aria-controls="pills-Allproducts" aria-selected="true">All products</button>
                                    </li>
                                    {categories.map(category => (
                                        <li className="nav-item" role="presentation" key={category.id}>
                                            <button className="nav-link" id={`pills-${category.slug}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${category.slug}`} type="button" role="tab" aria-controls={`pills-${category.slug}`} aria-selected="false">{category.name}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='filter_btn'>
                                <button onClick={toggleDivActive}>
                                    <LuFilter  />
                                    Filter
                                </button>
                            </div>
                            <div className='all_product'>
                                <Link href='/products'>
                                <span className="btn-text" data-hover="All Products"></span>
                                    <HiArrowNarrowRight  />
                                </Link>
                            </div>
                        </div>
                        <div className='bottom'>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-Allproducts" role="tabpanel" aria-labelledby="pills-Allproducts-tab">
                                    <div className='product_slider slider_height'>
                                        <Slider  {...sliderFindCategories}>
                                            {allProducts && allProducts?.length > 0 ? (
                                                allProducts.map(product => (
                                                    <div className='item padding' key={product.id}>
                                                        <div className='product_box'>
                                                            <div className='pro_box_po'>
                                                                <Link href={`/products/${product.slug}`} className='product_box_image'>
                                                                    <div className='images'>
                                                                        <Image src={product?.product_image || BlankImage} width="225" height="300" alt='product-image' className='productOne' />
                                                                        <Image src={product?.product_image2 || BlankImage}  width="675" height="900" alt='product-image' className='productTwo' />
                                                                    </div>
                                                                    {product.sale_price && (
                                                                        <div className='discount'>
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
                                                                    <div className="cart_btn">
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
                                                                <button>
                                                                    <FaShare  />
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
                                                                <h3>
                                                                    You have save ₹400 this product
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className='loding_box'>Loading products...</div>
                                            )}
                                        </Slider>
                                    </div>
                                </div>
                                {categories.map(category => (
                                    <div className="tab-pane fade" id={`pills-${category.slug}`} role="tabpanel" aria-labelledby={`pills-${category.slug}-tab`} key={category.id}>
                                        <div className='product_slider slider_height'>
                                            <Slider  {...sliderFindCategories}>
                                                {category?.products && category?.products?.length > 0 ? (
                                                    category.products.map(product => (
                                                        <div className='item padding' key={product.id}>
                                                            <div className='product_box'>
                                                                <div className='pro_box_po'>
                                                                    <Link href={`/products/${product.slug}`} className='product_box_image'>
                                                                        <div className='images'>
                                                                            <Image src={product?.product_image || BlankImage} width="225" height="300" alt='product-image' className='productOne' />
                                                                            <Image src={product?.product_image2 || BlankImage}  width="675" height="900" alt='product-image' className='productTwo' />
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
                                                                            <button onClick={() => handleAddToCart(product)} disabled=      {isLoadingCart || quantity <= 0}>
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
                                                                        <div className="cart_btn">
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
                                                                    <button>
                                                                        <FaShare />
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
                                                                    <h3>
                                                                        You have save ₹400 this product
                                                                    </h3>
                                                                </div>
                                                                {/* <div className='cart'>
                                                                    <button onClick={() => handleAddToCart(product)} disabled={isLoadingCart || quantity <= 0}>
                                                                        <MdOutlineShoppingBag />
                                                                    </button>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className='loding_box'>Loading products...</div>
                                                )}
                                            </Slider>
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
    )
};

