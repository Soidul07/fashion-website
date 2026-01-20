"use client"
import React, { useState,useContext,useEffect } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter, usePathname } from 'next/navigation';
import { MenuThemeContext } from "../../../globalstate/GlobalStateContext";
import _ from 'lodash';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Account() {
    const router = useRouter();
    const pathname = usePathname()
    const { setIsLogin, setLoggedInUserData, setAccessToken } = useContext(MenuThemeContext);
    const [activeTab, setActiveTab] = useState('Tab1');
    const [rememberMe, setRememberMe] = useState(false);

    // Remember me code
        useEffect(() => {
            // Pre-fill the form with saved credentials if "Remember me" was selected
            const savedEmail = localStorage.getItem('remembered_email');
            const savedPassword = localStorage.getItem('remembered_password');
            if (savedEmail && savedPassword) {
                loginFormik.setValues({
                    email: savedEmail,
                    password: savedPassword,
                });
                setRememberMe(true);
            }
        }, [router]);

        const handleRememberMeChange = () => {
            setRememberMe(!rememberMe);
        };        
    // Remember me code end

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const removeExtraSpace = (s) => {
        if (typeof s !== 'string') {
            return '';
        }
        var rSpace = s.replace(/\s{2,}/g, ' ');
        return _.trimStart(rSpace);
    };

    // For Registration
    const [registrationBtnLoader, setRegistrationBtnLoader] = useState(false);

    const validateRegistration = values => {
        const errors = {};

        if (!values.name || !_.trim(values.name)) {
            errors.name = 'Name is required';
        } else if (values.name.length > 50) {
            errors.name = 'Must be 50 characters or less';
        } else if (values.name.match("[<>]")) {
            errors.name = 'Please provide a valid Name';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        // Password Validation
        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        } else if (!/[A-Z]/.test(values.password)) {
            errors.password = 'Password must contain at least one uppercase letter';
        } else if (!/[0-9]/.test(values.password)) {
            errors.password = 'Password must contain at least one number';
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
            errors.password = 'Password must contain at least one special character';
        }

        // Password Confirmation Validation
        if (!values.password_confirmation) {
            errors.password_confirmation = 'Confirm Password is required';
        } else if (values.password_confirmation !== values.password) {
            errors.password_confirmation = 'Passwords must match';
        }

        // Phone Validation
        if (!values.phone) {
            errors.phone = 'Phone no is required';
        } else if (!/^\+?[0-9\s\-()]*$/.test(values.phone)) {
            errors.phone = 'Invalid Phone no';
        } else {
            // Remove non-numeric characters to check the length of the digits
            const contactNoDigits = values.phone.replace(/[^\d]/g, '');
            if (contactNoDigits.length < 10 || contactNoDigits.length > 15) {
                errors.phone = 'Phone no must be between 10 and 15 digits'; // Fixed this line
            }
        }

        return errors;
    };

    const registrationFormik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            password_confirmation: '',
        },
        validate: validateRegistration,
        onSubmit: (values, { resetForm }) => {
            setRegistrationBtnLoader(true);

            axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/register`, values)
                .then(function (response) {
                    if (response.data.status === "success") {
                        resetForm({ values: '' });

                        // Store user data in localStorage or context
                        if(response.data.user){
                            // Save tokens in localStorage
                            localStorage.setItem('access_token', response.data.token);
                            localStorage.setItem('logged_in_user_data', JSON.stringify(response.data.user));
                            setIsLogin(true);
                            setLoggedInUserData(response.data.user);
                            setAccessToken(response.data.token);
                        }else{
                            setIsLogin(false);
                            setLoggedInUserData(null);
                            setAccessToken('');
                        }

                        router.push('/');
                        toast.success(response.data.message);
                    } else {
                        toast.error(response.data.message || 'Registration failed. Please try again.');
                    }
                })
                .catch(function (error) {
                    if(error.response.data.message){
                        toast.error(error.response.data.message || 'Invalid Credentials');
                    }else{
                        toast.error(error.message || 'Network Error');
                    }
                })
                .finally(() => {
                    setRegistrationBtnLoader(false);
                });
        },
    });

    // For Login
    const [loginBtnLoader, setLoginBtnLoader] = useState(false);

    const validateLogin = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        }

        return errors;
    };

    const loginFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: validateLogin,
        onSubmit: (values, { resetForm }) => {
            setLoginBtnLoader(true);

            axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/login`, values)
                .then(function (response) {
                    if (response.data.status === "success") {
                        resetForm({ values: '' });

                        // Store user data in localStorage or context
                        if(response.data.user){
                          // Save tokens in localStorage
                          localStorage.setItem('access_token', response.data.token);
                          localStorage.setItem('logged_in_user_data', JSON.stringify(response.data.user));
                          setIsLogin(true);
                          setLoggedInUserData(response.data.user);
                          setAccessToken(response.data.token);
              
                          // Store credentials if "Remember me" is checked
                          if (rememberMe) {
                            localStorage.setItem('remembered_email', values.email);
                            localStorage.setItem('remembered_password', values.password);
                          } else {
                            localStorage.removeItem('remembered_email');
                            localStorage.removeItem('remembered_password');
                          }
                        }else{
                            setIsLogin(false);
                            setLoggedInUserData(null);
                            setAccessToken('');
                        }
                        
                        // Check if the user was on the checkout page
                        if (pathname === '/checkout') {
                            router.push('/checkout'); // Stay on checkout page
                        } else if (pathname === '/my-account') { 
                            router.push('/my-account'); // Stay on checkout page
                        }else {
                            router.push('/'); // Redirect to home page
                        }
                        toast.success(response.data.message);
                    } else {
                        toast.error(response.data.message || 'Login failed. Please try again.');
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
                    setLoginBtnLoader(false);
                });
        },
    });

    return (
        <>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button onClick={() => handleTabClick('Tab1')} className={activeTab === 'Tab1' ? 'active' : ''}>
                        Sign in
                        <span>
                            <IoArrowForwardCircleOutline />
                        </span>
                    </button>
                </li>
                <li className="nav-item">
                    <button onClick={() => handleTabClick('Tab2')} className={activeTab === 'Tab2' ? 'active' : ''}>
                        <span>
                            <IoPersonCircleOutline />
                        </span>
                        Register
                    </button>
                </li>
            </ul>
            <div className="tab-content">
                <div className='tab-pane'>
                    {activeTab === 'Tab1' && (
                        <div className="account_box">
                            <h2>Sign In</h2>
                            <form onSubmit={loginFormik.handleSubmit}>
                                <div className="account_div">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={loginFormik.handleChange}
                                        onBlur={loginFormik.handleBlur}
                                        value={loginFormik.values.email}
                                        placeholder='Enter your Email'
                                    />
                                    {loginFormik.touched.email && loginFormik.errors.email ? (
                                        <div className="error">{loginFormik.errors.email}</div>
                                    ) : null}
                                </div>
                                <div className="account_div">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={loginFormik.handleChange}
                                        onBlur={loginFormik.handleBlur}
                                        value={loginFormik.values.password}
                                        placeholder='Enter your Password'
                                    />
                                    {loginFormik.touched.password && loginFormik.errors.password ? (
                                        <div className="error">{loginFormik.errors.password}</div>
                                    ) : null}
                                </div>
                                <div className='account_div account_flex'>
                                    <div className='remember'>
                                        <input
                                            type="checkbox"
                                            id="Remember1"
                                            checked={rememberMe}
                                            onChange={handleRememberMeChange}
                                        />
                                        <label htmlFor="Remember1">
                                            Remember Me
                                        </label>
                                    </div>
                                    <div className='forgot'>
                                    <Link href="/forgot-password">Lost your password?</Link>
                                    </div>
                                </div>
                                <div className='account_div'>
                                    <button type="submit" disabled={loginBtnLoader}>
                                        {loginBtnLoader ? 'Logging In...' : 'Log In'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                    {activeTab === 'Tab2' && (
                        <div className="account_box">
                            <h2>Register</h2>
                            <form onSubmit={registrationFormik.handleSubmit}>
                                <div className="account_div">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        onChange={registrationFormik.handleChange}
                                        onBlur={registrationFormik.handleBlur}
                                        value={removeExtraSpace(registrationFormik.values.name)}
                                        placeholder='Enter your Name'
                                    />
                                    {registrationFormik.touched.name && registrationFormik.errors.name ? (
                                        <div className="error">{registrationFormik.errors.name}</div>
                                    ) : null}
                                </div>
                                <div className="account_div">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={registrationFormik.handleChange}
                                        onBlur={registrationFormik.handleBlur}
                                        value={removeExtraSpace(registrationFormik.values.email)}
                                        placeholder='Enter your Email'
                                    />
                                    {registrationFormik.touched.email && registrationFormik.errors.email ? (
                                        <div className="error">{registrationFormik.errors.email}</div>
                                    ) : null}
                                </div>
                                <div className="account_div">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="phone"
                                        onChange={registrationFormik.handleChange}
                                        onBlur={registrationFormik.handleBlur}
                                        value={removeExtraSpace(registrationFormik.values.phone)}
                                        placeholder='Enter your Phone'
                                    />
                                    {registrationFormik.touched.phone && registrationFormik.errors.phone ? (
                                        <div className="error">{registrationFormik.errors.phone}</div>
                                    ) : null}
                                </div>
                                <div className="account_div">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={registrationFormik.handleChange}
                                        onBlur={registrationFormik.handleBlur}
                                        value={registrationFormik.values.password}
                                        placeholder='Enter your Password'
                                    />
                                    {registrationFormik.touched.password && registrationFormik.errors.password ? (
                                        <div className="error">{registrationFormik.errors.password}</div>
                                    ) : null}
                                </div>
                                <div className="account_div">
                                    <label htmlFor="password_confirmation">Confirm Password</label>
                                    <input
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        type="password"
                                        onChange={registrationFormik.handleChange}
                                        onBlur={registrationFormik.handleBlur}
                                        value={registrationFormik.values.password_confirmation}
                                        placeholder='Enter your Confirm Password'
                                    />
                                    {registrationFormik.touched.password_confirmation && registrationFormik.errors.password_confirmation ? (
                                        <div className="error">{registrationFormik.errors.password_confirmation}</div>
                                    ) : null}
                                </div>
                                <div className='account_div'>
                                    <button type="submit" disabled={registrationBtnLoader}>
                                        {registrationBtnLoader ? 'Registering...' : 'Register'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
