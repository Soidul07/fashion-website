"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Slider from "react-slick";

export default function Banner({ getSeasonCategories,getlatestCategoriesBanners,getHomeData}) {
    var sliderbanner = {
        infinite:true, 
        speed: 2000,
        slidesToShow:1, 
        slidesToScroll:1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        fade: true,
    };

    var sliderads =  {
        infinite:true, 
        speed: 2000,
        slidesToShow:1, 
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        fade: false,
    };

    return (
        <section className='banner'>
            <div className='banner_big_slider'>
                {getlatestCategoriesBanners && getlatestCategoriesBanners.length > 0 && (
                    <Slider  {...sliderbanner}>
                        {getlatestCategoriesBanners.map((category, index) => (
                            <div className='item' key={index}>
                                <Link href={`/categories/${category.slug}`} className='banner_bix_box'>
                                    <Image src={category.cat_banner_image ? category.cat_banner_image : '/default-product.jpg'} className='banner_desktop' alt='banner image' width={600} height={600} />
                                    <Image src={category.image ? category.image : '/default-product.jpg'} className='banner_mobile' alt='banner image' width={600} height={600} />
                                </Link>
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
        </section>
    )
}