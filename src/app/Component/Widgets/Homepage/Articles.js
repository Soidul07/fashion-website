"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { ColursOne,ColursOneOne,ColursTwo,ColursTwoTwo,ColursThree,ColursThreeThree,ColursFour,ColursFourFour, } from "../../../assets/index";

import Slider from "react-slick";

export default function BestProducts() {

    var sliderarticles= {
        infinite:true, 
        speed: 2000,
        slidesToShow:4, 
        slidesToScroll:1,
        autoplay: false,
        autoplaySpeed: 2000,
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
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return  (
        <div className='articles'>
            <div className='container'>
                <div className='row'>
                    <div className='heading'>
                        <h2>Current Articles From Cute Fashion</h2>
                        <p>Cardigan helvetica sriracha, portland celiac truffaut</p>
                    </div>
                    <div className='article_slider'>
                        <Slider  {...sliderarticles}>
                            <div className='item'>
                                <Link href="#" className='article_box'>
                                    <div className='article_image'>
                                        <Image src={ColursOne} alt='product-image' width="100" height="100" className='articles-image' />
                                    </div>
                                    <div className='article_text'>
                                        <h3>
                                            admin 
                                            <span>December 4, 2021</span>
                                        </h3>
                                        <h4>New season modern black backpacks</h4>
                                        <p>The main compont of a healthy environment for self esteem is that it…</p>
                                    </div>
                                </Link>
                            </div>
                            <div className='item'>
                                <Link href="#" className='article_box'>
                                    <div className='article_image'>
                                        <Image src={ColursOne} alt='product-image' width="100" height="100" className='articles-image' />
                                    </div>
                                    <div className='article_text'>
                                        <h3>
                                            admin 
                                            <span>December 4, 2021</span>
                                        </h3>
                                        <h4>New season modern black backpacks</h4>
                                        <p>The main compont of a healthy environment for self esteem is that it…</p>
                                    </div>
                                </Link>
                            </div>
                            <div className='item'>
                                <Link href="#" className='article_box'>
                                    <div className='article_image'>
                                        <Image src={ColursOne} alt='product-image' width="100" height="100" className='articles-image' />
                                    </div>
                                    <div className='article_text'>
                                        <h3>
                                            admin 
                                            <span>December 4, 2021</span>
                                        </h3>
                                        <h4>New season modern black backpacks</h4>
                                        <p>The main compont of a healthy environment for self esteem is that it…</p>
                                    </div>
                                </Link>
                            </div>
                            <div className='item'>
                                <Link href="#" className='article_box'>
                                    <div className='article_image'>
                                        <Image src={ColursOne} alt='product-image' width="100" height="100" className='articles-image' />
                                    </div>
                                    <div className='article_text'>
                                        <h3>
                                            admin 
                                            <span>December 4, 2021</span>
                                        </h3>
                                        <h4>New season modern black backpacks</h4>
                                        <p>The main compont of a healthy environment for self esteem is that it…</p>
                                    </div>
                                </Link>
                            </div>
                            <div className='item'>
                                <Link href="#" className='article_box'>
                                    <div className='article_image'>
                                        <Image src={ColursOne} alt='product-image' width="100" height="100" className='articles-image' />
                                    </div>
                                    <div className='article_text'>
                                        <h3>
                                            admin 
                                            <span>December 4, 2021</span>
                                        </h3>
                                        <h4>New season modern black backpacks</h4>
                                        <p>The main compont of a healthy environment for self esteem is that it…</p>
                                    </div>
                                </Link>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}