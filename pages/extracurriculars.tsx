import { Container, Stack, Title } from '@mantine/core';
import EducationCard from '../components/EducationCard';
import { EXTRACURRICULARS } from '../constants/constants';
import { getMarkDown } from '../lib/getMarkDown';
import { TextWithImage } from '../components/types';

export async function getStaticProps() {
  let list: TextWithImage[] = [];

  EXTRACURRICULARS.map(async (ext) => {
    const { content } = await getMarkDown(ext.file);
    list.push({ text: content, imageSrc: ext.imageSrc, bgEnabled: ext.bgEnabled });
  });
  return {
    props: {
      list,
    },
  };
}

interface ExtraCurricularsProps {
  list: TextWithImage[];
}

const ExtraCurriculars: React.FC<ExtraCurricularsProps> = ({ list }) => {
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
        {list.map((ext) => (
          <EducationCard
            imageSrc={ext.imageSrc}
            text={ext.text}
            bgEnabled={ext.bgEnabled}
            key={ext.text}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default ExtraCurriculars;
