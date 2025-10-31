import "./styles/theme.css"
import "./styles/global.css"

import { Home } from "./pages/home"
import { TaskStateProvider } from "./contexts/task-context/taskContextProvider"

export const App = () => {
  return (
    <TaskStateProvider>
      <Home />
    </TaskStateProvider>
  )
}
