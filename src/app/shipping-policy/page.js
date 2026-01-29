import React from 'react'
import { Layouts } from '../Component'
import { FaArrowUpRightDots } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Link from 'next/link';


export default function page() {
  return (
    <Layouts>
      <div className='wishlist_panel'>
        <div className='container'>
          <div className='row'>
            <div className='cart_panel_top'>
              <div>
                <h3>Shipping Policy</h3>
              </div>
            </div>
            <div className='policy_div'>
                <div className='policy_heading'>
                    <h3>At 5Petal Lifestyle, we're excited to offer shipping across India and internationally. Here's what you need to know:</h3>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Shipping Rates</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Rates are calculated based on the weight and dimensions of the package
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Rates are subject to change without notice
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Delivery Areas</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            We ship to all states in India
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            We ship internationally
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Estimated Delivery Times</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Standard Shipping (India): 5-7 business days
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Express Shipping (India): 2-3 business days
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Standard Shipping (International): 10-14 business days
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Express Shipping (International): 5-7 business days
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Tracking</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            You will receive tracking information via email once your order ships
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Please allow 24-48 hours for tracking information to update
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Delivery Issues</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            If your package is lost or damaged in transit, please contact us within 5 business days
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            We will work with you to resolve the issue promptly
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Return Shipping</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Return shipping is the responsibility of the customer
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Please see our Return Policy for details
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Customs and Duties</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            International customers are responsible for any customs or duties fees
                        </li>
                    </ul>
                </div>
                <div className='policy_heading pt-4'>
                    <h3>**  By shopping with us, you agree to our Shipping Policy. If you have any questions or concerns, please don't hesitate to contact us! Mail id- <Link href='mailto:support5petal@gmail.com'>support@gmail.com</Link>
                    </h3>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  )
}