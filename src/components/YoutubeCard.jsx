import React from "react";
import './YoutubeCard.css'; 

const YouTubeCard = ({ src, channelName, views, uploadDate, videoTitle,  channelPictureUrl="https://yt3.ggpht.com/v4O653mzBmk_F9lrxSTKDrEdRqiqcD8RYQztL8d-Mz-YKn3HQNzQkYlKEc_CxU62S-oHtQc_qQ=s88-c-k-c0x00ffffff-no-rj" }) => {
    return (
        <div className="youtube-card">
          <iframe
                width="300"
                height="169"
                src={src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <div className="content">
               <div className="top-bar">
             <div className="avatar">
             <div className="avatar-card" 
               style={
                {
                  backgroundImage: `url(${channelPictureUrl})`,
                  backgroundPosition: "contain",
                  backgroundSize: "cover",
                }
               }>
             </div>

               </div>
               <div className="channel-info">
                 <div className="title">{videoTitle}</div>
                    <div className="text">
                        <div>{channelName}</div>
                        <div className="views">{views} views · {uploadDate}</div>
                    </div>
                </div>
               </div>
              
            </div>
          
        </div>
    );
};

export default YouTubeCard;




