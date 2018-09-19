Para automatizar tarefas como importar scripts, dependências, compactar e criar um bundle.js usávamos o Grunt ou Gulp. Com o Webback isso foi substituido já que além de fazer o que os anteriores faziam, ele consegue gerenciar muito bem as dependências do projeto que são carregadas via import/require ou mesmo assets como folhas de estilo, imagens e svgs.

Webpack e Rollup
	- Rollup ficou famoso depois de um PR "gigante" da equipe do React passando seu bundler para o framework: https://github.com/facebook/react/pull/9327
	- Outros frameworks o adotaram como o Vuejs, Ember, Preact, D3, Three.js, Moment e cia.

	Diferenças:
		- Rollup tem polyfills para import/export
		- Suporta paths relativos ( webpack precisa do path.resolve/path.join )


- O que é um componente?
	- Componentes são blocos de construção do React
	- Funcionam como uma planta de uma casa
	- Uma aplicação React terá vários desses.
	- Pode ser uma função ( stateless/functional ) ou uma classe ( stateful )

	** foto de um functional/stateless **
	** foto de um stafeful **

	- Diferenças:
		- Stateless: 
			- Componentes de apresentação
			- Não possuem state, lifecycles ou ref
			- São previsíveis
			- Normalmente terá mais stateless que stateful
			- ReactDOM renderiza um elemento DOM
		- Stateful
			- Componentes que controlam a lógica
			- Normalmente usados em containers contendo vários stateless
			- Contém handlers, chamadas ajax, etc
			- São instanciados como classes
			- Possuem lifecycles, states e ref	
			- ReactDOM renderiza elementos DOMs "anexados" a instâncias de componentes ( e o DOM retornado pela render() )		


- Antigamente
	- Tag script
	- Sequência correta de scripts
	- RequireJS

- Soluções ( Grunt, Gulp, Webpack, Roll up, Parcel )
- Porque roll up? 
- Diferença tamanho do bundle ( Webpack x Rollup )
- Fazer um componente
- Página 3 rotas 
- Modal em uma delas
- Transferir o modal para a pasta /components
- Transferir modal para uma lib
- Publicação npm/yarn ou Nexus ( procurar concorrentes ) // https://unpkg.com/
- Falar sobre AMD, CJS, ES