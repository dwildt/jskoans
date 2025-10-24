/**
 * Testes para KOAN 09: TypeScript - Programação Orientada a Objetos
 */

import {
  Tarefa,
  TarefaPrioritaria,
  GerenciadorBase,
  GerenciadorTarefas,
  TarefaUtils,
  Serializavel,
  TarefaSerializavel,
  ContadorTarefas
} from '../src/09-typescript-oop';

describe('Koan 09: TypeScript - Programação Orientada a Objetos', () => {

  describe('Tarefa (Classe Básica)', () => {
    test('deve criar tarefa com id e titulo', () => {
      const tarefa = new Tarefa(1, 'Minha tarefa');
      expect(tarefa.id).toBe(1);
      expect(tarefa.titulo).toBe('Minha tarefa');
    });

    test('deve iniciar como não concluída', () => {
      const tarefa = new Tarefa(1, 'Teste');
      expect(tarefa.concluida).toBe(false);
    });

    test('deve marcar como concluída', () => {
      const tarefa = new Tarefa(1, 'Teste');
      tarefa.marcarConcluida();
      expect(tarefa.concluida).toBe(true);
    });

    test('deve descrever tarefa corretamente', () => {
      const tarefa = new Tarefa(5, 'Estudar TypeScript');
      expect(tarefa.descrever()).toBe('Tarefa #5: Estudar TypeScript');
    });
  });

  describe('TarefaPrioritaria (Herança)', () => {
    test('deve criar tarefa com prioridade', () => {
      const tarefa = new TarefaPrioritaria(1, 'Urgente', 10);
      expect(tarefa.id).toBe(1);
      expect(tarefa.titulo).toBe('Urgente');
      expect(tarefa.prioridade).toBe(10);
    });

    test('deve descrever com prioridade', () => {
      const tarefa = new TarefaPrioritaria(2, 'Importante', 8);
      expect(tarefa.descrever()).toBe('Tarefa #2: Importante (Prioridade: 8)');
    });

    test('deve identificar alta prioridade', () => {
      const alta = new TarefaPrioritaria(1, 'Alta', 9);
      const baixa = new TarefaPrioritaria(2, 'Baixa', 5);
      
      expect(alta.isAltaPrioridade()).toBe(true);
      expect(baixa.isAltaPrioridade()).toBe(false);
    });

    test('deve herdar método marcarConcluida', () => {
      const tarefa = new TarefaPrioritaria(1, 'Teste', 7);
      expect(tarefa.concluida).toBe(false);
      tarefa.marcarConcluida();
      expect(tarefa.concluida).toBe(true);
    });
  });

  describe('GerenciadorTarefas (Classe Abstrata)', () => {
    let gerenciador: GerenciadorTarefas;

    beforeEach(() => {
      gerenciador = new GerenciadorTarefas();
    });

    test('deve iniciar vazio', () => {
      expect(gerenciador.total()).toBe(0);
    });

    test('deve adicionar tarefas', () => {
      const tarefa = new Tarefa(1, 'Primeira');
      gerenciador.adicionar(tarefa);
      expect(gerenciador.total()).toBe(1);
    });

    test('deve listar todas as tarefas', () => {
      gerenciador.adicionar(new Tarefa(1, 'Primeira'));
      gerenciador.adicionar(new Tarefa(2, 'Segunda'));
      
      const lista = gerenciador.listar();
      expect(lista.length).toBe(2);
      expect(lista[0].titulo).toBe('Primeira');
    });

    test('deve listar apenas concluídas', () => {
      const t1 = new Tarefa(1, 'Não concluída');
      const t2 = new Tarefa(2, 'Concluída');
      t2.marcarConcluida();
      
      gerenciador.adicionar(t1);
      gerenciador.adicionar(t2);
      
      const concluidas = gerenciador.listarConcluidas();
      expect(concluidas.length).toBe(1);
      expect(concluidas[0].titulo).toBe('Concluída');
    });

    test('deve buscar tarefa por ID', () => {
      gerenciador.adicionar(new Tarefa(1, 'Primeira'));
      gerenciador.adicionar(new Tarefa(5, 'Quinta'));
      
      const encontrada = gerenciador.buscarPorId(5);
      expect(encontrada).toBeDefined();
      expect(encontrada?.titulo).toBe('Quinta');
    });

    test('deve retornar undefined para ID inexistente', () => {
      gerenciador.adicionar(new Tarefa(1, 'Teste'));
      expect(gerenciador.buscarPorId(999)).toBeUndefined();
    });
  });

  describe('TarefaUtils (Métodos Estáticos)', () => {
    test('deve gerar ID único', () => {
      const id1 = TarefaUtils.gerarId();
      const id2 = TarefaUtils.gerarId();
      
      expect(typeof id1).toBe('number');
      expect(typeof id2).toBe('number');
      expect(id1).toBeGreaterThan(0);
      expect(id1).toBeLessThanOrEqual(10000);
    });

    test('deve validar título válido', () => {
      expect(TarefaUtils.validarTitulo('Tarefa válida')).toBe(true);
      expect(TarefaUtils.validarTitulo('Test')).toBe(true);
    });

    test('deve rejeitar título inválido', () => {
      expect(TarefaUtils.validarTitulo('abc')).toBe(false);
      expect(TarefaUtils.validarTitulo('ab')).toBe(false);
      expect(TarefaUtils.validarTitulo('')).toBe(false);
    });

    test('deve criar tarefa com ID automático', () => {
      const tarefa = TarefaUtils.criarComIdAuto('Nova tarefa');
      
      expect(tarefa).toBeInstanceOf(Tarefa);
      expect(tarefa.titulo).toBe('Nova tarefa');
      expect(typeof tarefa.id).toBe('number');
      expect(tarefa.id).toBeGreaterThan(0);
    });
  });

  describe('TarefaSerializavel (Interfaces)', () => {
    test('deve implementar interface Serializavel', () => {
      const tarefa = new TarefaSerializavel(1, 'Teste');
      expect(typeof tarefa.toJSON).toBe('function');
    });

    test('deve serializar para JSON', () => {
      const tarefa = new TarefaSerializavel(5, 'Serializável');
      const json = tarefa.toJSON();
      
      expect(json).toHaveProperty('id');
      expect(json).toHaveProperty('titulo');
      expect(json).toHaveProperty('concluida');
    });

    test('deve ter valores corretos no JSON', () => {
      const tarefa = new TarefaSerializavel(10, 'Minha tarefa');
      tarefa.marcarConcluida();
      const json = tarefa.toJSON() as any;
      
      expect(json.id).toBe(10);
      expect(json.titulo).toBe('Minha tarefa');
      expect(json.concluida).toBe(true);
    });

    test('deve funcionar com JSON.stringify', () => {
      const tarefa = new TarefaSerializavel(1, 'Teste');
      const jsonString = JSON.stringify(tarefa);
      const parsed = JSON.parse(jsonString);
      
      expect(parsed.id).toBe(1);
      expect(parsed.titulo).toBe('Teste');
    });
  });

  describe('ContadorTarefas (Propriedades Estáticas)', () => {
    beforeEach(() => {
      ContadorTarefas.resetar();
    });

    test('deve iniciar em zero', () => {
      expect(ContadorTarefas.obterTotal()).toBe(0);
    });

    test('deve incrementar contador', () => {
      ContadorTarefas.incrementar();
      expect(ContadorTarefas.obterTotal()).toBe(1);
    });

    test('deve incrementar múltiplas vezes', () => {
      ContadorTarefas.incrementar();
      ContadorTarefas.incrementar();
      ContadorTarefas.incrementar();
      expect(ContadorTarefas.obterTotal()).toBe(3);
    });

    test('deve resetar contador', () => {
      ContadorTarefas.incrementar();
      ContadorTarefas.incrementar();
      ContadorTarefas.resetar();
      expect(ContadorTarefas.obterTotal()).toBe(0);
    });

    test('deve manter estado entre instâncias', () => {
      ContadorTarefas.incrementar();
      ContadorTarefas.incrementar();
      
      // Contador é estático, então é compartilhado
      expect(ContadorTarefas.obterTotal()).toBe(2);
    });
  });
});
