import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 
    'Trebuchet MS', 'Lucida Sans Unicode',
    'Lucida Grande', 'Lucida Sans',
    Arial, sans-serif;
  }

  body {
    background: linear-gradient(
      90deg,
      rgba(30, 15, 255, 1) 0%,
      rgba(80, 80, 255, 1) 100%
    );
  }
`;

export const TodoContainerForm = styled.div`
  text-align: center;

  width: 520px;
  min-height: 500px;

  margin: 90px auto;
  padding-bottom: 32px;

  background: #161A2B;

  border-radius: 10px:

  display: flex;
  flex-direction: column:
  justify-content: start;
`;

export default GlobalStyles;