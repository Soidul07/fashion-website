"use client"
import React, { useState, useRef } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Percentagelogo,Upilogo,Gpaylogo,Phonepaylogo,Sbilogo,Icicilogo,Axislogo,Hdfclogo, } from '../assets/index'
import { Layouts } from '../Component'

export default function page() {

    const [step, setStep] = useState(1); // 1: Payment Option, 2: OTP Verification
    const [paymentMethod, setPaymentMethod] = useState({
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        name: '',
    });
    const [otp, setOtp] = useState(['', '', '', '']);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [validationErrors, setValidationErrors] = useState({
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        name: '',
    });

    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    const handlePaymentSubmit = () => {
        // Validate input fields
        const errors = {};
        if (!paymentMethod.cardNumber) {
        errors.cardNumber = 'Card number is required';
        }
        if (!paymentMethod.expiryDate) {
        errors.expiryDate = 'Expiry date is required';
        }
        if (!paymentMethod.cvc) {
        errors.cvc = 'CVC is required';
        }
        if (!paymentMethod.name) {
        errors.name = 'Name is required';
        }

        // Check if there are any errors
        if (Object.keys(errors).length > 0) {
        setValidationErrors(errors);
        return;
        }

        // If no errors, proceed to OTP verification step
        setStep(2);
    };

    const handleOtpChange = (index, value) => {
        // Validate input to allow only single digits
        const digit = value.replace(/\D/g, '').substring(0, 1);

        // Update the corresponding digit in the OTP array
        const updatedOtp = [...otp];
        updatedOtp[index] = digit;
        setOtp(updatedOtp);

        // Focus on the next input box
        if (digit && index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
        }

        // Check if all digits are filled
        if (updatedOtp.every((digit) => digit !== '')) {
        // If all digits are filled, consider it as a successful payment
        setPaymentSuccess(true);
        // Hide the OTP input div
        setStep(0);
        }
    };

    const handleMakeAnotherPayment = () => {
        // Reset the state to the first step and hide the third step
        setStep(1);
        setPaymentSuccess(false);
    
        // Clear any previously entered payment information
        setPaymentMethod({
          cardNumber: '',
          expiryDate: '',
          cvc: '',
          name: '',
        });
        setOtp(['', '', '', '']);
        setValidationErrors({
          cardNumber: '',
          expiryDate: '',
          cvc: '',
          name: '',
        });
    };


    return  (
        <Layouts>
            <div className='payments'>
                <div className='container'>
                    <div className='row'>
                        <div className='payments_div'>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">

                                <h3>Cards</h3>
                                <div className='payments_nav'>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="cards-tab" data-bs-toggle="tab" data-bs-target="#cards" type="button" role="tab" aria-controls="cards" aria-selected="true">
                                            <div className='left'>
                                                <div className='left_div'>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width='14px' height='14px' viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"/></svg>
                                                    </span>
                                                    <h4>Creadit / Debit Card</h4>
                                                </div>
                                                <h5>
                                                    <Image src={Percentagelogo} alt="percentage" width="100" height="100" />
                                                    <p>Offers available</p>
                                                </h5>
                                            </div>
                                            <div className='right'>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width='10px' height='10px' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                                                </span>
                                            </div>
                                        </button>
                                    </li>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="cards" role="tabpanel" aria-labelledby="cards-tab">
                                            <div className='navtab_border'>
                                                <div>
                                                {step === 1 && (
                                                    <div className='input_div'>
                                                        <div className='heading'>
                                                            <h2>Select Payment Option</h2>
                                                        </div>
                                                        <div className='input_area'>
                                                            <div className='label_area'>
                                                                <label>Card number:</label>
                                                            </div>
                                                            <div className='label_area'>
                                                                <input
                                                                    type="tel"  // Use "tel" type to show a numeric keyboard on mobile devices
                                                                    pattern="\d*"  // Use the pattern attribute to only allow digits
                                                                    maxLength="16"  // Set the maximum length to 16 digits
                                                                    placeholder="Enter card number"
                                                                    value={paymentMethod.cardNumber}
                                                                    onChange={(e) => {
                                                                        // Ensure the entered value does not exceed 16 digits
                                                                        const limitedValue = e.target.value.slice(0, 16).replace(/\D/g, '');  // Remove non-numeric characters
                                                                        setPaymentMethod({ ...paymentMethod, cardNumber: limitedValue });
                                                                        setValidationErrors({ ...validationErrors, cardNumber: '' });
                                                                    }}
                                                                    onKeyDown={(e) => {
                                                                        // Allow only numeric characters, backspace, and delete
                                                                        if (!/^\d$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
                                                                        e.preventDefault();
                                                                        }
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className='error_msg'>
                                                                <p className="error">{validationErrors.cardNumber}</p>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-6 input_area'>
                                                                <div className='label_area'>
                                                                    <label>Expiry date:</label>
                                                                </div>
                                                                <div className='label_area'>
                                                                    <input
                                                                        type="date"
                                                                        placeholder="Expiry date"
                                                                        value={paymentMethod.expiryDate}
                                                                        onChange={(e) => {
                                                                            setPaymentMethod({ ...paymentMethod, expiryDate: e.target.value });
                                                                            setValidationErrors({ ...validationErrors, expiryDate: '' });
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className='error_msg'>
                                                                    <p className="error">{validationErrors.expiryDate}</p>
                                                                </div>
                                                            </div>
                                                            <div className='col-6 input_area'>
                                                                <div className='label_area'>
                                                                    <label>CVC:</label>
                                                                </div>
                                                                <div className='label_area'>
                                                                    <input
                                                                        type="number"
                                                                        pattern="\d*"
                                                                        maxLength="3"  // Set the maximum length to 3 digits
                                                                        placeholder="CVC"
                                                                        value={paymentMethod.cvc}
                                                                        onChange={(e) => {
                                                                            // Ensure the entered value does not exceed 3 digits
                                                                            const limitedValue = e.target.value.slice(0, 3);
                                                                            setPaymentMethod({ ...paymentMethod, cvc: limitedValue });
                                                                            setValidationErrors({ ...validationErrors, cvc: '' });
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className='error_msg'>
                                                                    <p className="error">{validationErrors.cvc}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='input_area'>
                                                            <div className='label_area'>
                                                                <label>Name:</label>
                                                            </div>
                                                            <div className='label_area'>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Enter your name"
                                                                    value={paymentMethod.name}
                                                                    onChange={(e) => {
                                                                        setPaymentMethod({ ...paymentMethod, name: e.target.value });
                                                                        setValidationErrors({ ...validationErrors, name: '' });
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className='error_msg'>
                                                                <p className="error">{validationErrors.name}</p>
                                                            </div>
                                                        </div>
                                                        <div className='otp_button'>
                                                            <button onClick={handlePaymentSubmit}>Proceed to OTP Verification</button>
                                                        </div>
                                                    </div>
                                                )}

                                                {step === 2 && (
                                                    <div className='otp_box'>
                                                        <div className='heading'>
                                                            <h2>OTP verification</h2>
                                                        </div>
                                                        <p>Enter the OTP sent to your mobile or email:</p>
                                                        <div className='otp_input'>
                                                            {otp.map((digit, index) => (
                                                                <div className='input_devide'>
                                                                    <input
                                                                        key={index}
                                                                        type="text"
                                                                        maxLength="1"
                                                                        value={digit}
                                                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                                                        ref={inputRefs[index]}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {paymentSuccess && (
                                                    <div className='successful_box'>
                                                        <div className='right'>
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                                            </span>
                                                        </div>
                                                        <div className='text'>
                                                            <h3>Payment successful!</h3>
                                                            <p>We are processing the same and you will be notified via email.</p>
                                                        </div>
                                                        <div className='details'>
                                                            <ul>
                                                                <li>
                                                                    <span>Transactions ID</span>
                                                                    <span>CDFF123476359</span>
                                                                </li>
                                                                <li>
                                                                    <span>Date</span>
                                                                    <span>22-12-2022</span>
                                                                </li>
                                                                <li>
                                                                    <span>Mode of Payment</span>
                                                                    <span>Credit Card</span>
                                                                </li>
                                                                <li>
                                                                    <span>Transaction Status</span>
                                                                    <span>Success</span>
                                                                </li>
                                                                <li>
                                                                    <span>Customer Name</span>
                                                                    <span>Wade Warren</span>
                                                                </li>
                                                                <li>
                                                                    <span>Payment Amount</span>
                                                                    <span>$235.00</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className='backBtn'>
                                                            <Link href='/' onClick={handleMakeAnotherPayment}>Make another payments</Link>
                                                        </div>
                                                    </div>
                                                )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3>Upi</h3>
                                <div className='payments_nav'>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="upi-tab" data-bs-toggle="tab" data-bs-target="#upi" type="button" role="tab" aria-controls="upi" aria-selected="false">
                                            <div className='left'>
                                                <div className='left_div'>
                                                    <span>
                                                        <Image src={Upilogo} alt='upi' width="100" height="100" />
                                                    </span>
                                                    <h4>Pay By Any UPI App</h4>
                                                </div>
                                                <h5>
                                                    <p>Use any UPI on your phone to pay</p>
                                                </h5>
                                            </div>
                                            <div className='right'>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width='10px' height='10px' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                                                </span>
                                            </div>
                                        </button>
                                    </li>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade" id="upi" role="tabpanel" aria-labelledby="upi-tab">
                                            <div className='navtab_border'></div>
                                        </div>
                                    </div>
                                </div>

                                <h3>Net Banking</h3>
                                <div className='payments_nav'>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="banking-tab" data-bs-toggle="tab" data-bs-target="#banking" type="button" role="tab" aria-controls="banking" aria-selected="false">
                                            <div className='left'>
                                                <div className='left_div'>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width='14px' height='14px' viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"/></svg>
                                                    </span>
                                                    <h4>Net Banking</h4>
                                                </div>
                                            </div>
                                            <div className='right'>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width='10px' height='10px' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                                                </span>
                                            </div>
                                        </button>
                                    </li>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade" id="banking" role="tabpanel" aria-labelledby="banking-tab">
                                            <div className='navtab_border'></div>
                                        </div>
                                    </div>
                                </div>

                                <h3>Pay On Delivery</h3>
                                <div className='payments_nav'>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="Pay-tab" data-bs-toggle="tab" data-bs-target="#Pay" type="button" role="tab" aria-controls="Pay" aria-selected="true">
                                            <div className='left'>
                                                <div className='left_div'>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width='14px' height='14px' viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"/></svg>
                                                    </span>
                                                    <h4>Cash On Delivery</h4>
                                                </div>
                                            </div>
                                            <div className='right'>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width='10px' height='10px' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                                                </span>
                                            </div>
                                        </button>
                                    </li>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade" id="Pay" role="tabpanel" aria-labelledby="Pay-tab">
                                            <div className='navtab_border'></div>
                                        </div>
                                    </div>
                                </div>

                            </ul>
                            <div className='payments_btns'>
                                <button>Proceed To Pay $225</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}