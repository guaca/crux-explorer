import styled, { createGlobalStyle } from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
`;

export const GlobalStyle = createGlobalStyle`
    body {
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
        color: #333;
    }
`;