/**
 * Testes para KOAN 06: Transformações
 */

const {
  extrairTitulos,
  extrairIds,
  marcarTodasCompletas,
  contarConcluidas,
  somarIds,
  ordenarPorId,
  clonarLista,
  mesclarListas,
  extrairPropriedades
} = require('../src/06-task-transformations');

describe('Koan 06: Transformações', () => {

  const tarefasTeste = [
    { id: 3, titulo: 'Estudar JavaScript', concluida: true },
    { id: 1, titulo: 'Fazer exercícios', concluida: false },
    { id: 2, titulo: 'Ler documentação', concluida: true }
  ];

  describe('extrairTitulos', () => {
    test('deve extrair apenas os títulos', () => {
      const resultado = extrairTitulos(tarefasTeste);
      expect(resultado).toEqual([
        'Estudar JavaScript',
        'Fazer exercícios',
        'Ler documentação'
      ]);
    });

    test('deve retornar array vazio para lista vazia', () => {
      expect(extrairTitulos([])).toEqual([]);
    });

    test('deve retornar array com mesmo comprimento', () => {
      expect(extrairTitulos(tarefasTeste).length).toBe(tarefasTeste.length);
    });
  });

  describe('extrairIds', () => {
    test('deve extrair apenas os IDs', () => {
      const resultado = extrairIds(tarefasTeste);
      expect(resultado).toEqual([3, 1, 2]);
    });

    test('deve retornar array vazio para lista vazia', () => {
      expect(extrairIds([])).toEqual([]);
    });

    test('deve retornar apenas números', () => {
      const resultado = extrairIds(tarefasTeste);
      resultado.forEach(id => {
        expect(typeof id).toBe('number');
      });
    });
  });

  describe('marcarTodasCompletas', () => {
    test('deve marcar todas como completas', () => {
      const resultado = marcarTodasCompletas(tarefasTeste);
      expect(resultado.every(t => t.concluida === true)).toBe(true);
    });

    test('deve manter outras propriedades', () => {
      const resultado = marcarTodasCompletas(tarefasTeste);
      expect(resultado[0].id).toBe(3);
      expect(resultado[0].titulo).toBe('Estudar JavaScript');
    });

    test('não deve modificar array original', () => {
      const original = [{ id: 1, titulo: 'Teste', concluida: false }];
      const resultado = marcarTodasCompletas(original);
      expect(original[0].concluida).toBe(false);
      expect(resultado[0].concluida).toBe(true);
    });

    test('deve retornar array vazio para entrada vazia', () => {
      expect(marcarTodasCompletas([])).toEqual([]);
    });
  });

  describe('contarConcluidas', () => {
    test('deve contar tarefas concluídas corretamente', () => {
      expect(contarConcluidas(tarefasTeste)).toBe(2);
    });

    test('deve retornar 0 para lista vazia', () => {
      expect(contarConcluidas([])).toBe(0);
    });

    test('deve retornar 0 quando nenhuma está concluída', () => {
      const lista = [
        { id: 1, titulo: 'A', concluida: false },
        { id: 2, titulo: 'B', concluida: false }
      ];
      expect(contarConcluidas(lista)).toBe(0);
    });

    test('deve retornar total quando todas estão concluídas', () => {
      const lista = [
        { id: 1, titulo: 'A', concluida: true },
        { id: 2, titulo: 'B', concluida: true },
        { id: 3, titulo: 'C', concluida: true }
      ];
      expect(contarConcluidas(lista)).toBe(3);
    });
  });

  describe('somarIds', () => {
    test('deve somar todos os IDs', () => {
      expect(somarIds(tarefasTeste)).toBe(6); // 3 + 1 + 2
    });

    test('deve retornar 0 para lista vazia', () => {
      expect(somarIds([])).toBe(0);
    });

    test('deve funcionar com IDs grandes', () => {
      const lista = [
        { id: 100, titulo: 'A', concluida: false },
        { id: 200, titulo: 'B', concluida: false }
      ];
      expect(somarIds(lista)).toBe(300);
    });
  });

  describe('ordenarPorId', () => {
    test('deve ordenar tarefas por ID crescente', () => {
      const resultado = ordenarPorId(tarefasTeste);
      expect(resultado[0].id).toBe(1);
      expect(resultado[1].id).toBe(2);
      expect(resultado[2].id).toBe(3);
    });

    test('não deve modificar array original', () => {
      const original = [...tarefasTeste];
      ordenarPorId(tarefasTeste);
      expect(tarefasTeste[0].id).toBe(original[0].id);
    });

    test('deve retornar nova instância de array', () => {
      const resultado = ordenarPorId(tarefasTeste);
      expect(resultado).not.toBe(tarefasTeste);
    });

    test('deve funcionar com lista já ordenada', () => {
      const lista = [
        { id: 1, titulo: 'A', concluida: false },
        { id: 2, titulo: 'B', concluida: false }
      ];
      const resultado = ordenarPorId(lista);
      expect(resultado[0].id).toBe(1);
      expect(resultado[1].id).toBe(2);
    });
  });

  describe('clonarLista', () => {
    test('deve criar uma cópia da lista', () => {
      const resultado = clonarLista(tarefasTeste);
      expect(resultado).toEqual(tarefasTeste);
    });

    test('deve retornar nova instância de array', () => {
      const resultado = clonarLista(tarefasTeste);
      expect(resultado).not.toBe(tarefasTeste);
    });

    test('deve clonar lista vazia', () => {
      const resultado = clonarLista([]);
      expect(resultado).toEqual([]);
      expect(Array.isArray(resultado)).toBe(true);
    });

    test('modificação no clone não afeta original', () => {
      const original = [{ id: 1, titulo: 'Teste', concluida: false }];
      const clone = clonarLista(original);
      clone.push({ id: 2, titulo: 'Nova', concluida: true });
      expect(original.length).toBe(1);
      expect(clone.length).toBe(2);
    });
  });

  describe('mesclarListas', () => {
    test('deve mesclar duas listas', () => {
      const lista1 = [
        { id: 1, titulo: 'Tarefa 1', concluida: false }
      ];
      const lista2 = [
        { id: 2, titulo: 'Tarefa 2', concluida: true }
      ];
      const resultado = mesclarListas(lista1, lista2);
      expect(resultado.length).toBe(2);
      expect(resultado[0].id).toBe(1);
      expect(resultado[1].id).toBe(2);
    });

    test('deve manter ordem das listas', () => {
      const lista1 = [{ id: 1, titulo: 'A', concluida: false }];
      const lista2 = [{ id: 2, titulo: 'B', concluida: false }];
      const resultado = mesclarListas(lista1, lista2);
      expect(resultado[0]).toBe(lista1[0]);
      expect(resultado[1]).toBe(lista2[0]);
    });

    test('deve funcionar com listas vazias', () => {
      const lista1 = [{ id: 1, titulo: 'A', concluida: false }];
      expect(mesclarListas(lista1, [])).toEqual(lista1);
      expect(mesclarListas([], lista1)).toEqual(lista1);
      expect(mesclarListas([], [])).toEqual([]);
    });

    test('deve retornar nova instância', () => {
      const lista1 = [{ id: 1, titulo: 'A', concluida: false }];
      const lista2 = [{ id: 2, titulo: 'B', concluida: false }];
      const resultado = mesclarListas(lista1, lista2);
      expect(resultado).not.toBe(lista1);
      expect(resultado).not.toBe(lista2);
    });
  });

  describe('extrairPropriedades', () => {
    test('deve extrair apenas id e titulo', () => {
      const tarefa = {
        id: 1,
        titulo: 'Tarefa teste',
        concluida: false,
        descricao: 'Uma descrição'
      };
      const resultado = extrairPropriedades(tarefa);
      expect(resultado).toEqual({
        id: 1,
        titulo: 'Tarefa teste'
      });
    });

    test('não deve incluir outras propriedades', () => {
      const tarefa = {
        id: 5,
        titulo: 'Teste',
        concluida: true,
        prioridade: 'alta'
      };
      const resultado = extrairPropriedades(tarefa);
      expect(resultado).not.toHaveProperty('concluida');
      expect(resultado).not.toHaveProperty('prioridade');
    });

    test('deve funcionar com tarefa mínima', () => {
      const tarefa = {
        id: 10,
        titulo: 'Simples'
      };
      const resultado = extrairPropriedades(tarefa);
      expect(resultado).toEqual({
        id: 10,
        titulo: 'Simples'
      });
    });
  });
});
