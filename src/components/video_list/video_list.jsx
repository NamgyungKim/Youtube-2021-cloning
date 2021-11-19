import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css'

const VideoIist = ({ videos, onVideoClick, display }) => (
  <ul className={styles.videos}>
    {videos.map(video => (
      <VideoItem onVideoClick={onVideoClick} key={video.id} video={video} display={display}/>
    ))}
  </ul>
);

export default VideoIist;