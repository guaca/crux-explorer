import styled from 'styled-components';
import arrow from './arrow.svg'

export const StyledForm = styled.form`
    width: min(95%, 850px);
    border: 1px solid rgba(128,0,128,0.5);
    border-radius: 10px;
    margin: 0 auto;
    padding: 32px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const StyledInput = styled.input`
    width: 65%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    &:focus-visible {
        border-radius: 0;
        outline: none;
        border: 1px solid #800080;
    }
    @media(min-width:768px) {
        width: 75%;
    }
`;

export const SelectWrapper = styled.div`
    display: flex;
    align-items: center;
    width: min(90vw, 250px);
`;

export const StyledLabel = styled.label`
    width: 40%;
    font-size: 14px;
`;

export const StyledSelect = styled.select`
    background-color: #FFF;
    color: #000;
    width: 60%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
	appearance: none;
    -moz-appearance: none;
	-webkit-appearance: none;
	background-image: url(${arrow});
	background-repeat: no-repeat, repeat;
	background-position: right 8px top 50%;
	background-size: .65em auto, 100%;
    &:focus-visible {
        border-radius: 0;
        outline: none;
        border: 1px solid #800080;
    }
`;

export const StyledButton = styled.button`
    width: 35%;
    color: #FFF;
    margin: 10px 0;
    padding: 10px;
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
    @media(min-width:768px) {
        width: 25%;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    width: min(90vw, 500px);
`;