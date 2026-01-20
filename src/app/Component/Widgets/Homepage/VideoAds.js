"use client"
import React from 'react'

export default function VideoAds({getHomeData}) {

    return  (
        <div className='video_ads'>
            <div className='container'>
                <div className='row'>
                    <div className='video_box'>
                    {getHomeData?.home_video_url && (
                        <video
                            controls
                            autoPlay
                            width="100%"
                            height="auto"
                            preload="metadata"
                            muted
                        >
                            <source src={getHomeData.home_video_url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
 
                        
                    </div>
                </div>
            </div>
        </div>
    )
}