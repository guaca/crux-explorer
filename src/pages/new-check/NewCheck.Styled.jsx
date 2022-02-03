import styled from 'styled-components';

export const StyledContent = styled.div`
    margin-top: 60px;
    flex-grow: 1;
`;

export const StyledH1 = styled.h1`
  text-align: center;
  width: min(90%, 500px);
  margin: 16px auto;
  font-family: monaco, Consolas, "Lucida Console", monospace;
`;

export const StyledError = styled.p`
  width: min(90%, 500px);
  margin: 0 auto;
  padding-top: 32px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  font-style: oblique;
  color: hsl(359, 80%, 50%);
`;