import { useContext } from "react"
import { Button } from "../../components"
import { AuthContext } from "../../hook"
import { PrimaryLayout } from "../../layout/primary/primry.layout"

export const Home = () => {
  const auth = useContext(AuthContext)

  return (
    <PrimaryLayout>
      <Button>Logout</Button>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quo sit quaerat illum. Quaerat ratione, ut modi placeat autem id temporibus laudantium voluptas perferendis! Quasi dignissimos accusantium quae quas est.</p>
    </PrimaryLayout>
  )
}