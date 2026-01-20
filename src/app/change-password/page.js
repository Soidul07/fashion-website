"use client"
import React, { useState, useContext, useEffect } from 'react';
import { Layouts } from '../Component';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import axios from 'axios';
import { MenuThemeContext } from '../globalstate/GlobalStateContext';

export default function page() {
    const { accessToken, setIsLogout } = useContext(MenuThemeContext);
    const [loading, setLoading] = useState(false);

    const handleLogoutClick = () => {
        setIsLogout(true);
    };

    const validate = (values) => {
        const errors = {};
        if (!values.currentPassword) {
          errors.currentPassword = 'Current password is required';
        }
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
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    },
    validate,
    onSubmit: async (values) => {
        if (!accessToken) return;
        setLoading(true);

        try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/change-password`,
            {
                current_password: values.currentPassword,
                new_password: values.newPassword,
                new_password_confirmation: values.confirmPassword,
            },
            {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
            }
        );

        if (response.data.status === 'success') {
            toast.success('Password changed successfully!');
            formik.resetForm(); // Reset the form after successful submission
            handleLogoutClick();
        } else {
            toast.error(response.data.message || 'Password change failed. Please try again.');
        }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || 'Network error');
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
                            <h3>Change Password</h3>
                            </div>
                            <div className='acount_box_bottom'>
                                <div className="account_box">
                                    <div className='accountbox_padding'>
                                        <form onSubmit={formik.handleSubmit}>
                                            <div className="account_div">
                                                <label htmlFor="currentPassword">Current Password</label>
                                                <input
                                                id="currentPassword"
                                                type="password"
                                                placeholder='Enter your current password'
                                                {...formik.getFieldProps('currentPassword')}
                                                />
                                                {formik.touched.currentPassword && formik.errors.currentPassword && (
                                                <div className="error">{formik.errors.currentPassword}</div>
                                                )}
                                            </div>
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
                                                    {loading ? 'Changing...' : 'Change Password'}
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