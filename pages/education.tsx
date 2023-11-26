import { Container, Stack, Title } from '@mantine/core';
import EducationCard from '../components/EducationCard';
import { EDUCATIONS } from '../constants/constants';
import { getMarkDown } from '../lib/getMarkDown';
import { TextWithImage } from '../components/types';

export async function getStaticProps() {
  let list: TextWithImage[] = [];

  EDUCATIONS.map(async (edu) => {
    const { content } = await getMarkDown(edu.file);
    list.push({ text: content, imageSrc: edu.imageSrc, bgEnabled: edu.bgEnabled });
  });
  return {
    props: {
      list,
    },
  };
}

interface EducationProps {
  list: TextWithImage[];
}

const Education: React.FC<EducationProps> = ({ list }) => {
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
          Education
        </Title>
        {list.map((edu) => (
          <EducationCard
            imageSrc={edu.imageSrc}
            text={edu.text}
            bgEnabled={edu.bgEnabled}
            key={edu.text}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default Education;
