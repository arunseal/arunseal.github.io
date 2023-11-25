import { Container, Stack, Title } from '@mantine/core';
import PublicationCard from '../components/PublicationCard';
import { PUBLICATIONS } from '../constants/constants';

export default function Publications() {
  return (
    <Container
      sx={{
        display: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100vh',
        padding: '15px',
      }}
      maw="100%"
    >
      <Stack align="center" justify="flex-start" spacing="xl">
        <Title order={1} variant="gradient">
          Publications
        </Title>
        {PUBLICATIONS.map((pub) => (
          <PublicationCard file={pub.file} link={pub.link} />
        ))}
      </Stack>
    </Container>
  );
}
