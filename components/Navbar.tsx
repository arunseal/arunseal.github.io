import { useState } from 'react';
import { createStyles, Navbar, getStylesRef, Button } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.lg,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

const data = [
  { link: '/', label: 'Home' },
  { link: '/experience', label: 'Experience' },
  { link: '/education', label: 'Education' },
  { link: '/publications', label: 'Publications' },
  { link: '/patents', label: 'Patents' },
  { link: '/certifications', label: 'Certifications' },
  { link: '/extra-curriculars', label: 'Extra-Curricular' },
];

type NavbarProps = {
  opened: boolean;
};

export const NavbarSimple = ({ opened }: NavbarProps) => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Home');

  const links = data.map((item) => (
    <Button
      size="lg"
      variant="subtle"
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      component={Link}
      href={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      {item.label}
    </Button>
  ));

  return (
    <Navbar
      height={'100vh'}
      sx={{ overflow: 'inherit' }}
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 150, lg: 200 }}
    >
      <Navbar.Section>{links}</Navbar.Section>
    </Navbar>
  );
};
