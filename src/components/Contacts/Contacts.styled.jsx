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
`;

export const ContactInfo = styled.p`
  @media (max-width: 470px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DeleteBtn = styled.button`
  flex-shrink: 0;
  @media (max-width: 424px) {
    width: 75px;
    padding: 5px 8px;
  }
`;
