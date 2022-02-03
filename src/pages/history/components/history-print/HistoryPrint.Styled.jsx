import styled from 'styled-components';

export const StyledDiv = styled.div`
    width: min(85%, 1000px);
    height: auto;
    padding: 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #CCC;
`;

export const StyledButton = styled.button`
    width: 150px;
    color: #FFF;
    margin: 10px 0;
    padding: 10px;
    border: none;
    background-color: #800080;
    font-weight: 600;
    border-radius: 5px;
    text-transform: uppercase;
    &: hover {
        background-color: #993099;
    }
`;

export const StyledInfo = styled.p`
    text-align: center;
    color: #555;
    font-size: 14px;
    margin: 12px auto;
`;

export const StyledSpan = styled.span`
    color: #800080;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 16px 0;
`;