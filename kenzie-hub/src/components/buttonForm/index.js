import styled from "styled-components";

const ButtonStyle = styled.button`
    width: 100%;
    padding: 10px 0;
    color: var(--grey-0);
    background-color: var(--color-primary);
    font-weight: 500;
    border: none;
    border-radius: var(--border-radius-1);
    font-size: var(--font-size-4);
    transition: 0.2s ease;

    :hover{
        background-color: var(--color-primary-50);
        transition: 0.2s ease;
    }
`

export default ButtonStyle