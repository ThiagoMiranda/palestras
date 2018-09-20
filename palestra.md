Para automatizar tarefas como importar scripts, dependências, compactar e criar um bundle.js usávamos o Grunt ou Gulp. Com o Webback isso foi substituido já que além de fazer o que os anteriores faziam, ele consegue gerenciar muito bem as dependências do projeto que são carregadas via import/require ou mesmo assets como folhas de estilo, imagens e svgs.

-Webpack e Rollup
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
	- Revealing module pattern
		- Prós: - Fácil de implementar sem precisar de libs
				- Vários módulos podem ser definidos em um mesmo arquivo
		- Contra: - Não consegue carregar módulos programaticamente
				  - Dependências devem ser manuais
				  - Não é possível loading async

	** exemplo revealing module pattern **
- AMD, CJS e ES
	- O que são módulos?
		- Pequenas unidades de código independentes e reusáveis
		- Encapsulados
		- Independem da ordem de carregamento ( podem ser carregados async )
	** foto commonjs **
	- CommonJS:
		- Foi feita pensando no NodeJS
		- Simples
		- Suporta dependências circulares
		- Require pode ser chamado sempre
		- Para browsers é preciso uma lib de carregamento ou babel
		- Um arquivo por módulo
	** foto amd **
	- AMD ( RequireJS )
		- Uma função callback é chamada assim que as dependências são carregadas
		- Compatibilidade com require e exports
		- Gerenciamento de dependências
		- Necessário libs como RequireJS
	** foto es6 **
	- Es6 Modules
		- Suport sync e async
		- Fácil de entender
		- É uma especificação "oficial" que será suportada pelos browsers
		- Pouco suporte ( use Babel )
	- System

- Package.json
	- name: nome do pacote
	- version: Versão do pacote. Recomendável usar o padrão SEMVER mas não obrigatório.
	- main: arquivo de entrada. Ao usar o "require" do Nodejs esse será o chamado.
	- files: opcional. Será o diretório(s) carregado dentro do node_modules no npm install
	- browser: o mesmo que o main para pacotes client side


- Soluções ( Grunt, Gulp, Webpack, Roll up, Parcel )
- Porque roll up?
- Fazer um componente
- Página 3 rotas
- Modal em uma delas
- Transferir o modal para a pasta /components
- Transferir modal para uma lib
- Publicação npm/yarn ou Nexus ( procurar concorrentes ) // https://unpkg.com/

https://medium.com/@kelin2025/writing-js-libraries-less-than-1tb-size-6342da0c006a
https://auth0.com/blog/javascript-module-systems-showdown/