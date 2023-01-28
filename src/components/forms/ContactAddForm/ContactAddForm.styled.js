import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  border: 1.5px solid gray;
  border-radius: 10px;
  margin: 0 auto;
  padding: 15px;
  background-color: rgba(151, 99, 99, 0.8);
`;

export const FormField = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Label = styled.label``;

export const Input = styled.input`
  line-height: 1.71;
  border-radius: 5px;
`;

export const AddBtn = styled.button`
  margin: 0 auto;
  &:hover,
  &:focus {
  }
`;
