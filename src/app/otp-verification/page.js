import React from 'react'
import { Layouts } from '../Component'

export default function page() {
  return (
    <Layouts>
            <div className='acount_box'>
                <div className='container'>
                    <div className='row'>
                        <div className='acount_box_top'>
                            <h3>Otp Verification</h3>
                        </div>
                        <div className='acount_box_bottom'>
                            <div className="account_box">
                                <div className='accountbox_padding'>
                                    <form>
                                        <div className="account_div">
                                            <label>Enter Verification Code</label>
                                        </div>
                                        <div className='account_div otp_input'>
                                            <input
                                                name="email"
                                                type="number"
                                                placeholder=''
                                            />
                                            <input
                                                name="email"
                                                type="number"
                                                placeholder=''
                                            />
                                            <input
                                                name="email"
                                                type="number"
                                                placeholder=''
                                            />
                                            <input
                                                name="email"
                                                type="number"
                                                placeholder=''
                                            />
                                        </div>
                                        <div className='account_div'>
                                            <button type="submit">
                                                Send
                                            </button>
                                        </div>
                                        <div className='account_div resend_div'>
                                            <p>If you didn't receive a code,</p>
                                            <button>Resend</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Layouts>
  )
}