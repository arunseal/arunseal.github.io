import { Container, Stack, Title } from '@mantine/core';
import CertificateCard from '../components/Certificates';

export default function Certifications() {
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
          Certifications
        </Title>
        <CertificateCard />
      </Stack>
    </Container>
  );
}
