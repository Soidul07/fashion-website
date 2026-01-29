import React from 'react'
import { Layouts } from '../Component'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


export default function page() {
  return (
    <Layouts>
      <div className='wishlist_panel'>
        <div className='container'>
          <div className='row'>
            <div className='cart_panel_top'>
              <div>
                <h3>Terms and conditions</h3>
              </div>
            </div>
            <div className='policy_div'>
                <div className='policy_heading'>
                    <h3> Welcome to 5Petal - lifestyle</h3>
                </div>
                <div className='policy_box strong_flex'>
                    <ul>
                        <li>
                          <div className='d-flex'>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            <strong>Privacy Policy:</strong> 
                          </div>
                          <p>Our privacy policy explains how we collect, use, and protect the personal information you provide when using our website. It is important to have a clear and concise privacy policy that complies with applicable laws and regulations.</p>
                        </li>
                        <li>
                        <div className='d-flex'>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            <strong>Product Descriptions:</strong>
                          </div>
                          <p>We aim to accurately describe our products, including their colors, sizes, materials, and other features. However, there may be slight variations in color or fit due to differences in monitors and individual body types.</p>
                        </li>
                        <li>
                          <div className='d-flex'>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            <strong>Payment:</strong>
                          </div>
                          <p> We accept various payment methods, such as credit cards, debit cards, and bank transfers. All payments must be made in the currency specified on our website.</p>
                        </li>
                        <li>
                          <div className='d-flex'>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            <strong>Shipping:</strong> 
                          </div>
                          <p>We offer standard and express shipping options. Delivery times vary depending on your location and chosen shipping method. You will receive tracking information once your order has been shipped. If your order is lost or damaged during shipment, please contact us immediately so we can assist you.</p>
                        </li>
                        <li>
                          <div className='d-flex'>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            <strong>Returns and Exchanges:</strong> 
                          </div>
                            <p>We want you to love your purchase! If you're not satisfied with your order, you may return it within 30 days of receipt for a refund or exchange. Please see our returns and exchanges page for more details.</p>
                        </li>
                        <li>
                          <div className='d-flex'>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            <strong>Intellectual Property:</strong>
                          </div>
                            <p>All content on our website, including text, images, logos, and product designs, is owned by us or licensed to us. Any unauthorized use, reproduction, or distribution of this content is strictly prohibited.</p>
                        </li>
                        <li>
                          <div className='d-flex'>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            <strong>Disclaimer:</strong>
                          </div>
                            <p>While we strive to ensure the accuracy and completeness of the information provided on our website, we make no warranties or representations regarding the suitability, reliability, availability, timeliness, or accuracy of any content or services offered through our website.</p>
                        </li>
                        <li>
                          <div className='d-flex'>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            <strong>Limitation of Liability:</strong> 
                          </div>
                          <p>In no event shall we be liable for any damages arising out of or related to the use of our website or its contents, including but not limited to direct, indirect, incidental, consequential, special, exemplary, or punitive damages.</p>
                        </li>
                        <li>
                          <div className='d-flex'>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            <strong>Governing Law:</strong>
                          </div>
                          <p>These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction where our company is registered. Any disputes arising from these terms and conditions shall be subject to the exclusive jurisdiction of the courts located in that jurisdiction.</p>
                        </li>
                        <li>
                          <div className='d-flex'>
                            <span><IoMdCheckmarkCircleOutline /></span>
                            <strong>Changes to Terms and Conditions:</strong>
                          </div> 
                          <p>We reserve the right to modify these terms and conditions at any time without notice. The most current version of our terms and conditions will always be available on our website. By continuing to use our website after changes have been made, you agree to abide by the updated terms and conditions.</p>
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