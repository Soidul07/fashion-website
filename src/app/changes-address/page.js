"use client"
import React, { useState, useContext, useEffect } from 'react';
import { Layouts } from '../Component'
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { Country, State } from 'country-state-city';
import { MenuThemeContext } from '../globalstate/GlobalStateContext';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import _ from 'lodash';

export default function page() {
    const { loggedInUserData,setLoggedInUserData, accessToken } = useContext(MenuThemeContext);
    const [addressBtnLoader, setAddressBtnLoader] = useState(false);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    // active class
    const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsScrollingDown(true);
    } else {
        // Scrolling up
        setIsScrollingDown(false);
    }

    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    };

    useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, [lastScrollTop]);

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

    const validateAddress = values => {
        const errors = {};

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

        return errors;
    };

    const addressFormik = useFormik({
        initialValues: {
            address: '',
            city: '',
            state: '',
            country: '',
            pin_code: '',
        },
        validate: validateAddress,
        onSubmit: async (values, { resetForm }) => {
            if (!accessToken) return;
            setAddressBtnLoader(true);

            const formData = new FormData();
            formData.append('address', values.address);
            formData.append('city', values.city);
            formData.append('state', values.state);
            formData.append('country', values.country);
            formData.append('pin_code', values.pin_code);

            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/edit-address`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${accessToken}`,
                    },
                });
                if (response.data.status === 'success') {
                    toast.success('Address updated successfully!');
                    //resetForm();
                }else {
                    toast.error(response.data.message || 'Address Updation failed. Please try again.');
                }
            } catch (error) {
                if(error.response.data.message){
                    toast.error(error.response.data.message || 'Invalid Credentials');
                }else{
                    toast.error(error.message || 'Network Error');
                }
            } finally {
                setAddressBtnLoader(false);
            }
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
                addressFormik.setFieldValue('address', addressData.address);
                addressFormik.setFieldValue('city', addressData.city);
                addressFormik.setFieldValue('state', addressData.state);
                addressFormik.setFieldValue('country', addressData.country);
                addressFormik.setFieldValue('pin_code', addressData.pin_code);

                // Set selected country and states
                const country = countries.find(country => country.name === addressData.country);
                if (country) {
                    setSelectedCountry(country.isoCode);
                    const stateList = State.getStatesOfCountry(country.isoCode);
                    setStates(stateList);
                    const state = stateList.find(s => s.name === addressData.state);
                    if (state) setSelectedState(state.isoCode);
                }
            } else {
                toast.error('Failed to load address. Please try again.');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || 'Network Error');
        }
    };

    // Fetch countries on component mount
    useEffect(() => {
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
            <div className='cart_box'>
                <div className='container'>
                    <div className='form'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='cart_field address_changes'>
                                    <h3>Address Changes</h3>
                                    <div className='cart_field_box'>
                                        <form onSubmit={addressFormik.handleSubmit}>
                                            <div className='row'>
                                                <div className='col-lg-6 col-md-6 col-12'>
                                                    <div className='cart_input'>
                                                    <label>Address</label>
                                                        <input
                                                            id="address"
                                                            name="address"
                                                            type="text"
                                                            onChange={addressFormik.handleChange}
                                                            onBlur={addressFormik.handleBlur}
                                                            value={removeExtraSpace(addressFormik.values.address)}
                                                            placeholder='Enter your Address'
                                                        />
                                                        {addressFormik.touched.address && addressFormik.errors.address ? (
                                                            <div className="error">{addressFormik.errors.address}</div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className='col-lg-6 col-md-6 col-12'>
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
                                                                    addressFormik.setFieldValue('country', ''); // Set Formik's country value to empty
                                                                    handleCountryChange(''); // Pass empty string to handleCountryChange
                                                                } else {
                                                                    // Find the country object by ISO code
                                                                    const selectedCountry = countries.find(country => country.isoCode === selectedCountryISO);

                                                                    if (selectedCountry) {
                                                                        const selectedCountryName = selectedCountry.name;

                                                                        // Update Formik value with the country name
                                                                        addressFormik.setFieldValue('country', selectedCountryName);

                                                                        // Update the selectedCountry with ISO code
                                                                        setSelectedCountry(selectedCountryISO);

                                                                        // Pass the ISO code to handleCountryChange
                                                                        handleCountryChange(selectedCountryISO);
                                                                    }
                                                                }
                                                            }}
                                                            onBlur={addressFormik.handleBlur}
                                                        >
                                                            <option value="">Select a country</option>
                                                            {countries.map((country) => (
                                                                <option key={country.isoCode} value={country.isoCode}>
                                                                    {country.name}
                                                                </option>
                                                            ))}
                                                        </select>

                                                        {addressFormik.touched.country && addressFormik.errors.country ? (
                                                            <div className="error">{addressFormik.errors.country}</div>
                                                        ) : null}
                                                    </div>
                                                </div> 
                                                <div className='col-lg-6 col-md-6 col-12'>
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
                                                                    addressFormik.setFieldValue('state', ''); // Set Formik's state value to empty
                                                                    handleStateChange(''); // Pass empty string to handleStateChange
                                                                } else {
                                                                    // Find the state object by ISO code
                                                                    const selectedState = states.find(state => state.isoCode === selectedStateISO);

                                                                    if (selectedState) {
                                                                        const selectedStateName = selectedState.name;

                                                                        // Update Formik value with the state name
                                                                        addressFormik.setFieldValue('state', selectedStateName);

                                                                        // Update the selectedState with ISO code
                                                                        setSelectedState(selectedStateISO);

                                                                        // Pass the ISO code to handleStateChange
                                                                        handleStateChange(selectedStateISO);
                                                                    }
                                                                }
                                                            }}
                                                            onBlur={addressFormik.handleBlur}>
                                                            <option value="">Select a state</option>
                                                            {states.map((state) => (
                                                                <option key={state.isoCode} value={state.isoCode}>
                                                                    {state.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        {addressFormik.touched.state && addressFormik.errors.state ? (
                                                            <div className="error">{addressFormik.errors.state}</div>
                                                        ) : null}
                                                    </div>
                                                </div> 
                                                <div className='col-lg-6 col-md-6 col-12'>
                                                    <div className='cart_input'>
                                                        <label>City</label>
                                                        <input
                                                            id="city"
                                                            name="city"
                                                            type="text"
                                                            onChange={addressFormik.handleChange}
                                                            onBlur={addressFormik.handleBlur}
                                                            value={removeExtraSpace(addressFormik.values.city)}
                                                            placeholder='Enter your City'
                                                        />
                                                        {addressFormik.touched.city && addressFormik.errors.city ? (
                                                            <div className="error">{addressFormik.errors.city}</div>
                                                        ) : null}
                                                    </div>
                                                </div> 

                                                <div className='col-lg-6 col-md-6 col-12'>
                                                    <div className='cart_input'>
                                                        <label>Pin Code</label>
                                                        <input
                                                            id="pin_code"
                                                            name="pin_code"
                                                            type="text"
                                                            onChange={addressFormik.handleChange}
                                                            onBlur={addressFormik.handleBlur}
                                                            value={removeExtraSpace(addressFormik.values.pin_code)}
                                                            placeholder='Enter your Pin Code'
                                                        />
                                                        {addressFormik.touched.pin_code && addressFormik.errors.pin_code ? (
                                                            <div className="error">{addressFormik.errors.pin_code}</div>
                                                        ) : null}
                                                    </div>
                                                </div> 
                                            </div>
                                            <div className='changes_btn'>
                                                <button type="submit" disabled={addressBtnLoader}>
                                                    {addressBtnLoader ? 'submitting...' : 'Submit'}
                                                </button>
                                            </div>
                                        </form>
                                    </div>       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}