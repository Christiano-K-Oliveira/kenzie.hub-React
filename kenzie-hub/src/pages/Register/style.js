import styled from "styled-components";

const DivHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 800px){
        margin: 0 auto;
        max-width: 90%;
    }

`

const TitleRegister = styled.h1`
    font-size: var(--font-size-3);
    font-weight: 700;
    color: var(--grey-0);
    text-align: center;
`

const SpanRegister = styled.span`
    font-size: var(--font-size-6);
    color: var(--grey-1);
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

const SelectRegister = styled.select`
    border-radius: var(--border-radius-1);
    background-color: var(--grey-2);
    color: var(--grey-1);
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
        color: var(--grey-0);
    }
`

const SpanError = styled.span`
    color: var(--color-negative);
    font-size: var(--font-size-6);
    font-weight: 500;
    transform: translateY(-10px);
`

export { DivHeader, TitleRegister, SpanRegister, SelectRegister, SpanError }