import React from "react";
import im from "C:/Users/kamlesh.a/Downloads/ReactJS/my-app/src/resource/meme.jpeg";

export default function Meme() {
  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <img src={im} className="img-thumbnail" alt="..." style={{ width: "50%" }} />
    </div>
  );
}

