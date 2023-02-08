# LivroCrud - Angular + Spring

## Descrição:
Um projeto feito com objetivo de estudo para aprender os frameworks Spring(Java) e Angular(TypeScript)<br>
Fiz o uso de um banco de dados em memoria chamado h2, muito usado para estudo no Spring, futuramente vou alterar e usar um banco de dados

## Estrutura do projeto

Dentro do respositorio **Livro Crud** há dois repositorios chamados Livro e learning sendo Livro o front-end desenvolvido com angular e learning o back-end desenvolvido com Spring.<br><br>
O angular é um framework front-end single-page, e faz isso com o uso de componentes, no projeto utilizei dois componentes **livro** e **livroform**, um se trata da pagina principal que lista todos os Livros cadastrados no banco de dados e o outro se trata do formulario para salvar e editar livros.<br><br>
No Spring faço uso de 4 classes e 1 interface java Livro, Controler, CorsConfiguration, LearningApplication e LivroRespository sendo a interface. 
* Livro se trata do modelo que será usado no banco
* Controler e onde controlo os EndPoints da API do Spring
* CorsConfiguration é uma classe de configuração que cadastra ips que podem acessar os endpoints da api
* LearningApplication é a classe principal do Spring é apartir dela que tudo funciona
* LivroRepository é uma interface que cria os metodos de acesso ao banco de dados. é usada na classe controler, primeiro é injetado as depedencias e apos isso temos acesso aos metodos.

## Como inicializar:

1. Primeiro vamos inicializar a api Spring
    1. Apartir do CMD entre na pasta learning do projeto
    2. execute o comando **mvnw spring-boot:run**, após essa etapa o servidor da api irá rodar na porta 8080
2. Agora inicializamos o projeto angular
    1. Tenha o npm instalado na sua maquina
    2. com o CMD entre na pasta Livro do projeto
    3. execute o comando **ng serve --open**

Após seguir essas etapas no seu navegador padrão devera abrir a pagina em html do projeto.
