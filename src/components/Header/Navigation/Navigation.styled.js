import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-align: center;
  font-weight: normal;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 1.71;
  color: #345f7e;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    font-weight: bold;
  }
  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
`;
