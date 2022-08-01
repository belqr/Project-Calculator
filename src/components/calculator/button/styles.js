import styled from 'styled-components';

export const StyledButton = styled.button `
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: none;
  font-size: 36px;
  font-weight: 400;
  background-color: #333333;
  color: #ffffff;
  font-family: inherit;
  cursor: pointer;
  transition: 0.2s ease-in;
  
  :hover {
    filter: brightness(1.4);
  }

  :last-child {
        background-color: #D67876;
      }
`;
