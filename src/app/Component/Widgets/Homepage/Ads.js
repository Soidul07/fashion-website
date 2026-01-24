"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function Ads({getLatestSeasonCategories}) {
    return  (
        <div className='ads_section'>
            <div className='container'>
                <div className='row'>
                    {getLatestSeasonCategories && getLatestSeasonCategories.length > 0 && (
                        getLatestSeasonCategories.map((seasonCategory, index) => (
                            <div className='col-12' key={index}>
                                <Link href={'season-category/'+seasonCategory?.slug || '#'} className='ads_image'>
                                    <Image src={seasonCategory?.banner_image} alt='image' width={500} height={500} />
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}