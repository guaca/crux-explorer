import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledWrapper = styled.div`
    border-bottom: 1px solid rgba(128,0,128,0.5);
    background-color: #800080;
    color: #FFF;
    font-size: 14px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    font-family: monaco, Consolas, "Lucida Console", monospace;
`;

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(95%, 1000px);
    margin: 0 auto;
`;

export const StyledLogo = styled.p`
    display: flex;
    align-items: center;
    font-size: 16px;
    margin: 8px 0;
`;

export const StyledUl = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style: none;
    margin: 8px 0;
`;

export const StyledLi = styled.li`
    padding: 0 8px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    &:hover {
        font-weight: 600;
    }
`;