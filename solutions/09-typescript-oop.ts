/**
 * SOLUÇÃO KOAN 09: TypeScript - Programação Orientada a Objetos
 *
 * Este arquivo contém as soluções completas para o Koan 09.
 * Use apenas para consulta se ficar travado!
 */

/**
 * Classe básica para representar uma Tarefa
 */
class Tarefa {
  public id: number;
  public titulo: string;
  private _concluida: boolean;

  constructor(id: number, titulo: string) {
    this.id = id;
    this.titulo = titulo;
    this._concluida = false;
  }

  /**
   * Getter para verificar se está concluída
   */
  get concluida(): boolean {
    return this._concluida;
  }

  /**
   * Marca tarefa como concluída
   */
  marcarConcluida(): void {
    this._concluida = true;
  }

  /**
   * Retorna descrição da tarefa
   */
  descrever(): string {
    return `Tarefa #${this.id}: ${this.titulo}`;
  }
}

/**
 * Classe para tarefa com prioridade
 */
class TarefaPrioritaria extends Tarefa {
  public prioridade: number;

  constructor(id: number, titulo: string, prioridade: number) {
    super(id, titulo);
    this.prioridade = prioridade;
  }

  /**
   * Override do método descrever
   */
  descrever(): string {
    return `Tarefa #${this.id}: ${this.titulo} (Prioridade: ${this.prioridade})`;
  }

  /**
   * Verifica se é alta prioridade
   */
  isAltaPrioridade(): boolean {
    return this.prioridade >= 8;
  }
}

/**
 * Classe abstrata para gerenciador de tarefas
 */
abstract class GerenciadorBase {
  protected tarefas: Tarefa[];

  constructor() {
    this.tarefas = [];
  }

  /**
   * Adiciona uma tarefa
   */
  adicionar(tarefa: Tarefa): void {
    this.tarefas.push(tarefa);
  }

  /**
   * Retorna total de tarefas
   */
  total(): number {
    return this.tarefas.length;
  }

  /**
   * Método abstrato para listar tarefas (deve ser implementado pelas subclasses)
   */
  abstract listar(): Tarefa[];
}

/**
 * Implementação concreta do gerenciador
 */
class GerenciadorTarefas extends GerenciadorBase {
  /**
   * Lista todas as tarefas
   */
  listar(): Tarefa[] {
    return this.tarefas;
  }

  /**
   * Lista apenas tarefas concluídas
   */
  listarConcluidas(): Tarefa[] {
    return this.tarefas.filter(t => t.concluida === true);
  }

  /**
   * Busca tarefa por ID
   */
  buscarPorId(id: number): Tarefa | undefined {
    return this.tarefas.find(t => t.id === id);
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
    return Math.floor(Math.random() * 10000) + 1;
  }

  /**
   * Valida título de tarefa
   */
  static validarTitulo(titulo: string): boolean {
    return titulo.length > 3;
  }

  /**
   * Cria tarefa com ID automático
   */
  static criarComIdAuto(titulo: string): Tarefa {
    return new Tarefa(TarefaUtils.gerarId(), titulo);
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
    return {
      id: this.id,
      titulo: this.titulo,
      concluida: this.concluida
    };
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
    ContadorTarefas._total++;
  }

  /**
   * Obtém total atual
   */
  static obterTotal(): number {
    return ContadorTarefas._total;
  }

  /**
   * Reseta contador
   */
  static resetar(): void {
    ContadorTarefas._total = 0;
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
