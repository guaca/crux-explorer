import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledContent = styled.div`
    margin-top: 60px;
    flex-grow: 1;
`;

export const StyledH1 = styled.h1`
  font-family: monaco, Consolas, "Lucida Console", monospace;
  text-align: center;
  width: min(90%, 500px);
  margin: 16px auto;
  color: #800080;
  /* filter: drop-shadow(0 0 0.75rem #993099); */
`;

export const StyledTextWrapper = styled.div`
  width: min(95%, 750px);
  margin: 0 auto;
`;

export const StyledH2 = styled.h2`
  color: #800080;
  font-size: 18px;
  text-align: center;
  font-family: monaco, Consolas, "Lucida Console", monospace;
  padding-top: 24px;
`;

export const StyledText = styled.p`
  color: #333;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin: 16px auto 32px auto;
  width: 150px;
  color: #FFF;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #800080;
  font-weight: 600;
  text-transform: uppercase;
  &: hover {
      background-color: #993099;
  }
`;

export const StyledLi = styled.li`
  margin: 12px;
`;

export const StyledA = styled.a`
  color: #800080;
  &: hover {
    color: #993099;
  }
`;