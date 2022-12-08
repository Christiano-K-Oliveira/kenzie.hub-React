import ButtonExitStyle from "./style"

const ButtonExit = ({ name }) => {
    const token = localStorage.getItem('khub_pass')

    function check(){
        if(token){
            localStorage.removeItem('khub_pass')
        }
    }

    return (
        <ButtonExitStyle to='/' onClick={() => check()}>{name}</ButtonExitStyle>
    )
}

export default ButtonExit