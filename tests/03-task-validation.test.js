/**
 * Testes para KOAN 03: Validações
 */

const {
  tituloValido,
  idValido,
  tarefaValida,
  podeEditar,
  descricaoOpcionalValida,
  validarCamposObrigatorios
} = require('../src/03-task-validation');

describe('Koan 03: Validações', () => {

  describe('tituloValido', () => {
    test('deve retornar true para título válido', () => {
      expect(tituloValido('Estudar JavaScript')).toBe(true);
      expect(tituloValido('ABC')).toBe(true);
    });

    test('deve retornar false para título muito curto', () => {
      expect(tituloValido('AB')).toBe(false);
      expect(tituloValido('X')).toBe(false);
    });

    test('deve retornar false para título vazio', () => {
      expect(tituloValido('')).toBe(false);
    });

    test('deve retornar false para título null ou undefined', () => {
      expect(tituloValido(null)).toBe(false);
      expect(tituloValido(undefined)).toBe(false);
    });
  });

  describe('idValido', () => {
    test('deve retornar true para ID válido', () => {
      expect(idValido(1)).toBe(true);
      expect(idValido(42)).toBe(true);
      expect(idValido(1000)).toBe(true);
    });

    test('deve retornar false para ID zero ou negativo', () => {
      expect(idValido(0)).toBe(false);
      expect(idValido(-1)).toBe(false);
      expect(idValido(-100)).toBe(false);
    });

    test('deve retornar false para ID não inteiro', () => {
      expect(idValido(1.5)).toBe(false);
      expect(idValido(3.14)).toBe(false);
    });

    test('deve retornar false para ID não numérico', () => {
      expect(idValido('1')).toBe(false);
      expect(idValido(null)).toBe(false);
      expect(idValido(undefined)).toBe(false);
    });
  });

  describe('tarefaValida', () => {
    test('deve retornar true para tarefa válida', () => {
      const tarefa = {
        id: 1,
        titulo: 'Tarefa válida',
        concluida: false
      };
      expect(tarefaValida(tarefa)).toBe(true);
    });

    test('deve retornar false para ID inválido', () => {
      const tarefa = {
        id: -1,
        titulo: 'Tarefa',
        concluida: false
      };
      expect(tarefaValida(tarefa)).toBe(false);
    });

    test('deve retornar false para título inválido', () => {
      const tarefa = {
        id: 1,
        titulo: 'AB',
        concluida: false
      };
      expect(tarefaValida(tarefa)).toBe(false);
    });

    test('deve retornar false para concluida não boolean', () => {
      const tarefa = {
        id: 1,
        titulo: 'Tarefa válida',
        concluida: 'sim'
      };
      expect(tarefaValida(tarefa)).toBe(false);
    });
  });

  describe('podeEditar', () => {
    test('deve retornar true para tarefa não concluída', () => {
      const tarefa = { id: 1, titulo: 'Tarefa', concluida: false };
      expect(podeEditar(tarefa)).toBe(true);
    });

    test('deve retornar false para tarefa concluída', () => {
      const tarefa = { id: 1, titulo: 'Tarefa', concluida: true };
      expect(podeEditar(tarefa)).toBe(false);
    });
  });

  describe('descricaoOpcionalValida', () => {
    test('deve retornar true para null', () => {
      expect(descricaoOpcionalValida(null)).toBe(true);
    });

    test('deve retornar true para undefined', () => {
      expect(descricaoOpcionalValida(undefined)).toBe(true);
    });

    test('deve retornar true para string com 10+ caracteres', () => {
      expect(descricaoOpcionalValida('Descrição válida completa')).toBe(true);
      expect(descricaoOpcionalValida('Exatament10')).toBe(true);
    });

    test('deve retornar false para string com menos de 10 caracteres', () => {
      expect(descricaoOpcionalValida('Pequena')).toBe(false);
      expect(descricaoOpcionalValida('123456789')).toBe(false);
    });

    test('deve retornar false para string vazia', () => {
      expect(descricaoOpcionalValida('')).toBe(false);
    });
  });

  describe('validarCamposObrigatorios', () => {
    test('deve retornar array vazio para tarefa completa', () => {
      const tarefa = {
        id: 1,
        titulo: 'Tarefa completa',
        concluida: false
      };
      expect(validarCamposObrigatorios(tarefa)).toEqual([]);
    });

    test('deve identificar quando falta id', () => {
      const tarefa = {
        titulo: 'Tarefa sem id',
        concluida: false
      };
      const faltantes = validarCamposObrigatorios(tarefa);
      expect(faltantes).toContain('id');
    });

    test('deve identificar quando falta titulo', () => {
      const tarefa = {
        id: 1,
        concluida: false
      };
      const faltantes = validarCamposObrigatorios(tarefa);
      expect(faltantes).toContain('titulo');
    });

    test('deve identificar quando falta concluida', () => {
      const tarefa = {
        id: 1,
        titulo: 'Tarefa'
      };
      const faltantes = validarCamposObrigatorios(tarefa);
      expect(faltantes).toContain('concluida');
    });

    test('deve identificar múltiplos campos faltantes', () => {
      const tarefa = {};
      const faltantes = validarCamposObrigatorios(tarefa);
      expect(faltantes).toHaveLength(3);
      expect(faltantes).toContain('id');
      expect(faltantes).toContain('titulo');
      expect(faltantes).toContain('concluida');
    });

    test('deve considerar 0 como id inválido', () => {
      const tarefa = {
        id: 0,
        titulo: 'Tarefa',
        concluida: false
      };
      const faltantes = validarCamposObrigatorios(tarefa);
      expect(faltantes).toContain('id');
    });

    test('deve considerar string vazia como titulo inválido', () => {
      const tarefa = {
        id: 1,
        titulo: '',
        concluida: false
      };
      const faltantes = validarCamposObrigatorios(tarefa);
      expect(faltantes).toContain('titulo');
    });
  });
});
