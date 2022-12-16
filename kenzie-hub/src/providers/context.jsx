import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {

    const navigate = useNavigate()

    async function loginUser(data){
        try {
          const response = await api.post('sessions', data)
          localStorage.setItem('khub_pass', response.data.token)
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

    async function registerUser(data){
        
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

    async function authLogin(loading){
        const token = localStorage.getItem('khub_pass');

        try{
            const auth = await api.get('profile', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            if(auth.status === 200 && auth.statusText === 'OK'){
                navigate('dashboard')
            }
        }
        catch(erro){
            console.log(erro)
        }
        finally{
            loading(true)
        }

    }

    return (
        <UserContext.Provider value={{loginUser, registerUser, authLogin}}>
            {children}
        </UserContext.Provider>
    )
}

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
    const [listTech, setListTech] = useState()

    async function registerTech(data, setModal){
        const token = localStorage.getItem('khub_pass')

        try{
            await api.post('users/techs', data, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            setModal()
        }
        catch(erro){
            console.log(erro)
            setModal()
        }
        finally{
            setModal()
        }
    }

    useEffect(() => {
        async function fullListTechs(){
            const token = localStorage.getItem('khub_pass');
    
            try{
                const list = await api.get('profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setListTech(list.data.techs)
            }
            catch(erro){
                console.log(erro)
            }
        }
        fullListTechs()     
    }, [listTech])

    async function updateTech(data, setModal, id){
        const token = localStorage.getItem('khub_pass')

        try{
            await api.put(`users/techs/${id}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
        }
        catch(erro){
            console.log(erro)
        }
        finally{
            setModal()
        }
    }

    async function deleteTech(setModal, id){
        const token = localStorage.getItem('khub_pass')

        try{
            await api.delete(`users/techs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }
        catch(erro){
            console.log(erro)
        }
        finally{
            setModal()
        }
    }
    
    return (
        <TechContext.Provider value={{registerTech, listTech, setListTech, updateTech, deleteTech}}>
            {children}
        </TechContext.Provider>
    )
}