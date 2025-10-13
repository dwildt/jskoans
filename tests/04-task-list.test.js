/**
 * Testes para KOAN 04: Listas de Tarefas
 */

const {
  criarListaVazia,
  adicionarTarefa,
  contarTarefas,
  obterPrimeiraTarefa,
  obterUltimaTarefa,
  encontrarIndicePorId,
  removerTarefaPorIndice
} = require('../src/04-task-list');

describe('Koan 04: Listas de Tarefas', () => {

  describe('criarListaVazia', () => {
    test('deve retornar um array', () => {
      const lista = criarListaVazia();
      expect(Array.isArray(lista)).toBe(true);
    });

    test('deve retornar um array vazio', () => {
      const lista = criarListaVazia();
      expect(lista.length).toBe(0);
    });
  });

  describe('adicionarTarefa', () => {
    test('deve adicionar tarefa à lista', () => {
      const lista = [];
      const tarefa = { id: 1, titulo: 'Tarefa 1', concluida: false };
      adicionarTarefa(lista, tarefa);
      expect(lista.length).toBe(1);
      expect(lista[0]).toBe(tarefa);
    });

    test('deve adicionar múltiplas tarefas', () => {
      const lista = [];
      const tarefa1 = { id: 1, titulo: 'Tarefa 1', concluida: false };
      const tarefa2 = { id: 2, titulo: 'Tarefa 2', concluida: false };
      adicionarTarefa(lista, tarefa1);
      adicionarTarefa(lista, tarefa2);
      expect(lista.length).toBe(2);
      expect(lista[0]).toBe(tarefa1);
      expect(lista[1]).toBe(tarefa2);
    });

    test('deve retornar a lista', () => {
      const lista = [];
      const tarefa = { id: 1, titulo: 'Tarefa', concluida: false };
      const resultado = adicionarTarefa(lista, tarefa);
      expect(resultado).toBe(lista);
    });
  });

  describe('contarTarefas', () => {
    test('deve retornar 0 para lista vazia', () => {
      expect(contarTarefas([])).toBe(0);
    });

    test('deve contar tarefas corretamente', () => {
      const lista = [
        { id: 1, titulo: 'Tarefa 1', concluida: false },
        { id: 2, titulo: 'Tarefa 2', concluida: true }
      ];
      expect(contarTarefas(lista)).toBe(2);
    });

    test('deve funcionar com qualquer quantidade', () => {
      const lista = [1, 2, 3, 4, 5];
      expect(contarTarefas(lista)).toBe(5);
    });
  });

  describe('obterPrimeiraTarefa', () => {
    test('deve retornar undefined para lista vazia', () => {
      expect(obterPrimeiraTarefa([])).toBeUndefined();
    });

    test('deve retornar primeira tarefa', () => {
      const tarefa1 = { id: 1, titulo: 'Primeira', concluida: false };
      const tarefa2 = { id: 2, titulo: 'Segunda', concluida: false };
      const lista = [tarefa1, tarefa2];
      expect(obterPrimeiraTarefa(lista)).toBe(tarefa1);
    });

    test('deve funcionar com lista de uma tarefa', () => {
      const tarefa = { id: 1, titulo: 'Única', concluida: false };
      expect(obterPrimeiraTarefa([tarefa])).toBe(tarefa);
    });
  });

  describe('obterUltimaTarefa', () => {
    test('deve retornar undefined para lista vazia', () => {
      expect(obterUltimaTarefa([])).toBeUndefined();
    });

    test('deve retornar última tarefa', () => {
      const tarefa1 = { id: 1, titulo: 'Primeira', concluida: false };
      const tarefa2 = { id: 2, titulo: 'Segunda', concluida: false };
      const tarefa3 = { id: 3, titulo: 'Terceira', concluida: false };
      const lista = [tarefa1, tarefa2, tarefa3];
      expect(obterUltimaTarefa(lista)).toBe(tarefa3);
    });

    test('deve funcionar com lista de uma tarefa', () => {
      const tarefa = { id: 1, titulo: 'Única', concluida: false };
      expect(obterUltimaTarefa([tarefa])).toBe(tarefa);
    });
  });

  describe('encontrarIndicePorId', () => {
    test('deve retornar -1 para lista vazia', () => {
      expect(encontrarIndicePorId([], 1)).toBe(-1);
    });

    test('deve encontrar índice da tarefa pelo ID', () => {
      const lista = [
        { id: 5, titulo: 'Tarefa 5', concluida: false },
        { id: 10, titulo: 'Tarefa 10', concluida: false },
        { id: 15, titulo: 'Tarefa 15', concluida: false }
      ];
      expect(encontrarIndicePorId(lista, 10)).toBe(1);
    });

    test('deve retornar -1 quando ID não existe', () => {
      const lista = [
        { id: 1, titulo: 'Tarefa 1', concluida: false },
        { id: 2, titulo: 'Tarefa 2', concluida: false }
      ];
      expect(encontrarIndicePorId(lista, 99)).toBe(-1);
    });

    test('deve retornar primeiro índice se houver IDs duplicados', () => {
      const lista = [
        { id: 5, titulo: 'Primeira com 5', concluida: false },
        { id: 5, titulo: 'Segunda com 5', concluida: false }
      ];
      expect(encontrarIndicePorId(lista, 5)).toBe(0);
    });
  });

  describe('removerTarefaPorIndice', () => {
    test('deve remover tarefa no índice especificado', () => {
      const lista = [
        { id: 1, titulo: 'Tarefa 1', concluida: false },
        { id: 2, titulo: 'Tarefa 2', concluida: false },
        { id: 3, titulo: 'Tarefa 3', concluida: false }
      ];
      removerTarefaPorIndice(lista, 1);
      expect(lista.length).toBe(2);
      expect(lista[0].id).toBe(1);
      expect(lista[1].id).toBe(3);
    });

    test('deve remover primeiro elemento', () => {
      const lista = [
        { id: 1, titulo: 'Primeira', concluida: false },
        { id: 2, titulo: 'Segunda', concluida: false }
      ];
      removerTarefaPorIndice(lista, 0);
      expect(lista.length).toBe(1);
      expect(lista[0].id).toBe(2);
    });

    test('deve remover último elemento', () => {
      const lista = [
        { id: 1, titulo: 'Primeira', concluida: false },
        { id: 2, titulo: 'Segunda', concluida: false }
      ];
      removerTarefaPorIndice(lista, 1);
      expect(lista.length).toBe(1);
      expect(lista[0].id).toBe(1);
    });

    test('deve retornar a lista', () => {
      const lista = [{ id: 1, titulo: 'Tarefa', concluida: false }];
      const resultado = removerTarefaPorIndice(lista, 0);
      expect(resultado).toBe(lista);
    });
  });
});
