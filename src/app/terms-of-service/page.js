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
                <h3>Terms of Service</h3>
              </div>
            </div>
            <div className='policy_div'>
                <div className='policy_heading'>
                    <h3>Welcome to FLY, By using our website, social media, or purchasing our products, you agree to these terms:
                    </h3>
                </div>
                <div className='policy_box strong_flex'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Information We Collect:</h3>
                    <ul>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Acceptance:</strong>
                            </div>
                            <p>By using our services, you accept these terms.</p>
                        </li>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Intellectual Property:</strong>
                            </div>
                            <p>All content, images, and trademarks are owned by FLY Lifestyle.</p>
                        </li>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Product Information:</strong>
                            </div>
                            <p>We strive for accuracy, but product information may contain errors.</p>
                        </li>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Pricing and Payment:</strong>
                            </div>
                            <p>Prices are subject to change. We accept various payment methods.</p>
                        </li>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Shipping and Delivery:</strong>
                            </div>
                            <p>See our Shipping Policy for details.</p>
                        </li>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Returns and Refunds:</strong>
                            </div> 
                            <p>See our Return and Refund Policy for details.</p>
                        </li>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>User Conduct:</strong>
                            </div> 
                            <p>You agree to use our services for lawful purposes only.</p>
                        </li>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Disclaimer:</strong>
                            </div>
                            <p>We disclaim warranties and liability for damages.</p>
                        </li>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Governing Law:</strong>
                            </div>
                            <p>These terms are governed by Indian law.</p>
                        </li>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Changes:</strong>
                            </div>
                            <p>We reserve the right to update these terms at any time.</p>
                        </li>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Privacy Policy:</strong>
                            </div> 
                            <p>Our Privacy Policy is incorporated into these terms.</p>
                        </li>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Contact Us:</strong> 
                            </div>
                            <p>any queries, please contact our customer service team.</p>
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