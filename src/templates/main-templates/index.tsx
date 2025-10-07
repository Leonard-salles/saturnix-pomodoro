import "../../styles/theme.css"
import "../../styles/global.css"
import { Container } from "../../components/container"
import { Logo } from "../../components/logo"
import { Menu } from "../../components/menu"
import { Footer } from "../../components/footer"
import type { ReactNode } from "react"

type MainTemplateProps = {
    children: ReactNode
}

export const MainTemplate = ({ children }: MainTemplateProps) => {

    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            {children}

            <Container>
                <Footer />
            </Container>
        </>
    )
}
