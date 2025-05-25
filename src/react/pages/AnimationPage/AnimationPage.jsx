import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SignUpButton,
  WhiteLogInButton,
} from '../../components/buttons/RedButtons';
import styles from './AnimationPage.module.scss';

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
    <div className={styles.animationPage}>
      <video
        ref={videoRef}
        className={`${styles.animationVideo} ${showUI ? styles.videoMoved : ''}`}
        onEnded={handleVideoEnded}
        muted
        playsInline
        aria-label='Intro animation'
      >
        <source src='/video/animation.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {showUI && (
        <div className={styles.bottomCard}>
          <h2>Welcome</h2>

          <div className={styles.bottomText}>
            <p>Ready to continue?</p>
            <p>You can sign in, log in, or skip.</p>
          </div>

          <div className={styles.buttonGroup}>
            <SignUpButton onClick={goToSignUp} />
            <WhiteLogInButton onClick={goToLogin} />
          </div>
          <button
            type='button'
            className={styles.skipButton}
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
