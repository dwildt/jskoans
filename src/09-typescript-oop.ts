/**
 * KOAN 09: TypeScript - Programação Orientada a Objetos
 *
 * Neste koan você aprenderá sobre:
 * - Classes
 * - Construtores
 * - Modificadores de acesso (public, private, protected)
 * - Herança (extends)
 * - Classes abstratas
 * - Métodos estáticos
 *
 * Substitua cada ____ pelo código correto para fazer os testes passarem.
 */

/**
 * Classe básica para representar uma Tarefa
 */
class Tarefa {
  // Dica: declare propriedades com modificadores de acesso
  public id: ____;
  public titulo: ____;
  private _concluida: ____;

  constructor(id: ____, titulo: ____) {
    this.id = ____;
    this.titulo = ____;
    this._concluida = ____;  // Dica: inicialize como false
  }

  /**
   * Getter para verificar se está concluída
   */
  get concluida(): ____ {
    // Dica: retorne _concluida
    return ____;
  }

  /**
   * Marca tarefa como concluída
   */
  marcarConcluida(): void {
    // Dica: defina _concluida como true
    ____ = true;
  }

  /**
   * Retorna descrição da tarefa
   */
  descrever(): string {
    // Dica: retorne string no formato "Tarefa #id: titulo"
    return ____;
  }
}

/**
 * Classe para tarefa com prioridade
 */
class TarefaPrioritaria extends Tarefa {
  // Dica: adicione propriedade pública prioridade do tipo number
  public ____: ____;

  constructor(id: number, titulo: string, prioridade: ____) {
    // Dica: chame super com id e titulo
    ____;
    this.prioridade = ____;
  }

  /**
   * Override do método descrever
   */
  descrever(): string {
    // Dica: retorne "Tarefa #id: titulo (Prioridade: prioridade)"
    return ____;
  }

  /**
   * Verifica se é alta prioridade
   */
  isAltaPrioridade(): boolean {
    // Dica: retorne true se prioridade >= 8
    return ____;
  }
}

/**
 * Classe abstrata para gerenciador de tarefas
 */
abstract class GerenciadorBase {
  protected tarefas: ____[];  // Dica: array de Tarefa

  constructor() {
    this.tarefas = ____;  // Dica: inicialize como array vazio
  }

  /**
   * Adiciona uma tarefa
   */
  adicionar(tarefa: ____): void {
    // Dica: adicione tarefa ao array tarefas
    ____;
  }

  /**
   * Retorna total de tarefas
   */
  total(): number {
    // Dica: retorne length do array tarefas
    return ____;
  }

  /**
   * Método abstrato para listar tarefas (deve ser implementado pelas subclasses)
   */
  abstract listar(): ____[];  // Dica: retorna array de Tarefa
}

/**
 * Implementação concreta do gerenciador
 */
class GerenciadorTarefas extends GerenciadorBase {
  /**
   * Lista todas as tarefas
   */
  listar(): Tarefa[] {
    // Dica: retorne o array de tarefas
    return ____;
  }

  /**
   * Lista apenas tarefas concluídas
   */
  listarConcluidas(): Tarefa[] {
    // Dica: use filter para retornar apenas tarefas com concluida === true
    return ____;
  }

  /**
   * Busca tarefa por ID
   */
  buscarPorId(id: number): Tarefa | undefined {
    // Dica: use find para buscar tarefa com o id correspondente
    return ____;
  }
}

/**
 * Classe com métodos estáticos para utilitários
 */
class TarefaUtils {
  /**
   * Cria ID único
   */
  static gerarId(): number {
    // Dica: retorne número aleatório entre 1 e 10000
    return ____;
  }

  /**
   * Valida título de tarefa
   */
  static validarTitulo(titulo: string): boolean {
    // Dica: retorne true se titulo tem mais de 3 caracteres
    return ____;
  }

  /**
   * Cria tarefa com ID automático
   */
  static criarComIdAuto(titulo: string): Tarefa {
    // Dica: crie nova Tarefa usando gerarId() e o titulo
    return ____;
  }
}

/**
 * Interface para objetos que podem ser serializados
 */
interface Serializavel {
  toJSON(): object;
}

/**
 * Tarefa que pode ser serializada
 */
class TarefaSerializavel extends Tarefa implements Serializavel {
  /**
   * Converte para JSON
   */
  toJSON(): object {
    // Dica: retorne objeto com id, titulo e concluida
    return ____;
  }
}

/**
 * Classe para contadores de tarefa
 */
class ContadorTarefas {
  private static _total: number = 0;

  /**
   * Incrementa contador
   */
  static incrementar(): void {
    // Dica: incremente _total
    ____;
  }

  /**
   * Obtém total atual
   */
  static obterTotal(): number {
    // Dica: retorne _total
    return ____;
  }

  /**
   * Reseta contador
   */
  static resetar(): void {
    // Dica: defina _total como 0
    ____;
  }
}

export {
  Tarefa,
  TarefaPrioritaria,
  GerenciadorBase,
  GerenciadorTarefas,
  TarefaUtils,
  Serializavel,
  TarefaSerializavel,
  ContadorTarefas
};
