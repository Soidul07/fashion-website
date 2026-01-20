import React from 'react'
import Image from 'next/image';
import { Layouts } from '../Component'
import { CanceledGif} from "../assets/index";
import Link from 'next/link';

export default function page() {
  return (
    <Layouts>
      <div className='thanku_page cancled_page'>
        <div className='container'>
          <div className='row'>
            <div className='thanku_image'>
                <Image src={CanceledGif} alt="thanku-gif" width="100" height="100" />
            </div>
            <div className='text'>
                <p>Your order has been cancelled.</p>
            </div>
            <div className='all_btn'>
                <ul>
                    <li>
                        <Link href="/products">Continue Shopping</Link>
                    </li>
                    <li>
                        <Link href="/">Go To Homepage</Link>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  )
}