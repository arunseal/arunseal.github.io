import React from 'react';
import { List, ThemeIcon, Anchor } from '@mantine/core';
import { THEME_ICON_SIZE } from '../constants/constants';
import classes from '../styles/Link.module.css';

export type SocialItemProps = {
  name: string;
  icon: React.ReactNode;
  url: string;
};

export const SocialItem = ({ name, icon, url }: SocialItemProps) => {
  return (
    <List.Item
      icon={
        <ThemeIcon size={THEME_ICON_SIZE} radius={'xl'}>
          {icon}
        </ThemeIcon>
      }
    >
      <Anchor
        href={url}
        className={`${classes.link} ${classes.one}`}
        target="_blank"
        underline={false}
      >
        {name}
      </Anchor>
    </List.Item>
  );
};
