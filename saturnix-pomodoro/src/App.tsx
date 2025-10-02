import "./styles/theme.css"
import "./styles/global.css"

import { Container } from "./components/container"
import { Logo } from "./components/logo"
import { Menu } from "./components/menu"
import { CountDown } from "./components/count-down"
import { InputDefault } from "./components/default-input"
import { Cycles } from "./components/cycles"
import { ButtonDefault } from "./components/default-button"
import { PlayCircleIcon, StopCircleIcon } from "lucide-react"

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
            <InputDefault 
              type="text" 
              labelText="Task" 
              placeholder="Digite algo"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <ButtonDefault 
              icon={<PlayCircleIcon />}
             
            />
            <ButtonDefault 
              icon={<StopCircleIcon />}
              color="red"
            />
          </div>
        </form>
      </Container>
    </>
  )
}
