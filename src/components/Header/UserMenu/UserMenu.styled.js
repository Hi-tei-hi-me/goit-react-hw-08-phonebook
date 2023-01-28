import styled from '@emotion/styled';

export const LogoutMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const User = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const LogoutBtn = styled.button`
  margin: 0 auto;
  &:hover,
  &:focus {
  }
`;
