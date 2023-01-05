import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const Text = styled.p`
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  height: 50px;
  width: 400px;
  padding: 0 10px 0 10px;
  &::placeholder {
    font-size: 18px;
  }
`;

export const BtnSubmit = styled.button`
  margin-top: 15px;
  display: block;
  list-style: none;
  justify-content: center;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  color: #141313;
  font-size: 20px;
  width: 200px;
  height: 40px;
  cursor: pointer;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
  transition: transform 500ms;
  &:hover {
    cursor: pointer;
    background-color: lightgreen;
  }
`;
