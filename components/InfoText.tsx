import { Text } from '@mantine/core';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useEffect, useState } from 'react';

export type InfoText = {
  file: string;
};

const InfoText = ({ file }: InfoText) => {
  const [text, setText] = useState('');
  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setText(text));
  }, []);
  return (
    <Markdown
      components={{
        // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
        h2(props) {
          const { node, ...rest } = props;
          return <h2 style={{ color: '#E8590C' }} {...rest} />;
        },
      }}
      remarkPlugins={[remarkGfm]}
      children={text}
    ></Markdown>
  );
};

export default InfoText;
