# Projeto da Solução

## Tecnologias Utilizadas

Para resolver o problema e implementar a solução, utilizaremos as seguintes tecnologias:

Frontend:

- HTML5: Estruturação e marcação do conteúdo da aplicação.
- CSS3: Estilização das páginas e interfaces para oferecer uma experiência visual atraente e funcional.
- JavaScript: Implementação da lógica de interação do usuário com o sistema e manipulação dinâmica dos elementos da interface.
- 
API Externa:

- ViaCEP: Serviço gratuito para consulta de endereços a partir de CEPs no Brasil. A API será utilizada para buscar dados como logradouro, bairro, cidade e estado com base no CEP informado pelo usuário.

Ferramentas de Desenvolvimento:

- Figma: Criação de protótipos de tela (wireframes), storyboards e esboços de interface para visualizar o design do sistema antes de sua implementação.
- GitHub: Controle de versão e repositório remoto para colaboração entre os membros da equipe, garantindo rastreamento das alterações realizadas no código e facilidade de integração.

Diagrama de Fluxo do Usuário (User Flow)
- O diagrama ilustra o fluxo de interação do usuário com o sistema.

Protótipos de Tela (Wireframes)
- Os protótipos, criados no Figma, apresentam as seguintes telas principais:
   1. Página Inicial (Home Page):
      - Apresentação do site
      - Botão para realizar login
      - Catálogo de Vans
   2. Tela de Login:
      - Campo de email e senha
      - Botão para logar
      - Link para cadastrar nova conta
   3. Tela de Cadastro:
      - Campo de Nome, Sobrenome, CPF, Telefone, Email, Senha e Confirmar Senha
      - Link de Termos de Uso
      - Botão de cadastrar
   4. Tela Principal (UserPage):
      - Formulário de Solicitar Corrida
      - Seção de visualizar, editar e excluir suas corridas solicitadas
      - Seção de cadastrar carro, editar e excluir
      - Seção de visualizar corridas disponiveis para aceitar (Botão de aceitar)
      - Seção Reclame aqui
   5. Tela de Administrador:
      - Seção de cadastrar, excluir e editar termos de uso
      - Seção para visualizar reclamações feitas pelo usuário

## Arquitetura da solução

A arquitetura de um site que utiliza apenas LocalStorage para armazenamento e é hospedado no GitHub Pages é baseada em uma abordagem frontend-only, eliminando a necessidade de backend ou banco de dados em servidor. Isso simplifica a implantação e reduz custos, mas exige uma estratégia bem definida para gerenciar dados no lado do cliente.

Componentes e Funcionalidades Principais
- Frontend (HTML, CSS, JavaScript):
  - Toda a lógica da aplicação e o gerenciamento de dados residem no navegador do usuário.
  - O LocalStorage é usado para armazenar dados de forma persistente no dispositivo do usuário.

- LocalStorage:
  - API do navegador que permite salvar pares chave-valor no dispositivo do usuário.
  - Ideal para dados simples, como preferências, configurações ou pequenos volumes de informações relacionadas ao uso da aplicação.

- GitHub Pages:

  - Serviço gratuito para hospedagem de sites estáticos diretamente de um repositório do GitHub.
  - Permite fácil integração com controle de versão e atualizações automáticas.

Como os Componentes Interagem

- Carregamento Inicial:
  - O site é carregado pelo navegador diretamente dos servidores do GitHub Pages.
  - O JavaScript verifica o LocalStorage em busca de dados previamente armazenados para carregar o estado inicial da aplicação.
    
- Interações do Usuário:
  - Os dados inseridos ou manipulados pelo usuário são armazenados no LocalStorage.
  - Toda interação é processada localmente no navegador, sem necessidade de comunicação com um servidor.

- Persistência e Atualização:
  - Os dados armazenados no LocalStorage permanecem disponíveis mesmo após o fechamento do navegador.
  - Atualizações no site são feitas diretamente no repositório GitHub, e as mudanças entram em vigor após um novo deploy via GitHub Pages.

# Interface do Sistema

## Tela Inicial  do sistema

Tela inicial contendo opção para logar, apresentação do site e catálogo de Vans

[`Tela inicial do sistema`](images/HomePage1.png) [`Tela inicial do sistema`](images/HomePage2.png)


## Telas de Login e Cadastro de Usuário

Usuário é capaz de Logar com sua conta ou realizar novo cadastro

[`Tela de Login`](images/Login.png) 

[[`Tela de Cadastro`](images/CadastroUsuario.png)


## Telas Inicial

Usuário pode solicitar uma nova corrida

[`Tela Inicial - Solicitar corrida`](images/SolicitarCorrida.png)

Usuário pode visualizar, editar e excluir a corrida solicitada

[`Tela Inicial - Minhas Corridas`](images/MinhasCorridas.png)

Usuário pode cadastrar, visualizar, editar e excluir carro criado para ser motorista

[`Tela Inicial - Cadastrar Carro`](images/CadastroCarro.png)

Usuário motorista pode aceitar corrida, será redirecionado para o whatsApp de quem solicitou

[`Tela Inicial - Corridas disponiveis`](images/CorridasDisponiveis.png)

Usuario pode registrar, editar e excluir uma reclamação

[`Tela Inicial - Reclame Aqui`](images/ReclameAqui.png)

## Tela Administrador

Administrador pode criar, visualizar, editar e excluir novos termos de uso

[`Tela Administrador - Gerenciamento de Termos de Uso`](images/TermosdeUso.png)

Administrador pode visualizar reclamações feitas pelos usuários

[`Tela Administrador - Visualização das Reclamações`](images/Reclamações.png)




