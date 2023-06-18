import video from "../data/video.js";
import VideoInfo from "./VideoInfo"
import VideoComments from "./VideoComments"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoInfo video={video}/>
      <VideoComments comments ={video.comments}/>
    </div>
  );
}

export default App;
