import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Container, MenuItem, MenuLink } from './TopMenuMobile.s';

const isActive = (actualPath: string, expectedPath: string) =>
  actualPath === expectedPath;

type Props = {
  dispatch: (action: any) => void;
};

const TopMenuMobile = ({ dispatch }: Props) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Container>
      <MenuItem isActive={isActive(router.pathname, '/')}>
        <Link href="/">
          <MenuLink onClick={() => dispatch({ type: 'HOME' })}>
            <FontAwesomeIcon
              size="1x"
              color={theme.colors.lightGray}
              icon="home"
            />
          </MenuLink>
        </Link>
      </MenuItem>
      <MenuItem isActive={isActive(router.pathname, '/skills')}>
        <Link href="/skills">
          <MenuLink onClick={() => dispatch({ type: 'SKILLS' })}>
            <FontAwesomeIcon
              size="1x"
              color={theme.colors.lightGray}
              icon="code"
            />
          </MenuLink>
        </Link>
      </MenuItem>
      <MenuItem isActive={isActive(router.pathname, '/clients')}>
        <Link href="/clients">
          <MenuLink onClick={() => dispatch({ type: 'CLIENTS' })}>
            <FontAwesomeIcon
              size="1x"
              color={theme.colors.lightGray}
              icon="users"
            />
          </MenuLink>
        </Link>
      </MenuItem>
      <MenuItem isActive={isActive(router.pathname, '/about')}>
        <Link href="/about">
          <MenuLink onClick={() => dispatch({ type: 'ABOUT' })}>
            <FontAwesomeIcon
              size="1x"
              color={theme.colors.lightGray}
              icon="info-circle"
            />
          </MenuLink>
        </Link>
      </MenuItem>
    </Container>
  );
};

export default TopMenuMobile;
