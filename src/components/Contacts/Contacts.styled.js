import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1.5px solid gray;
  border-radius: 10px;
  padding: 15px;
  background-color: rgba(75, 100, 100, 0.8);
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  color: #fff;
  text-decoration: inherit;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:has(button:hover, button:focus) p {
    text-decoration: underline;
  }
`;

export const ContactInfo = styled.p`
  display: flex;
  justify-content: center;
  gap: 10px;
  @media (max-width: 470px) {
    flex-direction: column;
    gap: 1px;
  }
`;

export const DeleteBtn = styled.button`
  flex-shrink: 0;
  @media (max-width: 470px) {
    padding: 10px;
  }
`;
