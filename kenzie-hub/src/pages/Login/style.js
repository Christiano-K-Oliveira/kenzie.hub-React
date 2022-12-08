import styled from "styled-components";

const Main = styled.main`
    margin: 0 auto;
    max-width: 370px;
    margin-top: 5%;
    height: 500px;
`

const LogoFigure = styled.figure`
    display: flex;
    justify-content: center;
`

const LogoImg = styled.img`
    width: 144px;
    height: 20px;
`

const Formulario = styled.form`
    background-color: var(--grey-3);
    border-radius: var(--border-radius-1);
    width: 100%;
    height: fit-content;
    padding: 35px 20px;
    padding-bottom: 25px;
    margin-top: 25px;
    margin-bottom: 25px;

    @media(max-width: 800px){
        max-width: 90%;
        margin: 25px auto;
    }
`

const TituloFormulario = styled.h1`
    color: var(--grey-0);
    font-size: var(--font-size-3);
    font-weight: 700;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
`

const SpanQuest = styled.span`
    font-size: var(--font-size-6);
    color: var(--grey-1);
    font-weight: 600;
    display: flex;
    justify-content: center;
    margin: 20px 0;
`

const SpanError = styled.span`
    color: var(--color-negative);
    font-size: var(--font-size-6);
    font-weight: 500;
    transform: translateY(-10px);
`

export { LogoFigure, LogoImg, Main, Formulario, TituloFormulario, SpanQuest, SpanError }