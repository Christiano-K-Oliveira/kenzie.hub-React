import ButtonStyle from "./index.js"

const Button = ({ name, type }) => {
    return (
        <ButtonStyle type={type}>{ name }</ButtonStyle>
    )
}

export default Button