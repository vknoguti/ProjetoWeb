# ProjetoWeb
## Repositório contendo o projeto final da disciplina SCC0219

## Parte 1 - Mockup e documentação
## Membros
|             Nome              | NUSP    |
|:-----------------------------:|:-------:|
|Vinicius Kazuo Fujikawa Noguti | 11803121|
|Bruno Berndt Lima              | 12542550|
|Thiago Shimada                 | 12691032|

## Requerimentos
### Visão Geral

A aplicação se trata de uma loja online de venda de tênis. Haverão duas entidades principais Cliente e Administrador, os quais realizarão funcionalidades
pertinentes a cada um dos seus papéis. 
Inicialmente foi criado interfaces visuais, usando CSS, HTML e o figma, demonstrando como será o resultadao final ao Cliente.
 
Nas páginas criadas haverão diversas funcionalidades que poderão ser executadas por cada entidade.
  - Usuário:
    - Realiza cadastro e login, obrigatória para compra de produtos, com informações pessoais.
    - Consegue ver as descrições de cada produto da página inicial
    - Pode adicionar produtos ao carrinho e realizar compras informando dados de pagamento
    - Pode modificar dados de conta, caso esta já exista, como Nome, Data de Nascimento, Sexo e Telefone 
  - Administrador:
    - Consegue gerenciar pedidos(adicionar, apagar e modificar)  
    - Gerencia usuários(adiciona, modifica e apaga)
    - Pode verificar os pedidos feitos pelos usuários e gerenciar os dados desses pedidos conforme necessário
  - Funcionalidade Extra:
    - Cada produto da página poderá ser visualizado tridimensionalmente
    - Necessário que seja guardado no Banco de Dados um campo referente ao link do modelo tridiomensional utilizado no site

## Descrição do Projeto
 ### Diagrama de navegação 
  O diagrama de navegação foi utilizada no projeto para definir todos os passos possíveis de navegação de um usuário ou administrador.
  
 ### Mockup da página
  O layout da página foi baseado no criado pelo Figma. Sendo assim, toda interface em HTML/CSS será semelhante ou igual ao modelo do Figma, contendo apenas mínimas alterações, quando necessárias.
 
 -[Link do Figma](https://www.figma.com/file/sZToVAc9iZA8SLth3Gf0lC/Online-store?type=design&node-id=0%3A1&t=DtWrwurqzaxgN1yd-1)
 
 ### Descrição do Diagrama de Navegação
  #### Diagrama de navegação:
   ![image](https://user-images.githubusercontent.com/37368029/236707137-e0f4c3d3-66e8-4e44-83f2-e953863e601f.png)
   
  #### Caminho de execução para Usuário:

   Dentro do sistema haverá 3 estados existentes para um determinado usuário (não logado, logado administrador, logado usuário comum). Cada um deles possuirá diferentes possibilidades de papéis dentro do sistema. 
   
   A partir de(a):
   - Página principal(home page), um usuário:
     - Não logado
       - Terá acesso a página de produto, verificando detalhes de um produto clicado
       - Ir para página de cadastro/login(clicando em ACCOUNT), local onde poderá se cadastrar ou realizar o login
       - Carrinho é bloqueado a um usuário não logado
     - Comum
       - Terá acesso a página de produto, verificando detalhes de um produto clicado
       - Ir para página de perfil (clicando em ACCOUNT), onde poderá modificar dados pessoais
     - Administrador
       - Poderá ir para a página de admin, clicando em ACCOUNT
       - Outros recursos são bloqueados(carrinho e descrição de produto)
   - Página de login(login), um usuário:
     - Não logado
       - Terá a possibilidade de realizar o Login
       - Ir a página de cadastro(create account)
       - Voltar para a página principal
       - Ir para a página de carrinho, o qual se encontrará vazia
     - Comum
       - Não possui página de login
     - Administrador
       - Não possui pagina de login
   - Página de admin(admin), um usuário:
     - Não logado
       - Não possui página de admin
     - Comum
       - Não possui página de admin
     - Administrador
       - Gerenciar(adicionar, modificar e remover) usuários, pedidos e produtos
       - Voltar a página principal
       - Realizar Logout
   - Página de perfil(profile), um usuário:
     - Não logado
       - Não possui página de perfil
     - Comum
       - Modificar dados pessoais e de endereço
       - Voltar para a página principal
       - Ir para a página de carrinho
       - Realizar Logout
     - Administrador
       - Não possui página de perfil  
   - Página de cadastro(create account), um usuário:
     - Não logado
       - Realizar o cadastro(após o cadastro, o usuário retorna à de login(login))
       - Voltar a página principal(home page)
       - Ir a página de carrinho
     - Comum
       - Não possui página de cadastro
     - Administrador
       - Não possui página de cadastro
   - Página de produto(product page), um usuário:
     - Não logado
       - Voltar a página principal(home page)
       - Ir a página de cadastro/login(login)
     - Comum
       - Adicionar ao carrinho um determinado número do produto
     - Administrador
       - Não possui página de produto
   - Página de carrinho vazio(empty cart), um usuário:
     - Não logado
       - Não possui página de carrinho(empty cart)
     - Comum
       - Voltar a página principal(home page)
       - Ir para página de perfil(profile)
     - Administrador
       - Não possui página de carrinho(empty cart)
   - Página de carrinho(cart), um usuário:
     - Não logado
       - Não possui carrinho(cart)
     - Comum
       - Aplicar cupom nos produtos
       - Ir a página de pagamento
     - Administrador
       - Não possui carrinho(cart)
   - Página de checkout(checkout), um usuário:
     - Não logado
       - Não possui página de checkout
     - Comum
       - Selecionar e finalizar método de pagamento  
     - Administrador
       - Não posusi página de checkout
   
  OBS:
   - O nome das páginas utilizadas(profile, admin, home page, entre outros) são referências ao nome utilizado no [Figma](https://www.figma.com/file/sZToVAc9iZA8SLth3Gf0lC/Online-store?type=design&node-id=0%3A1&t=DtWrwurqzaxgN1yd-1), sendo assim, alguns caminhos de navegação permitem que um botão possua diferentes caminhos de páginas, como por exemplo um Usuário Administrador ter o botão ACCOUNT como acesso à página 'admin', enquanto um Usuário Comum possuir acesso à página 'profile'

   - Logout: ao realizar logout qualquer que seja o tipo da entidade, voltará ao estado de usuário não logado, e à página principal (home page)
      

## Commentário da página 

## Plano de Teste
 Para o plano de teste, foi utilizado o diagrama de navegação exibido acima, juntamente com o layout esperado pelo mockup do Figma.
 
 Foram feitos diversos teste manuais seguindo o diagrama de navegação construído, verificando os caminhos possíveis, garantindo que não haja qualquer possível
 erro de sequência.

## Procedimentos de execução
 Conteúdo referente ao Milestone 1:
  - Faça o download do projeto
  ![image](https://user-images.githubusercontent.com/37368029/236706923-03cd8ba2-8b90-48b3-a34c-c16d3eeae6dd.png)
  
  - Extraia o arquivo em alguma pasta
  - Acesse o diretório ProjetoTotal e, por fim, execute o arquivo itens.html, o qual é referente a página inicial
  
  ![image](https://user-images.githubusercontent.com/37368029/236707052-87efbc0f-90d6-4949-b02a-3cd5ee67ccd4.png)
  
 
## Parte 2 - Client Functionality
### Instalação do Projeto
- Antes de executar o projeto, faça download e instalação do react no sistema operacional utilizado.
- Faça o download do projeto branch(diversos).
- Abra o terminal seja pelo linux ou pelo windows, e acesse o diretório react-app pelas linhas de comando.
- Dentro da pasta react-app, com todos os arquivos do projeto, execute 'npm install'(sem aspas), no qual será instalado todos os pacotes do react
  - Caso a instalação não seja efetuada, digite 'npm install --force'
- Por fim, digite 'npm start' no terminal.




  
