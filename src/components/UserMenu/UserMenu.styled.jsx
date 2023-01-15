import styled from "styled-components";

export const UserWraper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const StyledLogoutBtn = styled.button`
   text-decoration: none;
    text-align: center;
    color: #ffffff;
    font-weight: 500;
    background-color: #bebcbc;
    padding: 7px;
    width: 80px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    outline: none;
    border: none;

    :hover,:focus{
        background-color: #5365ff;
    }
`

export const UserName = styled.p`
    font-size: 24px;
    font-weight: 500;
`