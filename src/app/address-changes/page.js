"use client"
import React, { useState, useEffect } from 'react';
import { Layouts } from '../Component'
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

export default function page() {

    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    // active class
    const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsScrollingDown(true);
    } else {
        // Scrolling up
        setIsScrollingDown(false);
    }

    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    };

    useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, [lastScrollTop]);
    
    return (
        <Layouts>
            <div className='cart_box'>
                <div className='container'>
                    <div className='form'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='cart_field address_changes'>
                                    <h3>Address Changes</h3>
                                    <div className='cart_field_box'>
                                        <div className='row'>
                                            <div className='col-lg-6 col-md-6 col-12'>
                                                <div className='cart_input'>
                                                    <label>First Name</label>
                                                    <input type='text' placeholder='First name' />
                                                </div>
                                            </div> 
                                            <div className='col-lg-6 col-md-6 col-12'>
                                                <div className='cart_input'>
                                                    <label>Last Name</label>
                                                    <input type='text' placeholder='First name' />
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-12'>
                                                <div className='cart_input'>
                                                    <label>Address</label>
                                                    <input type='text' placeholder='Enter Address' />
                                                </div>
                                            </div> 
                                            <div className='col-lg-6 col-md-6 col-12'>
                                                <div className='cart_input'>
                                                    <label>State</label>
                                                    <input type='text' placeholder='West Bengal' readOnly />
                                                </div>
                                            </div> 
                                            <div className='col-lg-6 col-md-6 col-12'>
                                                <div className='cart_input'>
                                                    <label>Pin Code</label>
                                                    <input type='number' placeholder='Enter Pin Code' />
                                                </div>
                                            </div>  
                                            <div className='col-lg-6 col-md-6 col-12'>
                                                <div className='cart_input'>
                                                    <label>Phone Number</label>
                                                    <input type='number' placeholder='Enter Phone Number' />
                                                </div>
                                            </div>    
                                            <div className='col-lg-6 col-md-6 col-12'>
                                                <div className='cart_input'>
                                                    <label>Email Id</label>
                                                    <input type='text' placeholder='Enter Email Id' />
                                                </div>
                                            </div> 
                                            <div className='col-lg-6 col-md-6 col-12'>
                                                <div className='cart_input'>
                                                    <label>Tag</label>
                                                    <div className='radio_div'>
                                                        <div className='radio-toolbar'>
                                                            <input type="radio" id="radio1" name="radios" value="all" defaultChecked />
                                                            <label htmlFor="radio1">
                                                                <span><IoHomeOutline /></span>
                                                                Home
                                                            </label>
                                                        </div>
                                                        <div className='radio-toolbar'>
                                                            <input type="radio" id="radio2" name="radios" value="work" />
                                                            <label htmlFor="radio2">
                                                                <span><HiOutlineOfficeBuilding /></span>
                                                                Work
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                        <div className='changes_btn'>
                                            <button type='submit'>
                                                Place Order
                                            </button>
                                        </div>
                                        <div className={`changes_btn changes_hidden ${isScrollingDown ? 'active' : ''}`}>
                                            <button type='submit'>
                                                Place Order
                                            </button>
                                        </div>
                                    </div>       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}