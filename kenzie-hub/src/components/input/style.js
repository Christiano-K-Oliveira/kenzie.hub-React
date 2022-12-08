import styled from "styled-components";

const InputStyle = styled.input`
    border-radius: var(--border-radius-1);
    background-color: var(--grey-2);
    color: var(--grey-0);
    font-size: var(--font-size-4);
    padding: 10px;
    margin: 15px 0;
    border: 2px solid transparent;
    outline: none;
    width: 100%;
    transition: 0.2s ease;

    :focus{
        border: 2px solid var(--grey-0);
        transition: 0.2s ease;
    }
`
export default InputStyle