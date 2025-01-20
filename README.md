
<style>
    :root{
        --cor01: #175600;
        --cor02: #2A8C35;
    }
    main {
        color: var(--cor02);
    }
    header {
        color: var(--cor02);
    }
        h1 {
            text-align: center;
            color: var(--cor01);
        }
        h2, h3, strong{
            color: var(--cor01);
        }
        .img-logo {
            border: solid 1px green;
            width: 25%;
            border-radius: 100%;
            padding: 10px;
        }
        li {
            list-style: none;
        }
        li::before {
            font-size: 8px;
            content: '🟢';
            margin-right: 10px;
        }
        a {
            text-decoration: none;
            color: rgb(17, 159, 17);
            font-weight: bolder;
        }
        a:hover {
            text-decoration: underline;

        }
</style>

<header>
        <h1>Sorteio Amigo Secreto</h1>
        <h2>Sobre</h2>
        <p>Projeto desenvolvido com base nos conhecimentos adiquiridos no curso logica de programação com JavaScript</p>
</header>
<main>
        <section>
            <h2>Tecnologias</h2>
        <article>
            <img src="https://img.shields.io/badge/HTML-DC0A00?style=for-the-badge&logo=html5&logoColor=white">
            <img src="https://img.shields.io/badge/CSS-3d4cff?&style=for-the-badge&logo=css3&logoColor=white">
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
        </article>
        <article>
            <ul>
            <li><a href="#descprojeto">Descrição do seu projeto</a></li>
            <li><a href="#funcionalidades">Funcionalidades</a></li>    
            <li><a href="#comousar">Como os usuários podem utilizá-lo</a></li>
            <li><a href="#autor">Autor do projeto</a></li>
        </ul>
        </article>
        </section>
        
<section>
            <h3 id="descprojeto">Descrição do seu projeto</h3>
            <p>Aplicação permita aos usuários inserir nomes de amigos em uma lista para, em seguida, realizar um sorteio aleatório e determinar quem é o "amigo secreto".</p>
            <h3 id="funcionalidades">Funcionalidades</h3>
            <p><strong>Adicionar nomes:</strong> Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".</p>
            <p><strong>Validar entrada:</strong> Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.</p>
            <p><strong>Visualizar a lista:</strong> Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.</p>
            <p><strong>Sorteio aleatório:</strong> Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.</p>
            <h3 id="comousar">Apreendendo a ulilizar aplicação</h3>
            [iserir video]
</section>
        <!--Conteúdo final com imagen do autor-->
        <section>
        <h3 id="#autor">Autor</h3>
        <img class="img-logo" src="https://avatars.githubusercontent.com/u/45153140?v=4">
        </section>
</main>

