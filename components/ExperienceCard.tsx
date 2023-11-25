import React from 'react';
import { Card as MantineCard, Grid, Col, MediaQuery } from '@mantine/core';
import { Image } from '@mantine/core';
import InfoText from './InfoText';
import { useMantineColorScheme } from '@mantine/core';
interface CardProps {
  file: string;
  imageSrc: string;
  bgEnabled: boolean;
}

const ExperienceCard: React.FC<CardProps> = ({ file, imageSrc, bgEnabled }) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <MantineCard
      padding={'2% 5%'}
      sx={{ width: '90%', margin: '0 auto', borderRadius: '30px' }}
      bg={colorScheme === 'dark' ? 'gray.9' : 'gray.2'}
    >
      <Grid>
        <Col span={11}>
          <InfoText file={file} />
        </Col>
        <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
          <Col span={1}>
            <Image
              src={imageSrc}
              alt="Logo"
              width={80}
              height={80}
              radius={'15px'}
              style={{
                marginTop: '20%',
                marginRight: '5%',
                backgroundColor: bgEnabled ? 'white' : undefined,
                borderRadius: '15px',
              }}
            />
          </Col>
        </MediaQuery>
      </Grid>
    </MantineCard>
  );
};

export default ExperienceCard;
