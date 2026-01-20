import React from 'react'
import { Layouts } from '../Component'
import { FaArrowUpRightDots } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function page() {
  return (
    <Layouts>
      <div className='wishlist_panel'>
        <div className='container'>
          <div className='row'>
            <div className='cart_panel_top'>
              <div>
                <h3>About Us</h3>
              </div>
            </div>
            <div className='policy_div'>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Welcome to FLY:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            At FLY, we believe that the greatest love story begins with you. Our brand name, FLY, stands for "First Love Yourself" - a philosophy that inspires us to create clothing that makes you feel confident, beautiful, and empowered.
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Our Story:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            FLY was born from the idea that self-love is the foundation of true happiness. We wanted to create a fashion brand that not only makes you look good but also feels good. Our mission is to help you embrace your individuality, celebrate your uniqueness, and love yourself first.
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Our Vision:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            We envision a world where fashion is a tool for self-expression, not just a trend to follow. Where everyone can wear their confidence on their sleeve and feel comfortable in their own skin. At FLY, we're committed to creating clothing that sparks joy, fosters self-love, and inspires you to be your best self.
                        </li>
                    </ul>
                </div>
                <div className='policy_box strong_flex'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Our Values:</h3>
                    <ul>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Self-Love:</strong> 
                            </div>
                            <p>We believe that loving yourself is the first step to true happiness.</p>
                        </li>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Uniqueness:</strong>
                            </div> 
                            <p>We celebrate what makes you different and 
                            encourage you to embrace your individuality.</p>
                        </li>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Self-Expression:</strong> 
                            </div>
                            <p>We create clothing that helps you express your personality, values, and style.</p>
                        </li>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Confidence:</strong>
                            </div> 
                            <p>We believe that fashion should make you feel empowered and confident.</p>
                        </li>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Community:</strong> 
                                </div>
                                <p>We're building a community that supports, uplifts, and inspires each other to be their best selves.</p>
                        </li>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Inclusivity:</strong>
                            </div>
                            <p>We welcome everyone to join the FLY community, regardless of shape, size, color, or identity.</p>
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Join the Movement:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            At FLY, we're more than just a clothing brand - we're a community of like-minded individuals who believe in the power of self-love. Join us on this journey, and let's spread love, positivity, and fashion together!
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  )
}