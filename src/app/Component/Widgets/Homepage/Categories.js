"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Slider from "react-slick";

export default function Categories({ getFourSareesSubCategories }) {

    var slidercategory= {
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

    return (
        <div className='Categories'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='heading_name'>
                            <h2>find category</h2>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='row'>
                        <div className='slider_height p-0'>
                            <Slider {...slidercategory}>
                                {getFourSareesSubCategories && getFourSareesSubCategories.length > 0 && (
                                    getFourSareesSubCategories.map((category) => (
                                        <div key={category.id} className='item padding'>
                                            <Link href={`/categories/${category.slug}`}>
                                                <div className='cat_border'>
                                                    <div className='categories_image'>
                                                        <Image 
                                                            src={category.image} 
                                                            alt={category.name} 
                                                            width={500}
                                                            height={300}
                                                        />
                                                    </div>
                                                    <div className='categories_text'>
                                                        <div className='categories_background'>
                                                            <h2>{category.name}</h2>
                                                            <h3>Shop Now</h3>
                                                            {/* <p>{category.product_count} Products</p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
