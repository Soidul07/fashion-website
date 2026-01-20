"use client"
import React, { useState } from 'react';
import { Layouts } from '../Component';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import axios from 'axios';

export default function page() {
    const [loading, setLoading] = useState(false);

    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate,
        onSubmit: async (values) => {
            setLoading(true);
            try {
                const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_BASE_URL}/forgot-password`,
                    { email: values.email }
                );

                if (response.data.status === 'success') {
                    toast.success('Password reset link sent to your email!');
                    formik.resetForm(); // Reset form after success
                } else {
                    toast.error(response.data.message || 'Failed to send reset link.');
                }
            } catch (error) {
                toast.error(error.response?.data?.message || 'Something went wrong. Please try again.');
            } finally {
                setLoading(false);
            }
        },
    });
    return (
        <Layouts>
            <div className='acount_box'>
                <div className='container'>
                    <div className='row'>
                        <div className='acount_box_top'>
                            <h3>Forgot Password</h3>
                        </div>
                        <div className='acount_box_bottom'>
                            <div className="account_box">
                                <div className='accountbox_padding'>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="account_div">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder='Enter your Email'
                                                {...formik.getFieldProps('email')}
                                            />
                                            {formik.touched.email && formik.errors.email && (
                                                <div className="error">{formik.errors.email}</div>
                                            )}
                                        </div>
                                        <div className='account_div'>
                                            <button type="submit" disabled={loading}>
                                                {loading ? 'Sending...' : 'Submit'}
                                            </button>
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