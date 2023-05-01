import { FormContainer } from "./form.style"

interface INPUT {
  type?: React.HTMLInputTypeAttribute
  label?: string
  info?: {
    type?: string
    text: string
  }
}

export const Input = ({ type, label, info }: INPUT): JSX.Element => {
  return (
    <FormContainer>
      {label && <label>{label}</label>}
      <input type={type || 'text'} />
      {info && <small className={'txt-' + (info.type || 'info')}>{info.text}</small>}
    </FormContainer>
  )
}