import InputStyle from "./style"

const Input = ({ type, placeholder,  id, register, name }) => {

    if(!register){
        return (
            <InputStyle type={type} placeholder={placeholder} id={id}/>
        )
    }

    return (
        <InputStyle type={type} placeholder={placeholder} id={id} {...register(name)}/>
    )
}

export default Input