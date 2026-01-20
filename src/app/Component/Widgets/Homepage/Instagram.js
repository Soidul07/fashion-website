"use client"
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { ColursOne,ColursOneOne,ColursTwo,ColursTwoTwo,ColursThree,ColursThreeThree,ColursFour,ColursFourFour, } from "../../../assets/index";

import Slider from "react-slick";

export default function Instagram() {

  var sliderfanchybox= {
    infinite:true, 
    speed: 2000,
    slidesToShow:6, 
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    fade: false,

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
    ]
  };

  return (
    <div className="fancybox">
      <div className='container'>
        <div className='row'>
          <div className='heading'>
              <Link href="#">Follow On Instagram</Link>
              <p><span>@Follow</span> To Be Informed About Campaigns And Collections <span>@FlyStyle</span></p>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='fancybox_slider'>
            <Slider  {...sliderfanchybox}>
              <div className='item'>
                <Link href="#" className='fanchybox_image'>
                  <Image src={ColursOne} alt='fanchybox-image' />
                  <span>
                    <svg height="20" viewBox="0 0 64 64" width="20" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="m48 64h-32a16.0007 16.0007 0 0 1 -16-16v-32a16.0007 16.0007 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1 -16 16" fill="#ff3a55"></path><path d="m30 18h18a9.0006 9.0006 0 0 0 .92-17.954c-.306-.017-.609-.046-.92-.046h-32a16.0007 16.0007 0 0 0 -16 16v32a30.0007 30.0007 0 0 1 30-30" fill="#ff796c"></path><path d="m48 32a16 16 0 1 0 16 16v-32a16 16 0 0 1 -16 16" fill="#e00047"></path></g><circle cx="44.5" cy="19.5" fill="#fff" r="2.5"></circle><path d="m32 24a8 8 0 1 1 -8 8 8.0042 8.0042 0 0 1 8-8zm0-4a12 12 0 1 1 -12 12 12.0057 12.0057 0 0 1 12-12z" fill="#fff" fillRule="evenodd"></path><path d="m52 22a10 10 0 0 0 -10-10h-20a10 10 0 0 0 -10 10v20a10 10 0 0 0 10 10h20a10 10 0 0 0 10-10zm4 0a14 14 0 0 0 -14-14h-20a14 14 0 0 0 -14 14v20a14 14 0 0 0 14 14h20a14 14 0 0 0 14-14z" fill="#fff" fillRule="evenodd"></path></svg>
                  </span>
                </Link>
              </div>
              <div className='item'>
                <Link href="#" className='fanchybox_image'>
                  <Image src={ColursTwo} alt='fanchybox-image' />
                  <span>
                    <svg height="20" viewBox="0 0 64 64" width="20" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="m48 64h-32a16.0007 16.0007 0 0 1 -16-16v-32a16.0007 16.0007 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1 -16 16" fill="#ff3a55"></path><path d="m30 18h18a9.0006 9.0006 0 0 0 .92-17.954c-.306-.017-.609-.046-.92-.046h-32a16.0007 16.0007 0 0 0 -16 16v32a30.0007 30.0007 0 0 1 30-30" fill="#ff796c"></path><path d="m48 32a16 16 0 1 0 16 16v-32a16 16 0 0 1 -16 16" fill="#e00047"></path></g><circle cx="44.5" cy="19.5" fill="#fff" r="2.5"></circle><path d="m32 24a8 8 0 1 1 -8 8 8.0042 8.0042 0 0 1 8-8zm0-4a12 12 0 1 1 -12 12 12.0057 12.0057 0 0 1 12-12z" fill="#fff" fillRule="evenodd"></path><path d="m52 22a10 10 0 0 0 -10-10h-20a10 10 0 0 0 -10 10v20a10 10 0 0 0 10 10h20a10 10 0 0 0 10-10zm4 0a14 14 0 0 0 -14-14h-20a14 14 0 0 0 -14 14v20a14 14 0 0 0 14 14h20a14 14 0 0 0 14-14z" fill="#fff" fillRule="evenodd"></path></svg>
                  </span>
                </Link>
              </div>
              <div className='item'>
                <Link href="#" className='fanchybox_image'>
                  <Image src={ColursThree} alt='fanchybox-image' />
                  <span>
                    <svg height="20" viewBox="0 0 64 64" width="20" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="m48 64h-32a16.0007 16.0007 0 0 1 -16-16v-32a16.0007 16.0007 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1 -16 16" fill="#ff3a55"></path><path d="m30 18h18a9.0006 9.0006 0 0 0 .92-17.954c-.306-.017-.609-.046-.92-.046h-32a16.0007 16.0007 0 0 0 -16 16v32a30.0007 30.0007 0 0 1 30-30" fill="#ff796c"></path><path d="m48 32a16 16 0 1 0 16 16v-32a16 16 0 0 1 -16 16" fill="#e00047"></path></g><circle cx="44.5" cy="19.5" fill="#fff" r="2.5"></circle><path d="m32 24a8 8 0 1 1 -8 8 8.0042 8.0042 0 0 1 8-8zm0-4a12 12 0 1 1 -12 12 12.0057 12.0057 0 0 1 12-12z" fill="#fff" fillRule="evenodd"></path><path d="m52 22a10 10 0 0 0 -10-10h-20a10 10 0 0 0 -10 10v20a10 10 0 0 0 10 10h20a10 10 0 0 0 10-10zm4 0a14 14 0 0 0 -14-14h-20a14 14 0 0 0 -14 14v20a14 14 0 0 0 14 14h20a14 14 0 0 0 14-14z" fill="#fff" fillRule="evenodd"></path></svg>
                  </span>
                </Link>
              </div>
              <div className='item'>
                <Link href="#" className='fanchybox_image'>
                  <Image src={ColursFour} alt='fanchybox-image' />
                  <span>
                    <svg height="20" viewBox="0 0 64 64" width="20" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="m48 64h-32a16.0007 16.0007 0 0 1 -16-16v-32a16.0007 16.0007 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1 -16 16" fill="#ff3a55"></path><path d="m30 18h18a9.0006 9.0006 0 0 0 .92-17.954c-.306-.017-.609-.046-.92-.046h-32a16.0007 16.0007 0 0 0 -16 16v32a30.0007 30.0007 0 0 1 30-30" fill="#ff796c"></path><path d="m48 32a16 16 0 1 0 16 16v-32a16 16 0 0 1 -16 16" fill="#e00047"></path></g><circle cx="44.5" cy="19.5" fill="#fff" r="2.5"></circle><path d="m32 24a8 8 0 1 1 -8 8 8.0042 8.0042 0 0 1 8-8zm0-4a12 12 0 1 1 -12 12 12.0057 12.0057 0 0 1 12-12z" fill="#fff" fillRule="evenodd"></path><path d="m52 22a10 10 0 0 0 -10-10h-20a10 10 0 0 0 -10 10v20a10 10 0 0 0 10 10h20a10 10 0 0 0 10-10zm4 0a14 14 0 0 0 -14-14h-20a14 14 0 0 0 -14 14v20a14 14 0 0 0 14 14h20a14 14 0 0 0 14-14z" fill="#fff" fillRule="evenodd"></path></svg>
                  </span>
                </Link>
              </div>
              <div className='item'>
                <Link href="#" className='fanchybox_image'>
                  <Image src={ColursOneOne} alt='fanchybox-image' />
                  <span>
                    <svg height="20" viewBox="0 0 64 64" width="20" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="m48 64h-32a16.0007 16.0007 0 0 1 -16-16v-32a16.0007 16.0007 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1 -16 16" fill="#ff3a55"></path><path d="m30 18h18a9.0006 9.0006 0 0 0 .92-17.954c-.306-.017-.609-.046-.92-.046h-32a16.0007 16.0007 0 0 0 -16 16v32a30.0007 30.0007 0 0 1 30-30" fill="#ff796c"></path><path d="m48 32a16 16 0 1 0 16 16v-32a16 16 0 0 1 -16 16" fill="#e00047"></path></g><circle cx="44.5" cy="19.5" fill="#fff" r="2.5"></circle><path d="m32 24a8 8 0 1 1 -8 8 8.0042 8.0042 0 0 1 8-8zm0-4a12 12 0 1 1 -12 12 12.0057 12.0057 0 0 1 12-12z" fill="#fff" fillRule="evenodd"></path><path d="m52 22a10 10 0 0 0 -10-10h-20a10 10 0 0 0 -10 10v20a10 10 0 0 0 10 10h20a10 10 0 0 0 10-10zm4 0a14 14 0 0 0 -14-14h-20a14 14 0 0 0 -14 14v20a14 14 0 0 0 14 14h20a14 14 0 0 0 14-14z" fill="#fff" fillRule="evenodd"></path></svg>
                  </span>
                </Link>
              </div>
              <div className='item'>
                <Link href="#" className='fanchybox_image'>
                  <Image src={ColursTwoTwo} alt='fanchybox-image' />
                  <span>
                    <svg height="20" viewBox="0 0 64 64" width="20" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="m48 64h-32a16.0007 16.0007 0 0 1 -16-16v-32a16.0007 16.0007 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1 -16 16" fill="#ff3a55"></path><path d="m30 18h18a9.0006 9.0006 0 0 0 .92-17.954c-.306-.017-.609-.046-.92-.046h-32a16.0007 16.0007 0 0 0 -16 16v32a30.0007 30.0007 0 0 1 30-30" fill="#ff796c"></path><path d="m48 32a16 16 0 1 0 16 16v-32a16 16 0 0 1 -16 16" fill="#e00047"></path></g><circle cx="44.5" cy="19.5" fill="#fff" r="2.5"></circle><path d="m32 24a8 8 0 1 1 -8 8 8.0042 8.0042 0 0 1 8-8zm0-4a12 12 0 1 1 -12 12 12.0057 12.0057 0 0 1 12-12z" fill="#fff" fillRule="evenodd"></path><path d="m52 22a10 10 0 0 0 -10-10h-20a10 10 0 0 0 -10 10v20a10 10 0 0 0 10 10h20a10 10 0 0 0 10-10zm4 0a14 14 0 0 0 -14-14h-20a14 14 0 0 0 -14 14v20a14 14 0 0 0 14 14h20a14 14 0 0 0 14-14z" fill="#fff" fillRule="evenodd"></path></svg>
                  </span>
                </Link>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}