import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 32px;
`;

export const Input = styled.input`
  width: 320px;
  padding: 14px 32px 14px 16px;

  color: #FFF;
  background: transparent;

  border: 2px solid #5F0CFF;
  border-radius: 4px 0 0 4px;

  cursor: pointer;
  outline: none;

  &::placeholder {
    color: #E2E2E2;
  }

  &.edit {
    border: 2px solid #149FFF;
  }
`;

export const Button = styled.button`
  padding: 16px;

  color: #FFF;
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
    );
    text-transform: capitalize;
    
  border: none;
  border-radius: 0 4px 4px 0;

  cursor: pointer;
  outline: none;

  &.edit {
    padding: 16px 20px;

    background: linear-gradient(
      90deg,
      rgba(20, 150, 255, 1) 0%,
      rgba(17, 22, 255, 1) 100%
    );
  }
`;
