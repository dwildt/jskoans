# JavaScript Koan: Lista de Tarefas

Aprenda JavaScript construindo uma aplicação real de lista de tarefas através de TDD (Test-Driven Development).

## O que é este projeto?

JavaScript Koans são exercícios de aprendizado progressivo onde você completa código para fazer testes passarem. Este projeto ensina JavaScript do básico ao avançado através da construção de um sistema de gerenciamento de tarefas (Todo List).

Cada "koan" (exercício) foca em conceitos específicos de JavaScript:
- Variáveis e tipos de dados
- Objetos e propriedades
- Operadores e condicionais
- Arrays e manipulação de listas
- Funções de array (filter, map, reduce)
- Conceitos modernos (destructuring, spread operator)

## Instalação

Primeiro, instale as dependências:

```bash
npm install
```

## Como Usar

### Modo de Teste Contínuo (Recomendado)

Execute os testes em modo watch para receber feedback instantâneo:

```bash
npm run test:watch
```

### Executar Todos os Testes

```bash
npm test
```

### Verificar Cobertura de Testes

```bash
npm run test:coverage
```

## Como Completar os Koans

1. **Execute os testes em modo watch**: Primeiro, rode `npm run test:watch`
   - Este comando mantém os testes rodando automaticamente
   - Cada vez que você salvar um arquivo, os testes serão executados
   - O output mostrará seu progresso e indicará exatamente onde estão os erros

2. **Abra o primeiro arquivo**: Comece com `src/01-task-properties.js`

3. **Encontre as lacunas**: Procure por `____` no código

4. **Complete o código**: Substitua `____` pelo código correto
   - Use as dicas nos comentários
   - Observe o output dos testes para ver o que está faltando

5. **Veja os testes passarem**: Continue até todos os testes ficarem verdes
   - Os testes mostram exatamente qual função precisa ser corrigida
   - Mensagens de erro indicam o que está esperado vs. o que foi recebido

6. **Próximo koan**: Quando todos os testes do arquivo passarem, avance para o próximo na ordem

## Ordem dos Koans

Complete os koans nesta ordem para melhor progressão de aprendizado:

1. **01-task-properties.js** - Propriedades de Tarefas
   - Aprenda: variáveis (const/let), tipos primitivos, objetos literais, acesso a propriedades

2. **02-task-operations.js** - Operações com Tarefas
   - Aprenda: operadores (===, !==, &&, ||, !), condicionais (if/else), template literals

3. **03-task-validation.js** - Validações
   - Aprenda: validações, operadores lógicos complexos, early return

4. **04-task-list.js** - Listas de Tarefas
   - Aprenda: arrays, métodos básicos (push, length, indexOf, splice), loops (for)

5. **05-task-filters.js** - Filtros e Buscas
   - Aprenda: filter, find, findIndex, some, every

6. **06-task-transformations.js** - Transformações
   - Aprenda: map, reduce, sort, destructuring, spread operator

## Instruções Importantes

- **Não modifique os testes**: Os arquivos em `tests/` já estão completos
- **Complete apenas as lacunas**: Substitua apenas os `____` no código
- **Use as dicas**: Cada lacuna tem um comentário explicativo
- **Consulte as soluções**: Se ficar travado, veja os arquivos em `solutions/`
- **Pratique**: Tente resolver sem olhar as soluções primeiro

## Estrutura do Projeto

```
js-koan-todo/
├── package.json          # Configuração do projeto
├── .gitignore           # Arquivos ignorados pelo git
├── README.md            # Este arquivo
├── src/                 # Seus koans (complete as lacunas aqui)
│   ├── 01-task-properties.js
│   ├── 02-task-operations.js
│   ├── 03-task-validation.js
│   ├── 04-task-list.js
│   ├── 05-task-filters.js
│   └── 06-task-transformations.js
├── tests/               # Testes (não modifique)
│   ├── 01-task-properties.test.js
│   ├── 02-task-operations.test.js
│   ├── 03-task-validation.test.js
│   ├── 04-task-list.test.js
│   ├── 05-task-filters.test.js
│   └── 06-task-transformations.test.js
└── solutions/           # Soluções completas (consulte se necessário)
    ├── 01-task-properties.js
    ├── 02-task-operations.js
    ├── 03-task-validation.js
    ├── 04-task-list.js
    ├── 05-task-filters.js
    └── 06-task-transformations.js
```

## Dicas para Sucesso

- Leia os erros dos testes com atenção - eles indicam o que está faltando
- Complete um koan por vez - não pule etapas
- Experimente diferentes soluções
- Use `console.log()` para entender o que está acontecendo
- Consulte a documentação do JavaScript quando necessário

## Recursos Úteis

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

Boa sorte e divirta-se aprendendo JavaScript!
