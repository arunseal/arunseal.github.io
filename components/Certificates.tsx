import React from 'react';
import {
  Card as MantineCard,
  Button,
  Stack,
  Title,
  Group,
  Divider,
  useMantineTheme,
} from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import { useMantineColorScheme } from '@mantine/core';
import { CERTIFICATES } from '../constants/constants';

const CertificateCard = () => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <MantineCard
      padding={'2% 5%'}
      sx={{ width: '90%', margin: '0 auto', borderRadius: '30px' }}
      bg={colorScheme === 'dark' ? 'gray.9' : 'gray.2'}
    >
      <Stack>
        {CERTIFICATES.map((cert) => (
          <div key={cert.title}>
            <Group position="apart" spacing={'md'} grow>
              <Title order={3} color={theme.colors.blue[6]}>
                {cert.title}
              </Title>
              <Title order={6}>
                {cert.subtitle} | {cert.date}
              </Title>
              <Button
                radius="xl"
                size="sm"
                variant="filled"
                leftIcon={<IconExternalLink />}
                component="a"
                href={cert.link}
                maw={150}
              >
                Certificate
              </Button>
            </Group>
            <Divider my="lg" size="lg" variant="solid" />
          </div>
        ))}
      </Stack>
    </MantineCard>
  );
};

export default CertificateCard;
