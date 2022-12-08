import styled from "styled-components";

const HeaderDash = styled.header`
    background-color: var(--grey-4);
    width: 100%;
    height: fit-content;
`

const DivHeader = styled.div`
    max-width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;

    @media(max-width: 800px){
        max-width: 90%;
    }
`

const Main = styled.main`
    background-color: var(--grey-4);
`

const SectionWelcome = styled.section`
    background-color: var(--grey-4);
    border-top: 2px solid var(--grey-3);
    border-bottom: 2px solid var(--grey-3);
    height: 120px;
    display: flex;
    align-items: center;
`

const DivWelcome = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: 0 auto;

    @media(max-width: 800px){
        width: 90%;
    }
`

const TitleWelcome = styled.h2`
    color: var(--grey-0);
    font-size: var(--font-size-3);
    font-weight: 700;
`

const SpanWelcome = styled.span`
    color: var(--grey-1);
    font-size: var(--font-size-6);
`

const SectionInfo = styled.section`
    margin: 0 auto;
    max-width: 60%;
    display: flex;
    flex-direction: column;
    margin-top: 3%;

    @media(max-width: 800px){
        max-width: 90%;
    }
`

const TitleInfo = styled.h2`
    color: var(--grey-0);
    font-size: var(--font-size-3);
    font-weight: 700;
`

const ParagraphInfo = styled.p`
    color: var(--grey-0);
    font-size: var(--font-size-4);
    margin-top: 3%;
`

export { HeaderDash, DivHeader, Main, SectionWelcome, DivWelcome, TitleWelcome, SpanWelcome, SectionInfo, TitleInfo, ParagraphInfo }