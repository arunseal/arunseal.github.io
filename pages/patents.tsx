import { Container, Stack, Title } from '@mantine/core';
import { PATENTS } from '../constants/constants';
import PatentCard from '../components/PatentCard';

export default function Patents() {
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
          Patents
        </Title>
        {PATENTS.map((pat) => (
          <PatentCard file={pat.file} />
        ))}
      </Stack>
    </Container>
  );
}
