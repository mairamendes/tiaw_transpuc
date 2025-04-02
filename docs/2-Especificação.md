# Especificações Do Projeto

<span style="color:red"><a href="1-Contexto.md"> Documentação de Contexto</a></span>

## Personas

João Vitor tem 22 anos, é estagiário na área de TI. Pensa em construir uma carreira sólida no mercado de trabalho e conquistar independência financeira. Está buscando uma maneira de economizar tempo, dinheiro e garantir uma forma de transporte segura.

Poliane Oliveiram tem 27 anos, é estagiária e tem como sonho concluir seu curso para consolidar-se em sua carreira dos sonhos em advocacia. Ela está em busca de uma maneira de obter uma renda extra e conhecer novas pessoas.

Roberto Machado tem 57 anos, é um comerciante local, dono de uma lanchonete/padaria, tem como objetivo manter seu negócio para poder sustentar sua família e aproveitar sua aposentadoria. Está em busca de conseguir novos clientes e aumentar suas vendas.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | cadastrar e logar conta            | Utilizar o sistema                     |
|Passageiro          | CRUD corrida                       | Criar, visualizar, editar e cancelar corrida|
|Passageiro       | CRUD Relatório de ocorrências | Criar, editar, visualizar e deletar ocorrência|
|Motorista       | CRUD cadastrar carro e CNH| Criar, editar, visualizar e deletar informações do carro/CNH|
|Motorista       | Aceita corrida| Aceitar corrida que deseja realizar|
|Administrador       | CRUD Termos de Uso| Criar, editar, visualizar e deletar os termos de uso do sistema|

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve ter tela de login/cadastro de usuário. | ALTA | 
|RF-002| O sistema deve ter tela de cadastro dos dados do carro/CNH.   | ALTA |
|RF-003|  (API de CEP).   | ALTA |
|RF-004| O sistema deve ter uma sessão de anúncio de vans.   | MÉDIA |
|RF-005| O sistema deve ter CRUDS: termos de uso, corrida, carro/cnh, ocorrências.   | ALTA |
|RF-006| Emitir um relatório de tarefas no mês   | MÉDIA |
|RF-007| Emitir um relatório de tarefas no mês   | MÉDIA |
|RF-008| O sistema deve implementar um "match" de alunos e motoristas (carona) por distância/destino final.   | ALTA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deverá estar disponível 7/24 (7 dias por semana, 24 horas por dia). | ALTA | 
|RNF-002| O processo de desenvolvimento deve utilizar HTML e CSS. |  BAIXA | 
|RNF-003| O site deve ser publicado em um ambiente acessível publicamente na Internet (GitHub Pages). |  ALTA | 
|RNF-004| O site deverá ser responsivo, permitindo a visualização adequada em celulares. |  ALTA | 
|RNF-005| O processo de desenvolvimento deve utilizar HTML e CSS. |  BAIXA | 
|RNF-006| O processo de desenvolvimento deve utilizar HTML e CSS. |  BAIXA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


