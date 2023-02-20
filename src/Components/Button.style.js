import styled from 'styled-components';
export const StyledButton = styled.button`
  background-color: ${(props) => props.varient === 'outline' ? '#FFFFFF' : '#00FF00'};
  border: 2px solid #4CAF50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: 0.5s all ease-out;

`