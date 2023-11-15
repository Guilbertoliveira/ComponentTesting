import '@testing-library/jest-dom'; // Importe as definições de tipo do Jest-DOM
import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe('Componente botão', () => {
    it('renderize vermelho se for true', () => {
        render(<Button isDisabled>Click me</Button>)

        //getbyrole conseguimos pegar o tipo do elemento
        const button = screen.getByRole('button', { name: 'Click me' })

        expect(button).toHaveStyle({ backgroundColor: 'red' })
    })
}
)