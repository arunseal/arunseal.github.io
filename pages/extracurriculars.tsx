import { Container, Stack, Title } from '@mantine/core';
import EducationCard from '../components/EducationCard';
import { EXTRACURRICULARS } from '../constants/constants';

export default function Education() {
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
          Extra-Curriculars
        </Title>
        {EXTRACURRICULARS.map((ext) => (
          <EducationCard imageSrc={ext.imageSrc} file={ext.file} bgEnabled={ext.bgEnabled} />
        ))}
      </Stack>
    </Container>
  );
}
