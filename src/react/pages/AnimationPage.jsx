import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SignUpButton,
  WhiteLogInButton,
} from '../components/buttons/RedButtons';
import '@/sass/pages/_animation_page.scss';

const AnimationPage = () => {
  const videoRef = useRef(null);
  const [showUI, setShowUI] = useState(false);
  const navigate = useNavigate();

  const handleVideoEnded = () => {
    setShowUI(true);
  };

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    // Navigate to the homescreen route
    navigate('/homescreen');
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        videoRef.current.muted = true;
        videoRef.current.play();
      });
    }
  }, []);

  return (
    <div className='animation-page'>
      <video
        className={`animation-video ${showUI ? 'video-moved' : ''}`}
        ref={videoRef}
        onEnded={handleVideoEnded}
        controls={false}
        muted
        playsInline
      >
        <source src='/video/animation.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {showUI && (
        <div className='bottom-card'>
          <h2>Welcome</h2>
          <p>Ready to continue? Sign in, log in, or skip.</p>

          <div className='button-group'>
            <SignUpButton />
            <WhiteLogInButton />
          </div>

          <button className='skip-button' onClick={handleSkip}>
            Skip
          </button>
        </div>
      )}
    </div>
  );
};

export default AnimationPage;
