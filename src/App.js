import React from "react";
import Bar from "./components/Bar";

import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.cjs.jsx';






function App() {
  return (
    <div className=" text-red-600">
     <Bar/>
     
     <ScrollyVideo src="1.mp4"/>
     
    </div>
  );
}

export default App;
