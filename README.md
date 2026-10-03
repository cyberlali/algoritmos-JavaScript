🚀 Algoritmos em JavaScript: Do VisualG para a Web
Este repositório contém a minha jornada de transição da lógica de programação estruturada em pseudocódigo (VisualG) para JavaScript.

Aqui estão centralizadas as resoluções de dezenas de exercícios clássicos de algoritmos (baseados na apostila do Manzano e da Faccat), todos refatorados e testados diretamente no navegador.

🛠️ Tecnologias Utilizadas
JavaScript (ES6+): Lógica principal, laços de repetição e estruturas de decisão.

HTML5: Estrutura base para execução dos scripts no navegador.

VS Code: Editor de código.

Git & GitHub: Versionamento de código e portfólio.

📂 Estrutura das Listas de Exercícios
Os exercícios foram divididos de acordo com os temas estudados:

L01 - Estruturas Sequenciais: Operações matemáticas básicas, cálculos de área, conversão de temperaturas e moedas.

L02 - Estruturas de Decisão (if / else): Validações lógicas, equações de 2º grau (Bhaskara), verificação de números pares/ímpares.

L03 - Laços de Repetição (while): Tabuadas, somatórios, série de Fibonacci.

L04 - Laços de Repetição (do...while / repita): Validação de entradas, cálculos com condição de parada, fatoriais.

L05 - Laços de Repetição (for / para): Otimização de contadores, processamento de faixas numéricas.

Exercícios Faccat: Foco em lógica comercial (cálculo de salários, comissões, sistemas de login, controle de estoque) utilizando Seleção Aninhada e Seleção Concatenada.

⚙️ Como rodar o projeto localmente
Para facilitar os testes sem precisar configurar o Node.js, criei um ambiente de teste simples usando um único arquivo index.html.

Faça o clone deste repositório:

Bash
git clone https://github.com/SEU-USUARIO/algoritmos-visualG.git
Abra a pasta do projeto no seu VS Code.

Abra o arquivo index.html.

Vá até o final da tag <body> e altere o nome do arquivo .js no atributo src para o exercício que deseja testar. Exemplo:

HTML
<!-- Altere "Exercicio_30.js" para o script que quer rodar -->
<script src="Exercicio_30.js"></script>
Salve o arquivo (Ctrl + S) e abra o index.html no seu navegador (Google Chrome, Edge, Firefox).

Interaja com as caixas de alerta (prompt) e abra a Ferramenta do Desenvolvedor (F12) > Console para ver os relatórios completos.

🧠 Aprendizados
Adaptação da sintaxe do Portugol (leia, escreval, se/senao) para os padrões do JavaScript (prompt, console.log, alert, if/else).

Entendimento do comportamento bloqueante do prompt() no navegador e como a ordem de carregamento do DOM (colocar o script no final do <body>) afeta a renderização do HTML.

Utilização de lógicas mais limpas e legíveis, como a substituição de testes aninhados complexos por seleções concatenadas (else if).

Feito com dedicação por [Seu Nome/Apelido] 💻 | [LinkedIn](Link do seu linkedin) | [GitHub](Link do seu github)
