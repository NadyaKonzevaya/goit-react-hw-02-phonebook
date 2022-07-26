import styled from "styled-components";

export const Item = styled.li`
    margin-bottom: 15px;
`;

export const Button = styled.button`
    background-color: white;
    border: none;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 1px 3px rgba(0, 0, 0, 0.12);
    width: 70px;
    padding: 3px;
    margin-left: 10px;
    &:hover, &:focus {
        background-color: lightblue;
    }
`;
