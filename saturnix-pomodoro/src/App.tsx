import "./styles/theme.css"
import "./styles/global.css"

import { Container } from "./components/container"
import { Logo } from "./components/logo"
import { Menu } from "./components/menu"
import { CountDown } from "./components/count-down"
import { InputDefault } from "./components/default-input"

export const App = () => {

  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form">
          <div className="formRow">
            <InputDefault type="text" labelText="Task" />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0</p>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  )
}
