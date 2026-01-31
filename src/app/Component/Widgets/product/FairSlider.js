"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Slider from "react-slick";
import { BlankImage,thread,sewing,gift,giftbox,worldwide,brand,anvikafront } from "../../../assets/index";

export default function FairSlider({ matchingBlouses = [] }) {

    var sliderpair = {
        infinite: false, 
        speed: 2000,
        slidesToShow: 3, 
        slidesToScroll: 1,
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

    if (matchingBlouses.length === 0) {
        return (
            <div className='pair_slider'>
                <h2>Pair with the Readymade blouse</h2>
                <p>No matching blouse found</p>
            </div>
        );
    }

    return (
        <div className='pair_slider'>
            <h2>Pair with the Readymade blouse</h2>
            <h6>Model is wearing blouse in size XS</h6>
            <Slider {...sliderpair} asNavFor={null} className="pair-only-slider">
                {matchingBlouses.map((blouse, index) => (
                    <div className='item' key={index}>
                        <Link href={`/products/${blouse.slug}`} className='pair_box'>
                            <div className='pair_image'>
                                <Image src={blouse.product_image || BlankImage} alt={blouse.title} width={600} height={600} />
                            </div>
                            <div className='pair_price_border'>
                                <div className='pair_price'>
                                    <h3>{blouse.title.split(' ').slice(0, 2).join(' ')}</h3>
                                    <h4>
                                        {blouse.sale_price ? (
                                            <>₹{blouse.sale_price} <span>₹{blouse.regular_price}</span></>
                                        ) : (
                                            <>₹{blouse.regular_price}</>
                                        )}
                                    </h4>
                                </div>
                                <div className='pair_button'>
                                    <p>Select Size</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    )
}