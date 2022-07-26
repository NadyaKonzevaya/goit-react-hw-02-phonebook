import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 10px;
    width: 300px;
    
    border: 5px solid rgb(241, 139, 245);
    border-radius: 10px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 200px
`;

export const InputName = styled.input`
    border: 1px solid gray;
    border-radius: 5px;
    outline: none;
    &:hover, &:focus {
        border: 5px solid #81b9e7;
    }
`;

export const Button = styled.button`
    background-color: rgb(241, 139, 245);
    border: none;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 1px 3px rgba(0, 0, 0, 0.12);
        border-radius: 10px;
    width: 100px;
    padding: 5px;
    &:hover, &:focus {
        background-color: lightblue;
    }
`;
