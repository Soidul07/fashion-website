"use client";
import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BagIcon, TShirt, Delivery } from "../../../assets/index";  
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { MenuThemeContext } from "../../../globalstate/GlobalStateContext";
import _ from 'lodash';

export default function SignModal() {
    const { themeOptionsData } = useContext(MenuThemeContext);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [leadsBtnLoader, setLeadsBtnLoader] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleClickOutside = (event) => {
        if (event.target.className === 'Sign_modal') {
            setIsModalOpen(false);
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isModalOpen]);

    const removeExtraSpace = (s) => {
        if (typeof s !== 'string') {
            return '';
        }
        var rSpace = s.replace(/\s{2,}/g, ' ');
        return _.trimStart(rSpace);
    };

    const validate = (values) => {
        const errors = {};

        if (!values.phone) {
            errors.phone = 'Phone no is required';
        } else if (!/^\+?[0-9\s\-()]*$/.test(values.phone)) {
            errors.phone = 'Invalid Phone no';
        } else {
            // Remove non-numeric characters to check the length of the digits
            const contactNoDigits = values.phone.replace(/[^\d]/g, '');
            if (contactNoDigits.length < 10 || contactNoDigits.length > 15) {
                errors.phone = 'Phone no must be between 10 and 15 digits'; // Fixed this line
            }
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            phone: '',
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            setLeadsBtnLoader(true);

            axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/leads`, values)
                .then(function (response) {
                    if (response.data.status === "success") {
                        resetForm({ values: '' });
                        setIsModalOpen(false);
                        toast.success(response.data.message);
                    } else {
                        toast.error(response.data.message || 'Form submission failed. Please try again.');
                    }
                })
                .catch(function (error) {
                    if(error.response.data.message){
                        toast.error(error.response.data.message || 'Network Error');
                    }else{
                        toast.error(error.message || 'Network Error');
                    }
                })
                .finally(() => {
                    setLeadsBtnLoader(false);
                });
        },
    });

    return (
        isModalOpen && (
            <div className='Sign_modal'>
                <div className='Sign_modal_box'>
                    <div className='Sign_modal_background'>
                        <div className='Sign_modal_colour'>
                            <div className='col-12 col-md-7 modal_iamge'>
                                <div>
                                    <h3>Crafting Tomorrow's Heirlooms With Love Today </h3>
                                    <h5>Our Heartfelt Guarantees</h5>
                                    <div className='modal_flex'>
                                        <div className='modal_flex_box'>
                                            <div className='modal_flex_background'>
                                                <div className='icon'>
                                                    <Image src={BagIcon} alt='icon' />
                                                </div>
                                                <h4>Your First Petal Gift</h4>
                                                <p>
                                                    Free Canvas Bag on your 1st Purchase – A little piece of us to carry your style!
                                                </p>
                                            </div>
                                        </div>
                                        <div className='modal_flex_box'>
                                            <div className='modal_flex_background'>
                                                <div className='icon'>
                                                    <Image src={TShirt} alt='icon' />
                                                </div>
                                                <h4>Because Once Isn&apos;t Enough</h4>
                                                <p>
                                                    Free Customised T-Shirt on your 3rd Purchase.
                                                </p>
                                            </div>
                                        </div>
                                        <div className='modal_flex_box'>
                                            <div className='modal_flex_background'>
                                                <div className='icon'>
                                                    <Image src={Delivery} alt='icon' />
                                                </div>
                                                <h4>Delivered with Love Always Free</h4>
                                                <p>
                                                    Free Delivery Always – No minimum order required.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className='modalp'>
                                    ** Shop fearlessly, wear timelessly. Your first petal awaits **
                                </p>
                            </div>
                            <div className='col-12 col-md-5 modal_text'>
                                <div className='text_box'>
                                    {/* <h3>Enjoy 10% off on your first order!</h3> */}
                                    <h5>Register with us</h5>
                                </div>
                                <div className='input_box'>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="input_div">
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="phone"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={removeExtraSpace(formik.values.phone)}
                                                placeholder="Enter Mobile Number"
                                            />
                                            {formik.touched.phone && formik.errors.phone && (
                                                <p className="error">{formik.errors.phone}</p>
                                            )}
                                        </div>
                                        <div className="input_div">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={removeExtraSpace(formik.values.email)}
                                                placeholder="Enter Email Id"
                                            />
                                            {formik.touched.email && formik.errors.email && (
                                                <p className="error">{formik.errors.email}</p>
                                            )}
                                        </div>
                                        <button type="submit" disabled={leadsBtnLoader}>
                                            {leadsBtnLoader ? 'Submitting...' : 'SUBMIT'}
                                        </button>
                                    </form>
                                </div>
                                <div className='limited_text'>
                                    <h4>
                                        <span>OR</span>
                                    </h4>
                                    <Link href={`https://wa.me/${themeOptionsData?.admin_phone}`} className='whats_app' target="_blank" rel="noopener noreferrer">
                                        <FaWhatsapp />
                                        Whatsapp
                                    </Link>
                                    <p>I accepted that i have read & understood 5petal 
                                        <Link href="/privacy-policy">Privacy Policy</Link>
                                        and
                                        <Link href="/terms-and-conditions">T&Cs</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='close_btns'>
                            <button onClick={handleCloseModal}>
                                <IoClose />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}