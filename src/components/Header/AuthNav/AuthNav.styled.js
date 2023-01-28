import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SectionWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 470px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
  }
`;

export const Link = styled(NavLink)`
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
