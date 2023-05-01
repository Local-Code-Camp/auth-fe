import { AuthProvider } from "../../hook"
import { AuthStyle } from "./auth.style"

export const AuthLayout = (props: any) => {
  return (
    <AuthProvider>
      <AuthStyle {...props}>
        <section className="container">
          {props.children}
        </section>
      </AuthStyle>
    </AuthProvider>
  )
}