import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-position: inside;
  width: 550px;
  padding: 20px;
`;
export const Button = styled.button`
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
    background-color: red;
  }
`;
