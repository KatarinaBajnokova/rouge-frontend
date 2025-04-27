import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';
import FinalStepper from '../components/stepper/Stepper';

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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSelect = id => {
    setSelected(id);
  };

  const handleContinue = async () => {
    if (!selected) {
      alert('Please select a look before continuing.');
      return;
    }

    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert('User ID not found. Please log in again.');
      navigate('/login');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch('http://localhost:3000/api/users/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          look_id: selected,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update look.');
      }

      console.log('✅ Look ID updated in backend');
      navigate('/personal-info');
    } catch (error) {
      console.error('❌ Error updating look:', error.message);
      alert('Failed to update look. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='personal-look-page'>
      <button className='back-button' onClick={() => navigate(-1)}>
        ←
      </button>

      <FinalStepper active={1} />

      <h2>Select a picture that resembles you</h2>
      <p>This will help us show products that match your appearance.</p>

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
          disabled={!selected || loading}
        >
          {loading ? 'Saving...' : 'Continue'}
        </Button>
      </div>
    </div>
  );
};

export default PersonalLookPage;
