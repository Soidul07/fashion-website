"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Slider from "react-slick";
import { BlankImage,thread,sewing,gift,giftbox,worldwide,brand,anvikafront } from "../../../assets/index";

export default function FairSlider() {

    var sliderpair = {
        infinite:true, 
        speed: 2000,
        slidesToShow:3, 
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        fade: false,
        loop: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 0,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <div className='pair_slider'>
            <h2>Pair with the Readymade blouse</h2>
            <h6>Model is wearing blouse in size XS</h6>
            <Slider {...sliderpair} asNavFor={null} className="pair-only-slider">
                <div className='item'>
                    <Link href="#" className='pair_box'>
                        <div className='pair_image'>
                            <Image src={anvikafront} alt='pair image' width={600} height={600} />
                        </div>
                        <div className='pair_price_border'>
                            <div className='pair_price'>
                                <h3>Azara</h3>
                                <h4>₹2,520 <span>₹3,500</span></h4>
                            </div>
                            <div className='pair_button'>
                                <p>Select Size</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='item'>
                    <Link href="#" className='pair_box'>
                        <div className='pair_image'>
                            <Image src={anvikafront} alt='pair image' width={600} height={600} />
                        </div>
                        <div className='pair_price_border'>
                            <div className='pair_price'>
                                <h3>Azara</h3>
                                <h4>₹2,520 <span>₹3,500</span></h4>
                            </div>
                            <div className='pair_button'>
                                <p>Select Size</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='item'>
                    <Link href="#" className='pair_box'>
                        <div className='pair_image'>
                            <Image src={anvikafront} alt='pair image' width={600} height={600} />
                        </div>
                        <div className='pair_price_border'>
                            <div className='pair_price'>
                                <h3>Azara</h3>
                                <h4>₹2,520 <span>₹3,500</span></h4>
                            </div>
                            <div className='pair_button'>
                                <p>Select Size</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='item'>
                    <Link href="#" className='pair_box'>
                        <div className='pair_image'>
                            <Image src={anvikafront} alt='pair image' width={600} height={600} />
                        </div>
                        <div className='pair_price_border'>
                            <div className='pair_price'>
                                <h3>Azara</h3>
                                <h4>₹2,520 <span>₹3,500</span></h4>
                            </div>
                            <div className='pair_button'>
                                <p>Select Size</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </Slider>
        </div>
    )
}