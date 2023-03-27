<h1 align="center"> HQ APPs </h1>

![Gif do Teste](./public/assets/example.gif)

> The project is a comic book listing page containing the display of a single comic in addition to the shopping cart.

Check out the application: https://neo-app-test-cristolfe.netlify.app/<br>

## :page_facing_up: Explanation
- A primeira página do projeto é uma página de listagem de HQs, onde 10% das HQs com raridade são selecionadas aleatoriamente e recebem um valor aleatório ao serem carregadas. Cada HQ nessa página possui um botão para adicioná-la diretamente ao carrinho de compras.

- Ao clicar em uma HQ, ela é exibida em destaque na página, com a opção de ver mais informações sobre a HQ em outra página caso disponível e  a possibilidade de adicionar a hq ao carrinho ou voltar a página home.

- A página do carrinho de compras contém todos os pedidos realizados e possui um campo para a aplicação de cupons raros e comuns aos pedidos.
## 📁 Pages

The site is composed of 6 different pages:

- **Home:** Página de listagem das HQ's.
- **ComicPage:** Página de uma HQ específica exibida ao clicar em "view more".
- **Carrinho:** Página contendo todos os produtos já adicionados ao carrinho.
## :dart: Steps

:heavy_check_mark: Home page;\
:heavy_check_mark: Consuming API;\
:heavy_check_mark: Responsiveness of Home page;\
:heavy_check_mark: Redux Toolkit;\
:heavy_check_mark: ComicPage;\
:heavy_check_mark: Responsiveness of Comic Page;\
:heavy_check_mark: Private Comic Page route;\
:heavy_check_mark: Cart Page;\
:heavy_check_mark: Responsiveness of Cart Page;\
:heavy_check_mark: Header;\
:heavy_check_mark: Adding apply coupon button;\
:heavy_check_mark: Finished;

## :rocket: Technologies

The following tools were used in this project:

- [ReactJs](https://pt-br.reactjs.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Toast](https://fkhadra.github.io/react-toastify/introduction/)
- [Framer Motion](https://www.framer.com/motion/)  
- [Local Storage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
- [React Icon](https://react-icons.github.io/react-icons/)

## :closed_book: Requirements ##

Before starting, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed on your computer.

## :checkered_flag: Getting Started ##

```bash
# Clone this project
$ git clone git@github.com:Icristolfe/NeoApp-test.git
# Access
$ cd neo-app-test
# Install dependencies
$ yarn or npm 
# Run the project
$ yarn start or npm start 
# The server will initialize in the <http://localhost:3000>
```


**Necessário docker compose instalado para rodar o app**
```
Para instalar o Docker Compose no Windows, você pode seguir as seguintes etapas:

Baixe o instalador do Docker Compose para o Windows no site oficial: https://docs.docker.com/compose/install/

Execute o instalador e siga as instruções na tela para concluir a instalação.

Depois de instalado, você pode verificar se o Docker Compose foi instalado corretamente executando o comando docker-compose --version em um terminal ou prompt de comando.



Para instalar o Docker Compose no Linux, siga as seguintes etapas:
Abra um terminal e execute o seguinte comando para baixar o Docker Compose:

sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
Certifique-se de verificar se há uma versão mais recente no site oficial: https://docs.docker.com/compose/install/

Defina as permissões corretas para o arquivo baixado executando o seguinte comando:


sudo chmod +x /usr/local/bin/docker-compose
Verifique se o Docker Compose foi instalado corretamente executando o comando docker-compose --version em um terminal.
Pronto! Agora você tem o Docker Compose instalado em seu sistema e está pronto para usá-lo para orquestrar seus contêineres Docker.


e para baixar o container rodar utilize: docker-compose up -d

```


```bash
  Cupom para Itens Raros = rare
  Cupom para Itens Comuns = comum

```

## 🤝 Contributors

We want to thank the following people who contributed to this project:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/82662425?v=4" width="100px;" alt="Foto do Icaro Cristolfe no GitHub"/><br>
        <sub>
          <b>Ícaro Cristolfe</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


<a href="#top">Back to top</a>