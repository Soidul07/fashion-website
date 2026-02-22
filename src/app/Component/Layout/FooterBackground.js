"use client"
import React, { useContext } from 'react';
import Image from "next/image";
import { Footerbackground } from "../../assets/index";
import { MenuThemeContext } from "../../globalstate/GlobalStateContext";

export default function FooterBackground() {
    const { themeOptionsData, categoryMenus } = useContext(MenuThemeContext);
    
    let socialLinks = {};
        try {
        socialLinks = JSON.parse(themeOptionsData.social_links);
        } catch (error) {
        socialLinks = {};
    }
    return (
        <section className="footer_background">
            <div className='footer_background_image'>
                <Image 
                    src={themeOptionsData?.footer_image1 || Footerbackground} 
                    alt="image" 
                    width={700} 
                    height={700} 
                />
            </div>
            <div className="text_position">
                <h2>CRAFTING TOMORROW'S HEIRLOOMS</h2>
            </div>
            <div className='footer_bottom'>
                <div className='container'>
                    <div className='row align-items-center'>
                    <div className='col-lg-8 col-md-8 col-sm-12 order_div'>
                        <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        {themeOptionsData && themeOptionsData.footer_payment_logo && (
                        <Image src={themeOptionsData?.footer_payment_logo} alt="payment-img" width={680} height={48} />
                        )}
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}