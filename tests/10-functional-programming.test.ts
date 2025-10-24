/**
 * Testes para KOAN 10: Programação Funcional
 */

import {
  TarefaImutavel,
  criarTarefa,
  marcarConcluida,
  adicionarTag,
  criarFiltro,
  filtrarConcluidas,
  compor,
  extrairTitulo,
  maiusculas,
  obterTituloMaiusculo,
  criarComId,
  contarConcluidasRecursivo,
  somarIds,
  contarCaracteresConcluidas,
  mapearTarefas,
  marcarTodasConcluidas,
  removerDuplicatas,
  filtrarPor
} from '../src/10-functional-programming';

describe('Koan 10: Programação Funcional', () => {

  describe('Funções Puras', () => {
    test('criarTarefa deve criar nova tarefa', () => {
      const tarefa = criarTarefa(1, 'Minha tarefa');
      expect(tarefa.id).toBe(1);
      expect(tarefa.titulo).toBe('Minha tarefa');
      expect(tarefa.concluida).toBe(false);
    });

    test('marcarConcluida deve retornar nova tarefa', () => {
      const original = criarTarefa(1, 'Teste');
      const marcada = marcarConcluida(original);
      
      expect(original.concluida).toBe(false);
      expect(marcada.concluida).toBe(true);
      expect(original).not.toBe(marcada);
    });

    test('adicionarTag deve retornar nova tarefa com tag', () => {
      const original = criarTarefa(1, 'Teste');
      const comTag = adicionarTag(original, 'urgente');
      
      expect(original.tags).toBeUndefined();
      expect(comTag.tags).toEqual(['urgente']);
      expect(original).not.toBe(comTag);
    });

    test('adicionarTag deve preservar tags existentes', () => {
      const t1 = criarTarefa(1, 'Teste');
      const t2 = adicionarTag(t1, 'tag1');
      const t3 = adicionarTag(t2, 'tag2');
      
      expect(t3.tags).toEqual(['tag1', 'tag2']);
      expect(t2.tags).toEqual(['tag1']);
    });
  });

  describe('Higher-Order Functions', () => {
    test('criarFiltro deve criar função de filtro', () => {
      const filtroConcluidas = criarFiltro<TarefaImutavel>('concluida', true);
      const t1 = criarTarefa(1, 'Concluída');
      const t2 = marcarConcluida(t1);
      
      expect(filtroConcluidas(t1)).toBe(false);
      expect(filtroConcluidas(t2)).toBe(true);
    });

    test('filtrarConcluidas deve usar higher-order function', () => {
      const tarefas = [
        criarTarefa(1, 'Pendente'),
        marcarConcluida(criarTarefa(2, 'Concluída')),
        criarTarefa(3, 'Outra pendente')
      ];
      
      const concluidas = filtrarConcluidas(tarefas);
      expect(concluidas.length).toBe(1);
      expect(concluidas[0].id).toBe(2);
    });

    test('mapearTarefas deve aplicar transformação', () => {
      const dobrarId = (t: TarefaImutavel) => ({ ...t, id: t.id * 2 });
      const mapear = mapearTarefas(dobrarId);
      
      const tarefas = [criarTarefa(1, 'A'), criarTarefa(2, 'B')];
      const transformadas = mapear(tarefas);
      
      expect(transformadas[0].id).toBe(2);
      expect(transformadas[1].id).toBe(4);
    });

    test('marcarTodasConcluidas deve marcar todas', () => {
      const tarefas = [
        criarTarefa(1, 'A'),
        criarTarefa(2, 'B'),
        criarTarefa(3, 'C')
      ];
      
      const marcadas = marcarTodasConcluidas(tarefas);
      expect(marcadas.every(t => t.concluida)).toBe(true);
      expect(tarefas.every(t => !t.concluida)).toBe(true);
    });
  });

  describe('Composição de Funções', () => {
    test('compor deve executar funções em ordem', () => {
      const adicionar5 = (x: number) => x + 5;
      const multiplicarPor2 = (x: number) => x * 2;
      const composta = compor(multiplicarPor2, adicionar5);
      
      expect(composta(10)).toBe(30); // (10 + 5) * 2
    });

    test('extrairTitulo deve extrair título', () => {
      const tarefa = criarTarefa(1, 'Minha Tarefa');
      expect(extrairTitulo(tarefa)).toBe('Minha Tarefa');
    });

    test('maiusculas deve converter para maiúsculas', () => {
      expect(maiusculas('teste')).toBe('TESTE');
    });

    test('obterTituloMaiusculo deve compor funções', () => {
      const tarefa = criarTarefa(1, 'teste de composição');
      expect(obterTituloMaiusculo(tarefa)).toBe('TESTE DE COMPOSIÇÃO');
    });
  });

  describe('Currying', () => {
    test('criarComId deve criar função especializada', () => {
      const criarComId10 = criarComId(10);
      const tarefa = criarComId10('Tarefa com ID fixo');
      
      expect(tarefa.id).toBe(10);
      expect(tarefa.titulo).toBe('Tarefa com ID fixo');
    });

    test('criarComId deve criar múltiplas funções', () => {
      const criar1 = criarComId(1);
      const criar2 = criarComId(2);
      
      expect(criar1('A').id).toBe(1);
      expect(criar2('B').id).toBe(2);
    });

    test('filtrarPor deve usar currying triplo', () => {
      const filtrarPorConcluida = filtrarPor<TarefaImutavel>('concluida');
      const filtrarConcluidas = filtrarPorConcluida(true);
      
      const tarefas = [
        criarTarefa(1, 'Pendente'),
        marcarConcluida(criarTarefa(2, 'Concluída'))
      ];
      
      const resultado = filtrarConcluidas(tarefas);
      expect(resultado.length).toBe(1);
      expect(resultado[0].id).toBe(2);
    });
  });

  describe('Recursão', () => {
    test('contarConcluidasRecursivo deve contar corretamente', () => {
      const tarefas = [
        criarTarefa(1, 'A'),
        marcarConcluida(criarTarefa(2, 'B')),
        criarTarefa(3, 'C'),
        marcarConcluida(criarTarefa(4, 'D'))
      ];
      
      expect(contarConcluidasRecursivo(tarefas)).toBe(2);
    });

    test('contarConcluidasRecursivo deve retornar 0 para array vazio', () => {
      expect(contarConcluidasRecursivo([])).toBe(0);
    });

    test('contarConcluidasRecursivo deve retornar total se todas concluídas', () => {
      const tarefas = [
        marcarConcluida(criarTarefa(1, 'A')),
        marcarConcluida(criarTarefa(2, 'B')),
        marcarConcluida(criarTarefa(3, 'C'))
      ];
      
      expect(contarConcluidasRecursivo(tarefas)).toBe(3);
    });
  });

  describe('Reduce', () => {
    test('somarIds deve somar todos os IDs', () => {
      const tarefas = [
        criarTarefa(1, 'A'),
        criarTarefa(5, 'B'),
        criarTarefa(10, 'C')
      ];
      
      expect(somarIds(tarefas)).toBe(16);
    });

    test('somarIds deve retornar 0 para array vazio', () => {
      expect(somarIds([])).toBe(0);
    });
  });

  describe('Pipeline Funcional', () => {
    test('contarCaracteresConcluidas deve usar pipeline', () => {
      const tarefas = [
        marcarConcluida(criarTarefa(1, 'ABC')),    // 3 chars
        criarTarefa(2, 'DEFGH'),                   // não conta (não concluída)
        marcarConcluida(criarTarefa(3, 'IJKLM'))   // 5 chars
      ];
      
      expect(contarCaracteresConcluidas(tarefas)).toBe(8); // 3 + 5
    });

    test('contarCaracteresConcluidas deve retornar 0 se nenhuma concluída', () => {
      const tarefas = [
        criarTarefa(1, 'ABC'),
        criarTarefa(2, 'DEF')
      ];
      
      expect(contarCaracteresConcluidas(tarefas)).toBe(0);
    });

    test('contarCaracteresConcluidas deve retornar 0 para array vazio', () => {
      expect(contarCaracteresConcluidas([])).toBe(0);
    });
  });

  describe('Imutabilidade', () => {
    test('operações não devem modificar tarefas originais', () => {
      const original = criarTarefa(1, 'Original');
      const marcada = marcarConcluida(original);
      const comTag = adicionarTag(marcada, 'tag');
      
      expect(original.concluida).toBe(false);
      expect(original.tags).toBeUndefined();
      expect(marcada.concluida).toBe(true);
      expect(marcada.tags).toBeUndefined();
      expect(comTag.tags).toEqual(['tag']);
    });

    test('removerDuplicatas deve preservar originais', () => {
      const t1 = criarTarefa(1, 'A');
      const t2 = criarTarefa(2, 'B');
      const t3 = criarTarefa(1, 'C'); // ID duplicado
      
      const tarefas = [t1, t2, t3];
      const unicas = removerDuplicatas(tarefas);
      
      expect(tarefas.length).toBe(3);
      expect(unicas.length).toBe(2);
      expect(unicas[0].titulo).toBe('A');
      expect(unicas[1].titulo).toBe('B');
    });

    test('removerDuplicatas deve funcionar sem duplicatas', () => {
      const tarefas = [
        criarTarefa(1, 'A'),
        criarTarefa(2, 'B'),
        criarTarefa(3, 'C')
      ];
      
      const unicas = removerDuplicatas(tarefas);
      expect(unicas.length).toBe(3);
    });
  });
});
