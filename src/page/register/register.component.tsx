import { Button, Input } from "../../components"
import { RegisterContainer } from "./register.style"

export const Register = () => {
  return (
    <RegisterContainer>
      <h2>Register</h2>
      <Input label="User Name" />
      <Input label="Email" />
      <Input type="password" label="Password" />
      <Button click={() => alert('login')} variant="block">Register</Button>
      <Button color="dark" variant="block" >Login</Button>
    </RegisterContainer>
  )
}