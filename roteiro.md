Glauber:

- O que é Figma?
- Antigamente ( estar na máquina do fulano, pouca transparência )
- Soluções concorrentes ( Sketch, Zeplin, Marvel, Invision )
- Introdução ao Figma
- Estilização
- Componentização

- Porque Figma?
- Versionamento ( trabalho em time )

- √ Deixar preparado alguns ícones
- √ Gerar chave

- Gerar um pequeno exemplo de um componente em SCSS - OOCSS + BEM (Encapsulamento)
    (Lembrar que o foco não é esse, pois o diferencial está nas outras duas pontas do projeto)

Thiago:

- O que é um componente?
- Antigamente
- Soluções ( Grunt, Gulp, Webpack, Roll up, Parcel )
- Porque roll up? 
- Diferença tamanho do bundle ( Webpack x Rollup )
- Fazer um componente
- Página 3 rotas 
- Modal em uma delas
- Transferir o modal para a pasta /components
- Transferir modal para uma lib
- Publicação npm/yarn ou Nexus ( procurar concorrentes )
- Falar sobre AMD, CJS, ES

- PRONTO: Projeto com 2 branches usando Rollup e Webpack
- PRONTO: Página com 3 rotas e o modal em uma delas -> pré preparado uma pasta componentes com o modal 
- PRONTO: Projeto do modal com algumas coisas faltando para live coding. Deverá ter: scss próprio e svg 
- PRONTO: Testes

Glauber e Thiago:

- Componente de ponta a ponta
- Porque usar SVG e não fonte
  - Semanticamente correto
  - Dicas de como desenhar um SVG (Flat em caso de mudanças de cor)
  - Manter todo o ícone desagrupado
- SVG como componentes React
- Figma API - Falar aqui sobre o 
- Lib integrada com o Figma
- Exemplo de uso: SVG e REACT
- Autonomia para designer e desenvolvedores
- Exemplo de um JenkinsFile para build
- Uso de Sass autonomo

- PRONTO: Lib inter-frontend-svgs modificada

UPDATE 19/05

Bibliografia:
- https://github.com/reactjs/rfcs/pull/68#issuecomment-439314884
- https://medium.freecodecamp.org/why-react-hooks-and-how-did-we-even-get-here-aa5ed5dc96af
- https://twitter.com/notphanan/status/1131070702583468032
- https://twitter.com/dan_abramov/status/1055705350555353088
- https://reactjs.org/docs/hooks-rules.html

- Wrapper hell
- Problemas com classes
    - Não são fáceis de um humano lidar
    - Não são fáceis para a máquina lidar
        - Uso excessivo de memória
        - minifiers não conseguem minificar os métodos e tem dificuldade de saber o que é usado o que não é
    - Reusando a lógica
    - Componentes gigantes
    - Classes confusas 

- Hooks
    - Usar todas features do React sem classes
    - Lógicas reusáveis entre componentes
    - Pode trabalhar junto com classes    

- useState
    - código mais limpo
    - programação funcional
    - Detalhes
        - Não usar condicionalmente
        - A ordem dos hooks afeta
        -  
    - Não precisa usar o this       

- useContext
    - Remove a necessidade de nesting

- useEffect
    - Substituem componentDidMount, componentDidUpdate componentWillUnmount
    - Por default roda no início e a cada update de state
    - Precisa estar dentro do component
    - return function para componentWillUnmount
    - Ordem do useEffect afeta ( deve estar depois da declaração do seu useState )
    - Segundo argumento é um array do que esse useEffect se "importa"
    - Sem condições ( ama incondicionalmente n )

- useReducer
    - [state, dispatch]

- useRef

- Externalizar o useEffect para ser usado em outras partes
    - Por convenção custom hooks começam com use ( bom para lints )

- whyDidYouRender

- Loupe
