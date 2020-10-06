import React from 'react';
import { DefaultTheme } from 'styled-components';
import { useRouter } from 'next/router';
import Logo from '@/common/Logo';
import useTheme from '@/hooks/useTheme';
import Text from '@/common/components/Text';
import Link from 'next/link';

import { Container, MenuItem, MenuLink, LogoWrapper } from './TopMenu.s';

const selectColorByPageIndex = (path: string, theme: DefaultTheme): string => {
  const colorByPageIndex: any = {
    '/': theme.colors.lightGray,
    '/skills': theme.colors.primary,
    '/clients': theme.colors.lightGray,
    '/about': theme.colors.primary,
  };

  return (path && colorByPageIndex[path]) || 'white';
};

const selectLogoColorByPageIndex = (
  path: string,
  theme: DefaultTheme
): string => {
  const colorByPageIndex: any = {
    '/': theme.colors.white,
    '/skills': theme.colors.primary,
    '/clients': theme.colors.white,
    '/about': theme.colors.primary,
  };

  return (path && colorByPageIndex[path]) || 'white';
};

const isActive = (actualPath: string, expectedPath: string) =>
  actualPath === expectedPath;

type Props = {
  dispatch: (action: any) => void;
};

const TopMenu = ({ dispatch }: Props) => {
  const theme = useTheme();
  const { pathname } = useRouter();

  const textColor = selectColorByPageIndex(pathname, theme);
  const logoColor = selectLogoColorByPageIndex(pathname, theme);

  return (
    <Container>
      <LogoWrapper>
        <Logo color={logoColor} />
      </LogoWrapper>
      <div>
        <MenuItem onClick={() => dispatch({ type: 'HOME' })}>
          <Link href="/">
            <MenuLink isActive={isActive(pathname, '/')} color={textColor}>
              <Text color={textColor}>Home</Text>
            </MenuLink>
          </Link>
        </MenuItem>
        <MenuItem onClick={() => dispatch({ type: 'SKILLS' })}>
          <Link href="/skills">
            <MenuLink
              isActive={isActive(pathname, '/skills')}
              color={textColor}
            >
              <Text color={textColor}>Skills</Text>
            </MenuLink>
          </Link>
        </MenuItem>
        <MenuItem onClick={() => dispatch({ type: 'CLIENTS' })}>
          <Link href="/clients">
            <MenuLink
              isActive={isActive(pathname, '/clients')}
              color={textColor}
            >
              <Text color={textColor}>Clients</Text>
            </MenuLink>
          </Link>
        </MenuItem>
        <MenuItem onClick={() => dispatch({ type: 'ABOUT' })}>
          <Link href="/about">
            <MenuLink isActive={isActive(pathname, '/about')} color={textColor}>
              <Text color={textColor}>About</Text>
            </MenuLink>
          </Link>
        </MenuItem>
      </div>
    </Container>
  );
};

export default TopMenu;
