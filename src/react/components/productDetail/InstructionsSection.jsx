import React from 'react';
import { Title, Text } from '@mantine/core';

export default function InstructionsSection({ instructions }) {
  if (!instructions?.length) return null;

  return (
    <section className='detail-instructions'>
      <Title className='detail-title' order={3}>
        Instructions preview
      </Title>
      <div className='instructions-list'>
        {instructions.map((step, idx) => (
          <div key={idx} className='instruction-step'>
            <span className='instruction-step__number'>{idx + 1}.</span>
            <div className='instruction-step__body'>
              <Text fw={500}>{step.title}</Text>
              <Text className='instruction-step__text' size='sm' mt={2}>
                {step.text}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
