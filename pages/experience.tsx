import { Container, Stack, Title } from '@mantine/core';
import ExperienceCard from '../components/ExperienceCard';
import { EXPERIENCES } from '../constants/constants';

export default function Experience() {
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
          Experience
        </Title>
        {EXPERIENCES.map((exp) => (
          <ExperienceCard file={exp.file} imageSrc={exp.imageSrc} bgEnabled={exp.bgEnabled} />
        ))}
      </Stack>
    </Container>
  );
}
