"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import axios from 'axios';

export default function HappyCastomer() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/testimonials`);
                if (response.data.success) {
                    setTestimonials(response.data.data);
                }
            } catch (error) {
                console.error("Error fetching testimonials:", error);
            }
        };
        fetchTestimonials();
    }, []);

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
        <>
        {testimonials.length > 0 ? (
            <div className='review_sales'>
                <div className='container'>
                    <div className='row'>
                        <div className='top_heading'>
                            <div className='heading'>
                                <h2>Why they keep coming back</h2>
                            </div>
                        </div>
                        <div className='review_sales_slider'>
                            <Slider {...sliderarticles}>
                                {testimonials.map((item) => (
                                    <div className='item' key={item.id}>
                                        <div className='padding'>
                                            <div className='review_boxes'>
                                                <div className='col-lg-6 col-12'>
                                                    <div className='review_image'>
                                                        <Image 
                                                            src={item.image} 
                                                            alt={item.name} 
                                                            width={500}
                                                            height={300}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6 col-12'>
                                                    <div className='review_text'>
                                                        <div className='image_box'>
                                                            <Image 
                                                                src={item.image} 
                                                                alt={item.name} 
                                                                width={500}
                                                                height={300}
                                                            />
                                                        </div>
                                                        <h2>{item.name}</h2>
                                                        <div className='review_star'>
                                                            <ul>
                                                                <li><FaStar /></li>
                                                                <li><FaStar /></li>
                                                                <li><FaStar /></li>
                                                                <li><FaStar /></li>
                                                                <li><FaStar /></li>
                                                            </ul>
                                                        </div>
                                                        <p dangerouslySetInnerHTML={{ __html: item.description }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className='review_sales'>
                <div className='container'>
                    <div className='row'>
                        <div className='text-center py-5'>
                            <p>No data found</p>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}