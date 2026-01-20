"use client"
import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { BlankImage } from "../../assets/index";
import { Layouts } from '../../Component';
import { MenuThemeContext } from '../../globalstate/GlobalStateContext'; 
import { HiMiniExclamationTriangle } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";


export default function CategoryPage() {
  const { slug } = useParams();
  const [category, setCategory] = useState(null); // Store category data
  const [products, setProducts] = useState([]); // Store product data
  const { addToCart, addToWishlist } = useContext(MenuThemeContext);
  const [isLoadingCart, setisLoadingCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const currentDate = new Date();

  const handleWishlist = (product) => {
      addToWishlist(product)
          .catch(err => console.error("Error adding to wishlist:", err));
  };

  // Function to fetch products by category from the API
  const fetchGetProducts = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/get-products-by-season-category/${slug}`);
      //console.log(response.data);
      if (response.data.status === "success") {
        setCategory(response.data.season_category); // Set category data
        setProducts(response.data.products || []); // Set product data
      }
    } catch (error) {
      //console.error(error.response?.data?.message || "Network Error");
    }
  };

  useEffect(() => {
    if (slug) {
      fetchGetProducts();
    }
  }, [slug]);

  const handleAddToCart = (product) => {
    if (product && quantity > 0) { console.log(product);
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
      {category && (
        <div className='categories_banner'>
          <div className='container'>
            <div className='row'>
              <div className='cat_background'>
                <div className='image_box' style={{ backgroundImage: `url(${category?.banner_image||BlankImage})` }}></div>
              </div>
              <div className='heading'>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='best_products best_product_center'>
        <div className='container'>
          <div className='row'>
            <div className='bottom'>
              <div className='row'>
                {products.length > 0 ? (
                  products.map(product => (
                    <div key={product.id} className='col-xl-3 col-md-4 col-sm-6 padding'>
                      <div className='product_box'>
                        <div className='pro_box_po'>
                          <Link href={`/products/${product.slug}`} className='product_box_image'>
                            <div className='images'>
                              {/* Assuming both product_image is the main image */}
                              <Image
                                src={product.product_image || BlankImage}
                                alt={product.title}
                                width={300}
                                height={300}
                                className='productOne'
                              />
                              <Image
                                src={product.product_image2 || BlankImage}
                                alt={product.title}
                                width={300}
                                height={300}
                                className='productTwo'
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
                        <div className='product_box_text'>
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
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className='no_product'>
                    <span><HiMiniExclamationTriangle /></span>
                    <p>No products found in this season category.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}
