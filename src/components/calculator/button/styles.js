import styled from 'styled-components';

export const StyledButton = styled.button `
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: none;
  font-size: 36px;
  font-weight: 400;
  background-color: black;
  color: #ffffff;
  font-family: inherit;
  cursor: pointer;
  transition: 0.20s ease-in;
  
  :hover {
    background-color: #333333;
  }

  :last-child {
        background-color: black;

        :hover {
          background-color: #F08784;
        }
      }
`;
