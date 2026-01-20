"use client"
import { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import { Layouts } from '../Component'
import { AvaterBoy,AvaterGirl } from '../assets/index'
import { FiDownload } from "react-icons/fi";
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import { MenuThemeContext } from '../globalstate/GlobalStateContext';
import _ from 'lodash';

export default function page() {
    const { loggedInUserData,setLoggedInUserData, accessToken } = useContext(MenuThemeContext);
    const [imageFile, setImageFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [profileBtnLoader, setProfileBtnLoader] = useState(false);
  
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Validate image type and size
            const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
            const maxSize = 2 * 1024 * 1024; // 2 MB

            if (!validTypes.includes(file.type)) {
                toast.error('Please upload a valid image (JPEG, PNG, GIF).');
                return;
            }

            if (file.size > maxSize) {
                toast.error('Image size must be less than 2 MB.');
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            setImageFile(file);
            reader.readAsDataURL(file);
        }
    };

    const removeExtraSpace = (s) => {
        if (typeof s !== 'string') {
            return '';
        }
        var rSpace = s.replace(/\s{2,}/g, ' ');
        return _.trimStart(rSpace);
    };

    const validateProfile = values => {
        const errors = {};
        const phone = String(values.phone || '');

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

        if (!phone) {
            errors.phone = 'Phone no is required';
        } else if (!/^\+?[0-9\s\-()]*$/.test(phone)) {
            errors.phone = 'Invalid Phone no';
        } else {
            // Remove non-numeric characters to check the length of the digits
            const contactNoDigits = phone.replace(/[^\d]/g, '');
            if (contactNoDigits.length < 10 || contactNoDigits.length > 15) {
                errors.phone = 'Phone no must be between 10 and 15 digits';
            }
        }
        return errors;
    };

    const profileFormik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
        },
        validate: validateProfile,
        onSubmit: async (values, { resetForm }) => {
            if (!accessToken) return;
            setProfileBtnLoader(true);

            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('email', values.email);
            formData.append('phone', values.phone);
            if (imageFile) {
                formData.append('profile_image', imageFile);
            }

            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/edit-profile`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${accessToken}`,
                    },
                });
                if (response.data.status === 'success') {
                    // Customize how user_data is used to update context
                    localStorage.setItem('logged_in_user_data', JSON.stringify(response.data.user));
                    setLoggedInUserData((prevData) => ({
                        ...prevData,
                        name: response.data.user.name || prevData.name,
                        email: response.data.user.email || prevData.email,
                        phone: response.data.user.phone || prevData.phone,
                        profile_image: response.data.user.profile_image || prevData.profile_image,
                    }));

                    toast.success('Profile updated successfully!');
                    resetForm();
                    setPreviewImage(null);
                    setImageFile(null);
                }else {
                    toast.error(response.data.message || 'Profile Updation failed. Please try again.');
                }
            } catch (error) {
                if(error.response.data.message){
                    toast.error(error.response.data.message || 'Invalid Credentials');
                }else{
                    toast.error(error.message || 'Network Error');
                }
            } finally {
                setProfileBtnLoader(false);
            }
        },
    });

    useEffect(() => {
        if (loggedInUserData) {
            profileFormik.setValues({
                name: loggedInUserData.name || '',
                email: loggedInUserData.email || '',
                phone: loggedInUserData.phone || '',
            });
            // Set preview image if available
            if (loggedInUserData.profile_image) {
                setPreviewImage(loggedInUserData.profile_image);
            }
            console.log('loggedInUserData',loggedInUserData);
        }
    }, [loggedInUserData]);

    
    return (
        <Layouts>
            <div className='cart_box'>
                <div className='container'>
                    <form onSubmit={profileFormik.handleSubmit}> 
                        <div className='row'>
                            <div className='col-lg-8 col-md-12 col-12'>
                                <div className='cart_field profile_edit'>
                                    <h3>Edit Profile</h3>
                                    <div className='cart_field_box'>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <div id="image-preview" className="profile_image_box">
                                                    {previewImage ? (
                                                    <Image
                                                        id="preview-img"
                                                        src={previewImage}
                                                        alt="Image Preview"
                                                        width={100}
                                                        height={100}
                                                    />
                                                    ) : (
                                                    <Image
                                                        id="preview-img"
                                                        src={AvaterGirl}
                                                        alt="Avatar for Women"
                                                        width={100}
                                                        height={100}
                                                    />
                                                    )}
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-12'>
                                                <div className='cart_input padding_top'>
                                                    <label>Profile Image</label>
                                                        <label htmlFor="profile_image" className="custom-file-upload form-control d-flex justify-content-between align-items-center ">
                                                            <input
                                                            name="profile_image"
                                                            id="profile_image"
                                                            type="file"
                                                            accept="image/*"
                                                            className="form-control"
                                                            style={{ display: 'none' }}
                                                            onChange={handleImageChange}
                                                            />
                                                            Upload Your Image
                                                            <span>
                                                                <FiDownload />
                                                            </span>
                                                        </label>
                                                </div>
                                            </div> 
                                            <div className='col-lg-6 col-md-6 col-12'>
                                                <div className='cart_input padding_top'>
                                                    <label>Name</label>
                                                    <input
                                                        name="name"
                                                        type="text"
                                                        placeholder='Enter your Name'
                                                        onChange={profileFormik.handleChange}
                                                        onBlur={profileFormik.handleBlur}
                                                        value={removeExtraSpace(profileFormik.values.name)}
                                                    />
                                                    {profileFormik.touched.name && profileFormik.errors.name ? (
                                                            <div className="error">{profileFormik.errors.name}</div>
                                                    ) : null}
                                                </div>
                                            </div> 
                                            <div className='col-lg-6 col-md-6 col-12'>
                                                <div className='cart_input padding_top'>
                                                    <label>Email</label>
                                                    <input
                                                        name="email"
                                                        type="text"
                                                        placeholder='Enter your Email'
                                                        onChange={profileFormik.handleChange}
                                                        onBlur={profileFormik.handleBlur}
                                                        value={removeExtraSpace(profileFormik.values.email)}
                                                    />
                                                    {profileFormik.touched.email && profileFormik.errors.email ? (
                                                    <div className="error">{profileFormik.errors.email}</div>
                                                ) : null}
                                                </div>
                                            </div> 
                                            <div className='col-lg-6 col-md-6 col-12'>
                                                <div className='cart_input padding_top'>
                                                    <label>Phone Number</label>
                                                    <input
                                                        name="phone"
                                                        type="text"
                                                        placeholder='Enter your Phone Number'
                                                        onChange={profileFormik.handleChange}
                                                        onBlur={profileFormik.handleBlur}
                                                        value={removeExtraSpace(profileFormik.values.phone)}
                                                    />
                                                    {profileFormik.touched.phone && profileFormik.errors.phone ? (
                                                    <div className="error">{profileFormik.errors.phone}</div>
                                                ) : null}
                                                </div>
                                            </div> 
                                            <div className='col-12 col-lg-7 padding_top edit_button'>
                                                <button type="submit" disabled={profileBtnLoader}>
                                                    {profileBtnLoader ? 'submitting...' : 'Submit'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Layouts>
    )
}