import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';
import FinalStepper from '../../components/stepper/Stepper';
import { BackIconButton } from '../../components/buttons/IconButtons';
import { BottomBarButton } from '../../components/buttons/RedButtons';

import Look1 from '@/assets/yourlook/1look.png';
import Look2 from '@/assets/yourlook/2look.png';
import Look3 from '@/assets/yourlook/3look.png';
import Look4 from '@/assets/yourlook/4look.png';

import { useSignUpData } from '../../hooks/useSignUpData';
import '@/sass/pages/_personal_look.scss';

const images = [
  { id: 1, src: Look1, alt: 'Look 1' },
  { id: 2, src: Look2, alt: 'Look 2' },
  { id: 3, src: Look3, alt: 'Look 3' },
  { id: 4, src: Look4, alt: 'Look 4' },
];

export default function PersonalLookPage() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const { save } = useSignUpData();

  useEffect(() => {
    import('./PersonalInfoPage')
      .then(() => console.log('✅ PersonalInfoPage chunk ready'))
      .catch(err => console.error('❌ preload failed', err));
  }, []);

  const handleSelect = id => {
    setSelected(id);
  };

  const handleContinue = () => {
    if (!selected) {
      alert('Please select a look before continuing.');
      return;
    }

    save({ look: selected });

    navigate('/personal-info');
  };

  return (
    <div className='personal-look-page'>
      <BackIconButton />

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

      <BottomBarButton onClick={handleContinue} disabled={!selected} />
    </div>
  );
}
