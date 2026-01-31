"use client";
import React, { createContext, useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter, usePathname } from 'next/navigation';

export const MenuThemeContext = createContext();

export const MenuThemeProvider = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname()
  
  // State management
  const [isLogin, setIsLogin] = useState(false);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isLogout, setIsLogout] = useState(false);
  const [themeOptionsData, setThemeOptionsData] = useState(null);
  const [categoryMenus, setCategoryMenus] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  const fetchThemeOptionsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/get-theme-options`
      );
      if (response?.data?.data) {
        setThemeOptionsData(response?.data?.data);
      }
    } catch (error) {
      toast.error("Error fetching theme options: ", error.message);
    }
  };

  const fetchCategoryMenus = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/parent-categories-with-subcategories`
      );
      if (response.data.status === "success") {
        setCategoryMenus(response.data.data || []);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.msg || "Network Error fetching categories"
      );
    }
  };

  // Logout handler: clear user and cart data from state and localStorage
  const handleLogout = useCallback(async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/logout`,
        {},
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      if (response?.data?.status === "success") {
        localStorage.removeItem("logged_in_user_data");
        localStorage.removeItem("access_token");
        localStorage.removeItem("cartItems");
        localStorage.removeItem("cartSubtotal");
        localStorage.removeItem("cartTotal");
        localStorage.removeItem("wishlistItems");

        setIsLogin(false);
        setAccessToken(null);
        setLoggedInUserData(null);
        setCartItems([]);
        setSubtotal(0);
        setTotal(0);
        setWishlistItems([]);
        setIsLogout(false);
        if (pathname === '/my-account') {
          router.push('/my-account'); // Stay on checkout page
      } else {
          router.push('/'); // Redirect to home page
      }

        toast.success("Logged out successfully.");
      }
    } catch (error) {
      toast.error("Failed to logout.");
      console.error(error.message || error);
    }
  }, [accessToken, router]);

  // Add To Cart Code
    // LocalStorage helpers for cart management
    const saveCartToLocalStorage = (items, subtotal, total) => {
      localStorage.setItem("cartItems", JSON.stringify(items));
      localStorage.setItem("cartSubtotal", subtotal.toFixed(2));
      localStorage.setItem("cartTotal", total.toFixed(2));
    };          

    const loadCartFromLocalStorage = () => {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const cartSubtotal = parseFloat(localStorage.getItem("cartSubtotal")) || 0;
      const cartTotal = parseFloat(localStorage.getItem("cartTotal")) || 0;
      return { cartItems, cartSubtotal, cartTotal };
    };

    // Sync cart with both state and localStorage
    const syncCart = (updatedItems) => {
      setCartItems(updatedItems); 
      const { subtotal, total } = calculateTotals(updatedItems);
      setSubtotal(subtotal);
      setTotal(total);
      if (!isLogin) {  // Only sync to localStorage if the user is NOT logged in
        saveCartToLocalStorage(updatedItems, subtotal, total);
      }
    };

    // Fetch cart items from the API if user is logged in
    const fetchCartItems = async () => { 
      if (!accessToken) return;
    
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cart`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
    
        if (response?.data?.status === "success") { 
          syncCart(response.data.data || []);  // Sync with state and localStorage
        } else if (response?.data?.status === "warning") {
          toast.warn(response.data.message); // Show warning message for out-of-stock items
          syncCart(response.data.data || []);  // Still sync the cart items
        }
      } catch (error) {
        toast.error("Failed to fetch cart items. Please try again.");
      }
    };

    // Validate cart items before adding to cart
    const validateCartItem = (product, quantity) => {
      if (quantity > product.stock) {
        toast.error('Insufficient stock!');
        return false;
      }
      return true;
    };
  
    // Add to Cart (useCallback for performance)
    const addToCart = useCallback(
      async (product, quantity) => {
        if (!validateCartItem(product, quantity)) return;

        try {
          if (isLogin && accessToken) {
            const existingItem = cartItems.find((item) => item.product.id === product.id);
            if (existingItem) {
              const updatedQuantity = existingItem.quantity + quantity;
              const response = await axios.put(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/cart/update/${existingItem.id}`,
                { quantity: updatedQuantity },
                { headers: { Authorization: `Bearer ${accessToken}` } }
              );

              if (response?.data?.status === "success") {
                fetchCartItems();
                //toast.success(response?.data?.message);
              }else{
                toast.error(response?.data?.message);
              }
            } else {
              const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/cart/add`,
                { product_id: product.id, quantity },
                { headers: { Authorization: `Bearer ${accessToken}` } }
              );

              if (response?.data?.status === "success") {
                fetchCartItems();
                //toast.success(response?.data?.message);
              }else{
                toast.error(response?.data?.message);
              }
            }
          } else {
            const updatedItems = [...cartItems];
            const existingItem = updatedItems.find((item) => item.product.id === product.id);

            if (existingItem) {
              existingItem.quantity += quantity;
            } else {
              updatedItems.push({ product, quantity });
            }

            syncCart(updatedItems);
            toast.success("Product added to cart successfully!");
          }
        } catch (error) {
          toast.error("Failed to add product to cart.");
          console.error(error.message || error);
        }
      },
      [accessToken, isLogin, cartItems]
    );
    
    // Remove from Cart (useCallback for performance)
    const removeFromCart = useCallback(
      async (productId) => {
        try {
          if (isLogin && accessToken) {
            const response = await axios.delete(
              `${process.env.NEXT_PUBLIC_API_BASE_URL}/cart/remove/${productId}`,
              { headers: { Authorization: `Bearer ${accessToken}` } }
            );
            if (response?.data?.status === "success") {
              fetchCartItems();
              //toast.success(response?.data?.message);
            }
          } else {
            const updatedItems = cartItems.filter((item) => item.product.id !== productId);
            syncCart(updatedItems);
            //toast.success("Item removed from cart successfully!");
          }
        } catch (error) {
          toast.error("Failed to remove product from cart.");
          console.error(error.message || error);
        }
      },
      [accessToken, isLogin, cartItems]
    );

    // Sync guest cart with API after login
    const syncGuestCartWithAPI = async () => {
      const localCart = loadCartFromLocalStorage();
      
      if (localCart.cartItems.length > 0 && accessToken) {
        try {
        // Clear localStorage before syncing
        localStorage.removeItem("cartItems");

          const serverCartResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cart`, {
            headers: { Authorization: `Bearer ${accessToken}` },
          });
    
          const serverCart = serverCartResponse.data.data || [];
          const existingItemsMap = {};
    
          // Create a map for existing server cart items
          serverCart.forEach(item => {
            existingItemsMap[item.product.id] = item;
          });
    
          const batchRequests = localCart.cartItems.map(item => {
            const existingItem = existingItemsMap[item.product.id];
    
            // If the item exists on the server, just sync quantity by adding
            if (existingItem) {
                const newQuantity = existingItem.quantity + item.quantity;  // Merge the quantities
                return axios.put(
                  `${process.env.NEXT_PUBLIC_API_BASE_URL}/cart/update/${existingItem.id}`,
                  { quantity: newQuantity },
                  { headers: { Authorization: `Bearer ${accessToken}` } }
                );
            } else {
              // Add new item from local cart to the server cart
              return axios.post(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/cart/add`,
                { product_id: item.product.id, quantity: item.quantity },
                { headers: { Authorization: `Bearer ${accessToken}` } }
              );
            }
          });
    
          await Promise.all(batchRequests);
          
          // Fetch updated cart from API
          await fetchCartItems();  
        } catch (error) {
          toast.error("Error syncing cart:", error.message);
        }
      }else if(localCart.cartItems.length === 0 && accessToken){
        await fetchCartItems();
      }
    };

  // Calculate totals based on cart items
  const calculateTotals = (items) => {
    const subtotal = items.reduce((total, item) => {
      const price = Number(item.product.sale_price || item.product.regular_price);
      return total + (price * item.quantity);
    }, 0);

    const total = subtotal;

    return {
      subtotal: parseFloat(subtotal.toFixed(2)),
      total: parseFloat(total.toFixed(2)),
    };
  };
  // Add To Cart Code End   

  // Wishlist Code
    const saveWishlistToLocalStorage = (items) => {
      localStorage.setItem("wishlistItems", JSON.stringify(items));
    };
    
    const loadWishlistFromLocalStorage = () => {
      return JSON.parse(localStorage.getItem("wishlistItems")) || [];
    };

    // Fetch wishlist items from localStorage or API if logged in
    const fetchWishlistItems = async () => {
      if (!accessToken) return;
    
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/wishlist`, {
          headers: { Authorization: `Bearer ${accessToken}` }
        });
        if (response?.data?.status === "success") {
          setWishlistItems(response.data.data || []); // Sync with global state
        } else {
          toast.error(response?.data?.message);
        }
      } catch (error) {
        toast.error("Failed to fetch wishlist items. Please try again.");
      }
    };

    // Sync wishlist with both state and localStorage
    const syncGuestWishlistWithAPI = async () => {
      const localWishlist = loadWishlistFromLocalStorage();
      
      if (localWishlist.length > 0 && accessToken) {
        try {
          localStorage.removeItem("wishlistItems");
    
          const batchRequests = localWishlist.map(item =>
            axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/wishlist/add`, 
            { product_id: item.product.id },
            { headers: { Authorization: `Bearer ${accessToken}` } })
          );
          
          await Promise.all(batchRequests);
          await fetchWishlistItems(); // Fetch updated wishlist from server
        } catch (error) {
          toast.error("Error syncing wishlist:", error.message);
        }
      } else if (localWishlist.length === 0 && accessToken) {
        await fetchWishlistItems();
      }
    };

    // Add to wishlist (useCallback for performance)
    const addToWishlist = async (product) => {
      try {
        if (isLogin && accessToken) {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/wishlist/add`, 
            { product_id: product.id }, 
            { headers: { Authorization: `Bearer ${accessToken}` } }
          );
          
          if (response?.data?.status === "success") {
            fetchWishlistItems(); // Refresh the wishlist items
            toast.success(response?.data?.message);
          } else if (response?.data?.status === "exists") {
            toast.info("Product is already in your wishlist");
          } else {
            toast.error(response?.data?.message);
          }
        } else {
          // Check if the product is already in the local wishlist
          const isInWishlist = wishlistItems.some(item => item.product.id === product.id);

          if (isInWishlist) {
            toast.info("Product is already in your wishlist");
            return; // Exit early if the product is already in the wishlist
          }
          const updatedWishlist = [...wishlistItems, { product }];
          setWishlistItems(updatedWishlist);
          saveWishlistToLocalStorage(updatedWishlist);
          toast.success("Product added to wishlist successfully!");
        }
      } catch (error) {
        toast.error("Failed to add product to wishlist.");
        console.error(error.message || error);
      }
    };    

    // Remove from wishlist (useCallback for performance)
    const removeFromWishlist = async (productId) => {
      try {
        if (isLogin && accessToken) {
          const response = await axios.delete(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/wishlist/remove/${productId}`,
            { headers: { Authorization: `Bearer ${accessToken}` } }
          );
          
          if (response?.data?.status === "success") {
            fetchWishlistItems();
            toast.success(response?.data?.message);
          }
        } else {
          // Remove from local storage when not logged in
          const updatedWishlist = wishlistItems.filter((item) => item.product.id !== productId);

          // Check if the product was removed
          if (updatedWishlist.length < wishlistItems.length) {
            setWishlistItems(updatedWishlist);
            saveWishlistToLocalStorage(updatedWishlist);
            toast.success("Product removed from wishlist successfully!");
          } else {
            toast.info("Product is not in your wishlist.");
          }
        }
      } catch (error) {
        toast.error("Failed to remove product from wishlist.");
        console.error(error.message || error);
      }
    };
  // Wishlist Code End

    const initialize = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (token) { //console.log('aaaa',localStorage.getItem("logged_in_user_data"));
          const userData = JSON.parse(localStorage.getItem("logged_in_user_data"));
          setAccessToken(token);
          setLoggedInUserData(userData);
          setIsLogin(true); 
        } else { //console.log('bbbb');
          // Set the cart items, subtotal, and total for guest users
          const { cartItems, cartSubtotal, cartTotal } = loadCartFromLocalStorage();
          setCartItems(cartItems);
          setSubtotal(cartSubtotal);
          setTotal(cartTotal);
          setWishlistItems(loadWishlistFromLocalStorage());
        }
    
        await fetchThemeOptionsData();
        await fetchCategoryMenus();
    
        setIsInitialized(true);
      } catch (error) {
        toast.error("Error during initialization:", error.message);
      }
    }; 

  // Call initialize only once on component mount
  useEffect(() => {
    initialize();

    // Initialize wishlist from localStorage for guest users (if not logged in)
    if (!isLogin) {
      const localWishlist = loadWishlistFromLocalStorage();
      setWishlistItems(localWishlist);
    }
  }, []);

  // Sync guest cart with server when user logs in
  useEffect(() => {
    if (isLogin) {
      syncGuestCartWithAPI();  // Sync guest cart after login
      syncGuestWishlistWithAPI();  // Sync guest wishlist after login
    }
  }, [isLogin]);

  // Trigger logout when isLogout state changes
  useEffect(() => {
    if (isLogout) {
      handleLogout();
    }
  }, [isLogout]);

  useEffect(() => {
    const localWishlist = loadWishlistFromLocalStorage();
    // console.log("localWishlist", localWishlist);
    // console.log("cartWishlist", wishlistItems);
    // console.log("cartItems", cartItems);
  }, [cartItems,wishlistItems]);

  return (
    <MenuThemeContext.Provider
      value={{
        themeOptionsData,
        categoryMenus,
        loggedInUserData,
        setLoggedInUserData,
        accessToken,
        setAccessToken,
        isLogin,
        setIsLogin,
        isLogout,
        setIsLogout,
        cartItems,
        setCartItems,
        setSubtotal,
        setTotal,
        addToCart,
        removeFromCart,
        subtotal,
        total,
        calculateTotals,
        wishlistItems,
        addToWishlist,
        removeFromWishlist  
      }}
    >
      {isInitialized ? children: ""}
    </MenuThemeContext.Provider>
  );
};
