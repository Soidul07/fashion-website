"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Slider from "react-slick";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ColursOne } from "../../../assets/index";

export default function TrendingNow({getSaleData}) {
    var sliderhandpicked= {
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
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
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

    return  (
        <div className='best_products best_product_center hand_picked'>
            <div className='container'>
                <div className='row'>
                    <div className='top'>
                        <div className='heading'>
                            <h2>Trending Now</h2>
                            <p>What the treendsetters are wearing</p>
                        </div>
                        <div className='all_product'>
                            <Link href='/products'>
                                <span className="btn-text" data-hover="All Products"></span>
                                <HiArrowNarrowRight  />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='row'>
                        <div className='slider_height  hand_slider p-0'>
                            <Slider {...sliderhandpicked}>
                                {getSaleData?.latestSaleProducts.map((product) => (
                                    <div className='item'  key={product.id}>
                                        <Link href={`/products/${product.slug}`} className='pro_video_box'>
                                            <div className='product_box_image'>
                                                <Image src={product.product_image || BlankImage} alt='image' width={500} height={500} />
                                                
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}