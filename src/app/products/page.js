"use client";
import React, { useState, useEffect, useContext } from 'react';
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { BlankImage, Footerbackground } from "../assets/index";
import { Layouts } from "../Component";
import { MenuThemeContext } from '../globalstate/GlobalStateContext'; 
import { HiMiniExclamationTriangle } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";


export default function AllProductsPage() {
  const [allProducts, setAllProducts] = useState([]); // Store product data
  const [currentPage, setCurrentPage] = useState(1); // Store current page
  const [pagination, setPagination] = useState({}); // Store pagination metadata
  const { addToCart, addToWishlist } = useContext(MenuThemeContext);
  const [isLoadingCart, setisLoadingCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const currentDate = new Date();

  const handleWishlist = (product) => {
      addToWishlist(product)
          .catch(err => console.error("Error adding to wishlist:", err));
  };

  // Function to fetch products by page from the API
  const fetchGetProducts = async (page = 1) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/all-products`,
        {
          params: {
            page, // Request the current page from the API
            per_page: 8, // Set the number of products per page
          },
        }
      );
      //console.log(response.data);
      if (response.data.status === "success") {
        setAllProducts(response.data.products.data); // Set the product data
        setPagination({
          current_page: response.data.products.current_page,
          last_page: response.data.products.last_page,
          next_page_url: response.data.products.next_page_url,
          prev_page_url: response.data.products.prev_page_url,
        });
      }
    } catch (error) {
      console.error(error.response?.data?.message || "Network Error");
    }
  };

  useEffect(() => {
    fetchGetProducts(currentPage); // Fetch products when the page changes
  }, [currentPage]);

  // Function to handle pagination changes
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= pagination.last_page) {
      setCurrentPage(newPage); // Update the current page
    }
  };

  // Function to generate page numbers dynamically
  const generatePageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= pagination.last_page; i++) {
      pages.push(i);
    }
    return pages;
  };

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
  
  return (
    <Layouts>
      <div className='categories_banner'>
        <div className='container'>
          <div className='row'>
            <div className='cat_background'>
              <div className='image_box'>
                <Image src={Footerbackground} alt='banner image' />
              </div>
            </div>
            <div className='heading'>
              <h2>Product</h2>
              <p>A striking ink-blue three-piece set featuring a brocade blouse adorned with lace, a Banarasi brocade lehenga, and a Chanderi silk dupatta with zari stripes. Soft yet structured, it flows gracefully, offering comfort and elegance for festive occasions, evening celebrations, or wedding rituals. Fully lined for ease of movement.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="best_products best_product_center cat_padding">
        <div className="container">
          <div className="row">
            <div className="bottom">
              <div className="row">
                {allProducts.length > 0 ? (
                  allProducts.map((product) => (
                    <div key={product.id} className="col-xl-3 col-md-4 col-sm-6 padding">
                      <div className="product_box">
                        <div className='pro_box_po'>
                          <Link href={`/products/${product.slug}`} className="product_box_image">
                            <div className="images">
                              {/* Main product images */}
                              <Image
                                src={product.product_image || BlankImage}
                                alt={product.title}
                                width={300}
                                height={300}
                                className="productOne"
                              />
                              <Image
                                src={product.product_image2 || BlankImage}
                                alt={product.title}
                                width={300}
                                height={300}
                                className="productTwo"
                              />
                            </div>
                            {product.sale_price && 
                                new Date(product.sale_start) <= currentDate && 
                                currentDate <= new Date(product.sale_end) && (
                              <div className="discount">
                                <p>{product.discount_percentage}% off</p>
                              </div>
                            )}
                          </Link>
                          {product.stock > 0 ? (
                            <div className="cart_btn">
                              <button onClick={() => handleAddToCart(product)} disabled={isLoadingCart || quantity <= 0}>
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
                          ):(
                            <div className="cart_out_btn">
                              <button disabled>
                                Out of stock
                              </button>
                            </div>
                          )}
                        </div>
                        <div className='like'>
                          <button onClick={() => handleWishlist(product)}>
                            <FaHeart />
                          </button>
                        </div>
                        <div className="product_box_text">
                          <h2>{product.title}</h2>
                          <p>
                            {product.sale_price && 
                              new Date(product.sale_start) <= currentDate && 
                              currentDate <= new Date(product.sale_end) 
                              ? "₹"+product.sale_price 
                              : "₹"+product.regular_price}
                            
                            {product.sale_price && 
                              new Date(product.sale_start) <= currentDate && 
                              currentDate <= new Date(product.sale_end) && (
                                <span>
                                  {"₹"+product.regular_price}
                                </span>
                            )}
                          </p>
                          <p className='save_number'>
                            {product.sale_price 
                              ? `Save ₹${parseFloat(product.regular_price) - parseFloat(product.sale_price)}`
                              : null
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className='no_product'>
                    <span><HiMiniExclamationTriangle /></span>
                    <p>No products found in this category.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Pagination Controls */}
            {pagination && (
              <div className="pagination_div">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                {/* Page Number Buttons */}
                {generatePageNumbers().map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={` ${
                      pageNumber === currentPage
                        ? ""
                        : ""
                    } `}
                  >
                    {pageNumber}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === pagination.last_page}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layouts>
  );
}
