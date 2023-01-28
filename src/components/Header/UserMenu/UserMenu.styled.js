import styled from '@emotion/styled';

export const LogoutMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media (max-width: 470px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
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
