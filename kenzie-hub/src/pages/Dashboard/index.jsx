import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api"
import { LogoFigure, LogoImg } from "../Login/style"
import { DivHeader, DivWelcome, HeaderDash, Main, DivInfo, SectionInfo, SectionWelcome, SpanWelcome, TitleInfo, TitleWelcome } from "./style"
import { ButtonAdd, ListTech, ItemTech, TitleTech, SpanLevel } from "./style"
import logo from '../../imgs/Logo.png'
import ButtonExit from "../../components/buttonExit"
import { MdOutlineAdd } from 'react-icons/md';
import { ModalRegister, ModalUpdate } from "../../components/modal"
import { TechContext } from "../../providers/context"


const DashboardPage = () => {
  const token = localStorage.getItem('khub_pass')
  const navigate = useNavigate()
  const [data, setData] = useState()
  const [modal, setModal] = useState()
  const { listTech, setListTech } = useContext(TechContext)
  const [idItem, setIdItem] = useState()

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

  function pull(){
    return;
  }

  function passId(event){
    setIdItem(event.target.id)
    setModal('update')
  }

  function renderTechs(){
    return listTech.map((item) => {
      return (
          <ItemTech id={item.id} onClick={(event) => passId(event)}>
            <TitleTech>{item.title}</TitleTech>
            <SpanLevel>{item.status}</SpanLevel>
          </ItemTech>
      )
    })
  }
  
  if(data){
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
          <DivInfo>
            <TitleInfo>Tecnologias</TitleInfo>
            <ButtonAdd type="button" onClick={() => setModal('register')}><MdOutlineAdd style={{color: 'white', width: '20px', height: '20px'}}/></ButtonAdd>
          </DivInfo>

          <ListTech>
            {
              listTech !== undefined ? renderTechs() : setListTech()
            }
          </ListTech>

        </SectionInfo>
      </Main>
      
      {
        modal === 'register' ? <ModalRegister setModal={setModal}/> : modal === 'update' ? <ModalUpdate setModal={setModal} id={idItem}/> : pull()
      }
      </>
    )
  }
  }
  
  export default DashboardPage