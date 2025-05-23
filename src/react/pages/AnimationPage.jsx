import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SignUpButton,
  WhiteLogInButton,
} from '../components/buttons/RedButtons';
import '@/sass/pages/_animation_page.scss';

export default function AnimationPage() {
  const videoRef = useRef(null);
  const [showUI, setShowUI] = useState(false);
  const navigate = useNavigate();

  const handleVideoEnded = useCallback(() => {
    setShowUI(true);
  }, []);

  const handleSkip = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    navigate('/homescreen');
  }, [navigate]);

  const goToSignUp = useCallback(() => {
    navigate('/signup');
  }, [navigate]);

  const goToLogin = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    vid.play().catch(() => {
      vid.muted = true;
      vid.play();
    });
  }, []);

  return (
    <div className='animation-page'>
      <video
        ref={videoRef}
        className={`animation-video ${showUI ? 'video-moved' : ''}`}
        onEnded={handleVideoEnded}
        muted
        playsInline
        aria-label='Intro animation'
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
            <SignUpButton onClick={goToSignUp} />
            <WhiteLogInButton onClick={goToLogin} />
          </div>
          <button
            type='button'
            className='skip-button'
            onClick={handleSkip}
            aria-label='Skip intro'
          >
            Skip
          </button>
        </div>
      )}
    </div>
  );
}
