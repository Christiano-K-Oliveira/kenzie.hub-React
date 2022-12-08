import { LogoFigure, LogoImg, Main, Formulario, TituloFormulario, SpanQuest, SpanError } from "./style"
import logo from '../../imgs/Logo.png'
import Label from "../../components/label"
import Input from "../../components/input"
import Button from "../../components/buttonForm/index.jsx"
import { Link, useNavigate } from "react-router-dom"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../services/api"
import { toast } from "react-toastify"

const LoginPage = () => {

  const navigate = useNavigate()

  async function loginUser(data){
    try {
      const response = await api.post('sessions', data)
      await localStorage.setItem('khub_pass', response.data.token)
      navigate('/dashboard')

    }
    catch (erro){
      console.log(erro)

      toast.error('Ops! Algo deu errado', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })
    }
  }

  const formSchema = yup.object({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatório"),
  })

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(formSchema),
  })

  return (
    <Main>
        <LogoFigure>
            <LogoImg src={logo} alt='logo-img'/>
        </LogoFigure>

        <Formulario onSubmit={handleSubmit(loginUser)}>
            <TituloFormulario>Login</TituloFormulario>

            <Label name='Email' htmlFor='email'/>
            <Input type='email' placeholder='Digite aqui seu email' id='email' register={register} name='email'/>
            <SpanError style={errors.email?.message ? {display: 'flex'} : {display: 'none'}}>{errors.email?.message}</SpanError>

            <Label name='Senha' htmlFor='senha'/>
            <Input type='password' placeholder='Digite aqui sua senha' id='senha' register={register} name='password'/>
            <SpanError style={errors.password?.message ? {display: 'flex'} : {display: 'none'}}>{errors.password?.message}</SpanError>

            <Button name='Entrar' type='submit'/>
            <SpanQuest>Ainda não possui uma conta?</SpanQuest>
            <Link to='/registro' className="link_register_page_login">Cadastre-se</Link>
        </Formulario>
    </Main>
  )
}

export default LoginPage