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
                <h3>Privacy Policy</h3>
              </div>
            </div>
            <div className='policy_div'>
                <div className='policy_heading'>
                    <h3>At FLY , we value your privacy and commit to protecting your personal information.</h3>
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
                                <strong>Personal details:</strong> 
                            </div>
                            <p>name, email, phone number, address</p>
                        </li>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Order information:</strong> 
                            </div>
                            <p>products purchased, payment details</p>
                        </li>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Browsing behavior:</strong>
                            </div>
                            <p>pages visited, search queries</p>
                        </li>
                        <li>
                            <div className='d-flex'>
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <strong>Device information:</strong>
                            </div>
                            <p>IP address, browser type, device type</p>
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Use of Information:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Processing orders and payments
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Personalizing your shopping experience
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Improving our website and services
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Sending marketing communications (with your consent)
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Information Sharing:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Payment gateways for payment processing
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Logistics partners for order delivery
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Marketing agencies for promotional activities (with your consent)
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            We do not share information with third-party advertisers.
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Data Security:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            We implement robust security measures to protect your information
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Encryption, firewalls, and access controls are in place
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        User Rights:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Access and update your personal information
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Unsubscribe from marketing communications
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Request data deletion (subject to legal obligations)
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Cookie Policy:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            We use cookies to enhance your browsing experience
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            You can manage cookie settings in your browser
                        </li>
                    </ul>
                </div>
                <div className='policy_box'>
                    <h3>
                        <span>
                        <FaArrowUpRightDots />
                        </span>
                        Changes to Privacy Policy:</h3>
                    <ul>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            We reserve the right to update this policy
                        </li>
                        <li>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            Changes will be effective immediately
                        </li>
                    </ul>
                </div>
                <div className='policy_heading pt-4'>
                    <h3>**  By using our website, you consent to this Privacy Policy.</h3>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  )
}