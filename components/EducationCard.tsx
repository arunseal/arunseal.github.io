import React from 'react';
import { Card as MantineCard, Grid, Col, Center } from '@mantine/core';
import { Image } from '@mantine/core';
import InfoText from './InfoText';
import { useMantineColorScheme } from '@mantine/core';

interface CardProps {
  text: string;
  imageSrc: string;
  bgEnabled: boolean;
}

const EducationCard: React.FC<CardProps> = ({ text, imageSrc, bgEnabled }) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <MantineCard
      padding={'2% 5%'}
      sx={{ width: '90%', margin: '0 auto', borderRadius: '30px' }}
      bg={colorScheme === 'dark' ? 'gray.9' : 'gray.2'}
    >
      <Grid>
        <Col span={12} xl={9} lg={8}>
          <InfoText text={text} />
        </Col>
        <Center>
          <Col span={12} xl={3} lg={4}>
            <Image
              src={imageSrc}
              alt="Logo"
              width={180}
              height={180}
              fit="contain"
              radius={'30px'}
              style={{
                backgroundColor: bgEnabled ? 'white' : undefined,
                borderRadius: '30px',
              }}
            />
          </Col>
        </Center>
      </Grid>
    </MantineCard>
  );
};

export default EducationCard;
