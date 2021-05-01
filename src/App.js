import { useState, useEffect } from "react";
import "./App.css";
import VideoList from "./components/video_list/VideoList";

// AIzaSyAfOHHOLM4CajlC9_niLFzkZcp1NpNuaBM

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAfOHHOLM4CajlC9_niLFzkZcp1NpNuaBM",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return <VideoList videos={videos} />;
}

export default App;
