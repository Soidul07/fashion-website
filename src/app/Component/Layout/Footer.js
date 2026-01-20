"use client"
import React, { useContext } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { FaRegPaperPlane } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { BlankImage } from "../../assets/index";
import { MenuThemeContext } from "../../globalstate/GlobalStateContext";

export default function Footer() {
  const { themeOptionsData, categoryMenus } = useContext(MenuThemeContext);
  
  let socialLinks = {};
  try {
    socialLinks = JSON.parse(themeOptionsData.social_links);
  } catch (error) {
    socialLinks = {};
  }
  return (
    <footer>
      <div className='footer_top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9 col-md-6 col-sm-12 link_padding'>
              <div className='row'>
                {categoryMenus.map((category, index) => (
                  <div className='col-lg-3 col-6' key={index}>
                    <h3>{category.name}</h3>
                    <ul className='link'>
                      {category.subcategories.map((subcategory, subIndex) => (
                        <li key={subIndex}>
                          <Link href={`/categories/${subcategory.slug}`}>{subcategory.name}</Link> 
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className='col-lg-3 col-6'>
                  <h3>About</h3>
                  <ul className='link'>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/notification">Notification</Link>
                    </li>
                    <li>
                      <Link href="/faq">FAQ</Link>
                    </li>
                  </ul>
                </div>
                <div className='col-lg-3 col-6'>
                  <h3>Account</h3>
                  <ul className='link'>
                    <li>
                      <Link href="/cart">Cart</Link>
                    </li>
                    <li>
                      <Link href="/my-order">My Order</Link>
                    </li>
                    <li>
                      <Link href="/wishlist">Wishlist</Link>
                    </li>
                    <li>
                      <Link href="/my-account">My Account</Link>
                    </li>
                  </ul>
                </div>
                <div className='col-lg-3 col-6'>
                  <h3>HELP</h3>
                  <ul className='link'>
                    <li>
                      <Link href="/cancellation-policy">Cancellation Policy</Link>
                    </li>
                    <li>
                      <Link href="/terms-and-conditions">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/terms-of-service">Terms Of Service</Link>
                    </li>
                    <li>
                      <Link href="/shipping-policy">Shipping Policy</Link>
                    </li>
                    <li>
                      <Link href="/return-and-refund-policy">Return & Refund Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='row'>
                <div className='col-12'>
                  <h3>About Fly</h3>
                  <p dangerouslySetInnerHTML={{ __html: themeOptionsData?.footer_description }}></p>
                  <h4>social Media</h4>
                    {themeOptionsData && socialLinks && (
                      <ul className='social_media'>
                        {socialLinks.map((socialLink, index) => (
                          <li key={index}>
                            <Link href={socialLink?.social_link_url || "#"} target='_blank'>
                              <Image 
                                src={socialLink?.social_icon || BlankImage} 
                                alt="image" 
                                width={16} 
                                height={16} 
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  <div className='contact_number'>
                    <div className='icon'>
                      <FaHeadphonesAlt />
                    </div>
                    <div className='links'>
                      <h3>Need help? Call & Mail!</h3>
                      <ul>
                        <li>
                          <Link href={`tel:${themeOptionsData?.admin_phone}`}>{themeOptionsData?.admin_phone}</Link>
                          <Link href={`mailto :${themeOptionsData?.admin_email}`}>{themeOptionsData?.admin_email}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}