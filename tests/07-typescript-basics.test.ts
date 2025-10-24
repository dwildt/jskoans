/**
 * Testes para KOAN 07: TypeScript - Tipos Básicos
 */

import {
  Tarefa,
  StatusTarefa,
  TarefaComStatus,
  ConfiguracaoTarefa,
  criarTarefaTipada,
  adicionarPrioridade,
  criarTarefaComStatus,
  atualizarStatus,
  isStatusValido,
  criarDaConfiguracao
} from '../src/07-typescript-basics';

describe('Koan 07: TypeScript - Tipos Básicos', () => {

  describe('criarTarefaTipada', () => {
    test('deve criar tarefa com tipos corretos', () => {
      const tarefa = criarTarefaTipada(1, 'Estudar TypeScript');
      expect(typeof tarefa.id).toBe('number');
      expect(typeof tarefa.titulo).toBe('string');
      expect(typeof tarefa.concluida).toBe('boolean');
    });

    test('deve usar os parâmetros fornecidos', () => {
      const tarefa = criarTarefaTipada(42, 'Minha tarefa');
      expect(tarefa.id).toBe(42);
      expect(tarefa.titulo).toBe('Minha tarefa');
      expect(tarefa.concluida).toBe(false);
    });

    test('deve criar tarefa sem prioridade inicialmente', () => {
      const tarefa = criarTarefaTipada(1, 'Teste');
      expect(tarefa.prioridade).toBeUndefined();
    });
  });

  describe('adicionarPrioridade', () => {
    test('deve adicionar prioridade à tarefa', () => {
      const tarefa: Tarefa = { id: 1, titulo: 'Teste', concluida: false };
      const resultado = adicionarPrioridade(tarefa, 'alta');
      expect(resultado.prioridade).toBe('alta');
    });

    test('deve manter outras propriedades', () => {
      const tarefa: Tarefa = { id: 5, titulo: 'Importante', concluida: true };
      const resultado = adicionarPrioridade(tarefa, 'media');
      expect(resultado.id).toBe(5);
      expect(resultado.titulo).toBe('Importante');
      expect(resultado.concluida).toBe(true);
    });

    test('não deve modificar tarefa original', () => {
      const tarefa: Tarefa = { id: 1, titulo: 'Original', concluida: false };
      const resultado = adicionarPrioridade(tarefa, 'baixa');
      expect(tarefa.prioridade).toBeUndefined();
      expect(resultado.prioridade).toBe('baixa');
    });
  });

  describe('criarTarefaComStatus', () => {
    test('deve criar tarefa com status pendente', () => {
      const tarefa = criarTarefaComStatus(1, 'Nova tarefa');
      expect(tarefa.status).toBe('pendente');
    });

    test('deve ter todas as propriedades necessárias', () => {
      const tarefa = criarTarefaComStatus(10, 'Tarefa teste');
      expect(tarefa).toHaveProperty('id');
      expect(tarefa).toHaveProperty('titulo');
      expect(tarefa).toHaveProperty('status');
      expect(tarefa.id).toBe(10);
      expect(tarefa.titulo).toBe('Tarefa teste');
    });
  });

  describe('atualizarStatus', () => {
    test('deve atualizar status para em_progresso', () => {
      const tarefa: TarefaComStatus = { id: 1, titulo: 'Teste', status: 'pendente' };
      const resultado = atualizarStatus(tarefa, 'em_progresso');
      expect(resultado.status).toBe('em_progresso');
    });

    test('deve atualizar status para concluida', () => {
      const tarefa: TarefaComStatus = { id: 2, titulo: 'Em andamento', status: 'em_progresso' };
      const resultado = atualizarStatus(tarefa, 'concluida');
      expect(resultado.status).toBe('concluida');
    });

    test('não deve modificar tarefa original', () => {
      const tarefa: TarefaComStatus = { id: 1, titulo: 'Original', status: 'pendente' };
      const resultado = atualizarStatus(tarefa, 'concluida');
      expect(tarefa.status).toBe('pendente');
      expect(resultado.status).toBe('concluida');
    });

    test('deve manter outras propriedades', () => {
      const tarefa: TarefaComStatus = { id: 7, titulo: 'Importante', status: 'pendente' };
      const resultado = atualizarStatus(tarefa, 'em_progresso');
      expect(resultado.id).toBe(7);
      expect(resultado.titulo).toBe('Importante');
    });
  });

  describe('isStatusValido', () => {
    test('deve validar status pendente', () => {
      expect(isStatusValido('pendente')).toBe(true);
    });

    test('deve validar status em_progresso', () => {
      expect(isStatusValido('em_progresso')).toBe(true);
    });

    test('deve validar status concluida', () => {
      expect(isStatusValido('concluida')).toBe(true);
    });

    test('deve rejeitar status inválido', () => {
      expect(isStatusValido('invalido')).toBe(false);
      expect(isStatusValido('cancelada')).toBe(false);
      expect(isStatusValido('')).toBe(false);
    });
  });

  describe('criarDaConfiguracao', () => {
    test('deve criar tarefa com título da config', () => {
      const config: ConfiguracaoTarefa = { titulo: 'Minha tarefa' };
      const tarefa = criarDaConfiguracao(config);
      expect(tarefa.titulo).toBe('Minha tarefa');
    });

    test('deve criar tarefa com prioridade da config', () => {
      const config: ConfiguracaoTarefa = {
        titulo: 'Tarefa urgente',
        prioridade: 'alta'
      };
      const tarefa = criarDaConfiguracao(config);
      expect(tarefa.prioridade).toBe('alta');
    });

    test('deve criar tarefa sem prioridade se não fornecida', () => {
      const config: ConfiguracaoTarefa = { titulo: 'Simples' };
      const tarefa = criarDaConfiguracao(config);
      expect(tarefa.prioridade).toBeUndefined();
    });

    test('deve gerar ID automaticamente', () => {
      const config: ConfiguracaoTarefa = { titulo: 'Auto ID' };
      const tarefa = criarDaConfiguracao(config);
      expect(typeof tarefa.id).toBe('number');
      expect(tarefa.id).toBeGreaterThanOrEqual(0);
      expect(tarefa.id).toBeLessThan(1000);
    });

    test('deve marcar como não concluída', () => {
      const config: ConfiguracaoTarefa = { titulo: 'Nova' };
      const tarefa = criarDaConfiguracao(config);
      expect(tarefa.concluida).toBe(false);
    });

    test('deve aceitar config com descrição', () => {
      const config: ConfiguracaoTarefa = {
        titulo: 'Com descrição',
        descricao: 'Descrição detalhada'
      };
      const tarefa = criarDaConfiguracao(config);
      expect(tarefa.titulo).toBe('Com descrição');
    });

    test('deve aceitar config com tags', () => {
      const config: ConfiguracaoTarefa = {
        titulo: 'Com tags',
        tags: ['urgente', 'importante']
      };
      const tarefa = criarDaConfiguracao(config);
      expect(tarefa.titulo).toBe('Com tags');
    });
  });
});
