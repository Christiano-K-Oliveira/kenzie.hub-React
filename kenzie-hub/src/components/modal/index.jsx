import { DivBackground, DivModal, BoxHeader, TitleModal, ButtonCloseModal, FormModal, LabelName, InputName, LabelStatus, SelectStatus, ButtonRegister, SpanError, ButtonDelete } from "./style"
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
// import api from "../../services/api";
import { useContext } from "react";
import { TechContext } from "../../providers/context";
import { BoxButtons } from "./style";


const ModalRegister = ({setModal}) => {

    function closeModal(event){
        if(event.target.tagName === 'svg'){
            setModal()
        }
    }

    const formSchema = yup.object({
        title: yup.string().required('Nome obrigatório'),
        status: yup.string().required('Status obrigatório')
    })

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchema),
    })

    const { registerTech } = useContext(TechContext)

    return (
        <DivBackground onClick={(event) => closeModal(event)}>
            <DivModal>
                <BoxHeader>
                    <TitleModal>Cadastrar Tecnologia</TitleModal>
                    <ButtonCloseModal><AiOutlineClose style={{color: 'white', width: '100%', height: '100%'}}/></ButtonCloseModal>
                </BoxHeader>

                <FormModal onSubmit={handleSubmit((data) => registerTech(data, setModal))}>
                    <LabelName htmlFor="name">Nome</LabelName>
                    <InputName id="name" placeholder="Digite a tecnologia" {...register('title')}/>
                    <SpanError style={errors.title?.message ? {display: 'flex'} : {display: 'none'}}>{errors.title?.message}</SpanError>

                    <LabelStatus htmlFor="status">Selecionar status</LabelStatus>
                    <SelectStatus name="status" {...register('status')}>
                        <option value={''}>...</option>
                        <option value={'Iniciante'}>Iniciante</option>
                        <option value={'Intermediário'}>Intermediário</option>
                        <option value={'Avançado'}>Avançado</option>
                    </SelectStatus>
                    <SpanError style={errors.status?.message ? {display: 'flex'} : {display: 'none'}}>{errors.status?.message}</SpanError>

                    <ButtonRegister>Cadastrar tecnologia</ButtonRegister>
                </FormModal>
            </DivModal>
        </DivBackground>
    )
}

const ModalUpdate = ({setModal, id}) => {

    function closeModal(event){
        if(event.target.tagName === 'svg'){
            setModal()
        }
    }

    const { register, handleSubmit } = useForm()

    const { updateTech, deleteTech } = useContext(TechContext)

    return (
        <DivBackground onClick={(event) => closeModal(event)}>
            <DivModal>
                <BoxHeader>
                    <TitleModal>Tecnologias detalhes</TitleModal>
                    <ButtonCloseModal><AiOutlineClose style={{color: 'white', width: '100%', height: '100%'}}/></ButtonCloseModal>
                </BoxHeader>

                <FormModal onSubmit={handleSubmit((data) => updateTech(data, setModal, id))}>
                    <LabelName htmlFor="name">Nome do projeto</LabelName>
                    <InputName id="name" placeholder="Digite a tecnologia" {...register('title')}/>

                    <LabelStatus htmlFor="status">Status</LabelStatus>
                    <SelectStatus name="status" {...register('status')}>
                        <option value={''}>...</option>
                        <option value={'Iniciante'}>Iniciante</option>
                        <option value={'Intermediário'}>Intermediário</option>
                        <option value={'Avançado'}>Avançado</option>
                    </SelectStatus>

                    <BoxButtons>
                        <ButtonRegister type="submit">Salvar alterações</ButtonRegister>
                        <ButtonDelete type="button" onClick={() => deleteTech(setModal, id)}>Excluir</ButtonDelete>
                    </BoxButtons>
                </FormModal>
            </DivModal>
        </DivBackground>
    )
}

export { ModalRegister, ModalUpdate }