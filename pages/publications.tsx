import { Container, Stack, Title } from '@mantine/core';
import PublicationCard from '../components/PublicationCard';
import { PUBLICATIONS } from '../constants/constants';
import { getMarkDown } from '../lib/getMarkDown';
import { Publication } from '../components/types';

export async function getStaticProps() {
  let list: Publication[] = [];

  PUBLICATIONS.map(async (pub) => {
    const { content } = await getMarkDown(pub.file);
    list.push({ text: content, link: pub.link });
  });
  return {
    props: {
      list,
    },
  };
}

interface PublicationProps {
  list: Publication[];
}

const Publications: React.FC<PublicationProps> = ({ list }) => {
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
        {list.map((pub) => (
          <PublicationCard key={pub.link} text={pub.text} link={pub.link} />
        ))}
      </Stack>
    </Container>
  );
};

export default Publications;
