import React, { useEffect, useRef } from 'react'

function CloudinaryVideoPlayer({ width, height, fullScreen, autoplay, publicID}) {
    const cloudinaryRef = useRef();
    const videoRef = useRef();
    // console.log(publicID)

    useEffect(()=> {
        if (cloudinaryRef.current) return ;
        cloudinaryRef.current = window.cloudinary;
        cloudinaryRef.current.videoPlayer(videoRef.current, {
            cloud_name: process.env.REACT_APP_CLOUD_NAME
        });

    }, [])

    return (
        <video className='w-full h-full' ref={videoRef} width={width} height={height} autoPlay={autoplay} controls data-cld-public-id={publicID}/>
    )
}

export default CloudinaryVideoPlayer
