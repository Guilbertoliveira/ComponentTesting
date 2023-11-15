
O Teste é uma espectativa que temos para o retorno
Uma forma de organização de arquivos de testes

.spec - para testes unitarios
.test - para testes de integração

- Para testes unitarios utilizamos o Jest (testa um componente unitario)

- Para testes de intengração (testa 2 ou mais componentes que são usado juntos)

- Para testes E2E - são testes com fluxos complexos e com API e banco de dados reais


<h1> Jest </h1>
<h2>Configuração com Vite + Jest</h2>
como utilizei o vite precisei fazer algumas configurações

- `npm install --save-dev jest @types/jest ts-jest`
- criar um arquivo de configuração Jest na raiz "jest.config.cjs" - pegar o exemplo desse projeto
- adicionar no package.json no script {"teste": "jest"} - pegar o exemplo desse projeto

<h2>Configurando Vite com testing-library</h2>

- `npm install --save-dev @testing-library/react`
- também é necessario instalar o `npm install --save-dev jest-environment-jsdom`


<h3>Exemplo simples de teste unitario</h3>
Um exemplo simples de teste, criado na src -> pages -> App.test.tsx

```
const sum = (x: number, y: number) => {
    return x + y
}

describe('App Component', () => { //nome do componente testado
    it('deveria somar corretamente', () => {  // descrição da expectativa
        expect(sum(4, 4)).toBe(8) //expectativa o retorno da função seja 8
    })
})


```

<h3> Exemplo de teste com botão que renderiza um novo texto </h2>

```

    it('deveria alterar a mensagem quando clicar no botão', () => {
        render(<ComponenteTeste />)

        screen.getByText("mensagem não alterada")

        const button = screen.getByText(/mensagem do botao/i) //criando ação de click

        fireEvent.click(button)

        screen.getByText("mensagem foi alterada")
    })

```


esse ToBe é um 'matchers' do Jest utilizado para verificar
<a href="https://jestjs.io/pt-BR/docs/using-matchers">Link matchers</a>


<h4 >Problemas enfrentados (resolvidos):</h4>
- O jest reconhece os arquivos css como javascrit e da erro quando tenta compilar, para resolver necessita criar uma pasta de mock e colocar um arquivo css vazio e passar uma nova configuração pro jest.config

```

  "moduleNameMapper": { //configuração responsavel por pegar sempre o css vazio e nao dar conflito
    "\\.(css|less|scss)$": "<rootDir>/src/pages/__mocks__/App.css"
  }

```

Pra não precisar ficar rodando o comando e verificando, uma boa forma de ver os testes é com o 



    "test": "jest --watch"


assim vc consegue deixar o jest observando toda vez que o arquivo for salvo

