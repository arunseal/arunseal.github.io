import React from 'react';
import { Card as MantineCard, Grid, Col, Center, Button } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import InfoText from './InfoText';
import { useMantineColorScheme } from '@mantine/core';

interface CardProps {
  text: string;
  link: string;
}

const PublicationCard: React.FC<CardProps> = ({ text, link }) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <MantineCard
      padding={'2% 5%'}
      sx={{ width: '90%', margin: '0 auto', borderRadius: '30px' }}
      bg={colorScheme === 'dark' ? 'gray.9' : 'gray.2'}
    >
      <Grid>
        <Col span={12} xl={10} lg={9}>
          <InfoText text={text} />
        </Col>
        <Center>
          <Col span={12} xl={2} lg={3}>
            <Button
              radius="xl"
              size="lg"
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
