"use client"
import React from 'react'
import Link from 'next/link'
import { patternsOne,patternsTwo } from "../../../assets/index";  
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Ads({getLatestSeasonCategories}) {
    return  (
        <div className='ads_section'>
            <div className='container'>
                <div className='row'>
                    {getLatestSeasonCategories && getLatestSeasonCategories.length > 0 && (
                        getLatestSeasonCategories.map((seasonCategory, index) => (
                            <div className='col-12 padding' key={index}>
                                <Link href={'season-category/'+seasonCategory?.slug || '#'} className='ads_image' style={{ backgroundImage: `url(${seasonCategory?.banner_image})`, }}>
                                    
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}