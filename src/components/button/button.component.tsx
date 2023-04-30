import { BTN, ButtonStyle } from "./button.style"

export const Button = ({ color, children, variant, attr }: BTN): JSX.Element => {
  return (
    <ButtonStyle color={color} variant={variant} {...attr}>
      {children}
    </ButtonStyle>
  )
}