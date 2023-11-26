import { useMantineTheme } from '@mantine/core';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export type InfoTextProps = {
  text: string;
};

const InfoText = ({ text }: InfoTextProps) => {
  const theme = useMantineTheme();
  return (
    <Markdown
      components={{
        h2(props) {
          const { node, ...rest } = props;
          return <h2 style={{ color: theme.colors.blue[6] }} {...rest} />;
        },
        h3(props) {
          const { node, ...rest } = props;
          return <h3 style={{ color: theme.colors.yellow[9] }} {...rest} />;
        },
      }}
      remarkPlugins={[remarkGfm]}
      children={text}
    ></Markdown>
  );
};

export default InfoText;
