import React from "react";
import './YoutubeCard.css'; // Create a separate CSS file for styling

const YouTubeCard = ({ videoId, thumbnailUrl, channelName, channelPictureUrl, views, uploadDate, videoTitle }) => {
    return (
        <div className="youtube-card">
          <iframe
                width="300"
                height="169"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <div className="content">
                <div className="title">{videoTitle}</div>
                <div className="channel-info">
                    <img src={channelPictureUrl} alt="Channel Picture" className="channel-picture" />
                    <div className="text">
                        <div>{channelName}</div>
                        <div className="views">{views} views · {uploadDate}</div>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default YouTubeCard;
