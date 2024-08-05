import './App.css';
import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const videoRef = useRef(null);

  // useEffect가 없으면 렌더링이 끝나기 전에 null이 들어가 videoRef.current가 null인 상태
  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  });

  return <video ref={videoRef} src={src} loop playsInline />;
}

export default function Ap() {
  const [isPlaying, setIsplaying] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setIsplaying(!isPlaying)}>
        {isPlaying ? '일시정지' : '재생'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  );
}