import { PlayCircleIcon } from "lucide-react"
import { Cycles } from "../cycles"
import { ButtonDefault } from "../default-button"
import { InputDefault } from "../default-input"

export const MainForm = () => {
    return (
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
            </div>
        </form>
    )
}
