import styled from "styled-components";

const DivBackground = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(18, 18, 20, 0.5);
`

const DivModal = styled.div`
    background-color: var(--grey-3);
    width: 370px;
    margin: 0 auto;
    margin-top: 8%;
    position: relative;
    border-radius: var(--border-radius-1);

    @media (max-width: 800px){
        width: 90%;
        margin-top: 20%;
    }
`

const TitleModal = styled.h2`
    color: var(--grey-0);
    font-size: var(--font-size-05);
    font-weight: 700;
`

const BoxHeader = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    border-radius: 4px 4px 0 0;
    width: 100%;
    padding: 20px;
    background-color: var(--grey-2);
`

const ButtonCloseModal = styled.button`
    background: none;
    border: none;
    width: 20px;
    height: 20px;
`

const FormModal = styled.form`
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
`

const LabelName = styled.label`
    color: var(--grey-0);
    font-size: var(--font-size-6);
    font-weight: 600;
    margin-bottom: 5px;
`

const InputName = styled.input`
    border-radius: var(--border-radius-1);
    height: 40px;
    outline: 2px solid transparent;
    border: none;
    background-color: var(--grey-2);
    padding: 10px;
    font-size: var(--font-size-4);
    color: var(--grey-0);
    transition: 0.2s ease;

    ::placeholder{
        color: var(--grey-1);
    }

    :focus{
        outline: 2px solid var(--grey-0);
        transition: 0.2s ease;
    }
`

const LabelStatus = styled.label`
    color: var(--grey-0);
    font-size: var(--font-size-6);
    font-weight: 600;
    margin-bottom: 5px;
    margin-top: 20px;
`

const SelectStatus = styled.select`
    border-radius: var(--border-radius-1);
    height: 40px;
    outline: 2px solid transparent;
    border: none;
    background-color: var(--grey-2);
    padding: 10px;
    font-size: var(--font-size-4);
    color: var(--grey-0);
    transition: 0.2s ease;
    cursor: pointer;

    :focus{
        outline: 2px solid var(--grey-0);
        transition: 0.2s ease;
    }
`

const ButtonRegister = styled.button`
    font-size: var(--font-size-4);
    font-weight: 500;
    color: var(--grey-0);
    background-color: var(--color-primary);
    border: none;
    border-radius: var(--border-radius-1);
    padding: 10px 0;
    margin-top: 10%;
    transition: 0.2s ease;
    width: 100%;

    :hover{
        background-color: var(--color-primary-50);
        transition: 0.2s ease;
    }
`


const BoxButtons = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: none;
    gap: 20px;
    height: fit-content;
`

const ButtonDelete = styled.button`
    min-width: 35%;
    font-size: var(--font-size-4);
    font-weight: 500;
    color: var(--grey-0);
    background-color: var(--grey-1);
    border: none;
    border-radius: var(--border-radius-1);
    padding: 10px 0;
    margin-top: 10%;
    transition: 0.2s ease;

    :hover{
        background-color: var(--grey-2);
        transition: 0.2s ease;
    }
`

const SpanError = styled.span`
    color: var(--color-negative);
    font-size: var(--font-size-6);
    font-weight: 500;
    margin-top: 5px;
`


export { DivBackground, DivModal, TitleModal, BoxHeader, ButtonCloseModal, FormModal, LabelName, LabelStatus, InputName, SelectStatus, ButtonRegister, BoxButtons, ButtonDelete, SpanError }

































