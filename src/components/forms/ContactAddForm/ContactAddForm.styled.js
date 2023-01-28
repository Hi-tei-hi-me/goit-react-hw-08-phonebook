import styled from '@emotion/styled';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1.5px solid gray;
  border-radius: 10px;
  margin: 0 auto;
  padding: 15px;
  background-color: rgba(151, 99, 99, 0.8);
`;

export const FormTable = styled.div`
  display: flex;
  gap: 15px;
`;

export const FormLabels = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-around;
  gap: 5px;
  width: max-content;
`;

export const Label = styled.label``;

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const Input = styled.input`
  border-radius: 5px;
`;

export const AddBtn = styled.button`
  margin: 0 auto;
`;
