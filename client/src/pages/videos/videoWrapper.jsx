import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BiLoader } from "react-icons/bi";
import { Link, useSearchParams } from "react-router-dom";
import { getVideos } from "../../redux/services/video";
import CloudinaryVideoPlayer from "./cloudinaryVideoPlayer";





const dummyRecommendations = [
  {
      id: 1,
      title: "Lorem Ipsum",
      description: "Lorem Ipsum",
      views: "1M views",
      timeAgo: "3 years ago",
      thumbnail: "/path/to/rescue-workers.jpg"
  },
  // ... add more dummy items
];


const VideoContainer = () => {
// get query params
  const [query] = useSearchParams()
  const id = query.get("id")

  console.log("query",id)
  const {data:videos} = useQuery({
    queryKey:["videos"],
    queryFn:getVideos
  })

  console.log(videos)


return(

      <div className="flex gap-6">
                  {
                    videos && videos.length > 0 && (
                    id ? <WatchVideo id={id}/> : <VideoCard videos={videos}/>
                    )
                  }
    </div>
        )
};

export default VideoContainer;


const VideoCard = ({videos}) => { 

  return(
    <div className="flex flex-wrap">
     {
      videos.map((info) => (
        <Link to={`/videos?id=${info._id}`}>  
        <div className="p-2 w-72 mb-2">
          <div className="aspect-video bg-gray-200 overflow-hidden rounded-lg mb-4">
        <img
          className="rounded-xl hover:opacity-60 object-cover bg-bottom h-full w-full transition-opacity duration-300"
          src={info?.thumbnail?.URL}    
          width={350}
          height={192}
          alt={info?.videoTitle}  
          />
          </div>
        <ul>
          <li className="font-bold py-2 text-gray text-ellipsis overflow-hidden">{info?.videoTitle}</li>
          <li>{info?.userId}</li>
          <li>{info?.views} Views</li>
        </ul>
      </div>
      </Link>
      ))
     }
    </div>
  )
 }


const WatchVideo = ({id}) => {
  const {data:videos} = useQuery({
    queryKey:["video",id],
    queryFn:getVideos
  })

  // filter video by id it an array
  const videoData = videos && videos.filter((item) => item._id === id)[0]

  console.log("videoData", videoData)

  const width = 1200
  const height = 600
  const autoplay = true
  const fullScreen = false
  const setFullScreen = () => {}

  return(
    <div className="flex gap-6 w-full" >
     <div className="flex-1">
                        <div className="aspect-video bg-gray-200 overflow-hidden rounded-lg mb-4">
                        {videoData?.videoUrl ? 
                        
                         <CloudinaryVideoPlayer width={width} height={height} autoplay={autoplay} fullScreen={fullScreen} setFullScreen={setFullScreen} publicID={videoData?.videoUrl?.publicID} /> :
                         
                         <div className="flex justify-center items-center h-full">
                         <BiLoader className="text-9xl animate-spin"/>
                         </div>
                         }

                        </div>

                        <h1 className="text-xl mb-2">World disaster center present Example video</h1>
                        
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm text-gray-600">156,987 views • Nov 25, 2022</span>
                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-2">
                                    <span>2.7K</span>
                                </button>
                                <button className="flex items-center gap-2">
                                    <span>124</span>
                                </button>
                                <button className="px-4 py-1 rounded-full bg-gray-100">SHARE</button>
                                <button className="px-4 py-1 rounded-full bg-gray-100">SAVE</button>
                            </div>
                        </div>

                        {/* Channel Info */}
                        <div className="flex items-center justify-between py-4 border-t border-b">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                                <div>
                                    <p className="font-medium">User</p>
                                    <p className="text-sm text-gray-600">1.2K subscribers</p>
                                </div>
                            </div>
                            <button className="px-6 py-2 bg-red-600 text-white rounded-full">
                                SUBSCRIBE
                            </button>
                        </div>

                        {/* Comments Section */}
                        <div className="mt-4">
                            <h3 className="font-medium mb-4">28 Comments</h3>
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                <input 
                                    type="text" 
                                    placeholder="Add a public comment..."
                                    className="w-full border-b outline-none pb-2"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Recommended Videos */}
                    <div className="w-[360px] space-y-4">
                        {dummyRecommendations.map((video) => (
                            <div key={video.id} className="flex gap-2 cursor-pointer">
                                <div className="w-40 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-medium text-sm">{video.title}</h3>
                                    <p className="text-xs text-gray-600">{video.description}</p>
                                    <p className="text-xs text-gray-600">{video.views} • {video.timeAgo}</p>
                                </div>
                            </div>
                        ))}
                    </div>
    </div>
  )
}