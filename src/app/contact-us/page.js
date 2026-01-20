"use client"
import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { Layouts } from '../Component'
import { FaWhatsapp } from "react-icons/fa";
import { MenuThemeContext } from "../globalstate/GlobalStateContext";
import _ from 'lodash';

export default function page() {
    const { themeOptionsData } = useContext(MenuThemeContext);
    return (
        <Layouts>
            <div className='cart_box'>
                <div className='container'>
                    <form>
                        <div className='row contact_us'>
                            <div className='col-lg-4 col-12'>
                                <div className='cart_field'>
                                    <h3>Our Address</h3>
                                    <p>House no-12, 12/A NewTown</p>
                                    <p>Kolkata, West Bengal</p>
                                    <p>+91 98 4211 3522</p>
                                    <p>support@gnail.com</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-12'>
                                <div className='cart_field contact_padding'>
                                    <h3>Quick Help</h3>
                                    <Link href={`https://wa.me/${themeOptionsData?.admin_phone}`} target="_blank" rel="noopener noreferrer">
                                        <span className='contact_svg'><FaWhatsapp /></span>
                                        <span className='contact_text'>Whatsapp Customer Services</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-7 col-md-12 col-12'>
                                <div className='cart_field profile_edit'>
                                    <h3>Send a Message</h3>
                                    <div className='cart_field_box'>
                                        <div className='row max-w-4xl'>
                                            <div className='col-12'>
                                                <div className='cart_input padding_top'>
                                                    <label>Your Name</label>
                                                    <input
                                                        name="first_name"
                                                        type="text"
                                                        placeholder='Enter your First Name'
                                                    />
                                                </div>
                                            </div> 
                                            <div className='col-12'>
                                                <div className='cart_input padding_top'>
                                                    <label>Your Email</label>
                                                    <input
                                                        name="your_email"
                                                        type="text"
                                                        placeholder='Enter your Last Name'
                                                    />
                                                </div>
                                            </div> 
                                            <div className='col-12'>
                                                <div className='cart_input padding_top'>
                                                    <label>Subject</label>
                                                    <input
                                                        name="subject"
                                                        type="text"
                                                        placeholder='Enter your Email'
                                                    />
                                                </div>
                                            </div> 
                                            <div className='col-12'>
                                                <div className='cart_input padding_top'>
                                                    <label>Message</label>
                                                    <textarea
                                                        type="text"
                                                        placeholder='Enter your text'
                                                    />
                                                </div>
                                            </div> 
                                            <div className='col-12 padding_top edit_button'>
                                                <button type="submit">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Layouts>
    )
}