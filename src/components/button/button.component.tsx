import { BTN, ButtonStyle } from "./button.style"

export const Button = ({ color, children, variant, attr, click }: BTN): JSX.Element => {
  return (
    <ButtonStyle onClick={click} color={color} variant={variant} {...attr}>
      {children}
    </ButtonStyle>
  )
}