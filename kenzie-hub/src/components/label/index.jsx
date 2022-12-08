import LabelStyle from "./style"

const Label = ({ name, htmlFor }) => {
    return (
        <LabelStyle htmlFor={htmlFor}>{name}</LabelStyle>
    )
}

export default Label