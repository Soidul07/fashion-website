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
                <h3>Return and Refund Policy</h3>
              </div>
            </div>
            <div className='policy_div'>
                <div className='policy_heading'>
                    <h3>At 5Petal , we want you to love your purchases! If for any reason you're not completely satisfied, we offer a flexible return and refund policy.</h3>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Return Window:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            30 days from delivery date for domestic orders
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            45 days from delivery date for international orders
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Eligible Items:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Items in original condition with tags attached
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Items not worn, altered, or washed
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Return Options:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Refund to original payment method
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Exchange for a different size or style
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Store credit for future purchases
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Return Procedure:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Contact our customer service team via email or phone
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Provide order number and reason for return
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Follow instructions provided by our customer service team
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Refund Processing:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Refunds will be processed within 5-7 business days of receiving the returned item
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Refunds will be issued in the original payment method
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Exchange Policy:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Exchanges are subject to availability
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Customer is responsible for return shipping costs
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            New order will be shipped upon receipt of returned item
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Store Credit:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Store credit is valid for 6 months from issue date
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Can be used on future purchases
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Exceptions:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Final sale items are non-returnable and non-refundable
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Swimwear, lingerie, and accessories are non-returnable due to hygiene reasons
                        </li>
                    </ul>
                </div>
                <div className='policy_heading pt-4'>
                    <h3>**  By shopping with us, you agree to our Return and Refund Policy. If you have any questions or concerns, please don't hesitate to contact us!</h3>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  )
}