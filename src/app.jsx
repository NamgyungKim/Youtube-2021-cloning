import { useEffect, useState } from 'react';
import './app.css';
import VideoIist from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDNe3znFiUHZBa7YWxJ3xkOGyeHRk18Ixc", 
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[])
  return <VideoIist videos={videos}/>
}

export default App;
