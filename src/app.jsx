import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SerchHeader from './components/search_header/serch_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoIist from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const selectVideo = (video) => {
    setSelectedVideo(video)
  }
  const search = query => {
    youtube
      .search(query)
      .then(videos => {
        setVideos(videos)
        setSelectedVideo(null)
      })
  } 

  useEffect(()=>{  
    youtube
      .mostPopular()
      .then(videos => setVideos(videos))
  },[])

  return (
  <div className={styles.app}>
    <SerchHeader onSearch={search}/>
    <section className={styles.content}>
    {selectedVideo && (
      <div className={styles.detail}>
        {selectedVideo && <VideoDetail video={selectedVideo} />}
      </div>
    )}
      <div className={styles.list}>
        <VideoIist videos={videos} onVideoClick={selectVideo} display={ selectedVideo ? 'list' : 'grid' }/>
      </div>
    </section>
  </div>
  )
}

export default App;
