/**
 * Testes para KOAN 01: Propriedades de Tarefas
 */

const {
  criarTarefaSimples,
  criarTarefaComId,
  criarTarefaCompleta,
  obterTituloTarefa,
  marcarComoCompleta,
  estaCompleta
} = require('../src/01-task-properties');

describe('Koan 01: Propriedades de Tarefas', () => {

  describe('criarTarefaSimples', () => {
    test('deve retornar um objeto com titulo e concluida', () => {
      const tarefa = criarTarefaSimples();
      expect(tarefa).toHaveProperty('titulo');
      expect(tarefa).toHaveProperty('concluida');
    });

    test('titulo deve ser uma string', () => {
      const tarefa = criarTarefaSimples();
      expect(typeof tarefa.titulo).toBe('string');
    });

    test('concluida deve ser false inicialmente', () => {
      const tarefa = criarTarefaSimples();
      expect(tarefa.concluida).toBe(false);
    });
  });

  describe('criarTarefaComId', () => {
    test('deve retornar uma tarefa com id, titulo e concluida', () => {
      const tarefa = criarTarefaComId('Estudar JavaScript');
      expect(tarefa).toHaveProperty('id');
      expect(tarefa).toHaveProperty('titulo');
      expect(tarefa).toHaveProperty('concluida');
    });

    test('deve usar o titulo fornecido', () => {
      const tarefa = criarTarefaComId('Fazer exercícios');
      expect(tarefa.titulo).toBe('Fazer exercícios');
    });

    test('id deve ser um número', () => {
      const tarefa = criarTarefaComId('Ler documentação');
      expect(typeof tarefa.id).toBe('number');
    });

    test('concluida deve ser false', () => {
      const tarefa = criarTarefaComId('Praticar TDD');
      expect(tarefa.concluida).toBe(false);
    });
  });

  describe('criarTarefaCompleta', () => {
    test('deve criar tarefa com todas as propriedades', () => {
      const tarefa = criarTarefaCompleta(1, 'Título', 'Descrição');
      expect(tarefa).toHaveProperty('id');
      expect(tarefa).toHaveProperty('titulo');
      expect(tarefa).toHaveProperty('descricao');
      expect(tarefa).toHaveProperty('criadaEm');
    });

    test('deve usar os parâmetros fornecidos', () => {
      const tarefa = criarTarefaCompleta(42, 'Meu Título', 'Minha Descrição');
      expect(tarefa.id).toBe(42);
      expect(tarefa.titulo).toBe('Meu Título');
      expect(tarefa.descricao).toBe('Minha Descrição');
    });

    test('criadaEm deve ser uma instância de Date', () => {
      const tarefa = criarTarefaCompleta(1, 'Teste', 'Descrição teste');
      expect(tarefa.criadaEm).toBeInstanceOf(Date);
    });
  });

  describe('obterTituloTarefa', () => {
    test('deve retornar o titulo da tarefa', () => {
      const tarefa = { titulo: 'Comprar café', concluida: false };
      expect(obterTituloTarefa(tarefa)).toBe('Comprar café');
    });

    test('deve funcionar com diferentes títulos', () => {
      const tarefa1 = { titulo: 'Primeira tarefa', concluida: false };
      const tarefa2 = { titulo: 'Segunda tarefa', concluida: true };
      expect(obterTituloTarefa(tarefa1)).toBe('Primeira tarefa');
      expect(obterTituloTarefa(tarefa2)).toBe('Segunda tarefa');
    });
  });

  describe('marcarComoCompleta', () => {
    test('deve marcar tarefa como completa', () => {
      const tarefa = { titulo: 'Tarefa teste', concluida: false };
      marcarComoCompleta(tarefa);
      expect(tarefa.concluida).toBe(true);
    });

    test('deve retornar a tarefa modificada', () => {
      const tarefa = { titulo: 'Outra tarefa', concluida: false };
      const resultado = marcarComoCompleta(tarefa);
      expect(resultado).toBe(tarefa);
      expect(resultado.concluida).toBe(true);
    });
  });

  describe('estaCompleta', () => {
    test('deve retornar true para tarefa completa', () => {
      const tarefa = { titulo: 'Tarefa completa', concluida: true };
      expect(estaCompleta(tarefa)).toBe(true);
    });

    test('deve retornar false para tarefa incompleta', () => {
      const tarefa = { titulo: 'Tarefa pendente', concluida: false };
      expect(estaCompleta(tarefa)).toBe(false);
    });

    test('deve funcionar com múltiplas tarefas', () => {
      const tarefa1 = { titulo: 'Completa', concluida: true };
      const tarefa2 = { titulo: 'Incompleta', concluida: false };
      expect(estaCompleta(tarefa1)).toBe(true);
      expect(estaCompleta(tarefa2)).toBe(false);
    });
  });
});
