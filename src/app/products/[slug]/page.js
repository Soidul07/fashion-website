"use client"
import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { BlankImage,thread,sewing,gift,giftbox,worldwide,brand,measureimage,videopromo } from "../../assets/index";
import { Layouts } from '../../Component'
import BestProducts from '../../Component/Widgets/Homepage/BestProducts';
import FindCategories from '../../Component/Widgets/Homepage/FindCategories';
import Slider from "react-slick";
import { useParams } from 'next/navigation';
import axios from 'axios';
import { MenuThemeContext } from '../../globalstate/GlobalStateContext'; 
import { FaRegHeart } from "react-icons/fa";
import { MdFilterTiltShift } from "react-icons/md";
import FairSlider from '@/app/Component/Widgets/product/FairSlider';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


export default function page() {
  const { slug } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);





  // cart state
  const [count, setCount] = useState(1);
  const { addToCart, addToWishlist } = useContext(MenuThemeContext);
  const [quantity, setQuantity] = useState(1);
  const [isLoadingCart, setisLoadingCart] = useState(false);
  const currentDate = new Date();

  // thumb Slider
    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    });

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    };

    const settingsThumbs = {
        slidesToShow: 5,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        centerMode: false,
        swipeToSlide: true,
        focusOnSelect: true,
    };

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

    // Utility function to convert date format
    const formatDate = (dateStr) => {
      const date = new Date(dateStr);
      return date.toISOString().split('.')[0]; // Format as "2024-09-30T00:00:00"
    };

    // Function to fetch products by category from the API
    const fetchGetProductDetails = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/get-products-details-by-slug/${slug}`);
        //console.log(response.data);
        if (response.data.status === "success") {
          const product = response.data.product;
          // Convert dates
          const formattedStartDate = formatDate(product.sale_start);
          const formattedEndDate = formatDate(product.sale_end);
          setProductDetails({
            ...product,
            sale_start: formattedStartDate,
            sale_end: formattedEndDate
          });
        }
      } catch (error) {
        console.error(error.response?.data?.message || "Network Error");
      }
    };

  useEffect(() => {
    if (slug) {
      fetchGetProductDetails();
    }
  }, [slug]);

  // Function to calculate time remaining for the sale
  const calculateTimeRemaining = (saleStartDate, saleEndDate) => {
    const now = new Date();
    const start = new Date(saleStartDate);
    const end = new Date(saleEndDate);
  
    let daysRemaining = 0;
    let hoursRemaining = 0;
    let minutesRemaining = 0;
    let secondsRemaining = 0;
  
    if (now < start) {
      // Countdown to sale start
      const difference = start - now;
      daysRemaining = Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0);
      hoursRemaining = Math.max(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0);
      minutesRemaining = Math.max(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)), 0);
      secondsRemaining = Math.max(Math.floor((difference % (1000 * 60)) / 1000), 0);
    } else if (now >= start && now <= end) {
      // Countdown to sale end
      const difference = end - now;
      daysRemaining = Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0);
      hoursRemaining = Math.max(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0);
      minutesRemaining = Math.max(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)), 0);
      secondsRemaining = Math.max(Math.floor((difference % (1000 * 60)) / 1000), 0);
    } else {
      // Sale has ended or hasn't started
      daysRemaining = 0;
      hoursRemaining = 0;
      minutesRemaining = 0;
      secondsRemaining = 0;
    }
  
    setDays(daysRemaining);
    setHours(hoursRemaining);
    setMinutes(minutesRemaining);
    setSeconds(secondsRemaining);
  };
  
  // Update the timer based on product sale dates
  useEffect(() => {
    if (productDetails.sale_start && productDetails.sale_end) {
      calculateTimeRemaining(productDetails.sale_start, productDetails.sale_end);
      const intervalId = setInterval(() => {
        calculateTimeRemaining(productDetails.sale_start, productDetails.sale_end);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [productDetails]);

  const galleryImages = productDetails && productDetails.product_gallery_images 
  ? JSON.parse(productDetails.product_gallery_images) 
  : [];

  // Add product to cart
  const handleAddToCart = () => {
    if (productDetails && quantity > 0) {
      setisLoadingCart(true);

      addToCart(productDetails, quantity)
        .then(() => {
          setisLoadingCart(false);
        })
        .catch(err => {
          console.error("Error adding to cart:", err);
          setisLoadingCart(false);
        });
    }
  };

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    setQuantity(prevQuantity => prevQuantity + 1); 
  };
  
  const handleDecrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleWishlist = (product) => {
      addToWishlist(product)
          .catch(err => console.error("Error adding to wishlist:", err));
  };

  if (!productDetails) {
    return <p>Loading...</p>;
  }

const truncateWords = (text, limit = 3) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : text;
  };

  const [isMobileOrTab, setIsMobileOrTab] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTab(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const [selected, setSelected] = useState(null);
  const sizes = [
    { size: "XS", bust: "36.0", front: "16.5", shoulder: "24.0", waist: "26.0" },
    { size: "S", bust: "36.0", front: "16.5", shoulder: "24.0", waist: "26.0" },
    { size: "M", bust: "36.0", front: "16.5", shoulder: "24.0", waist: "26.0" },
    { size: "L", bust: "42.0", front: "18.0", shoulder: "27.0", waist: "32.0" },
    { size: "XL", bust: "44.0", front: "18.5", shoulder: "28.0", waist: "34.0" },
    { size: "XXL", bust: "46.0", front: "19.0", shoulder: "29.0", waist: "36.0" },
  ];

  const [openVideoModal, setOpenVideoModal] = useState(false);


  return (
    <Layouts>
      <div className='categories_details'>
          <div className='heading'>
              <div className='container'>
                  <div className='row'>
                      <div className='col-12'>
                        {productDetails && productDetails.category ? (
                          <ul>
                            <li><Link href="/">Home</Link></li>
                            <li>/</li>
                            <li><Link href={`/categories/${productDetails.category.slug}`}>{productDetails.category.name}</Link></li>
                            <li>/</li>
                            {/* <li><Link href={`/products/${productDetails.slug}`}>{productDetails.title}</Link></li> */}
                            <li>
                              <Link href={`/products/${productDetails.slug}`}>
                                {isMobileOrTab
                                  ? truncateWords(productDetails.title, 3)
                                  : productDetails.title}
                              </Link>
                            </li>
                            <li>/</li>
                            <li>Product Details</li>
                          </ul>
                        ):(
                          <ul>
                            <li>Loading...</li>
                          </ul>
                        )}
                      </div>
                  </div>
              </div>
          </div>
          <div className='container'>
              <div className='row'>
                    <div className='col-lg-12 col-md-12 col-12'>
                        <div className='top'>
                            <div className='row'>
                                <div className='col-12 col-lg-5 slider_images'>
                                <div className="slider-wrapper">
                                  {galleryImages.length > 0 ? (
                                    <Slider {...settingsMain} asNavFor={nav2} ref={slider => setSlider1(slider)} className="thumbsliderone">
                                      {galleryImages.map((item, i) => (
                                        <div className="thumb_image" key={i}>
                                          <Image src={item.pro_image} alt={`slider-image-${i}`} width={225} height={300} />
                                        </div>
                                      ))}
                                    </Slider>
                                  ) : (
                                    <Slider {...settingsMain} asNavFor={nav2} ref={slider => setSlider1(slider)} className="thumbsliderone">
                                      <div className="thumb_image">
                                        <Image 
                                          src={productDetails?.product_image || BlankImage} 
                                          alt="default-product-image" 
                                          width={225} 
                                          height={300} 
                                        />
                                      </div>
                                    </Slider>
                                  )}

                                  {/* Thumbnails slider */}
                                  {galleryImages.length > 0 ? (
                                    <Slider {...settingsThumbs} asNavFor={nav1} ref={slider => setSlider2(slider)} className="thumbslidertwo">
                                      {galleryImages.map((item, i) => (
                                        <div className="thumb_image" key={i}>
                                          <Image src={item.pro_image} alt={`thumb-image-${i}`} width={225} height={300} />
                                        </div>
                                      ))}
                                    </Slider>
                                  ): null }
                                </div>

                                </div>
                                <div className='col-12 col-lg-7 slider_details'>
                                    <div className='slider_details_text'>
                                        <h2>{productDetails.title}</h2>
                                        <div className='pro_star'>
                                          <ul>
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                            <li><FaStarHalfAlt /></li>
                                            <li>(4.5)</li>
                                          </ul>
                                        </div>
                                        {productDetails.regular_price && (
                                          <div className='price_div'>
                                            <div className='save_box'>
                                              {productDetails.sale_price && 
                                                new Date(productDetails.sale_start) <= currentDate && 
                                                currentDate <= new Date(productDetails.sale_end) ? (
                                                  <h3>
                                                    {"₹"+productDetails.sale_price} <span>{"₹"+productDetails.regular_price} </span>
                                                  </h3>
                                                  
                                              ):(
                                                <h3>
                                                  {"₹"+productDetails.regular_price}
                                                </h3>
                                              )}
                                              <p className='save_number'>
                                                Save 400
                                              </p>
                                            </div>
                                            <h4>
                                              {productDetails.stock > 0 
                                                ? `${productDetails.stock} IN STOCK` 
                                                : 'OUT OF STOCK'}
                                            </h4>
                                          </div>
                                        )}

                                        <div className='taxes_para'>
                                          <p>MRP Inclusive of all taxes</p>
                                        </div>

                                        <div className='craft_option'>
                                          <ul>
                                            <li>
                                              <div className='craft_laft'>
                                                <Image src={thread} alt='icon' width={100} height={100} />
                                              </div>
                                              <div className='craft_right'>
                                                <h3>
                                                  Craft
                                                </h3>
                                                <p>
                                                  Handloom
                                                </p>
                                              </div>
                                            </li>
                                            <li>
                                              <div className='craft_laft'>
                                                <Image src={sewing} alt='icon' width={100} height={100} />
                                              </div>
                                              <div className='craft_right'>
                                                <h3>
                                                  Material
                                                </h3>
                                                <p>
                                                  Tissue
                                                </p>
                                              </div>
                                            </li>
                                            <li>
                                              <div className='craft_laft'>
                                                <Image src={sewing} alt='icon' width={100} height={100} />
                                              </div>
                                              <div className='craft_right'>
                                                <h3>
                                                  75 Man hours
                                                </h3>
                                                <p>
                                                  Handwoven in Madhya Pradesh
                                                </p>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                        
                                        <div className='craft_option more_option'>
                                          <h2>More Offers</h2>
                                          <ul>
                                            <li>
                                              <div className='craft_right'>
                                                <h3>
                                                  1st Order Free Gift
                                                </h3>
                                                <p>
                                                  Canvas Bag – Carry the love! + photo of bag
                                                </p>
                                              </div>
                                            </li>
                                            <li>
                                              <div className='craft_right'>
                                                <h3>
                                                  3rd Order Free Gift
                                                </h3>
                                                <p>
                                                  Custom T-Shirt – Make it yours! + shirt mockup
                                                </p>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>

                                        <div className='craft_option size_option'>
                                          <div className='size_flex'>
                                            <h2>Size</h2>
                                            <button onClick={() => setOpen(true)}>
                                              Size All
                                            </button>
                                          </div>
                                          <ul>
                                            <li>
                                              <div className='craft_right'>
                                                <h3>
                                                  <button>XS</button>
                                                </h3>
                                              </div>
                                            </li>
                                            <li>
                                              <div className='craft_right'>
                                                <h3>
                                                  <button>S</button>
                                                </h3>
                                              </div>
                                            </li>
                                            <li>
                                              <div className='craft_right'>
                                                <h3>
                                                  <button>M</button>
                                                </h3>
                                              </div>
                                            </li>
                                            <li>
                                              <div className='craft_right'>
                                                <h3>
                                                  <button>L</button>
                                                </h3>
                                              </div>
                                            </li>
                                            <li>
                                              <div className='craft_right'>
                                                <h3>
                                                  <button>XL</button>
                                                </h3>
                                              </div>
                                            </li>
                                            <li>
                                              <div className='craft_right'>
                                                <h3>
                                                  <button>XXL</button>
                                                </h3>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                    </div>
                                    <div className='slider_cart'>
                                        <div className='active_cart_btn'>
                                            {productDetails.stock > 0 && (
                                                <div className='count_div'>
                                                    <button onClick={handleDecrement}>-</button>
                                                    <p>{count}</p>
                                                    <button onClick={handleIncrement}>+</button>
                                                </div>
                                            )}
                                            <div className='addcart_wishlist'>
                                                {productDetails.stock > 0 ? (
                                                  <div className='add_cart_btn'>
                                                    <button onClick={handleAddToCart} disabled={isLoadingCart || quantity <= 0}>
                                                      {isLoadingCart ? "Adding..." : "Add To Cart"}
                                                    </button>
                                                  </div>
                                                ):(
                                                  <div className="add_cart_btn">
                                                    <button disabled>
                                                      Out of stock
                                                    </button>
                                                  </div>
                                                )}

                                                <div className='wishlist'>
                                                    <button onClick={() => handleWishlist(productDetails)}>
                                                      <FaRegHeart />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='taxes_para text-center pt-1'>
                                      <p>Free shipping in India. No minimum order value required</p>
                                    </div>

                                    <div className={`slider_cart slider_active_cart ${isScrollingDown ? 'active' : ''}`}>
                                        <div className='active_cart_images'>
                                            <div className='active_image'>
                                                <Image src={productDetails?.product_image ? productDetails.product_image : BlankImage} alt='slider-image' width="225" height="300" />
                                            </div>
                                            <div className='active_text'>
                                                <h2>{productDetails.title}</h2>
                                                {productDetails.sale_price && 
                                                new Date(productDetails.sale_start) <= currentDate && 
                                                  currentDate <= new Date(productDetails.sale_end) ? (
                                                    <h3>
                                                      <span>{"₹"+productDetails.regular_price}</span> – {"₹"+productDetails.sale_price}
                                                    </h3>
                                                    
                                                ):(
                                                  <h3>
                                                    {"₹"+productDetails.regular_price}
                                                  </h3>
                                                )}
                                            </div>
                                        </div>
                                        <div className='active_cart_btn'>
                                            {productDetails.stock > 0 && (
                                              <div className='count_div'>
                                                  <button onClick={handleDecrement}>-</button>
                                                  <p>{count}</p>
                                                  <button onClick={handleIncrement}>+</button>
                                              </div>
                                            )}
                                            <div className='addcart_wishlist'>
                                                {productDetails.stock > 0 ? (
                                                  <div className='add_cart_btn'>
                                                    <button onClick={handleAddToCart} disabled={isLoadingCart || quantity <= 0}>
                                                      {isLoadingCart ? "Adding..." : "Add To Cart"}
                                                    </button>
                                                  </div>
                                                ):(
                                                  <div className="add_cart_btn">
                                                    <button disabled>
                                                      Out of stock
                                                    </button>
                                                  </div>
                                                )}
                                                <div className='wishlist'>
                                                    <button onClick={() => handleWishlist(productDetails)}>
                                                      <FaRegHeart />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    {productDetails.sale_start && productDetails.sale_end && (
                                      <>
                                        {/* Before the sale starts */}
                                        {new Date() < new Date(productDetails.sale_start) && (
                                          <div className='slider_timer'>
                                            <div className='slider_timer_box'>
                                              <div className='timer_text'>
                                                <h3>Sale starts in:</h3>
                                              </div>
                                              <div className='timer_number'>
                                                <p><span>{days}</span> :</p>
                                                <p><span>{hours}</span> :</p>
                                                <p><span>{minutes}</span> :</p>
                                                <p><span>{seconds}</span></p>
                                              </div>
                                            </div>
                                          </div>
                                        )}

                                        {/* During the sale */}
                                        {new Date() >= new Date(productDetails.sale_start) && new Date() <= new Date(productDetails.sale_end) && (
                                          <div className='slider_timer'>
                                            <div className='slider_timer_box'>
                                              <div className='timer_text'>
                                                <h3>Sale ends in:</h3>
                                              </div>
                                              <div className='timer_number'>
                                                <p><span>{days}</span> :</p>
                                                <p><span>{hours}</span> :</p>
                                                <p><span>{minutes}</span> :</p>
                                                <p><span>{seconds}</span></p>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </>
                                    )}

                                    <div className='easy_deliverys'>
                                        <ul>
                                          <li>
                                            <Image src={giftbox} alt='icon' width={60} height={60} />
                                            <p>
                                              Easy Exchange & Refunds
                                            </p>
                                          </li>
                                          <li>
                                            <Image src={gift} alt='icon' width={60} height={60} />
                                            <button onClick={() => setOpenVideoModal(true)}>
                                              Packaging that’s ! a keepsake gift
                                            </button>
                                          </li>
                                          <li>
                                            <Image src={worldwide} alt='icon' width={60} height={60} />
                                            <p>
                                              Shipping Globally
                                            </p>
                                          </li>
                                        </ul>
                                    </div>

                                    <div className='craft_option rewards'>
                                      <ul>
                                        <li>
                                          <div className='craft_laft'>
                                            <Image src={brand} alt='icon' width={100} height={100} />
                                          </div>
                                          <div className='craft_right'>
                                            <h3>
                                              Rewards
                                            </h3>
                                            <p>
                                              Sustainability and eco-friendly
                                            </p>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>

                                    <FairSlider />

                                    <div className='details_paragraphy'>
                                      <div dangerouslySetInnerHTML={{ __html: productDetails.short_description }} />
                                    </div>

                                    <div className='slider_accordian'>
                                        <div className="accordion" id="accordionPanelsStayOpenExample">
                                            {productDetails.long_description && (
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                            Description
                                                        </button>
                                                    </h2>
                                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                                        <div className="accordion-body">
                                                            <div className='accordian_text'>
                                                                <div dangerouslySetInnerHTML={{ __html: productDetails.long_description || '' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {productDetails.additional_information && JSON.parse(productDetails.additional_information).some(info => info.label || info.value) && (
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                            Additional Information
                                                        </button>
                                                    </h2>
                                                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                                        <div className="accordion-body">
                                                            <div className='accordian_text'>
                                                                <ul>
                                                                    {JSON.parse(productDetails.additional_information).map((info, index) => (
                                                                        (info.label || info.value) ? (
                                                                            <li key={index}>
                                                                                <span>{info.label || 'No Label'}</span>
                                                                                <span>{info.value || 'No Value'}</span>
                                                                            </li>
                                                                        ) : null
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {productDetails.qa && JSON.parse(productDetails.qa).some(qa => qa.question || qa.answer) && (
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                            Questions and Answers
                                                        </button>
                                                    </h2>
                                                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                                        <div className="accordion-body">
                                                            <div className='accordian_text accordian_question'>
                                                                <ul>
                                                                    {JSON.parse(productDetails.qa).map((qa, index) => (
                                                                        (qa.question || qa.answer) ? (
                                                                            <li key={index}>
                                                                                <span>{qa.question || 'No Question'}</span>
                                                                                <span>Ans: {qa.answer || 'No Answer'}</span>
                                                                            </li>
                                                                        ) : null
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='slider_options'>
                                      <ul>
                                          {productDetails?.sku && (
                                            <li>
                                              <MdFilterTiltShift />
                                              <span>SKU: {productDetails.sku}</span>
                                            </li>
                                          )}
                                          
                                          {productDetails?.category?.name && (
                                              <li>
                                                  Categories: 
                                                  <span>{productDetails.category.name}</span>
                                              </li>
                                          )}
                                      </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
      </div>

      <div className='container product_padding'>
          <div className='row'>
              <BestProducts />
              <FindCategories />
          </div>
      </div>

      <div className={`size_modal_overlay ${open ? "active" : ""}`} onClick={() => setOpen(false)}>
        <div className="modal_overlay" onClick={(e) => e.stopPropagation()}>
          <div className="modal_box">
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>

            <div className="tabs">
              <button
              className={`tab ${activeTab === "login" ? "active" : ""}`}
              onClick={() => setActiveTab("login")}
              >
                Size Chart
              </button>
              <button
              className={`tab ${activeTab === "register" ? "active" : ""}`}
              onClick={() => setActiveTab("register")}
              >
                How To Measure
              </button>
            </div>

            {activeTab === "login" && (
              <div className="tab-content">
                <div className='table_div'>
                  <div className='table_head'>
                    <ul>
                      <li></li>
                      <li>Size</li>
                      <li>Bust (in)</li>
                      <li>Front Length (in)</li>
                      <li>Across Shoulder (in)</li>
                      <li>To Fit Waist (in)</li>
                    </ul>
                  </div>
                  <div className='table_body'>
                    <ul>
                      {sizes.map((item, i) => (
                        <li key={i} className={selected === i ? "active" : ""}>
                          <span>
                            <input
                              type="radio"
                              name="size"
                              checked={selected === i}
                              onChange={() => setSelected(i)}
                            />
                          </span>
                          <span>{item.size}</span>
                          <span>{item.bust}</span>
                          <span>{item.front}</span>
                          <span>{item.shoulder}</span>
                          <span>{item.waist}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "register" && (
              <div className="tab-content">
                <div className='measure_box'>
                  <h2>How to measure yourself</h2>
                  <p>
                    Find the size to fit your body measurements in the chart above. Here is a hand body measurements guide.
                  </p>
                  <div className='measure_box_image'>
                    <Image src={measureimage} alt='measure image' />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

        <div
          className={`video_modal_overlay ${openVideoModal ? "active" : ""}`}
          onClick={() => setOpenVideoModal(false)}
        >
          <button
            className="close_btn"
            onClick={() => setOpenVideoModal(false)}
          >
            ✕
          </button>
          <div className="modal_overlay" onClick={(e) => e.stopPropagation()}>
            <div className="video_modal">
              <video
                  controls
                  autoPlay
                  width="100%"
                  height="auto"
                  preload="metadata"
                  muted
              >
                  <source src="/video-promo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

    </Layouts>
  )
}