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
                <h3>Cancellation Policy</h3>
              </div>
            </div>
            <div className='policy_div'>
                <div className='policy_heading'>
                    <h3>At 5Petal Lifestyle, we understand that sometimes you may need to cancel your order. Here's our cancellation policy:</h3>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Before Shipment:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            You can cancel your order within 24 hours of placement.
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Please contact our customer service team to initiate the cancellation.
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            We will refund the full amount paid for the order.
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        After Shipment:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            If the order has already shipped, you can refuse to accept the package.
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Please contact our customer service team to initiate the return process.
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Refunds will be processed once the package is returned to us.
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
                            Final sale items are non-returnable and non-refundable.
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Swimwear, lingerie, and accessories are non-returnable due to hygiene reasons.
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Cancellation Procedure:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Contact our customer service team via email or phone.
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Provide your order number and reason for cancellation.
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Follow instructions provided by our customer service team.
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
                            Refunds will be processed within 5-7 business days of cancellation.
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Refunds will be issued in the original payment method.
                        </li>
                    </ul>
                </div>
                <div className='policy_heading pt-4'>
                    <h3>**  By shopping with us, you agree to our Cancellation Policy. If you have any questions or concerns, please don't hesitate to contact us!</h3>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  )
}