import React from 'react'

const VideoDetail = ({video}) => {

    if(!video){
        return (
            <div className="container ui segment">
                <h3>Loading....</h3>
                
            </div>
            )
    }

    
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    // console.log('video.id', video.id);
    // console.log('video.id.videoID' , video.id.videoID);
    return (
        <div className="container">
            <div className="ui embed">
                <iframe src={videoSrc} title={video.snippet.title}></iframe>
            </div>
            <div className="ui segment">
                <h3 className="ui header">{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
    

}

export default VideoDetail;