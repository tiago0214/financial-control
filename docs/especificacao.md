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

#### Gerenciar Perfil (CSU01) 

Sumário:  O Usuário gerencia seus dados pessoais no sistema. 

Ator Primário: Usuário 

Pré-condições:  O Usuário deve estar autenticado no sistema. 

Fluxo Principal:
1. O Usuário acessa a opção de gerenciar perfil. 
2. O sistema exibe os dados atuais do perfil. 
3. O Usuário edita as informações desejadas. 
4. O sistema valida e salva os dados. 
5. O sistema confirma a atualização. 

Fluxo Alternativo: Dados inválidos 

a) O sistema identifica erro nos dados.

b) Solicita correção ao Usuário. 

Pós-condições: Os dados do perfil são atualizados. 



#### Registrar Receitas (CSU02) 

Sumário: O Usuário registra entradas financeiras. 

Ator Primário: Usuário 

Ator Secundário: Assistente Virtual 

Pré-condições: Usuário autenticado.

Fluxo Principal:
1. O Usuário solicita registrar receita. 
2. O sistema apresenta formulário. 
3. O Usuário insere os dados. 
4. O sistema valida e salva. 
5. O sistema atualiza o saldo. 

Fluxo Alternativo: Dados inválidos 

a) O sistema solicita correção. 

Pós-condições: Receita registrada no sistema. 



#### Registrar Despesas (CSU03) 

Sumário: O Usuário registra saídas financeiras. 

Ator Primário: Usuário 

Ator Secundário: Assistente Virtual 

Pré-condições: Usuário autenticado. 

Fluxo Principal 
1. O Usuário solicita registrar despesa. 
2. O sistema apresenta formulário. 
3. O Usuário insere os dados. 
4. O sistema valida e salva. 
5. O sistema atualiza o saldo. 

Fluxo Alternativo: Dados inválidos 

a) O sistema solicita correção. 

Pós-condições: Despesa registrada. 



#### Editar/Excluir Registros (CSU04) 

Sumário: O Usuário altera ou remove registros financeiros. 

Ator Primário: Usuário 

Pré-condições: Existirem registros cadastrados. 

Fluxo Principal 
1. O Usuário acessa os registros. 
2. Seleciona um registro. 
3. Escolhe editar ou excluir. 
4. O sistema executa a ação. 

Pós-condições: Registro atualizado ou removido. 



#### Visualizar Histórico Financeiro (CSU05) 

Sumário: O Usuário visualiza seu histórico financeiro. 

Ator Primário: Usuário 

Fluxo Principal 
1. O Usuário solicita visualização. 
2. O sistema apresenta o histórico. 

Pós-condições: Dados financeiros exibidos. 



#### Categorizar Transações (CSU06) 

Sumário: O Usuário organiza transações por categorias. 

Ator Primário: Usuário 

Fluxo Principal 
1. O Usuário seleciona uma transação. 
2. Define uma categoria. 
3. O sistema salva a categoria. 

Pós-condições: Transações categorizadas. 



#### Gerar Relatórios (CSU07) 

Sumário: O Usuário gera relatórios financeiros. 

Ator Primário: Usuário 

Fluxo Principal:
1. O Usuário solicita relatório. 
2. Escolhe filtros (período, categoria). 
3. O sistema gera o relatório. 
4. O sistema exibe os resultados. 

Pós-condições: Relatório gerado. 



#### Definir Metas Financeiras (CSU08) 

Sumário: O Usuário define metas financeiras. 

Ator Primário: Usuário 

Ator Secundário: Assistente Virtual 

Fluxo Principal:
1. O Usuário define uma meta. 
2. Informa valor e prazo. 
3. O sistema salva a meta. 

Pós-condições: Meta cadastrada. 



#### Acompanhar Metas (CSU09) 

Sumário: O Usuário acompanha o progresso das metas. 

Ator Primário: Usuário 

Fluxo Principal 
1. O Usuário acessa suas metas. 
2. O sistema mostra progresso. 
Pós-condições: Status das metas exibido. 



#### Sugestões Inteligentes (CSU10) 

Sumário: O sistema fornece recomendações financeiras com base nos dados. 

Ator Primário: Assistente Virtual 

Ator Secundário: Usuário 

Fluxo Principal: 
1. O sistema analisa dados financeiros. 
2. Gera sugestões. 
3. Apresenta ao Usuário. 

Pós-condições: Sugestões exibidas.


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
