import { AuthStyle } from "./auth.style"

export const AuthLayout = (props: any) => {
  return (
    <AuthStyle {...props}>
      <section className="container">
        {props.children}
      </section>
    </AuthStyle>
  )
}