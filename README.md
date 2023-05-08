# ProjetoWeb
## Repositório contendo o projeto final da disciplina SCC0219
## Membros
- Vinicius Kazuo Fujikawa Noguti NUSP: 11803121
- Bruno Berndt Lima NUSP: 12542550
- Thiago Shimada  NUSP: 12691032

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
    - Cada produto terá um recurso que permitirá que seja visto tridimensionalmente
    - Necessário que seja guardado no Banco de Dados um campo referente ao link do modelo tridiomensional utilizado no site

  

## Descrição do Projeto
 ### Diagrama de navegação 
  O diagrama de navegação foi utilizada no projeto para definir todos os passos possíveis de navegação de um usuário ou administrador.
  
  
 ### Mockup da página
  O layout da página foi baseado no criado pelo Figma. Sendo assim, Toda interface será semelhante ou igual, contendo apenas mínimas alterações, quando necessárias, 
  na página feita em CSS e HTML.
 
 [Link do Figma](https://www.baudaeletronica.com.br/transformador-trafo-12v-12v-250ma-110-220vac.html?gclid=CjwKCAjw3MSHBhB3EiwAxcaEu-Gvu3ycGEDWf1lw1l1Xm6YP5OQO3iAD2MJECf8KB7pcl0acRqIdwxoCq7kQAvD_BwE](https://www.figma.com/file/sZToVAc9iZA8SLth3Gf0lC/Online-store?type=design&node-id=0-1&t=tX0i595MFKX8pUBv-0))
 
 ### Descrição do Diagrama de Navegação
  #### Diagrama de navegação:
   ![image](https://user-images.githubusercontent.com/37368029/236707137-e0f4c3d3-66e8-4e44-83f2-e953863e601f.png)
   
  #### Caminho de execução para Usuário:

   Dentro do sistema haverá 3 estados existentes para um determinado usuário (não logado, logado administrador, logado usuário comum). Cada um deles possuirá diferentes possibilidades de papéis dentro do sistema. A partir de(a):
   - Página principal(home page), um usuário:
     - Não logado
       - Terá acesso a página de produto, verificando detalhes de um produto clicado
       - Ir para página de cadastro/login(clicando em ACCOUNT), local onde poderá se cadastrar ou realizar o login
       - Carrinho é bloqueado a um usuário não logado
     - Comum
       - Terá acesso a página de produto, verificando detalhes de um produto clicado
       - Ir para página de perfil (clicando em ACCOUNT), onde poderá modificar dados pessoais
       - Adicionar ao carrinho um determinado produto que estiver interessado em comprar
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
       - Realizar Loggout
   - Página de perfil(profile), um usuário:
     - Não logado
       - Não possui página de perfil
     - Comum
       - Modificar dados pessoais e de endereço
       - Voltar para a página principal
       - Ir para a página de carrinho
       - Realizar Loggout
     - Administrador
       - Não possui página de perfil  
    - Página de cadastro, um usuário:
      - Não logado
        - Realizar o cadastro(após o cadastro, o usuário retorna à de login(login))
        - Voltar a página principal(home page)
        - Adicionar 
  OBS:
   - O nome das páginas utilizadas(profile, admin, home page, entre outros) são referências ao nome utilizado no [Figma](https://www.baudaeletronica.com.br/transformador-trafo-12v-12v-250ma-110-220vac.html?gclid=CjwKCAjw3MSHBhB3EiwAxcaEu-Gvu3ycGEDWf1lw1l1Xm6YP5OQO3iAD2MJECf8KB7pcl0acRqIdwxoCq7kQAvD_BwE](https://www.figma.com/file/sZToVAc9iZA8SLth3Gf0lC/Online-store?type=design&node-id=0-1&t=tX0i595MFKX8pUBv-0)), sendo assim, alguns caminhos de navegação permitem que um botão possua diferentes páginas de caminhos, como por exemplo um Usuário Administrador ter o botão ACCOUNT como acesso à página 'admin', enquanto um Usuário Comum possuir acesso à página 'profile'

   - Loggout: ao realizar loggout qualquer que seja o tipo da entidade, voltará ao estado de usuário não logado, à página principal (home page)
      

## Commentário da página 

## Plano de Teste
 Para o plano de teste, foi utilizado o diagrama de navegação exibido acima, juntamente com o layout esperado pelo mockup do Figma.
 
 Foram feitos diversos teste manuais seguindo o diagrama de navegação construído, verificando os caminhos possíveis, garantindo que não haja qualquer possível
 erro de sequência.

## Procedimentos de execução
 Conteúdo referente ao Milestone 1:
  - Faça o download do projeto
  ![image](https://user-images.githubusercontent.com/37368029/236706923-03cd8ba2-8b90-48b3-a34c-c16d3eeae6dd.png)
  
  - Extraia o arquivo em alguma pasta caso esteja zipado 
  - Acesse a pasta ProjetoTotal e execute o arquivo itens.html, o qual é referente a página inicial e pronto
  
  ![image](https://user-images.githubusercontent.com/37368029/236707052-87efbc0f-90d6-4949-b02a-3cd5ee67ccd4.png)


  
