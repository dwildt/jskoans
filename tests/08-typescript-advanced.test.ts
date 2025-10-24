/**
 * Testes para KOAN 08: TypeScript - Tipos Avançados
 */

import {
  ApiResponse,
  ResultadoBusca,
  TarefaBase,
  Detalhes,
  TarefaCompleta,
  TarefaEditavel,
  TarefaParcial,
  TarefaResumo,
  TarefaSemId,
  Identificador,
  criarResposta,
  buscarTarefa,
  criarTarefaCompleta,
  isTarefaCompleta,
  atualizarParcialmente,
  criarResumo,
  prepararNovaTarefa,
  primeiro,
  buscarPorId
} from '../src/08-typescript-advanced';

describe('Koan 08: TypeScript - Tipos Avançados', () => {

  describe('criarResposta (Generics)', () => {
    test('deve criar resposta com string', () => {
      const resposta = criarResposta<string>('Sucesso');
      expect(resposta.data).toBe('Sucesso');
      expect(resposta.success).toBe(true);
    });

    test('deve criar resposta com número', () => {
      const resposta = criarResposta<number>(42);
      expect(resposta.data).toBe(42);
      expect(resposta.success).toBe(true);
    });

    test('deve criar resposta com objeto', () => {
      const tarefa = { id: 1, titulo: 'Teste' };
      const resposta = criarResposta(tarefa);
      expect(resposta.data).toEqual(tarefa);
      expect(resposta.success).toBe(true);
    });

    test('deve criar resposta com array', () => {
      const lista = [1, 2, 3];
      const resposta = criarResposta(lista);
      expect(resposta.data).toEqual(lista);
      expect(resposta.success).toBe(true);
    });
  });

  describe('buscarTarefa (Union Types)', () => {
    const tarefas: TarefaBase[] = [
      { id: 1, titulo: 'Tarefa 1' },
      { id: 2, titulo: 'Tarefa 2' },
      { id: 3, titulo: 'Tarefa 3' }
    ];

    test('deve encontrar tarefa existente', () => {
      const resultado = buscarTarefa(tarefas, 2);
      expect(resultado).not.toBeNull();
      expect(resultado?.id).toBe(2);
    });

    test('deve retornar null para ID inexistente', () => {
      const resultado = buscarTarefa(tarefas, 999);
      expect(resultado).toBeNull();
    });

    test('deve retornar tarefa correta', () => {
      const resultado = buscarTarefa(tarefas, 1);
      expect(resultado).toEqual({ id: 1, titulo: 'Tarefa 1' });
    });
  });

  describe('criarTarefaCompleta (Intersection Types)', () => {
    test('deve combinar base e detalhes', () => {
      const base: TarefaBase = { id: 1, titulo: 'Teste' };
      const detalhes: Detalhes = {
        descricao: 'Descrição teste',
        criadaEm: new Date()
      };
      const completa = criarTarefaCompleta(base, detalhes);
      
      expect(completa.id).toBe(1);
      expect(completa.titulo).toBe('Teste');
      expect(completa.descricao).toBe('Descrição teste');
      expect(completa.criadaEm).toBeInstanceOf(Date);
    });

    test('deve ter todas as propriedades', () => {
      const base: TarefaBase = { id: 5, titulo: 'Completa' };
      const detalhes: Detalhes = {
        descricao: 'Detalhes',
        criadaEm: new Date('2024-01-01')
      };
      const completa = criarTarefaCompleta(base, detalhes);
      
      expect(completa).toHaveProperty('id');
      expect(completa).toHaveProperty('titulo');
      expect(completa).toHaveProperty('descricao');
      expect(completa).toHaveProperty('criadaEm');
    });
  });

  describe('isTarefaCompleta (Type Guards)', () => {
    test('deve identificar tarefa completa', () => {
      const completa: TarefaCompleta = {
        id: 1,
        titulo: 'Teste',
        descricao: 'Desc',
        criadaEm: new Date()
      };
      expect(isTarefaCompleta(completa)).toBe(true);
    });

    test('deve identificar tarefa base', () => {
      const base: TarefaBase = { id: 1, titulo: 'Teste' };
      expect(isTarefaCompleta(base)).toBe(false);
    });
  });

  describe('atualizarParcialmente (Partial)', () => {
    test('deve atualizar apenas titulo', () => {
      const tarefa: TarefaEditavel = {
        id: 1,
        titulo: 'Original',
        descricao: 'Desc original',
        concluida: false
      };
      const atualizada = atualizarParcialmente(tarefa, { titulo: 'Novo título' });
      
      expect(atualizada.titulo).toBe('Novo título');
      expect(atualizada.descricao).toBe('Desc original');
      expect(atualizada.id).toBe(1);
    });

    test('deve atualizar múltiplos campos', () => {
      const tarefa: TarefaEditavel = {
        id: 2,
        titulo: 'Teste',
        descricao: 'Desc',
        concluida: false
      };
      const atualizada = atualizarParcialmente(tarefa, {
        titulo: 'Atualizado',
        concluida: true
      });
      
      expect(atualizada.titulo).toBe('Atualizado');
      expect(atualizada.concluida).toBe(true);
      expect(atualizada.id).toBe(2);
    });

    test('deve aceitar atualização vazia', () => {
      const tarefa: TarefaEditavel = {
        id: 3,
        titulo: 'Teste',
        descricao: 'Desc',
        concluida: false
      };
      const atualizada = atualizarParcialmente(tarefa, {});
      expect(atualizada).toEqual(tarefa);
    });
  });

  describe('criarResumo (Pick)', () => {
    test('deve conter apenas id e titulo', () => {
      const tarefa: TarefaEditavel = {
        id: 1,
        titulo: 'Teste',
        descricao: 'Descrição longa',
        concluida: true
      };
      const resumo = criarResumo(tarefa);
      
      expect(resumo).toHaveProperty('id');
      expect(resumo).toHaveProperty('titulo');
      expect(resumo).not.toHaveProperty('descricao');
      expect(resumo).not.toHaveProperty('concluida');
    });

    test('deve ter valores corretos', () => {
      const tarefa: TarefaEditavel = {
        id: 5,
        titulo: 'Minha tarefa',
        descricao: 'Desc',
        concluida: false
      };
      const resumo = criarResumo(tarefa);
      
      expect(resumo.id).toBe(5);
      expect(resumo.titulo).toBe('Minha tarefa');
    });
  });

  describe('prepararNovaTarefa (Omit)', () => {
    test('não deve conter campo id', () => {
      const dados: TarefaSemId = {
        titulo: 'Nova tarefa',
        descricao: 'Descrição',
        concluida: false
      };
      const preparada = prepararNovaTarefa(dados);
      
      expect(preparada).not.toHaveProperty('id');
      expect(preparada.titulo).toBe('Nova tarefa');
    });

    test('deve ter todos os outros campos', () => {
      const dados: TarefaSemId = {
        titulo: 'Teste',
        descricao: 'Desc',
        concluida: true
      };
      const preparada = prepararNovaTarefa(dados);
      
      expect(preparada).toHaveProperty('titulo');
      expect(preparada).toHaveProperty('descricao');
      expect(preparada).toHaveProperty('concluida');
    });
  });

  describe('primeiro (Generics)', () => {
    test('deve retornar primeiro elemento de array de números', () => {
      expect(primeiro([1, 2, 3])).toBe(1);
    });

    test('deve retornar primeiro elemento de array de strings', () => {
      expect(primeiro(['a', 'b', 'c'])).toBe('a');
    });

    test('deve retornar undefined para array vazio', () => {
      expect(primeiro([])).toBeUndefined();
    });

    test('deve retornar primeiro objeto de array de objetos', () => {
      const obj = { id: 1, nome: 'Teste' };
      expect(primeiro([obj, { id: 2, nome: 'Outro' }])).toBe(obj);
    });
  });

  describe('buscarPorId (Union Types)', () => {
    const tarefas: TarefaBase[] = [
      { id: 1, titulo: 'Tarefa 1' },
      { id: 2, titulo: 'Tarefa 2' },
      { id: 10, titulo: 'Tarefa 10' }
    ];

    test('deve buscar por ID numérico', () => {
      const resultado = buscarPorId(tarefas, 2);
      expect(resultado).toEqual({ id: 2, titulo: 'Tarefa 2' });
    });

    test('deve buscar por ID string', () => {
      const resultado = buscarPorId(tarefas, '10');
      expect(resultado).toEqual({ id: 10, titulo: 'Tarefa 10' });
    });

    test('deve retornar undefined se não encontrar', () => {
      expect(buscarPorId(tarefas, 999)).toBeUndefined();
      expect(buscarPorId(tarefas, '999')).toBeUndefined();
    });

    test('deve funcionar com string representando número', () => {
      const resultado = buscarPorId(tarefas, '1');
      expect(resultado).toEqual({ id: 1, titulo: 'Tarefa 1' });
    });
  });
});
