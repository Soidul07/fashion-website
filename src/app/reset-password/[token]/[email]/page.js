"use client"
import React, { useState, useEffect } from 'react';
import { Layouts } from '../../../Component';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import axios from 'axios';
import { useRouter, useParams } from 'next/navigation'; 

export default function ResetPasswordPage() {
    const router = useRouter();
    const params = useParams();
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (params.token && params.email) {
            setToken(params.token);
            setEmail(decodeURIComponent(params.email));
        } else {
            toast.error("Invalid reset password link.");
            router.push("/forgot-password"); // Redirect if token or email is missing
        }
    }, [params, router]);

    const validate = (values) => {
        const errors = {};
        if (!values.newPassword) {
            errors.newPassword = 'New password is required';
        } else if (values.newPassword.length < 8) {
            errors.newPassword = 'Password must be at least 8 characters';
        } else if (!/[A-Z]/.test(values.newPassword)) {
            errors.newPassword = 'Password must contain at least one uppercase letter';
        } else if (!/[0-9]/.test(values.newPassword)) {
            errors.newPassword = 'Password must contain at least one number';
        } else if (!/[@$!%*?&#]/.test(values.newPassword)) {
            errors.newPassword = 'Password must contain at least one special character';
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = 'Confirm password is required';
        } else if (values.confirmPassword !== values.newPassword) {
            errors.confirmPassword = 'Passwords must match';
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            newPassword: '',
            confirmPassword: '',
        },
        validate,
        onSubmit: async (values) => {
            setLoading(true);

            try {
                const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_BASE_URL}/reset-password`,
                    {
                        token,
                        email,
                        password: values.newPassword,
                        password_confirmation: values.confirmPassword,
                    }
                );

                if (response.data.status === 'success') {
                    toast.success('Password reset successfully! Redirecting to login...');
                    formik.resetForm();
                    setTimeout(() => router.push("/my-account"), 2000);
                } else {
                    toast.error(response.data.message || 'Failed to reset password.');
                }
            } catch (error) {
                toast.error(error.response?.data?.message || 'Something went wrong. Please try again.');
            } finally {
                setLoading(false);
            }
        },
    });

    if (!token || !email) return null; // Avoid rendering if token/email is not yet set

    return (
        <Layouts>
            <div className='acount_box'>
                <div className='container'>
                    <div className='row'>
                        <div className='acount_box_top'>
                            <h3>Reset Password</h3>
                        </div>
                        <div className='acount_box_bottom'>
                            <div className="account_box">
                                <div className='accountbox_padding'>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="account_div">
                                            <label htmlFor="newPassword">New Password</label>
                                            <input
                                                id="newPassword"
                                                type="password"
                                                placeholder='Enter your new password'
                                                {...formik.getFieldProps('newPassword')}
                                            />
                                            {formik.touched.newPassword && formik.errors.newPassword && (
                                                <div className="error">{formik.errors.newPassword}</div>
                                            )}
                                        </div>
                                        <div className="account_div">
                                            <label htmlFor="confirmPassword">Confirm New Password</label>
                                            <input
                                                id="confirmPassword"
                                                type="password"
                                                placeholder='Confirm your new password'
                                                {...formik.getFieldProps('confirmPassword')}
                                            />
                                            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                                <div className="error">{formik.errors.confirmPassword}</div>
                                            )}
                                        </div>
                                        <div className='account_div'>
                                            <button type="submit" disabled={loading}>
                                                {loading ? 'Resetting...' : 'Reset Password'}
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
    );
}
