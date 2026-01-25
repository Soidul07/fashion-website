"use client"
import React, { useEffect } from 'react'
import "./globals.css";
import './css/style.css';
import './css/media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MenuThemeProvider } from './globalstate/GlobalStateContext';
import localFont from "next/font/local";

const futura = localFont({
  src: [
    {
      path: "./fonts/FuturaCyrillicLight.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FuturaCyrillicMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/FuturaCyrillicHeavy.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-futura",
  display: "swap",
});

export const helvetica = localFont({
  src: [
    {
      path: "./fonts/HelveticaBold.woff2",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-helvetica",
  display: "swap",
});

export default function RootLayout({ children }) {

  useEffect(() => {
    if(typeof window !== "undefined"){
      require('bootstrap/dist/js/bootstrap.min.js')
    }
  }, [])

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"/>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"/>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400..800&display=swap" rel="stylesheet" />

        <title>5petal</title>
      </head>
      <body className={`${futura.variable} ${helvetica.variable}`}>
        <MenuThemeProvider>
          {children}
        </MenuThemeProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
