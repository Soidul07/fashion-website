"use client"
import React, { useEffect,useState,useContext } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import axios from 'axios';
import Slider from "react-slick";

import { HeaderLogo,ColursOne,ColursOneOne,ColursTwo} from "../../assets/index";
import { MenuThemeContext } from "../../globalstate/GlobalStateContext";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";
import { FaBars } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";
import { usePathname } from "next/navigation";

const currentDate = new Date();

export default function Header() {
  const { themeOptionsData, categoryMenus, addToCart, cartItems, wishlistItems, addToWishlist } = useContext(MenuThemeContext);
  const [isLoadingCart, setisLoadingCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // header sticky

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);

  // Calculate the total number of items in the cart
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // body active class
  useEffect(() => {
    if (isActive) {
      document.body.classList.add('active');
    } else {
      document.body.classList.remove('active');
    }
    return () => {
      document.body.classList.remove('active');
    };
  }, [isActive]);

  const handleLoginClick = () => {
    setIsActive(!isActive);
  };

  // hedear search
  const handleClick1 = () => {
    setIsActive1(!isActive1);
  };

  // sale_discount

  const [isHidden, setIsHidden] = useState(false);

  const handleCrossClick = () => {
    setIsHidden(true);
  };

  let socialLinks = {};
  try {
    socialLinks = JSON.parse(themeOptionsData.social_links);
  } catch (error) {
    socialLinks = {};
  }

  const handleAddToCart = (product) => {
    if (product && quantity > 0) {
      setisLoadingCart(true);

      addToCart(product, quantity)
        .then(() => {
          setisLoadingCart(false);
        })
        .catch(err => {
          console.error("Error adding to cart:", err);
          setisLoadingCart(false);
        });
    }
  };

  const safeJsonArray = (value) => {
    try {
      const parsed = typeof value === 'string' ? JSON.parse(value) : value;
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const [activeCategory, setActiveCategory] = useState(null); // Track the active category
  const topHeaderTexts = safeJsonArray(themeOptionsData?.top_header1_text);
  const handleCategoryClick = (slug) => {
    setActiveCategory((prevCategory) => (prevCategory === slug ? null : slug)); // Toggle active category
  };

  const handleWishlist = (product) => {
      addToWishlist(product)
          .catch(err => console.error("Error adding to wishlist:", err));
  };

  var slidertext = {
    infinite:true, 
    speed: 2000,
    slidesToShow:1, 
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    fade: false,
  };

  const pathname = usePathname();
  const isHome = pathname === "/";


  return (
    <>
    <div className='header_position'>
      <div className={`sale_discount ${isHidden ? 'hidden' : ''}`}>
        <div className='container'>
          <div className='row'>
            <div>
              <Slider {...slidertext}>
                {topHeaderTexts.map((item, index) => (
                  <div className="item" key={index}>
                    <p>{item.text}</p>
                  </div>
                ))}
              </Slider>
            </div>
            <span className='span_cross' onClick={handleCrossClick}></span>
          </div>
        </div>
      </div>

      <header
        className={`header ${isHome ? "home_header" : "inner_header"} ${
          isHeaderFixed ? "active" : ""
        }`}
        style={isHeaderFixed ? { } : { }}
      >
        <div className='container'>
          <div className='row'>
            <div className='header_main'>
              <div className='logo'>
                <Link href="/">
                  <Image src={ themeOptionsData?.header_logo } width="100" height="100" alt="logo" />
                </Link>
              </div>
              <div className='humbergers'>
                <button onClick={handleLoginClick}>
                  <FaBars />
                </button>
              </div>
              <div className="mobile_class">
                <div className='mobile_background'>
                  <div className='menu'>
                    <ul>
                      <li>
                        <Link href="/" onClick={handleLoginClick}>Home</Link>
                      </li>
                        {/* Dynamic Categories Rendering */}
                        {categoryMenus.map((category) => (
                          <li
                            key={category.slug}
                            className={activeCategory === category.slug ? 'active' : ''} // Conditionally add 'active' class
                            onClick={() => handleCategoryClick(category.slug)} // Set active category on click
                          >
                            <Link href="#">
                              {category.name}
                              <span>
                                <FaAngleDown />
                              </span>
                            </Link>
                            {category.subcategories && category.subcategories.length > 0 && (
                              <div className="mega_menu">
                                <div className="row">
                                  <div className="col-lg-3 col-12 category_menu">
                                    <h2>{category.name}</h2>
                                    <div className='submenu_close'>
                                      <button>
                                        <FaArrowLeftLong />
                                      </button>
                                    </div>
                                    <ul>
                                      {category.subcategories.map((subcategory) => (
                                        <li key={subcategory.slug}>
                                          <Link href={`/categories/${subcategory.slug}`}>
                                            {subcategory.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                    <Link href="/products" className="all_product_btn">
                                      All Product
                                    </Link>
                                  </div>

                                  {/* Latest Products */}
                                  <div className="col-lg-6 category_menu_box">
                                    <h2>Latest products of the {category.name}</h2>
                                    <div className="header_product_box best_products">
                                      <div className="row bottom">
                                      {category.latest_products && category.latest_products.length > 0 && (
                                        <>
                                          {category.latest_products.map((product) => (
                                            <div key={product.id} className="col-4 padding">
                                              <div className="product_box">
                                                <div className='pro_box_po'>
                                                  <Link href={`/products/${product.slug}`} className="product_box_image">
                                                    <div className="images">
                                                      <Image
                                                        src={product.product_image}
                                                        alt={product.title}
                                                        width={225}
                                                        height={300}
                                                        className="productOne"
                                                      />
                                                      <Image
                                                        src={product.product_image2}
                                                        alt={product.title}
                                                        width={675}
                                                        height={900}
                                                        className="productTwo"
                                                      />
                                                    </div>
                                                    {product.sale_price &&
                                                      new Date(product.sale_start) <= currentDate &&
                                                      currentDate <= new Date(product.sale_end) && (
                                                        <div className="sale">
                                                          <p>Sale</p>
                                                          <p>{product.discount_percentage}% off</p>
                                                        </div>
                                                      )}
                                                  </Link>
                                                  {product.stock > 0 ? (
                                                    <div className="cart_btn">
                                                      <button
                                                        onClick={() => handleAddToCart(product)}
                                                        disabled={isLoadingCart || quantity <= 0}
                                                      >
                                                        {isLoadingCart ? 
                                                          (
                                                              "Adding.."
                                                          ) : (
                                                            <>
                                                                <MdOutlineShoppingBag />
                                                            </>
                                                          )  
                                                        }
                                                      </button>
                                                    </div>
                                                  ) : (
                                                    <div className="cart_btn">
                                                      <button disabled>Out of stock</button>
                                                    </div>
                                                  )}
                                                </div>

                                                {/* Product Info */}
                                                <div className="product_box_text">
                                                  <h2>{product.title}</h2>
                                                 <div className='save_box'>
                                              <h3>
                                                {product.sale_price
                                                  ? "₹"+product.sale_price 
                                                  : "₹"+product.regular_price}
                                                {" "}
                                                {product.sale_price && (
                                                  <span>
                                                    {"₹"+product.regular_price}
                                                  </span>
                                                )}
                                              </h3>
                                              {product.sale_price && parseFloat(product.regular_price) > parseFloat(product.sale_price) && (
                                                <p className='save_number'>
                                                 Save ₹{(parseFloat(product.regular_price) - parseFloat(product.sale_price)).toFixed(2)}
                                                </p>
                                              )}
                                            </div>
                                                </div>
                                                <div className="like">
                                                  <button onClick={() => handleWishlist(product)}>
                                                    <FaHeart />
                                                  </button>
                                                  <button onClick={() => {
                                                      const url = `${window.location.origin}/products/${product.slug}`;
                                                      const text = `Check out ${product.title} - ₹${product.sale_price || product.regular_price}`;
                                                      window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
                                                  }}>
                                                      <FaShare />
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                        </>
                                      )}
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-lg-3 category_menu_ads">
                                    {themeOptionsData && themeOptionsData.mega_menu_banner && (
                                      <Image
                                        src={themeOptionsData?.mega_menu_banner}
                                        alt="mega-menu-banner-img"
                                        width={350}
                                        height={650}
                                      />
                                    )}
                                  </div>
                                </div>
                              </div>
                            )}
                          </li>
                        ))}
                      {/* <li>
                        <Link href="/" onClick={handleLoginClick}>Sales</Link>
                      </li> */}
                    </ul>
                  </div>
                  <div className='all_button'>
                    {/* <div className='logos'>
                      <Link href="/">
                        <Image src={ themeOptionsData?.header_logo } width="100" height="100" alt="logo" priority />
                      </Link>
                    </div> */}
                    <div>
                      <button className='close_btn' onClick={handleLoginClick}>
                        <IoClose />
                      </button>
                    </div>
                  </div>
                  <div className='search_panel_background responsive_background'>
                    <button onClick={handleLoginClick}></button>
                  </div>
                </div>
              </div>
              <div className='search_cart_option'>
                <Link href='/wishlist' className='hearts_button'>
                  <FaRegHeart />
                  <span>
                    {wishlistItems?.length || 0}
                  </span>
                </Link>
                <Link href='/my-account' className='account_button'>
                  <IoPersonCircleOutline />
                </Link>
                {/* <button className='notification_button' onClick={handleClick1}>
                  <IoSearchOutline />
                </button> */}
                <Link href='/cart' className='cart_button'>
                  <MdOutlineShoppingBag />
                  <span>
                    {cartCount || 0}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
      
      <div className='Bottom_bar'>
        <ul className='d-flex justify-content-between align-items-center'>
            <li>
                <Link href="/">
                    <AiOutlineHome />
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <Link href="/wishlist">
                    <FaRegHeart />
                    <span>Wishlist</span>
                </Link>
            </li>
            {/* <li>
                <button onClick={handleClick1}>
                    <IoSearchOutline />
                    <span>Search</span>
                </button>
            </li> */}
            <li>
              <Link href='/cart' className='cart_button'>
                <MdOutlineShoppingBag />
                <span className='cart_number'>
                  {cartCount || 0}
                </span>
                <span>Cart</span>
              </Link>
            </li>
            <li>
                <Link href="/my-account">
                    <IoPersonCircleOutline />
                    <span>Account</span>
                </Link>
            </li>
            <li>
                <Link href='/products'>
                  <AiOutlineProduct />
                  <span>All Products</span>
                </Link>
            </li>
        </ul>
      </div>

      <div className={`search_panel ${isActive1 ? 'active' : ''}`}>
        <div className='search_width'>
          <div className='close_btn' onClick={handleClick1}>
            <button>
              <IoClose />
            </button>
          </div>
          <div className='search_box'>
            <input type='text' placeholder='Search for products..' />
            <button type='submit' >
              <IoSearchOutline />
            </button>
          </div>
          <div className='quick_links_box'>
            <h5>Quick Links :</h5>
            <ul>
              <li>
                <Link href="#">
                    <div className='quick_image'>
                      <Image src={ColursOne} width="100" height="100" alt='quick-image' />
                    </div>
                    <span>Katan</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                    <div className='quick_image'>
                      <Image src={ColursOneOne} width="100" height="100" alt='quick-image' />
                    </div>
                    <span>Silk</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                    <div className='quick_image'>
                      <Image src={ColursTwo} width="100" height="100" alt='quick-image' />
                    </div>
                    <span>Tat</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`search_panel_background ${isActive1 ? 'active' : ''}`}>
        <button onClick={handleClick1}></button>
      </div>
    </>
  )
}