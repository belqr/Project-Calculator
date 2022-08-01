import styled from 'styled-components';

export const Container = styled.div `
  margin: 0 auto;
  margin-top: 75px;
  max-width: 380px;
  padding: 30px 0;
  background-color: black;
  border-radius: 20px;
  font-family: 'Open Sans', sans-serif;
  color: #ffffff;

  header {
    height: 110px;
    padding: 18px 36px;
    border-radius: 20px;
    display: flex; 
    justify-content: flex-end;

    span {
      font-size: 80px;
      font-weight: 400;
      color: #ffffff;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 13px;

    div {
      display: flex;
      gap: 13px;
      justify-content: center;

      :first-child {
        button {
          background-color: black;
          color: #ffffff;
          font-family: inherit;

          :hover {
            background-color: #F08784;
          }
        }
        
        button:last-child {
          background-color: black;
          color: #ffffff;

          :hover {
            background-color: #F08784;
          }
        }
      }

      :last-child {
        button:first-child {
          width: 163px;
          border-radius: 3em;
          text-align: start;
          padding: 0 30px;
        }
      }
    }
  }
`;