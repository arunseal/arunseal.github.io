import React from 'react';
import { SiHackerrank } from 'react-icons/si';
import {
  IconBrandFacebookFilled,
  IconBrandLinkedin,
  IconBrandGithubFilled,
} from '@tabler/icons-react';

export const THEME_ICON_SIZE = 50;
export const SOCIALS = [
  {
    name: 'LinkedIn',
    icon: <IconBrandLinkedin />,
    url: 'https://www.linkedin.com/in/arunava-seal/',
  },
  {
    name: 'GitHub',
    icon: <IconBrandGithubFilled />,
    url: 'https://github.com/arunseal',
  },
  {
    name: 'HackerRank',
    icon: <SiHackerrank />,
    url: 'https://www.hackerrank.com/arunseal?hr_r=1',
  },
  {
    name: 'Facebook',
    icon: <IconBrandFacebookFilled />,
    url: 'https://www.facebook.com/arunavaseal95',
  },
];

export const PUBLICATIONS = [
  {
    file: '/markdown/publications/pub1.md',
    link: 'https://arxiv.org/abs/2104.00084',
  },
  {
    file: '/markdown/publications/pub2.md',
    link: 'https://arxiv.org/abs/2009.09093',
  },
  {
    file: '/markdown/publications/pub3.md',
    link: 'https://www.irjet.net/archives/V4/i7/IRJET-V4I7565.pdf',
  },
  {
    file: '/markdown/publications/pub4.md',
    link: 'https://ieeexplore.ieee.org/document/8067579',
  },
];

export const PATENTS = [
  {
    file: '/markdown/patents/patent1.md',
  },
  {
    file: '/markdown/patents/patent2.md',
  },
  {
    file: '/markdown/patents/patent3.md',
  },
];

export const EDUCATIONS = [
  {
    file: '/markdown/education/umich.md',
    imageSrc: '/images/UMLogo.png',
    bgEnabled: false,
  },
  {
    file: '/markdown/education/vit.md',
    imageSrc: '/images/vit.png',
    bgEnabled: true,
  },
  {
    file: '/markdown/education/sphs.md',
    imageSrc: '/images/sphs.png',
    bgEnabled: false,
  },
];

export const EXPERIENCES = [
  {
    file: '/markdown/experience/rivian.md',
    imageSrc: '/images/rivian.svg',
    bgEnabled: false,
  },
  {
    file: '/markdown/experience/merc.md',
    imageSrc: '/images/merc.svg',
    bgEnabled: false,
  },
  {
    file: '/markdown/experience/inovision.md',
    imageSrc: '/images/inovision.png',
    bgEnabled: false,
  },
  {
    file: '/markdown/experience/mdp.md',
    imageSrc: '/images/mdp.png',
    bgEnabled: false,
  },
  {
    file: '/markdown/experience/cair.md',
    imageSrc: '/images/cair.jpeg',
    bgEnabled: false,
  },
  {
    file: '/markdown/experience/hal.md',
    imageSrc: '/images/hal.jpeg',
    bgEnabled: false,
  },
  {
    file: '/markdown/experience/cesc.md',
    imageSrc: '/images/cesc.jpeg',
    bgEnabled: false,
  },
];
