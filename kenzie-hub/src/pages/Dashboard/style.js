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
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
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
    margin-top: 2%;

    @media(max-width: 800px){
        max-width: 90%;
    }
`

const TitleInfo = styled.h2`
    color: var(--grey-0);
    font-size: var(--font-size-4);
    font-weight: 600;
`

const DivInfo = styled.div`
    display: flex;
    justify-content: space-between;
`

const ButtonAdd = styled.button`
    width: 32px;
    height: 32px;
    border-radius: var(--border-radius-1);
    background-color: var(--grey-3);
    border: none;
    transition: 0.2s ease;

    :hover{
        background-color: var(--grey-2);
        transition: 0.2s ease;
    }
`

const ListTech = styled.ul`
    border: none;
    width: 100%;
    border-radius: var(--border-radius-1);
    background-color: var(--grey-3);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 3%;
    padding: 20px 0;
    gap: 15px;
`

const ItemTech = styled.li`
    width: 93%;
    height: 45px;
    border-radius: var(--border-radius-1);
    background-color: var(--grey-4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 20px;
    transition: 0.2s ease;
    color: var(--grey-1);

    :hover{
        background-color: var(--grey-2);
        cursor: pointer;
        transition: 0.2s ease;
        color: var(--grey-0);
    }
`

const TitleTech = styled.h3`
    color: var(--grey-0);
    font-size: var(--font-size-5);
    font-weight: 700;
`

const SpanLevel = styled.span`
    font-size: var(--font-size-6);
    transition: 0.2s ease;
`

export { HeaderDash, DivHeader, Main, SectionWelcome, DivWelcome, TitleWelcome, SpanWelcome, SectionInfo, TitleInfo, DivInfo, ButtonAdd }
export { ListTech, ItemTech, TitleTech, SpanLevel }