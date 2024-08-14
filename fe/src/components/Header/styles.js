import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 74px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const InputSearchContainer = styled.header`
  margin-top: 48px;
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    background: #fff;
    border: none;
    border-radius: 25px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.04));
  }
`;
