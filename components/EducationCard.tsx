import React from 'react';
import { Card as MantineCard, Grid, Col, Center } from '@mantine/core';
import { Image } from '@mantine/core';
import InfoText from './InfoText';
import { useMantineColorScheme } from '@mantine/core';

interface CardProps {
  file: string;
  imageSrc: string;
  bgEnabled: boolean;
}

const EducationCard: React.FC<CardProps> = ({ file, imageSrc, bgEnabled }) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <MantineCard
      padding={'2% 5%'}
      sx={{ width: '90%', margin: '0 auto', borderRadius: '30px' }}
      bg={colorScheme === 'dark' ? 'gray.9' : 'gray.1'}
    >
      <Grid>
        <Col span={9}>
          <InfoText file={file} />
        </Col>
        <Center>
          <Col span={3}>
            <Image
              src={imageSrc}
              alt="Logo"
              width={180}
              height={180}
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
