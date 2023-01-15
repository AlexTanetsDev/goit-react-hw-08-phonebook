import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    gap: 15px;
`

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    text-align: center;
    color: #ffffff;
    font-weight: 500;
    background-color: #bebcbc;
    padding: 7px;
    width: 80px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    :hover,:focus{
        background-color: #5365ff;
    }
`