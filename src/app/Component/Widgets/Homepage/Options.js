"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { ColursOne,ColursTwo,ColursThree,ColursFour,categoriesOne,categoriesTwo } from "../../../assets/index";

export default function Categories() {
    return  (
        <div className='options'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12 padding'>
                        <Link href='#'>
                            <div className='options_div'>
                                <div className='left'>
                                    <div className='image_div'>
                                        <div className='image_box'>
                                            <Image src={ColursOne} alt='options-image' width="100" height="100" />
                                        </div>
                                    </div>
                                    <h2>Women t-shirts</h2>
                                </div>
                                <div className='right'>
                                    <p>18</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 padding'>
                        <Link href='#'>
                            <div className='options_div'>
                                <div className='left'>
                                    <div className='image_div'>
                                        <div className='image_box'>
                                            <Image src={ColursTwo} alt='options-image' width="100" height="100" />
                                        </div>
                                    </div>
                                    <h2>Women t-shirts</h2>
                                </div>
                                <div className='right'>
                                    <p>18</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 padding'>
                        <Link href='#'>
                            <div className='options_div'>
                                <div className='left'>
                                    <div className='image_div'>
                                        <div className='image_box'>
                                            <Image src={ColursThree} alt='options-image' width="100" height="100" />
                                        </div>
                                    </div>
                                    <h2>Women t-shirts</h2>
                                </div>
                                <div className='right'>
                                    <p>18</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 padding'>
                        <Link href='#'>
                            <div className='options_div'>
                                <div className='left'>
                                    <div className='image_div'>
                                        <div className='image_box'>
                                            <Image src={ColursFour} alt='options-image' width="100" height="100" />
                                        </div>
                                    </div>
                                    <h2>Women t-shirts</h2>
                                </div>
                                <div className='right'>
                                    <p>18</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 padding'>
                        <Link href='#'>
                            <div className='options_div'>
                                <div className='left'>
                                    <div className='image_div'>
                                        <div className='image_box'>
                                            <Image src={categoriesOne} alt='options-image' width="100" height="100" />
                                        </div>
                                    </div>
                                    <h2>Women t-shirts</h2>
                                </div>
                                <div className='right'>
                                    <p>18</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 padding'>
                        <Link href='#'>
                            <div className='options_div'>
                                <div className='left'>
                                    <div className='image_div'>
                                        <div className='image_box'>
                                            <Image src={categoriesTwo} alt='options-image' width="100" height="100" />
                                        </div>
                                    </div>
                                    <h2>Women t-shirts</h2>
                                </div>
                                <div className='right'>
                                    <p>18</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}