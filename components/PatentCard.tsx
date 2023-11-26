import React from 'react';
import { Card as MantineCard } from '@mantine/core';
import InfoText from './InfoText';
import { useMantineColorScheme } from '@mantine/core';

interface CardProps {
  text: string;
}

const PatentCard: React.FC<CardProps> = ({ text }) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <MantineCard
      padding={'2% 5%'}
      sx={{ width: '90%', margin: '0 auto', borderRadius: '30px' }}
      bg={colorScheme === 'dark' ? 'gray.9' : 'gray.2'}
    >
      <InfoText text={text} />
    </MantineCard>
  );
};

export default PatentCard;
