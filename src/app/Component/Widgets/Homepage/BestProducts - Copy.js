"use client"
import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { ColursOne,ColursOneOne,ColursTwo,ColursTwoTwo,ColursThree,ColursThreeThree,ColursFour,ColursFourFour,categoriesSix,categoriesSixSix, } from "../../../assets/index";

import Slider from "react-slick";

export default function BestProducts() {
    const [isDivActive, setIsDivActive] = useState(false);

    const toggleDivActive = () => {
        setIsDivActive(!isDivActive);
    };

    var sliderproducts= {
        infinite:true, 
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

    return  (
        <div className='best_products'>
            <div className='container'>
                <div className='row'>
                    <div className='top'>
                        <div className='heading'>
                            <h2>Trending Best Selling Products</h2>
                        </div>
                        <div className={isDivActive ? 'tab_btn active' : 'tab_btn'}>
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All products</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Featured</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">best sellers</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-rated-tab" data-bs-toggle="pill" data-bs-target="#pills-rated" type="button" role="tab" aria-controls="pills-rated" aria-selected="false">top rated</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-sale-tab" data-bs-toggle="pill" data-bs-target="#pills-sale" type="button" role="tab" aria-controls="pills-sale" aria-selected="false">on sale</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-stoke-tab" data-bs-toggle="pill" data-bs-target="#pills-stoke" type="button" role="tab" aria-controls="pills-stoke" aria-selected="false">in stoke</button>
                                </li>
                            </ul>
                        </div>
                        <div className='filter_btn'>
                            <button onClick={toggleDivActive}>
                                <svg height="16" viewBox="0 0 32 32" width="16" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><g fill="rgb(0,0,0)"><path d="m1.917 24.75h17.333v2h-17.333z"></path><path d="m23.5 22.5h-2v6.5h2v-2.25h6.583v-2h-6.583z"></path><path d="m12.75 15h17.333v2h-17.333z"></path><path d="m8.5 19.25h2v-6.5h-2v2.25h-6.583v2h6.583z"></path><path d="m1.917 5.25h17.333v2h-17.333z"></path><path d="m23.5 5.25v-2.25h-2v6.5h2v-2.25h6.583v-2z"></path></g></svg>
                                Filter
                            </button>
                        </div>
                        <div className='all_product'>
                            <Link href='#'>
                            <span className="btn-text" data-hover="All Products"></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="16px" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                            </Link>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className='product_slider'>
                                    <Slider  {...sliderproducts}>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursOne} alt='product-image' className='productOne' />
                                                        <Image src={ColursOneOne} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursTwo} alt='product-image' className='productOne' />
                                                        <Image src={ColursTwoTwo} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursThree} alt='product-image' className='productOne' />
                                                        <Image src={ColursThreeThree} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursFour} alt='product-image' className='productOne' />
                                                        <Image src={ColursFourFour} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={categoriesSix} alt='product-image' className='productOne' />
                                                        <Image src={categoriesSixSix} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <div className='product_slider'>
                                    <Slider  {...sliderproducts}>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursOne} alt='product-image' className='productOne' />
                                                        <Image src={ColursOneOne} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursTwo} alt='product-image' className='productOne' />
                                                        <Image src={ColursTwoTwo} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursThree} alt='product-image' className='productOne' />
                                                        <Image src={ColursThreeThree} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursFour} alt='product-image' className='productOne' />
                                                        <Image src={ColursFourFour} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={categoriesSix} alt='product-image' className='productOne' />
                                                        <Image src={categoriesSixSix} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <div className='product_slider'>
                                    <Slider  {...sliderproducts}>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursOne} alt='product-image' className='productOne' />
                                                        <Image src={ColursOneOne} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursTwo} alt='product-image' className='productOne' />
                                                        <Image src={ColursTwoTwo} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursThree} alt='product-image' className='productOne' />
                                                        <Image src={ColursThreeThree} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursFour} alt='product-image' className='productOne' />
                                                        <Image src={ColursFourFour} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={categoriesSix} alt='product-image' className='productOne' />
                                                        <Image src={categoriesSixSix} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-rated" role="tabpanel" aria-labelledby="pills-rated-tab">
                                <div className='product_slider'>
                                    <Slider  {...sliderproducts}>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursOne} alt='product-image' className='productOne' />
                                                        <Image src={ColursOneOne} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursTwo} alt='product-image' className='productOne' />
                                                        <Image src={ColursTwoTwo} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursThree} alt='product-image' className='productOne' />
                                                        <Image src={ColursThreeThree} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursFour} alt='product-image' className='productOne' />
                                                        <Image src={ColursFourFour} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={categoriesSix} alt='product-image' className='productOne' />
                                                        <Image src={categoriesSixSix} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-sale" role="tabpanel" aria-labelledby="pills-sale-tab">
                                <div className='product_slider'>
                                    <Slider  {...sliderproducts}>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursOne} alt='product-image' className='productOne' />
                                                        <Image src={ColursOneOne} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursTwo} alt='product-image' className='productOne' />
                                                        <Image src={ColursTwoTwo} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursThree} alt='product-image' className='productOne' />
                                                        <Image src={ColursThreeThree} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursFour} alt='product-image' className='productOne' />
                                                        <Image src={ColursFourFour} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={categoriesSix} alt='product-image' className='productOne' />
                                                        <Image src={categoriesSixSix} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-stoke" role="tabpanel" aria-labelledby="pills-stoke-tab">
                                <div className='product_slider'>
                                    <Slider  {...sliderproducts}>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursOne} alt='product-image' className='productOne' />
                                                        <Image src={ColursOneOne} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursTwo} alt='product-image' className='productOne' />
                                                        <Image src={ColursTwoTwo} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursThree} alt='product-image' className='productOne' />
                                                        <Image src={ColursThreeThree} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={ColursFour} alt='product-image' className='productOne' />
                                                        <Image src={ColursFourFour} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <div className='product_box'>
                                                <Link href="#" className='product_box_image'>
                                                    <div className='images'>
                                                        <Image src={categoriesSix} alt='product-image' className='productOne' />
                                                        <Image src={categoriesSixSix} alt='product-image' className='productTwo' />
                                                    </div>
                                                    <div className='sale'>
                                                        <p>Sale</p>
                                                        <p>20% off</p>
                                                    </div>
                                                </Link>
                                                <div className='like'>
                                                    <button>
                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                                    </button>
                                                </div>
                                                <div className='product_box_text'>
                                                    <h2>Floral Dresses</h2>
                                                    <div className='cart_btn'>
                                                        <Link href="#">add to cart</Link>
                                                    </div>
                                                    <p>$99.99 <span>$107.99</span></p>
                                                    <div className='cart'>
                                                        <Link href="#">
                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}