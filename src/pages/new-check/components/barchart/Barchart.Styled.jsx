import styled from 'styled-components';

export const StyledDiv = styled.div`
    width: min(85%, 1000px);
    height: auto;
    margin: 0 auto 128px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledH1 = styled.h1`
    text-align: center;    
`;

export const PrimaryButton = styled.button`
    width: 150px;
    color: #FFF;
    margin: 10px 0;
    padding: 10px;
    border: none;
    background-color: #800080;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 5px;
    &: hover {
        background-color: #993099;
    }
`;

export const SecondaryButton = styled.button`
    width: 150px;
    color: #800080;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #800080;
    background-color: #FFF;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 5px;
    &: hover {
        background-color: #993099;
        color: #FFF;
        border: none;
    }
    &: disabled {
        background-color: #EEE;
        border: 1px solid #CCC;
        color: #CCC;
    }
`;

export const StyledInfo = styled.p`
    text-align: center;
    color: #555;
    font-style: oblique;
    font-size: 12px;
    margin: 12px auto;
`;

export const StyledSpan = styled.span`
    color: #800080;
`;