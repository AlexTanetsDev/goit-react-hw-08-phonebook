import styled from "styled-components";
import {Field, Form} from "formik"

export const ContactsForm = styled(Form)`

display: flex;
flex-direction: column;
background-color: #fff;
padding: 15px;
gap: 15px;
align-items: center;

 border-radius: 15px;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap:5px;

    font-size: 24px;
    font-weight: 500;
`;

export const StyledField = styled(Field)`
border: 1.5px solid black;
border-radius: 15px;
outline: none;
padding: 2px 10px;


`
export const SubmitButton= styled.button`
       text-decoration: none;
    text-align: center;
    color: #ffffff;
    font-weight: 700;
    font-size: 24px;
    background-color: #60b8ff;
    padding: 5px;
    width: 250px;
    border-radius: 15px;
    border: none;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    :hover,:focus{
        background-color: #ec4d1c;
    }

`