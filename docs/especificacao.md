# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

Nesta parte do trabalho você deve detalhar a documentação dos requisitos do sistema proposto de acordo com as seções a seguir. Ressalta-se que aqui é utilizado como exemplo um sistema de gestão de cursos de aperfeiçoamento.

## 3.1 Objetivos deste documento
Descrever e especificar os requisitos do sistema de gestão de finanças pessoais, definindo suas funcionalidades e características, a fim de orientar seu desenvolvimento e garantir o atendimento às necessidades dos usuários.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado Midas Helper. Ele terá dois componentes (módulos), sendo um com os devidos elementos necessários à gestão e registros financeiros e outro com elementos necessários para um módulo de assistente virtual.

### 3.2.2 Missão do produto
Auxiliar jovens no controle de suas finanças pessoais por meio de uma ferramenta simples, acessível e interativa, promovendo a educação financeira e a tomada de decisões mais conscientes.

### 3.2.3 Limites do produto
O Midas Helper nao fornece nenhuma ligação direta com as contas bancarias do usuário, sendo necessário preencher as entradas e saídas manualmente. 

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Facilidade no registro de receitas e despesas |	Essencial |
|2 | Visualização clara dos gastos e hábitos de consumo | Essencial | 
|3 | Segurança dos dados do usuário | Essencial | 
|4	| Suporte inteligente para tomada de decisões financeiras	| Recomendável | 
|5 | Auxílio no planejamento financeiro e definição de metas | Recomendável |

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| RF1 | Cadastrar Usuário |	Permitir que novos usuários realizem cadastro no sistema com informações básicas. |
| RF2 |	Realizar Login	| Permitir que o usuário acesse o sistema por meio de autenticação (email e senha). |
| RF3 |	Gerenciar Perfil	| Permitir a edição de dados pessoais e redefinição da senha. |
| RF4	| Registrar Receitas |	Permitir o registro de entradas financeiras como salário, mesada, etc. |
| RF5 |	Registrar Despesas	| Permitir o registro de gastos com categorização como alimentação, transporte, lazer, etc. |
| RF6 |	Editar/Excluir Registros	| Permitir alteração ou exclusão de receitas ou despesas já cadastradas. |
| RF7 |	Visualizar Histórico Financeiro	| Exibir lista de transações realizadas pelo usuário. |
| RF8 |	Categorizar Transações	| Permitir classificação das receitas e despesas em categorias. |
| RF9 |	Gerar Relatórios	| Apresentar resumos financeiros em formato de gráficos ou listas. |
| RF10 |	Definir Metas Financeiras	| Permitir que o usuário crie objetivos como por exemplo: viagem, compra, reserva. |
| RF11 |	Acompanhar Metas	| Mostrar progresso das metas financeiras estabelecidas. |
| RF12 |	Sugestões Inteligentes	| O sistema deve sugerir melhorias com base nos hábitos do usuário. |
| RF13 |	Assistente Virtual	| Disponibilizar um assistente que auxilie com dicas e análises financeiras. |

### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição) | Descrição |
|--------------------|--------------------------|------------------------------------|
| RNF1 | Usabilidade | O sistema deverá possuir interface simples e intuitiva, adaptada para o público jovem e evitando termos técnicos complexos sem explicação. |
| RNF2 | Segurança | O acesso deve ser protegido por login e senha. |
| RNF3 |	Privacidade | Os dados do usuário devem ser armazenados de forma segura, não compartilhando os dados financeiros sensíveis com terceiros, seguindo as diretrizes da LGPD. |
| RNF4 |	Disponibilidade | O sistema deve estar disponível 24 horas por dia via conexão com a internet. |
| RNF5 |	Desempenho | O sistema deve responder às ações do usuário em até 3 segundos. |
| RNF6 | Desempenho	| O sistema deve suportar múltiplos usuários simultaneamente. |

### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Usuário Comum |	Jovens e adultos que utilizam o sistema para controlar suas finanças pessoais, registrar gastos, receitas e acompanhar metas. |
| Administrador |	Responsável pela manutenção técnica do sistema e atualização dos conteúdos educativos oferecidos pelo assistente. |

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso

#### Figura 1: Diagrama de Casos de Uso do Sistema.

<img width="2424" height="1789" alt="use_case_" src="https://github.com/user-attachments/assets/f9300a99-7184-460e-8300-030c86b839fe" />

 
### 3.4.2 Descrições de Casos de Uso

Cada caso de uso deve ter a sua descrição representada nesta seção. Exemplo:

#### Gerenciar Professor (CSU01)

Sumário: A Secretária realiza a gestão (inclusão, remoção, alteração e consulta) dos dados sobre professores.

Ator Primário: Secretária.

Ator Secundário: Coordenador.

Pré-condições: A Secretária deve ser validada pelo Sistema.

Fluxo Principal:

1) 	A Secretária requisita manutenção de professores.
2) 	O Sistema apresenta as operações que podem ser realizadas: inclusão de um novo professor, alteração de um professor, a exclusão de um professor e a consulta de dados de um professor.
3) 	A Secretária seleciona a operação desejada: Inclusão, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.
4) 	Se a Secretária desejar continuar com a gestão de professores, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (3): Inclusão

a)	A Secretária requisita a inclusão de um professor. <br>
b)	O Sistema apresenta uma janela solicitando o CPF do professor a ser cadastrado. <br>
c)	A Secretária fornece o dado solicitado. <br>
d)	O Sistema verifica se o professor já está cadastrado. Se sim, o Sistema reporta o fato e volta ao início; caso contrário, apresenta um formulário em branco para que os detalhes do professor (Código, Nome, Endereço, CEP, Estado, Cidade, Bairro, Telefone, Identidade, Sexo, Fax, CPF, Data do Cadastro e Observação) sejam incluídos. <br>
e)	A Secretária fornece os detalhes do novo professor. <br>
f)	O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui o novo professor e a grade listando os professores cadastrados é atualizada; caso contrário, o Sistema reporta o fato, solicita novos dados e repete a verificação. <br>

Fluxo Alternativo (3): Remoção

a)	A Secretária seleciona um professor e requisita ao Sistema que o remova. <br>
b)	Se o professor pode ser removido, o Sistema realiza a remoção; caso contrário, o Sistema reporta o fato. <br>

Fluxo Alternativo (3): Alteração

a)	A Secretária altera um ou mais dos detalhes do professor e requisita sua atualização. <br>
b)	O Sistema verifica a validade dos dados e, se eles forem válidos, altera os dados na lista de professores, caso contrário, o erro é reportado. <br>
 
Fluxo Alternativo (3): Consulta

a)	A Secretária opta por pesquisar pelo nome ou código e solicita a consulta sobre a lista de professores. <br>
b)	O Sistema apresenta uma lista professores. <br>
c)	A Secretária seleciona o professor. <br>
d)	O Sistema apresenta os detalhes do professor no formulário de professores. <br>

Pós-condições: Um professor foi inserido ou removido, seus dados foram alterados ou apresentados na tela.

### 3.4.3 Diagrama de Classes 

#### Figura 2: Diagrama de Classes do Sistema.

<img width="1310" height="551" alt="DiagramaClassesMidas" src="https://github.com/user-attachments/assets/f754b2d0-badb-4273-9a3d-019967d09ab7" />
Obs: Os métodos de CadastrarUsuario, RegistrarMeta e RegistrarTransacao englobam as ações básicas de inclusão, alteração, visualização e exclusão. 

### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Usuario |	Cadastro do usuário no sistema. |
| 2	| Transacao |	Dados das despesas e receitas do usuário. |
| 3 |	Meta |	Dados das metas financeiras do usuário. |
| 4 |	ProcessoTransacao |	Realiza a manipulação dos objetos de Transacao. |
| 5	|	ProcessoMeta |	Realiza a manipulação dos objetos de Meta. |
| 6 |	Assistente |	Assistente Virtual para criar sugestões e manipular Transacao e Meta. |
