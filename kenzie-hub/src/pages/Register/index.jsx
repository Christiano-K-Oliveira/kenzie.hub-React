import logo from '../../imgs/Logo.png'
import Label from "../../components/label"
import Input from "../../components/input"
import Button from "../../components/buttonForm/index.jsx"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import api from "../../services/api"
import { Formulario, LogoFigure, LogoImg, Main } from '../Login/style'
import { DivHeader, SelectRegister, SpanError, SpanRegister, TitleRegister } from './style'
import ButtonExit from '../../components/buttonExit'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const RegisterPage = () => {

    const navigate = useNavigate()

    async function registerUser(data){
        
        if(errors.message === undefined){
            const newData = {
                email: data.email,
                password: data.password,
                name: data.name,
                bio: data.bio,
                contact: data.contact,
                course_module: data.course_module
            }

            try{
                await api.post('users', newData).then(() => {
                    toast.success('Conta criada com sucesso!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    })
                })

                setTimeout(() => {
                    navigate('/')
                }, 6000)
            }
            catch (err) {
                console.log(err)
                
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
    }

    const formSchema = yup.object({
        name: yup.string().required('Nome obrigatório').min(3, 'Mínimo de 3 caracteres'),
        email: yup.string().required('Email obrigatório').email('Formato inválido ex.: usuario@gmail.com'),
        password: yup.string().required('Senha obrigatória').min(6, 'Mínimo de 6 caracteres'),
        confpassword: yup.string().required('Confirmação obrigatória').oneOf([yup.ref('password')], 'As senhas devem corresponder'),
        contact: yup.string().required('Contato obrigatório').min(9, 'Mínimo de 9 caracteres'),
        bio: yup.string().required('Bio obrigatória').min(20, 'Mínimo de 20 caracteres'),
        course_module: yup.string().required('Escolha seu módulo').min(10)
    })
    
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchema),
    })

    return (
        <>
        <Main style={{height: '950px'}}>
            <DivHeader>
                <LogoFigure>
                    <LogoImg src={logo} alt='logo-img'/>
                </LogoFigure>
                
                <ButtonExit name='Voltar'/>
            </DivHeader>

            <Formulario onSubmit={handleSubmit(registerUser)}>
                <TitleRegister>Crie sua conta</TitleRegister>
                <SpanRegister>Rapido e grátis, vamos nessa</SpanRegister>

                <Label name='Nome' htmlFor='nome'/>
                <Input type='text' placeholder='Digite aqui seu nome' id='nome' register={register} name='name'/>
                <SpanError style={errors.name?.message ? {display: 'flex'} : {display: 'none'}}>{errors.name?.message}</SpanError>

                <Label name='Email' htmlFor='email'/>
                <Input type='email' placeholder='Digite aqui seu email' id='email' register={register} name='email'/>
                <SpanError style={errors.email?.message ? {display: 'flex'} : {display: 'none'}}>{errors.email?.message}</SpanError>

                <Label name='Senha' htmlFor='password'/>
                <Input type='password' placeholder='Digite aqui sua senha' id='password' register={register} name='password'/>
                <SpanError style={errors.password?.message ? {display: 'flex'} : {display: 'none'}}>{errors.password?.message}</SpanError>

                <Label name='Confirmar Senha' htmlFor='confPassword'/>
                <Input type='password' placeholder='Digite novamente sua senha' id='confPpassword' register={register} name='confpassword'/>
                <SpanError style={errors.confpassword?.message ? {display: 'flex'} : {display: 'none'}}>{errors.confpassword?.message}</SpanError>

                <Label name='Bio' htmlFor='bio'/>
                <Input type='text' placeholder='Fale sobre você' id='bio' register={register} name='bio'/>
                <SpanError style={errors.bio?.message ? {display: 'flex'} : {display: 'none'}}>{errors.bio?.message}</SpanError>

                <Label name='Contato' htmlFor='contato'/>
                <Input type='text' placeholder='Opção de contato' id='contato' register={register} name='contact'/>
                <SpanError style={errors.contact?.message ? {display: 'flex'} : {display: 'none'}}>{errors.contact?.message}</SpanError>

                <Label name='Selecionar módulo' htmlFor='modulo'/>
                <SelectRegister name='modulo' id='modulo' {...register('course_module')}>
                    <option value=''>Selecione um Módulo</option>
                    <option value='Primeiro Módulo (Introdução ao Frontend)'>Primeiro Módulo</option>
                    <option value='Segundo Módulo (Frontend Avançado)'>Segundo Módulo</option>
                    <option value='Teceirto Módulo (Introdução ao Backend)'>Terceiro Módulo</option>
                    <option value='Quarto Módulo (Backend Avançado)'>Quarto Módulo</option>
                </SelectRegister>
                <SpanError style={errors.course_module?.message ? {display: 'flex', marginBottom: '30px'} : {display: 'none'}}>{errors.course_module?.message}</SpanError>

                <Button name='Cadastrar' type='submit'/>
            </Formulario>    
        </Main>
        </>
    )
}

export default RegisterPage

//Falta a mensagem de erro do select aparecer, e dar o useNavigate para trocar de página.
//Remover o confpassword. *confirir se as senhas estão iguais 