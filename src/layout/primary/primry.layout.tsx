import { AuthProvider } from "../../hook"

export const PrimaryLayout = (props: any) => {
  return (
    <AuthProvider>
      {props.children}
    </AuthProvider>
  )
}