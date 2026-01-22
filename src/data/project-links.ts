import type { ProjectLink, TeamMember } from '@/types/team-types';

export const projectLinks: ProjectLink[] = [
  {
    title: 'WARDWORK Official Website',
    description: 'Main product experience available at wardwork.org.',
    url: 'https://www.wardwork.org',
    icon: '/wardwork_logo.png',
  },
  {
    title: 'WARDWORK GitHub Repository',
    description: 'Open-source codebase powering the WARDWORK ecosystem.',
    url: 'https://github.com/WARDWORK/wardwork',
  },
  {
    title: 'GrantFox Campaign',
    description: 'Support WARDWORK through our GrantFox campaign.',
    url: 'https://contribute.grantfox.xyz/campaigns/org/WARDWORK',
    icon: '/grant-fox.png',
  },
  {
    title: 'WARDWORK Telegram Contributors',
    description: 'Join the contributor community on Telegram.',
    url: 'https://t.me/wardwork_contributors',
    icon: '/icons/telegram.svg',
  },
  {
    title: 'WARDWORK on X',
    description: 'Follow WARDWORK updates on X (Twitter).',
    url: 'https://x.com/offerhub_',
    icon: '/icons/x-logo.svg',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Josué Araya',
    role: 'CEO',
    avatarSrc: '/team/Josué.jpeg',
    githubUrl: 'https://github.com/Josue19-08',
    linkedinUrl: 'https://www.linkedin.com/in/josue-araya-marin-336975245/',
  },
  {
    name: 'Karla Garita',
    role: 'CPO',
    avatarSrc: '/team/Karla.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/karlagaritar/',
  },
  {
    name: 'Kevin Brenes',
    role: 'CTO',
    avatarSrc: '/team/Kevin.jpeg',
    githubUrl: 'https://github.com/KevinMB0220',
    linkedinUrl: 'https://www.linkedin.com/in/kevin-brenes-2a9750261',
  },
];
