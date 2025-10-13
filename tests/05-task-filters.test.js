/**
 * Testes para KOAN 05: Filtros e Buscas
 */

const {
  filtrarConcluidas,
  filtrarPendentes,
  buscarPorId,
  buscarIndicePorId,
  buscarPorTitulo,
  existeTarefaConcluida,
  todasConcluidas
} = require('../src/05-task-filters');

describe('Koan 05: Filtros e Buscas', () => {

  const tarefasTeste = [
    { id: 1, titulo: 'Estudar JavaScript', concluida: true },
    { id: 2, titulo: 'Fazer exercícios', concluida: false },
    { id: 3, titulo: 'Estudar TDD', concluida: true },
    { id: 4, titulo: 'Ler documentação', concluida: false }
  ];

  describe('filtrarConcluidas', () => {
    test('deve retornar apenas tarefas concluídas', () => {
      const resultado = filtrarConcluidas(tarefasTeste);
      expect(resultado.length).toBe(2);
      expect(resultado[0].id).toBe(1);
      expect(resultado[1].id).toBe(3);
    });

    test('deve retornar array vazio se não há concluídas', () => {
      const lista = [
        { id: 1, titulo: 'Tarefa 1', concluida: false },
        { id: 2, titulo: 'Tarefa 2', concluida: false }
      ];
      expect(filtrarConcluidas(lista)).toEqual([]);
    });

    test('deve retornar todas se todas estão concluídas', () => {
      const lista = [
        { id: 1, titulo: 'Tarefa 1', concluida: true },
        { id: 2, titulo: 'Tarefa 2', concluida: true }
      ];
      expect(filtrarConcluidas(lista).length).toBe(2);
    });
  });

  describe('filtrarPendentes', () => {
    test('deve retornar apenas tarefas pendentes', () => {
      const resultado = filtrarPendentes(tarefasTeste);
      expect(resultado.length).toBe(2);
      expect(resultado[0].id).toBe(2);
      expect(resultado[1].id).toBe(4);
    });

    test('deve retornar array vazio se não há pendentes', () => {
      const lista = [
        { id: 1, titulo: 'Tarefa 1', concluida: true },
        { id: 2, titulo: 'Tarefa 2', concluida: true }
      ];
      expect(filtrarPendentes(lista)).toEqual([]);
    });

    test('deve retornar todas se todas estão pendentes', () => {
      const lista = [
        { id: 1, titulo: 'Tarefa 1', concluida: false },
        { id: 2, titulo: 'Tarefa 2', concluida: false }
      ];
      expect(filtrarPendentes(lista).length).toBe(2);
    });
  });

  describe('buscarPorId', () => {
    test('deve encontrar tarefa pelo ID', () => {
      const resultado = buscarPorId(tarefasTeste, 3);
      expect(resultado).toBeDefined();
      expect(resultado.id).toBe(3);
      expect(resultado.titulo).toBe('Estudar TDD');
    });

    test('deve retornar undefined se ID não existe', () => {
      expect(buscarPorId(tarefasTeste, 999)).toBeUndefined();
    });

    test('deve retornar primeira ocorrência se houver IDs duplicados', () => {
      const lista = [
        { id: 5, titulo: 'Primeira', concluida: false },
        { id: 5, titulo: 'Segunda', concluida: true }
      ];
      const resultado = buscarPorId(lista, 5);
      expect(resultado.titulo).toBe('Primeira');
    });
  });

  describe('buscarIndicePorId', () => {
    test('deve encontrar índice da tarefa pelo ID', () => {
      expect(buscarIndicePorId(tarefasTeste, 1)).toBe(0);
      expect(buscarIndicePorId(tarefasTeste, 3)).toBe(2);
      expect(buscarIndicePorId(tarefasTeste, 4)).toBe(3);
    });

    test('deve retornar -1 se ID não existe', () => {
      expect(buscarIndicePorId(tarefasTeste, 999)).toBe(-1);
    });

    test('deve retornar -1 para lista vazia', () => {
      expect(buscarIndicePorId([], 1)).toBe(-1);
    });
  });

  describe('buscarPorTitulo', () => {
    test('deve encontrar tarefa por texto no título', () => {
      const resultado = buscarPorTitulo(tarefasTeste, 'JavaScript');
      expect(resultado).toBeDefined();
      expect(resultado.id).toBe(1);
    });

    test('deve encontrar por texto parcial', () => {
      const resultado = buscarPorTitulo(tarefasTeste, 'Estudar');
      expect(resultado).toBeDefined();
      expect(resultado.titulo).toContain('Estudar');
    });

    test('deve retornar undefined se texto não encontrado', () => {
      expect(buscarPorTitulo(tarefasTeste, 'Python')).toBeUndefined();
    });

    test('deve ser case-sensitive', () => {
      expect(buscarPorTitulo(tarefasTeste, 'javascript')).toBeUndefined();
    });
  });

  describe('existeTarefaConcluida', () => {
    test('deve retornar true se existe pelo menos uma concluída', () => {
      expect(existeTarefaConcluida(tarefasTeste)).toBe(true);
    });

    test('deve retornar false se nenhuma está concluída', () => {
      const lista = [
        { id: 1, titulo: 'Tarefa 1', concluida: false },
        { id: 2, titulo: 'Tarefa 2', concluida: false }
      ];
      expect(existeTarefaConcluida(lista)).toBe(false);
    });

    test('deve retornar true se todas estão concluídas', () => {
      const lista = [
        { id: 1, titulo: 'Tarefa 1', concluida: true },
        { id: 2, titulo: 'Tarefa 2', concluida: true }
      ];
      expect(existeTarefaConcluida(lista)).toBe(true);
    });

    test('deve retornar false para lista vazia', () => {
      expect(existeTarefaConcluida([])).toBe(false);
    });
  });

  describe('todasConcluidas', () => {
    test('deve retornar true se todas estão concluídas', () => {
      const lista = [
        { id: 1, titulo: 'Tarefa 1', concluida: true },
        { id: 2, titulo: 'Tarefa 2', concluida: true }
      ];
      expect(todasConcluidas(lista)).toBe(true);
    });

    test('deve retornar false se pelo menos uma não está concluída', () => {
      expect(todasConcluidas(tarefasTeste)).toBe(false);
    });

    test('deve retornar false se nenhuma está concluída', () => {
      const lista = [
        { id: 1, titulo: 'Tarefa 1', concluida: false },
        { id: 2, titulo: 'Tarefa 2', concluida: false }
      ];
      expect(todasConcluidas(lista)).toBe(false);
    });

    test('deve retornar true para lista vazia', () => {
      expect(todasConcluidas([])).toBe(true);
    });
  });
});
