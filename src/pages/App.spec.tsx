import { render, screen, fireEvent } from '@testing-library/react'  //importações que veio do testing-library
import { ComponenteTeste } from './App'

const sum = (x: number, y: number) => {
    return x + y
}

describe('App Component', () => { //nome do componente testado
    it('deveria somar corretamente', () => {  // descrição da expectativa
        expect(sum(4, 4)).toBe(8) //expectativa o retorno da função seja 8
    })

    it('deveria renderizar o componente com hello', () => {
        render(<ComponenteTeste />) //renderiza o componente
        screen.getByText('salvee familia') //o screen possui varios metodos, ele tenta pegar em algum lugar do componente o texto
    })

    it('deveria alterar a mensagem quando clicar no botão', () => {
        render(<ComponenteTeste />)

        screen.getByText("mensagem não alterada")

        const button = screen.getByText(/mensagem do botao/i) //criando ação de click

        fireEvent.click(button)

        screen.getByText("mensagem foi alterada")
    })
})


