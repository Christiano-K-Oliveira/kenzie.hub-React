import styled from "styled-components";
import { Link } from "react-router-dom"


const ButtonExitStyle = styled(Link)`
    font-size: var(--font-size-6);
    font-weight: 600;
    color: var(--grey-0);
    border: none;
    border-radius: var(--border-radius-1);
    background-color: var(--grey-3);
    width: 68px;
    height: 40px;
    transition: 0.2s ease;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        background-color: var(--grey-2);
        transition: 0.2s ease;
    }
`

export default ButtonExitStyle