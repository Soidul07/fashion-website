"use client"
import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { BlankImage } from "../../../assets/index";
import Slider from "react-slick";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { MenuThemeContext } from "../../../globalstate/GlobalStateContext";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaShare } from "react-icons/fa";

export default function SalesProduct({getSaleData}) {
    const { addToCart, addToWishlist } = useContext(MenuThemeContext);
    const [isLoadingCart, setIsLoadingCart] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const currentDate = new Date();

    var sliderarticles= {
        infinite:true, 
        speed: 4000,
        slidesToShow:3, 
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        fade: false,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
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

    // Function to calculate time remaining for the sale
    const calculateTimeRemaining = (saleStartDate, saleEndDate) => {
        const now = new Date();
        const start = new Date(saleStartDate);
        const end = new Date(saleEndDate);
    
        let daysRemaining = 0;
        let hoursRemaining = 0;
        let minutesRemaining = 0;
        let secondsRemaining = 0;
    
        if (now < start) {
            // Countdown to sale start
            const difference = start - now;
            daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));
            hoursRemaining = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutesRemaining = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            secondsRemaining = Math.floor((difference % (1000 * 60)) / 1000);
        } else if (now >= start && now <= end) {
            // Countdown to sale end
            const difference = end - now;
            daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));
            hoursRemaining = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutesRemaining = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            secondsRemaining = Math.floor((difference % (1000 * 60)) / 1000);
        } else {
            // Sale has ended or hasn't started
            daysRemaining = 0;
            hoursRemaining = 0;
            minutesRemaining = 0;
            secondsRemaining = 0;
        }
    
        setDays(daysRemaining);
        setHours(hoursRemaining);
        setMinutes(minutesRemaining);
        setSeconds(secondsRemaining);
    };
    
    // Update the timer based on product sale dates
    useEffect(() => {
        if (getSaleData && getSaleData.sale_section_sale_start && getSaleData.sale_section_sale_end) {
            calculateTimeRemaining(getSaleData.sale_section_sale_start, getSaleData.sale_section_sale_end);
            const intervalId = setInterval(() => {
                calculateTimeRemaining(getSaleData.sale_section_sale_start, getSaleData.sale_section_sale_end);
            }, 1000);
    
            return () => clearInterval(intervalId);
        }
    }, [getSaleData]);
    

    // if (!getSaleData) {
    //     return <div>Loading...</div>;
    // }

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

    const handleWishlist = (product) => {
        addToWishlist(product)
            .catch(err => console.error("Error adding to wishlist:", err));
    };

    return  (
        <div className='sales best_products '>
            <div className='container'>
                <div className='row'>
                    {getSaleData && getSaleData.latestSaleProducts.length > 0 && (
                        <>
                            <div className='top_heading'>
                                <div className='heading'>
                                    <h2>Sales</h2>
                                    <p>{getSaleData?.sale_section_sale_text_left}</p>
                                </div>
                                <div className='timer'>
                                    {getSaleData.sale_section_sale_start && getSaleData.sale_section_sale_end && (
                                    <>
                                        {/* Before the sale starts */}
                                        {new Date() < new Date(getSaleData.sale_section_sale_start) && (
                                            <>
                                                <span className='text_heading'>
                                                    {getSaleData?.sale_section_sale_text_right}
                                                </span>

                                                <div className='timer_notification'>
                                                    <p>Sale starts in:</p>
                                                    {(days > 0 || hours > 0 || minutes > 0 || seconds > 0) && (
                                                    <div className='timer_number'>
                                                        <p><span>{days}</span>:</p>
                                                        <p><span>{hours}</span>:</p>
                                                        <p><span>{minutes}</span>:</p>
                                                        <p><span>{seconds}</span></p>
                                                    </div>
                                                    )}
                                                </div>
                                            </>
                                        )}

                                        {/* During the sale */}
                                        {new Date() >= new Date(getSaleData.sale_section_sale_start) && new Date() <= new Date(getSaleData.sale_section_sale_end) && (
                                            <>
                                                <span className='text_heading'>
                                                    {getSaleData?.sale_section_sale_text_right}
                                                </span>
                                                <div className='timer_notification'>
                                                    <p>Sale ends in:</p>
                                                    {(days > 0 || hours > 0 || minutes > 0 || seconds > 0) && (
                                                    <div className='timer_number'>
                                                        <p><span>{days}</span>:</p>
                                                        <p><span>{hours}</span>:</p>
                                                        <p><span>{minutes}</span>:</p>
                                                        <p><span>{seconds}</span></p>
                                                    </div>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </>
                                    )}

                                    <div className='all_product'>
                                        <Link href='/products'>
                                            <span className="btn-text" data-hover="Sales Products"></span>
                                            <FaArrowRightLong />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='bottom'>
                                <div className="row">
                                    {getSaleData.latestSaleProducts.slice(0, 8).map((product) => (
                                        <div className="col-xl-3 col-md-4 col-sm-6 padding" key={product.id}>
                                            <div className="product_box ">
                                                <div className='pro_box_po'>
                                                    <Link href={`/products/${product.slug}`} className="product_box_image">
                                                        <div className="images">
                                                            <Image
                                                                src={product.product_image || BlankImage}
                                                                alt={product.title}
                                                                width={225}
                                                                height={300}
                                                                className="img-fluid productOne"
                                                            />
                                                            <Image
                                                                src={product.product_image2 || BlankImage}
                                                                alt={product.title}
                                                                width={225}
                                                                height={300}
                                                                className="img-fluid productTwo"
                                                            />
                                                        </div>
                                                    </Link>
                                                    {product.stock > 0 ? (
                                                        <div className="cart_btn">
                                                            <button
                                                                onClick={() => handleAddToCart(product)}
                                                                disabled={isLoadingCart[product.id] || quantity <= 0}
                                                            >
                                                                {isLoadingCart[product.id] ? 
                                                                    (
                                                                        "Adding..."
                                                                    ) : (
                                                                        <MdOutlineShoppingBag />
                                                                    )
                                                                }
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <div className="cart_out_btn">
                                                            <button disabled>
                                                                Out of stock
                                                            </button>
                                                        </div>
                                                    )}
                                                    <span className="discount">
                                                        {product.discount_percentage}% OFF
                                                    </span>
                                                </div>
                                                
                                                <div className='like'>
                                                    <button onClick={() => handleWishlist(product)}>
                                                        <FaHeart />
                                                    </button>
                                                    <button onClick={() => {
                                                        const url = `${window.location.origin}/products/${product.slug}`;
                                                        const text = `Check out ${product.title} - ₹${product.sale_price || product.regular_price}`;
                                                        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
                                                    }}>
                                                        <FaShare />
                                                    </button>
                                                </div>

                                                <div className='product_box_text'>
                                                    <h2>{product.title}</h2>
                                                    <p>
                                                        {product.sale_price &&
                                                        (!product.sale_start || !product.sale_end ||
                                                         (new Date(product.sale_start) <= currentDate &&
                                                          currentDate <= new Date(product.sale_end)))
                                                        ? "₹" + product.sale_price
                                                        : "₹" + product.regular_price}

                                                        {product.sale_price &&
                                                        (!product.sale_start || !product.sale_end ||
                                                         (new Date(product.sale_start) <= currentDate &&
                                                          currentDate <= new Date(product.sale_end))) && (
                                                            <span>
                                                            {"₹" + product.regular_price}
                                                            </span>
                                                        )}
                                                    </p>
                                                    <h3>
                                                        {product.sale_price 
                                                          ? `Only save ₹${parseFloat(product.regular_price) - parseFloat(product.sale_price)} rupees`
                                                          : null
                                                        }
                                                    </h3>
                                                </div>

                                                <div className="seles_cart d-flex justify-content-between align-items-center">
                                                    
                                                </div>

                                                {/* <div className="sale_wishlist text-end mt-2">
                                                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleWishlist(product)}>
                                                    <FaHeart />
                                                    </button>
                                                </div> */}

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
}