import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FinalStepper from '../components/stepper/Stepper';
import { Button } from '@mantine/core';
import Look1 from '@/assets/yourlook/1look.png';
import Look2 from '@/assets/yourlook/2look.png';
import Look3 from '@/assets/yourlook/3look.png';
import Look4 from '@/assets/yourlook/4look.png';

import '@/sass/pages/_personal_look.scss';

const images = [
  { id: 1, src: Look1, alt: 'Look 1' },
  { id: 2, src: Look2, alt: 'Look 2' },
  { id: 3, src: Look3, alt: 'Look 3' },
  { id: 4, src: Look4, alt: 'Look 4' },
];

const PersonalLookPage = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleSelect = id => {
    setSelected(id);
  };

  const handleContinue = () => {
    if (selected) {
      navigate('/homescreen');
    }
  };

  return (
    <div className='personal-look-page'>
      <button className='back-button' onClick={() => navigate(-1)}>
        ←
      </button>

      <FinalStepper active={1} />

      <h2>Select a picture that resembles you</h2>
      <p>
        By doing this, you will get product thumbnails that match your
        appearance.
      </p>

      <div className='image-grid'>
        {images.map(img => (
          <div
            key={img.id}
            className={`image-box ${selected === img.id ? 'selected' : ''}`}
            onClick={() => handleSelect(img.id)}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      <div className='bottom-bar'>
        <Button
          fullWidth
          size='md'
          radius='md'
          className='continue-button'
          onClick={handleContinue}
          disabled={!selected}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default PersonalLookPage;
