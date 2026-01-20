"use client"
import React, { useContext } from 'react';
import Image from 'next/image';
import { BlankImage } from "../../../assets/index";
import { MenuThemeContext } from "../../../globalstate/GlobalStateContext";

export default function FreeShipping() {
    const { themeOptionsData } = useContext(MenuThemeContext);

    // Add defensive checks for themeOptionsData and above_footer_section
    if (!themeOptionsData || !themeOptionsData.above_footer_section) {
        return null; // Return null if the data is not yet available
    }

    let aboveFooterSection = {};
    try {
        aboveFooterSection = JSON.parse(themeOptionsData.above_footer_section);
    } catch (error) {
        aboveFooterSection = {};
    }

    return (
        <div className='free_shipping'>
            <div className='container'>
                <div className='row row-cols-3 row-cols-md-5 justify-content-center'>
                    {aboveFooterSection.map((afs, index) => (
                        <div className='col' key={index}>
                            <div className='box'>
                                <div className='left'>
                                    <Image 
                                        src={afs?.fs_image || BlankImage} 
                                        alt="image" 
                                        width={40} 
                                        height={40} 
                                    />
                                </div>
                                <div className='right'>
                                    <h2>{afs.fs_title || ''}</h2>   
                                    {/* <p>{afs.fs_description || ''}</p> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}