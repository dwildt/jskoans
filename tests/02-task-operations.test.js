/**
 * Testes para KOAN 02: Operações com Tarefas
 */

const {
  compararTarefas,
  tarefasPossuemMesmoStatus,
  inverterStatus,
  formatarTarefa,
  tarefaPodeSerExcluida,
  prioridadeAlta
} = require('../src/02-task-operations');

describe('Koan 02: Operações com Tarefas', () => {

  describe('compararTarefas', () => {
    test('deve retornar true quando IDs são iguais', () => {
      const tarefa1 = { id: 5, titulo: 'Tarefa A', concluida: false };
      const tarefa2 = { id: 5, titulo: 'Tarefa B', concluida: true };
      expect(compararTarefas(tarefa1, tarefa2)).toBe(true);
    });

    test('deve retornar false quando IDs são diferentes', () => {
      const tarefa1 = { id: 1, titulo: 'Tarefa A', concluida: false };
      const tarefa2 = { id: 2, titulo: 'Tarefa B', concluida: false };
      expect(compararTarefas(tarefa1, tarefa2)).toBe(false);
    });

    test('deve comparar corretamente diferentes IDs', () => {
      const tarefa1 = { id: 10, titulo: 'X', concluida: true };
      const tarefa2 = { id: 20, titulo: 'Y', concluida: true };
      const tarefa3 = { id: 10, titulo: 'Z', concluida: false };
      expect(compararTarefas(tarefa1, tarefa2)).toBe(false);
      expect(compararTarefas(tarefa1, tarefa3)).toBe(true);
    });
  });

  describe('tarefasPossuemMesmoStatus', () => {
    test('deve retornar true quando ambas estão concluídas', () => {
      const t1 = { id: 1, titulo: 'A', concluida: true };
      const t2 = { id: 2, titulo: 'B', concluida: true };
      expect(tarefasPossuemMesmoStatus(t1, t2)).toBe(true);
    });

    test('deve retornar true quando ambas estão pendentes', () => {
      const t1 = { id: 1, titulo: 'A', concluida: false };
      const t2 = { id: 2, titulo: 'B', concluida: false };
      expect(tarefasPossuemMesmoStatus(t1, t2)).toBe(true);
    });

    test('deve retornar false quando status são diferentes', () => {
      const t1 = { id: 1, titulo: 'A', concluida: true };
      const t2 = { id: 2, titulo: 'B', concluida: false };
      expect(tarefasPossuemMesmoStatus(t1, t2)).toBe(false);
    });
  });

  describe('inverterStatus', () => {
    test('deve inverter true para false', () => {
      const tarefa = { id: 1, titulo: 'Tarefa', concluida: true };
      expect(inverterStatus(tarefa)).toBe(false);
    });

    test('deve inverter false para true', () => {
      const tarefa = { id: 1, titulo: 'Tarefa', concluida: false };
      expect(inverterStatus(tarefa)).toBe(true);
    });

    test('não deve modificar a tarefa original', () => {
      const tarefa = { id: 1, titulo: 'Tarefa', concluida: true };
      inverterStatus(tarefa);
      expect(tarefa.concluida).toBe(true);
    });
  });

  describe('formatarTarefa', () => {
    test('deve formatar tarefa concluída corretamente', () => {
      const tarefa = { id: 1, titulo: 'Estudar', concluida: true };
      expect(formatarTarefa(tarefa)).toBe('[1] Estudar - Status: concluída');
    });

    test('deve formatar tarefa pendente corretamente', () => {
      const tarefa = { id: 2, titulo: 'Trabalhar', concluida: false };
      expect(formatarTarefa(tarefa)).toBe('[2] Trabalhar - Status: pendente');
    });

    test('deve funcionar com diferentes IDs e títulos', () => {
      const tarefa1 = { id: 42, titulo: 'Comprar pão', concluida: true };
      const tarefa2 = { id: 99, titulo: 'Ler livro', concluida: false };
      expect(formatarTarefa(tarefa1)).toBe('[42] Comprar pão - Status: concluída');
      expect(formatarTarefa(tarefa2)).toBe('[99] Ler livro - Status: pendente');
    });
  });

  describe('tarefaPodeSerExcluida', () => {
    test('deve retornar true para tarefa concluída', () => {
      const tarefa = { id: 1, titulo: 'Tarefa', concluida: true };
      expect(tarefaPodeSerExcluida(tarefa)).toBe(true);
    });

    test('deve retornar false para tarefa não concluída', () => {
      const tarefa = { id: 1, titulo: 'Tarefa', concluida: false };
      expect(tarefaPodeSerExcluida(tarefa)).toBe(false);
    });
  });

  describe('prioridadeAlta', () => {
    test('deve retornar true para prioridade alta', () => {
      const tarefa = { id: 1, titulo: 'Urgente', prioridade: 'alta' };
      expect(prioridadeAlta(tarefa)).toBe(true);
    });

    test('deve retornar false para prioridade média', () => {
      const tarefa = { id: 1, titulo: 'Normal', prioridade: 'media' };
      expect(prioridadeAlta(tarefa)).toBe(false);
    });

    test('deve retornar false para prioridade baixa', () => {
      const tarefa = { id: 1, titulo: 'Pode esperar', prioridade: 'baixa' };
      expect(prioridadeAlta(tarefa)).toBe(false);
    });
  });
});
