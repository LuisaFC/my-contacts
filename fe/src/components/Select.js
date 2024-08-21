import styled from 'styled-components';

export default styled.select`
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 10pxrgba(0, 0, 0, 0.4);
  height: 52px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  border: 2px solid #fff;
  transition: border-colot 0.2s ease-in;


  &:focus{
    border-color: ${({ theme }) => theme.colors.primary.main}
  }
`;
