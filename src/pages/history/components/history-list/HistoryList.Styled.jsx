import styled from 'styled-components';

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
`;

export const StyledTable = styled.table`
    margin: 0 auto;
    width: min(95%, 850px);
    border-collapse: collapse;
`;

export const TableHeaderRow = styled.tr`
    border-bottom: 1px solid black;
    text-transform: uppercase;
    font-size: 14px;
`;

export const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 0;
`;

export const StyledButton = styled.button`
    width: 150px;
    color: #FFF;
    margin: 24px 0;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #800080;
    font-weight: 600;
    text-transform: uppercase;
    &:hover {
        background-color: #993099;
    }
    &:focus-visible {
        border-radius: 0;
        outline: none;
        background-color: #993099;
    }
    &: disabled {
        background-color: #EEE;
        border: 1px solid #CCC;
        color: #CCC;
    }
`;

export const TableWrapper = styled.div`
    overflow-x: auto;
`;