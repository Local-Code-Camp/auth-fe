import { Button, Input } from "../../components"
import { LoginContainer } from "./login.style"

export const Login = () => {
  return (
    <LoginContainer>
      <h2>Login</h2>
      <Input label="User Name" />
      <Input type="password" label="Password" />
      <Button click={() => alert('login')} variant="block">Login</Button>
      <Button color="dark" variant="block">Register</Button>
    </LoginContainer>
  )
}