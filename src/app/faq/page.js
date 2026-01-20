"use client"
import { useState } from 'react';
import { Layouts } from '../Component'
import { FaArrowUpRightDots } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import Link from 'next/link';

export default function page() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <Layouts>
            <div className='wishlist_panel'>
                <div className='container'>
                    <div className='row'>
                        <div className='cart_panel_top'>
                            <div>
                                <h3>FAQ</h3>
                            </div>
                        </div>
                        <div className='policy_div'>
                            <div className='policy_box'>
                                <h3>
                                    <span>
                                    <FaArrowUpRightDots />
                                    </span>
                                    Welcome to FLY:
                                </h3>
                            </div>
                            <div className="faq_item">
                                <div className="faq_question" onClick={() => toggleFAQ(0)}>
                                    <span>What is FLY ?</span>
                                    <span className={`arrow ${activeIndex === 0 ? 'rotate' : ''}`}>
                                        <FaAngleDown />
                                    </span>
                                </div>
                                {activeIndex === 0 && (
                                    <div className="faq_answer">
                                        <p>FLY  is an online fashion store offering trendy clothing for men and women.</p>
                                    </div>
                                )}
                            </div>

                            <div className="faq_item">
                                <div className="faq_question" onClick={() => toggleFAQ(1)}>
                                    <span>How do I contact FLY&apos;s customer service?</span>
                                    <span className={`arrow ${activeIndex === 1 ? 'rotate' : ''}`}>
                                        <FaAngleDown />
                                    </span>
                                </div>
                                {activeIndex === 1 && (
                                    <div className="faq_answer">
                                        Email: <Link href='mailto:support@FLYlifestyle.com'>support@FLYlifestyle.com</Link>, Phone: <Link href='callto:6294374584'>6294374584</Link>
                                    </div>
                                )}
                            </div>

                            <div className='policy_box'>
                                <h3>
                                    <span>
                                    <FaArrowUpRightDots />
                                    </span>
                                    Account & Login:
                                </h3>
                            </div>

                            <div className="faq_item">
                                <div className="faq_question" onClick={() => toggleFAQ(2)}>
                                    <span>Do I need to create an account to shop on FLY ?</span>
                                    <span className={`arrow ${activeIndex === 2 ? 'rotate' : ''}`}>
                                        <FaAngleDown />
                                    </span>
                                </div>
                                {activeIndex === 2 && (
                                    <div className="faq_answer">
                                        No, you can checkout as a guest. However, creating an account offers benefits like order tracking and exclusive offers.
                                    </div>
                                )}
                            </div>

                            <div className="faq_item">
                                <div className="faq_question" onClick={() => toggleFAQ(3)}>
                                    <span>How do I reset my password on FLY?</span>
                                    <span className={`arrow ${activeIndex === 3 ? 'rotate' : ''}`}>
                                        <FaAngleDown />
                                    </span>
                                </div>
                                {activeIndex === 3 && (
                                    <div className="faq_answer">
                                        Click on <Link href='/forgot-password'>&apos;Forgot Password&apos;</Link> and follow the instructions.
                                    </div>
                                )}
                            </div>

                            <div className='policy_box'>
                                <h3>
                                    <span>
                                    <FaArrowUpRightDots />
                                    </span>
                                    Ordering & Payment:
                                </h3>
                            </div>

                            <div className="faq_item">
                                <div className="faq_question" onClick={() => toggleFAQ(4)}>
                                    <span>What payment methods does FLY accept?</span>
                                    <span className={`arrow ${activeIndex === 2 ? 'rotate' : ''}`}>
                                        <FaAngleDown />
                                    </span>
                                </div>
                                {activeIndex === 4 && (
                                    <div className="faq_answer">
                                        We accept payment methods credit/debit cards, net banking, wallets.
                                    </div>
                                )}
                            </div>

                            <div className="faq_item">
                                <div className="faq_question" onClick={() => toggleFAQ(5)}>
                                    <span>How do I track my order on FLY ?</span>
                                    <span className={`arrow ${activeIndex === 3 ? 'rotate' : ''}`}>
                                        <FaAngleDown />
                                    </span>
                                </div>
                                {activeIndex === 5 && (
                                    <div className="faq_answer">
                                        Log in to your account and go to "Order History" or use the tracking link sent via email.
                                    </div>
                                )}
                            </div>

                            <div className="faq_item">
                                <div className="faq_question" onClick={() => toggleFAQ(6)}>
                                    <span>Can I cancel or change my order on FLY ?</span>
                                    <span className={`arrow ${activeIndex === 3 ? 'rotate' : ''}`}>
                                        <FaAngleDown />
                                    </span>
                                </div>
                                {activeIndex === 6 && (
                                    <div className="faq_answer">
                                        Please contact customer service within 24 hours of placing your order.
                                    </div>
                                )}
                            </div>

                            <div className='policy_box'>
                                <h3>
                                    <span>
                                    <FaArrowUpRightDots />
                                    </span>
                                    Shipping & Delivery
                                </h3>
                            </div>

                            <div className="faq_item">
                                <div className="faq_question" onClick={() => toggleFAQ(7)}>
                                    <span>What are FLY's shipping policy?</span>
                                    <span className={`arrow ${activeIndex === 2 ? 'rotate' : ''}`}>
                                        <FaAngleDown />
                                    </span>
                                </div>
                                {activeIndex === 7 && (
                                    <div className="faq_answer">
                                        We offer shipping across India & Internationally.
                                    </div>
                                )}
                            </div>

                            <div className="faq_item">
                                <div className="faq_question" onClick={() => toggleFAQ(8)}>
                                    <span>How long does delivery take on FLY ?</span>
                                    <span className={`arrow ${activeIndex === 3 ? 'rotate' : ''}`}>
                                        <FaAngleDown />
                                    </span>
                                </div>
                                {activeIndex === 8 && (
                                    <div className="faq_answer">
                                        Delivery times vary depending on your location. Please check our shipping policy for details.
                                    </div>
                                )}
                            </div>

                            <div className='policy_box'>
                                <h3>
                                    <span>
                                    <FaArrowUpRightDots />
                                    </span>
                                    Returns & Refunds
                                </h3>
                            </div>

                            <div className="faq_item">
                                <div className="faq_question" onClick={() => toggleFAQ(9)}>
                                    <span>Can I return or exchange a product on FLY ?</span>
                                    <span className={`arrow ${activeIndex === 2 ? 'rotate' : ''}`}>
                                        <FaAngleDown />
                                    </span>
                                </div>
                                {activeIndex === 9 && (
                                    <div className="faq_answer">
                                        Yes, please see our return and refund policy for details.
                                    </div>
                                )}
                            </div>

                            <div className="faq_item">
                                <div className="faq_question" onClick={() => toggleFAQ(10)}>
                                    <span>How do I initiate a return or exchange on FLY ?</span>
                                    <span className={`arrow ${activeIndex === 3 ? 'rotate' : ''}`}>
                                        <FaAngleDown />
                                    </span>
                                </div>
                                {activeIndex === 10 && (
                                    <div className="faq_answer">
                                        Contact customer service and follow the instructions.
                                    </div>
                                )}
                            </div>

                            <div className='policy_box'>
                                <h3>
                                    <span>
                                    <FaArrowUpRightDots />
                                    </span>
                                    Products
                                </h3>
                            </div>

                            <div className="faq_item">
                                <div className="faq_question" onClick={() => toggleFAQ(11)}>
                                    <span>What if the product doesn't fit on FLY ?</span>
                                    <span className={`arrow ${activeIndex === 2 ? 'rotate' : ''}`}>
                                        <FaAngleDown />
                                    </span>
                                </div>
                                {activeIndex === 11 && (
                                    <div className="faq_answer">
                                        Please refer to our size chart and contact customer service for assistance.
                                    </div>
                                )}
                            </div>

                            <div className="faq_item">
                                <div className="faq_question" onClick={() => toggleFAQ(12)}>
                                    <span>Are FLY 's products authentic?</span>
                                    <span className={`arrow ${activeIndex === 3 ? 'rotate' : ''}`}>
                                        <FaAngleDown />
                                    </span>
                                </div>
                                {activeIndex === 12 && (
                                    <div className="faq_answer">
                                        Yes, we only sell authentic products from authorized manufacturers.
                                    </div>
                                )}
                            </div>

                            <div className='policy_box'>
                                <h3>
                                    <span>
                                    <FaArrowUpRightDots />
                                    </span>
                                    Promotions & Discounts
                                </h3>
                            </div>

                            <div className="faq_item">
                                <div className="faq_question" onClick={() => toggleFAQ(11)}>
                                    <span>Do you offer discounts or promotions on FLY?</span>
                                    <span className={`arrow ${activeIndex === 2 ? 'rotate' : ''}`}>
                                        <FaAngleDown />
                                    </span>
                                </div>
                                {activeIndex === 11 && (
                                    <div className="faq_answer">
                                        Yes, sign up for our newsletter or follow us on social media to stay updated on offers.
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}