import { Text, Group, Header, createStyles, rem, Box, MediaQuery, Burger } from '@mantine/core';
import Image from 'next/image';
import rivLogo from '../public/images/rivian.svg';
import mercLogo from '../public/images/merc.svg';
import umichLogo from '../public/images/umich.svg';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';

type AppHeaderProps = {
  opened: boolean;
  handleOpened: () => void;
};

const AppHeader = ({ opened, handleOpened }: AppHeaderProps) => {
  const useStyles = createStyles((theme) => ({
    header: {
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
    },

    inner: {
      height: rem(56),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    link: {
      display: 'block',
      lineHeight: 1,
      padding: `${rem(8)} ${rem(12)}`,
      borderRadius: theme.radius.sm,
      textDecoration: 'none',
      color: "theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7]",
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      },
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      },
    },
  }));

  const { classes } = useStyles();
  return (
    <Header height={56} mb={20} className={classes.header}>
      <Box className={classes.inner}>
        <Group position="left">
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger opened={opened} onClick={handleOpened} size="sm" mr="xl" />
          </MediaQuery>
          <Image src={umichLogo} alt="Rivian Logo" height={35} />
          <Image src={mercLogo} alt="Mercedes Logo" height={35} />
          <Image src={rivLogo} alt="Michigan Logo" height={35} />
          <Text fz="xl">Arunava Seal</Text>
        </Group>
        <Group position="right">
          <ColorSchemeToggle />
        </Group>
      </Box>
    </Header>
  );
};

export default AppHeader;
