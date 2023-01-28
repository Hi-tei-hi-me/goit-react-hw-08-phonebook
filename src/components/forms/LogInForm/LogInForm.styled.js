import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  line-height: 1.71;
  border-radius: 5px;
  &:placeholder-shown {
    font-style: italic;
  }
`;

export const LoginBtn = styled.button`
  margin: 0 auto;
  &:hover,
  &:focus {
  }
`;
