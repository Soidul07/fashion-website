"use client"
import React from 'react'
import Image from 'next/image';
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

import { customer1,customer2,customer3,customer4 } from "../../../assets/index";

export default function HappyCastomer() {

    var sliderarticles= {
        infinite:true, 
        speed: 2000,
        slidesToShow:1, 
        slidesToScroll:1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        fade: true,
        loop: true,
    };

    return  (
        <div className='review_sales'>
            <div className='container'>
                <div className='row'>
                    <div className='top_heading'>
                        <div className='heading'>
                            <h2>Why they keep coming back</h2>
                        </div>
                    </div>
                    <div className='review_sales_slider'>
                        <Slider  {...sliderarticles}>
                            <div className='item'>
                                <div className='padding'>
                                    <div className='review_boxes'>
                                        <div className='col-lg-6 col-12'>
                                            <div className='review_image'>
                                                <Image 
                                                    src={customer1} 
                                                    alt="image" 
                                                    width={500}
                                                    height={300}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='review_text'>
                                                <div className='image_box'>
                                                    <Image 
                                                        src={customer1} 
                                                        alt="image" 
                                                        width={500}
                                                        height={300}
                                                    />
                                                </div>
                                                <h2>Rhea Sharma</h2>
                                                <div className='review_star'>
                                                    <ul>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                    </ul>
                                                </div>
                                                <p>
                                                    Loving Fly's desi wear collection! Comfortable & stylish. Loving Fly's desi wear collection! Comfortable & stylish. Loving Fly's desi wear collection! Comfortable & stylish.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='padding'>
                                    <div className='review_boxes'>
                                        <div className='col-lg-6 col-12'>
                                            <div className='review_image'>
                                                <Image 
                                                    src={customer2} 
                                                    alt="image" 
                                                    width={500}
                                                    height={300}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='review_text'>
                                                <div className='image_box'>
                                                    <Image 
                                                        src={customer2} 
                                                        alt="image" 
                                                        width={500}
                                                        height={300}
                                                    />
                                                </div>
                                                <h2>Rhea Sharma</h2>
                                                <div className='review_star'>
                                                    <ul>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                    </ul>
                                                </div>
                                                <p>
                                                    Loving Fly's desi wear collection! Comfortable & stylish. Loving Fly's desi wear collection! Comfortable & stylish.
                                                    Loving Fly's desi wear collection! Comfortable & stylish.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='padding'>
                                    <div className='review_boxes'>
                                        <div className='col-lg-6 col-12'>
                                            <div className='review_image'>
                                                <Image 
                                                    src={customer3} 
                                                    alt="image" 
                                                    width={500}
                                                    height={300}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='review_text'>
                                                <div className='image_box'>
                                                    <Image 
                                                        src={customer3} 
                                                        alt="image" 
                                                        width={500}
                                                        height={300}
                                                    />
                                                </div>
                                                <h2>Rhea Sharma</h2>
                                                <div className='review_star'>
                                                    <ul>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                    </ul>
                                                </div>
                                                <p>
                                                    Loving Fly's desi wear collection! Comfortable & stylish.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='padding'>
                                    <div className='review_boxes'>
                                        <div className='col-lg-6 col-12'>
                                            <div className='review_image'>
                                                <Image 
                                                    src={customer4} 
                                                    alt="image" 
                                                    width={500}
                                                    height={300}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='review_text'>
                                                <div className='image_box'>
                                                    <Image 
                                                        src={customer4} 
                                                        alt="image" 
                                                        width={500}
                                                        height={300}
                                                    />
                                                </div>
                                                <h2>Rhea Sharma</h2>
                                                <div className='review_star'>
                                                    <ul>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                    </ul>
                                                </div>
                                                <p>
                                                    Loving Fly's desi wear collection! Comfortable & stylish.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}