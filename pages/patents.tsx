import { Container, Stack, Title } from '@mantine/core';
import { PATENTS } from '../constants/constants';
import PatentCard from '../components/PatentCard';
import { getMarkDown } from '../lib/getMarkDown';
import { TextWithoutImage } from '../components/types';

export async function getStaticProps() {
  let list: TextWithoutImage[] = [];

  PATENTS.map(async (pat) => {
    const { content } = await getMarkDown(pat.file);
    list.push({ text: content });
  });
  return {
    props: {
      list,
    },
  };
}

interface PatentProps {
  list: TextWithoutImage[];
}

const Patents: React.FC<PatentProps> = ({ list }) => {
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
        {list.map((pat) => (
          <PatentCard text={pat.text} key={pat.text} />
        ))}
      </Stack>
    </Container>
  );
};

export default Patents;
