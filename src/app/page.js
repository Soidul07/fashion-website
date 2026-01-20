"use client";
import React, { useEffect,useState } from 'react';

import { Layouts } from "./Component";
import Banner from "./Component/Widgets/Homepage/Banner";
import Categories from "./Component/Widgets/Homepage/Categories";
import BestProducts from "./Component/Widgets/Homepage/BestProducts";
import Ads from "./Component/Widgets/Homepage/Ads";
import FindCategories from "./Component/Widgets/Homepage/FindCategories";
import HappyCastomer from "./Component/Widgets/Homepage/HappyCastomer";
import Articles from "./Component/Widgets/Homepage/Articles";
import Instagram from "./Component/Widgets/Homepage/Instagram";
import SalesProduct from './Component/Widgets/Homepage/SalesProduct';
import SignModal from "./Component/Widgets/Modal/SignModal";
import axios from 'axios';
import VideoAds from './Component/Widgets/Homepage/VideoAds';
import HandPick from './Component/Widgets/Homepage/HandPick';
import TrendingNow from './Component/Widgets/Homepage/TrendingNow';

export default function page() {
  const [getSeasonCategories, setSeasonCategories] = useState(null);
  const [getLatestSeasonCategories, setLatestSeasonCategories] = useState(null);
  const [getlatestCategoriesBanners, setLatestCategoriesBanners] = useState(null);
  const [getHomeData, setHomeData] = useState(null);
  const [getFourSareesSubCategories, setFourSareesSubCategories] = useState(null);
  const [getSaleData, setSaleData] = useState(null);

  // Function to fetch data from the API
    const fetchHomePageData = async () => {
      try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/get-home-page-data`);
          if (response.data.status === "success") {
            //console.log(response.data.data); latestSeasonCategories
            setSeasonCategories(response.data.data.seasonCategories || []);
            setLatestSeasonCategories(response.data.data.latestSeasonCategories || []);
            setLatestCategoriesBanners(response.data.data.latestCategoriesBanners || []);
            setHomeData(response.data.data.homeData || []);
            setFourSareesSubCategories(response.data.data.fourSareesSubCategories || []);

            const saleDataObj = {
              sale_section_sale_text_left: response.data.data.homeData.sale_section_sale_text_left,
              sale_section_sale_text_right: response.data.data.homeData.sale_section_sale_text_right,
              sale_section_sale_start: response.data.data.homeData.sale_section_sale_start,
              sale_section_sale_end: response.data.data.homeData.sale_section_sale_end,
              latestSaleProducts: response.data.data.latestSaleProducts,
            };
            setSaleData(saleDataObj);


          }
      } catch (error) {
        //console.error(error.response?.data?.msg || "Network Error");
      }
    };

  useEffect(() => {
      fetchHomePageData();
  }, []);
  
  return (
    <Layouts>
      <Banner getSeasonCategories={getSeasonCategories} getlatestCategoriesBanners={getlatestCategoriesBanners} getHomeData={getHomeData} />
      <Categories getFourSareesSubCategories={getFourSareesSubCategories} />
      <BestProducts />
      <Ads getLatestSeasonCategories={getLatestSeasonCategories} />
      <SalesProduct getSaleData={getSaleData} />
      <FindCategories />
      <VideoAds getHomeData={getHomeData} />
     <HandPick getHomeData={getlatestCategoriesBanners} />
      <TrendingNow getSaleData={getSaleData} />
      <HappyCastomer />
      {/* <Articles />
      <Instagram /> */}
      <SignModal />
    </Layouts>
  );
}