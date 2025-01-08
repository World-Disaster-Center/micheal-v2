import React, { useEffect, useRef, useState } from 'react';
import { FaPaperPlane, FaShare, FaSpinner, FaUserCircle } from "react-icons/fa";
import { toast } from 'react-toastify';
import { FetchAIChatMessages, PostMessage } from '../../../redux/services/chatai';

// import { useApp } from '../../context/index.js';
// import { useSettings } from '../../context/settings.js';

function ChatAIFloater({chatOpen, userLocation, riskNotification}) {
    const [chatMessages, setChatMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [aiResponse, setAiResponse] = useState("");
    const [loading, setLoading] = useState(false);
    // const {weatherData, setWeatherData, setZoom, notification, setNotification, searchLocation} = useApp();
    const scrollChat = useRef();
    // const {initialZoom} = useSettings()

    const handleChatSubmit = async (e, messagekey="", notify=false) => {
      // const newMessage = { sender: "user", text: chatMessage };
      
      // setChatMessages([...chatMessages, newMessage]);
      // setChatMessage("");
      var mess = message;
      if(messagekey !== ""){
          mess = messagekey;
      }
      try {
        setLoading(true)
        const response = await PostMessage(mess);
      //   console.log(response);
        if(response.success){
          const aiMessage = { sender: "ai", text: response.message };
          const userMessage = {sender: "user", text: mess}
          if(notify){
              // setNotification(`${response.message}`);
              toast(response.message, {position: 'top-right', theme: "dark"})
          }
          setChatMessages((prevMessages) => [...prevMessages, userMessage, aiMessage]);
          setLoading(false);
          setMessage("");
        }else{
          setLoading(false);
          toast.warn(response?.message || "Erreur ! check your network and try again!")
        }
        
      } catch (error) {
          setLoading(false);
        toast.error(
          "Error sending chat message:" ||
          error.response ? error.response.data : error.message
        );
      }
    };
      function HandleKeyPress(event) {
        if (event.key === "Enter"){
            handleChatSubmit();
        }
      }
      async function getMessages () {
          try{
              const res = await FetchAIChatMessages();
              if(res){
                  // console.log(res, "response fetching messages");
                  setChatMessages(res);
              }
          }catch(error){ 
              toast.error(error.message || "Erreur ");
          }
      }

      function success(position, address=null) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // setLocation({ latitude, longitude });
        // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        // console.log(process.env.REACT_APP_WEATHER_API_KEY);
        // Make API call to OpenWeatherMap
        // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GEOCODING_API_KEY}`)
          .then(response => response.json())
          .then(data => {
            // setWeatherData(data);
            console.log(data);
            // console.log(data, "weather data");
            let msc = data?.plus_code?.compound_code?.split(" ");
            let themess = msc.slice(1, msc.length).join(" ");
            setMessage(`Are there any disaster in ${themess}`)
            handleChatSubmit(null, `Are there any disaster in ${themess}`, true);
            // setZoom(8);
          })
          .catch(error => console.log(error, "GEOCODING"));
      }
    
      function error() {
        console.log("Unable to retrieve your location");
      }

    //   useEffect(() => {
    //     if (navigator.geolocation && userLocation === null) {
    //         navigator.geolocation.getCurrentPosition(success, error);
    //       } 
    //       else if(userLocation !== null){
    //         success({coords: {latitude: userLocation?.lat, longitude: userLocation?.lng}})
    //       }
    //       else {
    //         toast.error("Geolocation not supported");
    //       }
          
    // }, [userLocation]);

    // useEffect(()=>{
    //   if(chatOpen){
    //     scrollChat.current.scrollIntoView(
    //       {
    //         behavior: "smooth",
    //         block: "end",
    //       }
    //     )
    //     scrollChat.current.scrollTo(0, scrollChat.current.scrollHeight)
    //     // console.log(scrollChat.current.scrollMaxY )
    //   }
    // }, [chatOpen]);

    // useEffect( () => {

    // }, [searchLocation])


    return (
      
      
      <div className='fixed bottom-24 left-[0px] transform -translate-x-1/2 w-[300px] max-w-[95vw]'>
            {chatOpen && (
                <div ref={scrollChat} className="bg-[#ffff]/30 p-5 flex flex-col gap-2 rounded-lg shadow-lg overflow-hidden">
                    <div className="chat-messages text-sm max-h-[500px] flex flex-col gap-2 overflow-y-auto">
                        {chatMessages.map((msg, index) => (
                            <div 
                                key={index} 
                                className={`flex items-start gap-2 ${
                                    msg.sender === "user" ? "bg-[#424242] text-white p-1" : "bg-white text-black p-3"
                                } rounded-lg`}
                            >
                                {msg.sender === "user" && (
                                    <FaUserCircle className="text-gray-400 text-xl" />
                                )}
                                <p>{msg.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-gray-700 rounded-full bg-[#424242]">
                        <div className="flex items-center p-3 gap-2">
                            <textarea
                                placeholder="Ask AI about disaster..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={1}
                                onKeyDown={HandleKeyPress}
                                className="flex-1 text-sm bg-transparent text-gray-200 rounded-full px-4 py-2 outline-none"
                            />
                            <button 
                                disabled={loading} 
                                onClick={handleChatSubmit}
                                className="text-gray-200 p-2 rounded-full hover:bg-[#333333] transition-colors"
                            >
                                {!loading ? (
                                    <FaPaperPlane className="text-lg" />
                                ) : (
                                    <FaSpinner className="rotating text-lg" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

export default ChatAIFloater
