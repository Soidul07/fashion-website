"use client"
import React, { useEffect,useState,useContext } from 'react';
import { Layouts } from '../Component'
import { FaRegHeart } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { IoCubeOutline } from "react-icons/io5";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PiAddressBook } from "react-icons/pi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaQuinscape } from "react-icons/fa";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { MdOutlinePolicy } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { GrServicePlay } from "react-icons/gr";
import { GrServices } from "react-icons/gr";
import Link from 'next/link';
import Account from '../Component/Widgets/Header/Account';
import { MenuThemeContext } from "../globalstate/GlobalStateContext";

export default function page() {
    const { loggedInUserData, isLogin, setIsLogout } = useContext(MenuThemeContext);
    const handleLogoutClick = () => {
        setIsLogout(true);
    };
    return (
        <Layouts>
            <div className='wishlist_panel'>
                <div className='container'>
                    <div className='row'>
                        {isLogin && (
                            <div className='cart_panel_top'>
                                <div>
                                    <h3>Hey! {loggedInUserData?.name}</h3>
                                    <p>Explore</p>
                                </div>
                            </div>
                        )}
                        <div className='cart_panel_bottom'>
                        {!isLogin ? (
                            <div className='start_shoping'>
                                <div className='acount_box'>
                                    <div className='acount_box_top'>
                                        <h3>Users Account</h3>
                                    </div>
                                    <div>
                                        {!isLogin ? (
                                            <>
                                                <Account />
                                            </>
                                        ) : (
                                            <div className='log_out'>
                                                <p>You are already logged in!</p>
                                                <button onClick={handleLogoutClick}>Logout</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                            <div className='account_link account_border'>
                                <ul>
                                    <li>
                                        <Link href="/my-order">
                                            <IoCubeOutline />
                                            <span>Orders</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/wishlist">
                                            <FaRegHeart />
                                            <span>Wishlist</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='account_setting account_border'>
                                <h2>Notification</h2>
                                <ul>
                                    <li>
                                        <Link href="/notification">
                                            <div>
                                                <MdOutlineNotificationAdd />
                                                <span>Tap for latest notification</span>
                                            </div>
                                            <div className='angle_svg'>
                                                <FaAngleRight />
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='account_setting account_border'>
                                <h2>Account Settings</h2>
                                <ul>
                                    <li>
                                        <Link href="/edit-profile">
                                            <div>
                                                <IoPersonCircleOutline />
                                                <span>Edit Profile</span>
                                            </div>
                                            <div className='angle_svg'>
                                                <FaAngleRight />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/changes-address">
                                            <div>
                                                <PiAddressBook />
                                                <span>Saved Addresses</span>
                                            </div>
                                            <div className='angle_svg'>
                                                <FaAngleRight />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/change-password">
                                            <div>
                                                <PiAddressBook />
                                                <span>Change Password</span>
                                            </div>
                                            <div className='angle_svg'>
                                                <FaAngleRight />
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='account_setting account_border'>
                                <h2>Feedback & Information</h2>
                                <ul>
                                    <li>
                                        <Link href="/cancellation-policy">
                                            <div>
                                                <MdOutlinePolicy />
                                                <span>Cancellation Policy</span>
                                            </div>
                                            <div className='angle_svg'>
                                                <FaAngleRight />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/order-cancelled">
                                            <div>
                                                <MdOutlineFreeCancellation  />
                                                <span>Order Cancelled</span>
                                            </div>
                                            <div className='angle_svg'>
                                                <FaAngleRight />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <div>
                                                <MdOutlinePrivacyTip />
                                                <span>Privacy Policy</span>
                                            </div>
                                            <div className='angle_svg'>
                                                <FaAngleRight />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/return-and-refund-policy">
                                            <div>
                                                <RiRefund2Fill  />
                                                <span>Return & Refund Policy</span>
                                            </div>
                                            <div className='angle_svg'>
                                                <FaAngleRight />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/shipping-policy">
                                            <div>
                                                <MdOutlineLocalShipping />
                                                <span>Shipping Policy</span>
                                            </div>
                                            <div className='angle_svg'>
                                                <FaAngleRight />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-and-conditions">
                                            <div>
                                                <GrServicePlay  />
                                                <span>Terms & Conditions</span>
                                            </div>
                                            <div className='angle_svg'>
                                                <FaAngleRight />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-of-service">
                                            <div>
                                                <GrServices  />
                                                <span>Terms Of Service</span>
                                            </div>
                                            <div className='angle_svg'>
                                                <FaAngleRight />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            <div>
                                                <FaQuinscape />
                                                <span>FAQs</span>
                                            </div>
                                            <div className='angle_svg'>
                                                <FaAngleRight />
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='account_setting'>
                                <button onClick={handleLogoutClick}>Log Out</button>
                            </div>
                            </>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}