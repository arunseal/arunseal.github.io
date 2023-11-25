import React from 'react';
import { Card as MantineCard, Grid, Col, Center, Button } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import InfoText from './InfoText';
import { useMantineColorScheme } from '@mantine/core';

interface CardProps {
  file: string;
  link: string;
}

const PublicationCard: React.FC<CardProps> = ({ file, link }) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <MantineCard
      padding={'2% 5%'}
      sx={{ width: '90%', margin: '0 auto', borderRadius: '30px' }}
      bg={colorScheme === 'dark' ? 'gray.9' : 'gray.2'}
    >
      <Grid>
        <Col span={10}>
          <InfoText file={file} />
        </Col>
        <Center>
          <Col span={2}>
            <Button
              radius="xl"
              size="xl"
              variant="filled"
              leftIcon={<IconExternalLink />}
              component="a"
              href={link}
            >
              Paper
            </Button>
          </Col>
        </Center>
      </Grid>
    </MantineCard>
  );
};

export default PublicationCard;
