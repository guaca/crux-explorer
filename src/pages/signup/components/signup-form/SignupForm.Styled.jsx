import styled from "styled-components";

export const StyledForm = styled.form`
    width: min(95%, 350px);
    border: 1px solid rgba(128,0,128,0.5);
    border-radius: 10px;
    margin: 0 auto;
    padding: 32px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledH1 = styled.h1`
  text-align: center;
  width: min(90%, 500px);
  margin: 16px auto;
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

export const StyledError = styled.div`
    color: red;
    text-align: center;
    padding-top: 16px;
`;

export const StyledButton = styled.button`
    width: 35%;
    color: #FFF;
    margin: 10px 0;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #800080;
    font-weight: 600;
    text-transform: uppercase;
    &:hover {
        background-color: #993099;
    }
    &:focus-visible {
        outline: none;
        background-color: #993099;
    }
    @media(min-width:768px) {
        width: 25%;
    }
`;