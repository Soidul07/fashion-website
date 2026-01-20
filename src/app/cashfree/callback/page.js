"use client"
import { useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { MenuThemeContext } from '../../globalstate/GlobalStateContext';
import { toast } from 'react-toastify';

export default function CashfreeCallback() {
    const router = useRouter();
    const { setCartItems, setSubtotal, setTotal } = useContext(MenuThemeContext);

    useEffect(() => {
        // Clear cart data
        localStorage.removeItem("cartItems");
        localStorage.removeItem("cartSubtotal");
        localStorage.removeItem("cartTotal");
        setCartItems([]);
        setSubtotal(0);
        setTotal(0);
        
        // Show success message and redirect
        toast.success('Payment successful');
        window.location.href = '/thank-you';
    }, [setCartItems, setSubtotal, setTotal]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <p>Processing payment...</p>
        </div>
    );
}