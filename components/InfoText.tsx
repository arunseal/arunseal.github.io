import { useMantineTheme } from '@mantine/core';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useEffect, useState } from 'react';

export type InfoText = {
  file: string;
};

const InfoText = ({ file }: InfoText) => {
  const theme = useMantineTheme();
  const [text, setText] = useState('');
  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setText(text));
  }, []);
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
