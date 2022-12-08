import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api"
import { LogoFigure, LogoImg } from "../Login/style"
import { DivHeader, DivWelcome, HeaderDash, Main, ParagraphInfo, SectionInfo, SectionWelcome, SpanWelcome, TitleInfo, TitleWelcome } from "./style"
import logo from '../../imgs/Logo.png'
import ButtonExit from "../../components/buttonExit"


const DashboardPage = () => {
  const token = localStorage.getItem('khub_pass')
  const navigate = useNavigate()
  const [data, setData] = useState()

  useEffect(() => {
    async function getData(){
      try {
        const response = await api.get('profile', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        setData(response.data)
      }
      catch {
        if(token){
          localStorage.removeItem('khub_pass')
        }
        navigate('/')
      }
    }
    getData()
  }, [token, navigate])

  if(data){
    console.log(data)
    return (
      <>
      <HeaderDash>
        <DivHeader>
          <LogoFigure>
            <LogoImg src={logo} alt='logo-img' />
          </LogoFigure>

          <ButtonExit name='Sair' />
        </DivHeader>
      </HeaderDash>

      <Main>
        <SectionWelcome>
          <DivWelcome>
            <TitleWelcome>Olá, {data.name}</TitleWelcome>
            <SpanWelcome>{data.course_module}</SpanWelcome>
          </DivWelcome>
        </SectionWelcome>

        <SectionInfo>
          <TitleInfo>Que pena! Estamos em desenvolvimento :(</TitleInfo>
          <ParagraphInfo>Nossa aplicação está em desenvolvimento, em breve teremos novidades</ParagraphInfo>
        </SectionInfo>
      </Main>
      </>
    )
  }
  }
  
  export default DashboardPage