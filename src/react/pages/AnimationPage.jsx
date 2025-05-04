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

          <div className='bottom-text'>
            <p>Ready to continue?</p>
            <p>You can sign in, log in, or skip.</p>
          </div>

          <div className='button-group'>
            <SignUpButton onClick={() => navigate('/signup')} />
            <WhiteLogInButton onClick={() => navigate('/login')} />
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
