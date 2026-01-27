"use client"
import React, { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import { Layouts } from '../Component'
import Acount from '../Component/Widgets/Header/Account';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Country, State } from 'country-state-city';
import { MenuThemeContext } from '../globalstate/GlobalStateContext';
import qs from 'qs';
import { useRouter } from 'next/navigation';
import {bellgif} from '../assets/index'

export default function page() {
    const router = useRouter();
    const { cartItems, subtotal, total, isLogin, accessToken, setCartItems, setSubtotal, setTotal } = useContext(MenuThemeContext);
    const [checkoutBtnLoader, setCheckoutBtnLoader] = useState(false);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const currentDate = new Date();

    const toggleAccordion = () => {
        const accordionContent = document.getElementById("panelsStayOpen-collapseOne");
        accordionContent.classList.toggle("show"); // Toggle the 'show' class
    
        // Scroll to the top of the accordion content
        if (accordionContent.classList.contains("show")) {
            // If the accordion is expanded, scroll to the top
            accordionContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleCountryChange = (countryCode) => {
        if (!countryCode) {
            setSelectedCountry('');  // Reset the selected country
            setStates([]);           // Clear the states list
            setSelectedState('');    // Reset selected state
            return;
        }
    
        // Use the passed ISO code directly if a country is selected
        setSelectedCountry(countryCode);
    
        // Fetch the states based on the selected country ISO code
        const stateList = State.getStatesOfCountry(countryCode);
        setStates(stateList);
        setSelectedState(''); // Reset selected state when country changes
    };
    
    const handleStateChange = (stateCode) => {
        // If stateCode is empty, reset selected state
        if (!stateCode) {
            setSelectedState('');  // Reset the selected state
            return;
        }
    
        // Use the passed ISO code to set the selected state
        setSelectedState(stateCode);
    };

    const removeExtraSpace = (s) => {
        if (typeof s !== 'string') {
            return '';
        }
        var rSpace = s.replace(/\s{2,}/g, ' ');
        return _.trimStart(rSpace);
    };

    const validateCheckout = values => {
        const errors = {};

        if (!values.name || !_.trim(values.name)) {
            errors.name = 'First Name is required';
        } else if (values.name.length > 50) {
            errors.name = 'Must be 50 characters or less';
        } else if (values.name.match("[<>]")) {
            errors.name = 'Please provide a valid First Name';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.phone_number) {
            errors.phone_number = 'Phone no is required';
        } else if (!/^\+?[0-9\s\-()]*$/.test(values.phone_number)) {
            errors.phone_number = 'Invalid Phone no';
        } else {
            // Remove non-numeric characters to check the length of the digits
            const contactNoDigits = values.phone_number.replace(/[^\d]/g, '');
            if (contactNoDigits.length < 10 || contactNoDigits.length > 15) {
                errors.phone_number = 'Phone no must be between 10 and 15 digits'; // Fixed this line
            }
        }

        if (!values.address || !_.trim(values.address)) {
            errors.address = 'Address is required';
        }

        if (!values.city || !_.trim(values.city)) {
            errors.city = 'City is required';
        }

        if (!values.state || !_.trim(values.state)) {
            errors.state = 'State is required';
        }

        if (!values.country || !_.trim(values.country)) {
            errors.country = 'Country is required';
        }

        if (!values.pin_code || !_.trim(values.pin_code)) {
            errors.pin_code = 'Pin Code is required';
        }

        if (!values.payment_method) {
            errors.payment_method = "Please select a payment method.";
        }

        return errors;
    };

    const checkoutFormik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone_number: '',
            address: '',
            city: '',
            state: '',
            country: '',
            pin_code: '',
            payment_method: '',
        },
        validate: validateCheckout,
        onSubmit: (values, { resetForm }) => {
            if (!accessToken) return;
            setCheckoutBtnLoader(true);

            const payload = {
                ...values,
                cartItems: cartItems.map(item => ({
                    product_id: item.product_id,
                    quantity: item.quantity,
                    price: item.product.sale_price || item.product.regular_price
                })),
                total: total,
            };

            // Convert payload to application/x-www-form-urlencoded format using qs.stringify
            const formData = qs.stringify(payload);

            //console.log('payload',payload);
            axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/order`, formData, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            .then(function (response) {
                if (response.data.status === 'success') {
                    if(response.data.payment_method==='cod'){
                        resetForm({ values: '' });
                        // empyty cart data
                        localStorage.removeItem("cartItems");
                        localStorage.removeItem("cartSubtotal");
                        localStorage.removeItem("cartTotal");
                        setCartItems([]);
                        setSubtotal(0);
                        setTotal(0);
                        // empyty cart data end
                        toast.success(response.data.message);
                        router.push('/thank-you');
                    }else if(response.data.payment_method==='cashfree'){
                        // Handle Cashfree payment
                        if(response.data.payment_url){
                            window.location.href = response.data.payment_url;
                        }else{
                            // Payment successful, clear cart and redirect
                            resetForm({ values: '' });
                            localStorage.removeItem("cartItems");
                            localStorage.removeItem("cartSubtotal");
                            localStorage.removeItem("cartTotal");
                            setCartItems([]);
                            setSubtotal(0);
                            setTotal(0);
                            toast.success(response.data.message);
                            router.push('/thank-you');
                        }
                    }else{
                        const payuData = response.data.payuData; // Get the PayU data
                        const payuUrl = response.data.payuUrl; // Get the PayU URL
        
                        // Build the PayU form dynamically
                        const form = document.createElement('form');
                        form.method = 'POST';
                        form.action = payuUrl;
        
                        // Add hidden inputs for PayU data
                        Object.keys(payuData).forEach(key => {
                            const input = document.createElement('input');
                            input.type = 'hidden';
                            input.name = key;
                            input.value = payuData[key];
                            form.appendChild(input);
                        });
        
                        document.body.appendChild(form);
                        form.submit(); // Submit the form to PayU
                    }
                } else {
                    toast.error(response.data.message || 'Order failed. Please try again.');
                }
            })
            .catch(function (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error(error.message || 'Network Error');
                }
            })
            .finally(() => {
                setCheckoutBtnLoader(false);
            });
        },
    });

    // Fetch user address on component mount
    const fetchUserAddress = async () => {
        if (!accessToken) return;
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/address`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (response.data.status === 'success') {
                const addressData = response.data.address; // Assuming this contains the address object
                if(addressData){
                    if(addressData?.address){
                        checkoutFormik.setFieldValue('address', addressData.address);
                    }
                    if(addressData?.city){
                        checkoutFormik.setFieldValue('city', addressData.city);
                    }
                    if(addressData?.pin_code){
                        checkoutFormik.setFieldValue('pin_code', addressData.pin_code);
                    }
                    if(addressData?.state && addressData.country){
                        checkoutFormik.setFieldValue('state', addressData.state);
                        checkoutFormik.setFieldValue('country', addressData.country);
                        // Set selected country and states
                        const country = countries.find(country => country.name === addressData.country);
                        if (country) {
                            setSelectedCountry(country.isoCode);
                            const stateList = State.getStatesOfCountry(country.isoCode);
                            setStates(stateList);
                            const state = stateList.find(s => s.name === addressData.state);
                            if (state) setSelectedState(state.isoCode);
                        }
                    }
                }
            } else {
                toast.error('Failed to load address. Please try again.');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || 'Network Error');
        }
    };

    useEffect(() => {
        // Fetch the list of countries
        const countryList = Country.getAllCountries();
        setCountries(countryList);
    }, []);

    // Fetch user address when accessToken changes or countries are available
    useEffect(() => {
        if (accessToken && countries.length > 0) {
            fetchUserAddress();
        }
    }, [accessToken, countries]);
    return (
        <Layouts>
            {!isLogin && (
            <div className='cart_signup acount_box'>
                <div className='container'>
                    <div className='row cart_panel_bottom '>
                        <div className="accordion acount_box_bottom" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        Registering Customer? Click here to Login / Sign Up
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body">
                                        <Acount />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
            <div className='cart_box'>
                <div className='container'>
                    <div className='form'>
                        <form onSubmit={checkoutFormik.handleSubmit}>
                            <div className='row'>
                                <div className='col-lg-8 col-md-12 col-12'>
                                    <div className='cart_field'>
                                        <h3>Billing Details</h3>
                                        <div className='cart_field_box'>
                                            <div className='row'>
                                                <div className='col-lg-12 col-md-12 col-12'>
                                                    <div className='cart_input'>
                                                        <label>Name</label>
                                                        <input
                                                            id="name"
                                                            name="name"
                                                            type="text"
                                                            onChange={checkoutFormik.handleChange}
                                                            onBlur={checkoutFormik.handleBlur}
                                                            value={removeExtraSpace(checkoutFormik.values.name)}
                                                            placeholder='Enter your First Name'
                                                        />
                                                        {checkoutFormik.touched.name && checkoutFormik.errors.name ? (
                                                            <div className="error">{checkoutFormik.errors.name}</div>
                                                        ) : null}
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                                        <div className='cart_field_box'>
                                            <div className='cart_input'>
                                                <label>Email</label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    onChange={checkoutFormik.handleChange}
                                                    onBlur={checkoutFormik.handleBlur}
                                                    value={removeExtraSpace(checkoutFormik.values.email)}
                                                    placeholder='Enter your Email'
                                                />
                                                {checkoutFormik.touched.email && checkoutFormik.errors.email ? (
                                                    <div className="error">{checkoutFormik.errors.email}</div>
                                                ) : null}
                                            </div>
                                        </div>   
                                        <div className='cart_field_box'>
                                            <div className='cart_input'>
                                                <label>Phone Number</label>
                                                <input
                                                    id="phone_number"
                                                    name="phone_number"
                                                    type="phone"
                                                    onChange={checkoutFormik.handleChange}
                                                    onBlur={checkoutFormik.handleBlur}
                                                    value={removeExtraSpace(checkoutFormik.values.phone_number)}
                                                    placeholder='Enter your Phone Number'
                                                />
                                                {checkoutFormik.touched.phone_number && checkoutFormik.errors.phone_number ? (
                                                    <div className="error">{checkoutFormik.errors.phone_number}</div>
                                                ) : null}
                                            </div>
                                        </div>   
                                        <div className='cart_field_box'>
                                            <div className='cart_input'>
                                                <label>Address</label>
                                                <input
                                                    id="address"
                                                    name="address"
                                                    type="text"
                                                    onChange={checkoutFormik.handleChange}
                                                    onBlur={checkoutFormik.handleBlur}
                                                    value={removeExtraSpace(checkoutFormik.values.address)}
                                                    placeholder='Enter your Address'
                                                />
                                                {checkoutFormik.touched.address && checkoutFormik.errors.address ? (
                                                    <div className="error">{checkoutFormik.errors.address}</div>
                                                ) : null}
                                            </div>
                                        </div>  
                                        <div className='cart_field_box'>
                                            <div className='cart_input'>
                                                <label>Country</label>
                                                <select 
                                                    id="country" 
                                                    name="country" 
                                                    value={selectedCountry || ""} // Make sure this matches ISO code
                                                    onChange={(e) => {
                                                        const selectedCountryISO = e.target.value;

                                                        // If an empty country is selected, set Formik value to empty string
                                                        if (selectedCountryISO === "") {
                                                            checkoutFormik.setFieldValue('country', ''); // Set Formik's country value to empty
                                                            handleCountryChange(''); // Pass empty string to handleCountryChange
                                                        } else {
                                                            // Find the country object by ISO code
                                                            const selectedCountry = countries.find(country => country.isoCode === selectedCountryISO);

                                                            if (selectedCountry) {
                                                                const selectedCountryName = selectedCountry.name;

                                                                // Update Formik value with the country name
                                                                checkoutFormik.setFieldValue('country', selectedCountryName);

                                                                // Update the selectedCountry with ISO code
                                                                setSelectedCountry(selectedCountryISO);

                                                                // Pass the ISO code to handleCountryChange
                                                                handleCountryChange(selectedCountryISO);
                                                            }
                                                        }
                                                    }}
                                                    onBlur={checkoutFormik.handleBlur}
                                                >
                                                    <option value="">Select a country</option>
                                                    {countries.map((country) => (
                                                        <option key={country.isoCode} value={country.isoCode}>
                                                            {country.name}
                                                        </option>
                                                    ))}
                                                </select>

                                                {checkoutFormik.touched.country && checkoutFormik.errors.country ? (
                                                    <div className="error">{checkoutFormik.errors.country}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className='cart_field_box'>
                                            <div className='cart_input'>
                                                <label>State</label>
                                                <select 
                                                    id="state" 
                                                    name="state" 
                                                    value={selectedState || ""} // Ensure this matches ISO code
                                                    onChange={(e) => {
                                                        const selectedStateISO = e.target.value;

                                                        // If an empty state is selected, set Formik value to empty string
                                                        if (selectedStateISO === "") {
                                                            checkoutFormik.setFieldValue('state', ''); // Set Formik's state value to empty
                                                            handleStateChange(''); // Pass empty string to handleStateChange
                                                        } else {
                                                            // Find the state object by ISO code
                                                            const selectedState = states.find(state => state.isoCode === selectedStateISO);

                                                            if (selectedState) {
                                                                const selectedStateName = selectedState.name;

                                                                // Update Formik value with the state name
                                                                checkoutFormik.setFieldValue('state', selectedStateName);

                                                                // Update the selectedState with ISO code
                                                                setSelectedState(selectedStateISO);

                                                                // Pass the ISO code to handleStateChange
                                                                handleStateChange(selectedStateISO);
                                                            }
                                                        }
                                                    }}
                                                    onBlur={checkoutFormik.handleBlur}>
                                                    <option value="">Select a state</option>
                                                    {states.map((state) => (
                                                        <option key={state.isoCode} value={state.isoCode}>
                                                            {state.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {checkoutFormik.touched.state && checkoutFormik.errors.state ? (
                                                    <div className="error">{checkoutFormik.errors.state}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className='cart_field_box'>
                                            <div className='cart_input'>
                                                <label>City</label>
                                                <input
                                                    id="city"
                                                    name="city"
                                                    type="text"
                                                    onChange={checkoutFormik.handleChange}
                                                    onBlur={checkoutFormik.handleBlur}
                                                    value={removeExtraSpace(checkoutFormik.values.city)}
                                                    placeholder='Enter your City'
                                                />
                                                {checkoutFormik.touched.city && checkoutFormik.errors.city ? (
                                                    <div className="error">{checkoutFormik.errors.city}</div>
                                                ) : null}
                                            </div>
                                        </div> 
                                        <div className='cart_field_box'>
                                            <div className='cart_input'>
                                                <label>Pin Code</label>
                                                <input
                                                    id="pin_code"
                                                    name="pin_code"
                                                    type="text"
                                                    onChange={checkoutFormik.handleChange}
                                                    onBlur={checkoutFormik.handleBlur}
                                                    value={removeExtraSpace(checkoutFormik.values.pin_code)}
                                                    placeholder='Enter your Pin Code'
                                                />
                                                {checkoutFormik.touched.pin_code && checkoutFormik.errors.pin_code ? (
                                                    <div className="error">{checkoutFormik.errors.pin_code}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-12 col-12'>
                                    <div className='cart_background'>
                                        <h3>Your Order</h3>
                                        {!cartItems || cartItems.length === 0 ? (
                                            <span>No products in the cart</span>
                                        ) : (
                                            <>
                                            <ul>
                                                <li>
                                                    <span>Products</span>
                                                    <span>Amount</span>
                                                </li>
                                                {cartItems.map((item, index) => (
                                                    <li key={index}>
                                                        <span>
                                                            {item?.product?.title+' ' || ' '} 
                                                            - 
                                                            {' '+item?.product?.category?.name+' ' || ' '} 
                                                            = 
                                                            {' '+item.quantity}
                                                        </span>
                                                        <span>
                                                            {(
                                                                (item.product.sale_price && 
                                                                new Date(item.product.sale_start) <= currentDate && 
                                                                currentDate <= new Date(item.product.sale_end) 
                                                                ? item.product.sale_price 
                                                                : item.product.regular_price) 
                                                                * item.quantity
                                                            ).toFixed(2)}
                                                        </span>
                                                    </li>
                                                ))}
                                                <li>
                                                    <span>Sub Total</span>
                                                    <span>₹{subtotal.toFixed(2)}</span>
                                                </li>
                                                <li>
                                                    <span>Total</span>
                                                    <span>₹{total.toFixed(2)}</span>
                                                </li>
                                            </ul>
                                            {/* <div className='check_details'>
                                                <div className='top'>
                                                    <input id="Check" type="checkbox" name="CheckDetails" value="Check" />
                                                    <label htmlFor="Check">
                                                        Check Details
                                                    </label>
                                                </div>
                                                <div className='bottom'>
                                                    <p>
                                                        Please send a check to share Name, Address, Pin Code, Phone Number, Email Id.
                                                    </p>
                                                </div>
                                            </div> */}

                                            <div className="cart_field_box mt-4">
                                                <h3 className="text-lg font-semibold">Payment Method</h3>

                                                <div className='order_msg_box'>
                                                    <div className='or_icon'>
                                                        <Image src={bellgif} alt="icon" width={60} height={60} />
                                                    </div>
                                                    <div className='or_text'>
                                                        <p>
                                                            Unlock faster delivery! <br />
                                                            Pay online → Arrives in 3 days  <br />
                                                            Choose COD → Arrives in 7 days  <br />
                                                            Faster joy with prepaid
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                                {/* PayU Payment Method */}
                                                <div className="cart_input d-flex items-center gap-3">
                                                    <input 
                                                        type="radio" 
                                                        id="payu" 
                                                        name="payment_method" 
                                                        value="payu" 
                                                        onChange={checkoutFormik.handleChange} 
                                                        checked={checkoutFormik.values.payment_method === 'payu'}
                                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                                    />
                                                    <label htmlFor="payu">Online payment</label>
                                                </div>

                                                <p className='arrive_msg'>Arrives on 3 days</p>
                                                
                                                {/* Cash on Delivery Payment Method */}
                                                <div className="cart_input d-flex items-center gap-3">
                                                    <input 
                                                        type="radio" 
                                                        id="cod" 
                                                        name="payment_method" 
                                                        value="cod" 
                                                        onChange={checkoutFormik.handleChange} 
                                                        checked={checkoutFormik.values.payment_method === 'cod'}
                                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                                    />
                                                    <label htmlFor="cod">Cash on Delivery (COD)</label>
                                                </div>

                                                <p className='arrive_msg'>Arrives in 7 days</p>

                                                {/* Show validation error if no payment method is selected */}
                                                {checkoutFormik.touched.payment_method && checkoutFormik.errors.payment_method ? (
                                                    <div className="error">{checkoutFormik.errors.payment_method}</div>
                                                ) : null}
                                            </div>

                                            <div className='check_btn'>
                                                {isLogin ? (
                                                    <button type="submit" disabled={checkoutBtnLoader}>
                                                        {checkoutBtnLoader ? 'Submitting...' : 'Place Order'}
                                                    </button>
                                                ) : (
                                                    <button type="button" onClick={toggleAccordion}>
                                                        Place Order
                                                    </button>
                                                )}
                                            </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}