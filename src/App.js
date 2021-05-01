import { useState, useEffect } from "react";
import styles from "./App.module.css";
import SearchHeader from "./components/search_header/SearchHeader";
import VideoList from "./components/video_list/VideoList";

// AIzaSyAfOHHOLM4CajlC9_niLFzkZcp1NpNuaBM

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />;
    </div>
  );
}

export default App;
