import { Container, Stack, Title } from '@mantine/core';
import ExperienceCard from '../components/ExperienceCard';
import { EXPERIENCES } from '../constants/constants';
import { getMarkDown } from '../lib/getMarkDown';
import { TextWithImage } from '../components/types';

export async function getStaticProps() {
  let list: TextWithImage[] = [];

  EXPERIENCES.map(async (exp) => {
    const { content } = await getMarkDown(exp.file);
    list.push({ text: content, imageSrc: exp.imageSrc, bgEnabled: exp.bgEnabled });
  });
  return {
    props: {
      list,
    },
  };
}

interface ExperienceProps {
  list: TextWithImage[];
}

const Experience: React.FC<ExperienceProps> = ({ list }) => {
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
        {list.map((exp) => (
          <ExperienceCard
            text={exp.text}
            imageSrc={exp.imageSrc}
            bgEnabled={exp.bgEnabled}
            key={exp.text}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default Experience;
