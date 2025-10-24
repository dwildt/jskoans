/**
 * SOLUÇÃO KOAN 08: TypeScript - Tipos Avançados
 *
 * Este arquivo contém as soluções completas para o Koan 08.
 * Use apenas para consulta se ficar travado!
 */

/**
 * Interface genérica para resposta de API
 */
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

/**
 * Cria uma resposta de sucesso
 * @param data - Dados da resposta
 * @returns Resposta de API com sucesso
 */
function criarResposta<T>(data: T): ApiResponse<T> {
  return {
    data: data,
    success: true
  };
}

/**
 * Interface para tarefa básica
 */
interface TarefaBase {
  id: number;
  titulo: string;
}

/**
 * Interface para detalhes adicionais
 */
interface Detalhes {
  descricao: string;
  criadaEm: Date;
}

/**
 * Tipo de união para resultado de busca
 */
type ResultadoBusca = TarefaBase | null;

/**
 * Busca tarefa por ID (pode retornar null)
 * @param tarefas - Lista de tarefas
 * @param id - ID a buscar
 * @returns Tarefa encontrada ou null
 */
function buscarTarefa(tarefas: TarefaBase[], id: number): ResultadoBusca {
  const resultado = tarefas.find(t => t.id === id);
  return resultado || null;
}

/**
 * Tipo de interseção para tarefa completa
 */
type TarefaCompleta = TarefaBase & Detalhes;

/**
 * Cria uma tarefa completa
 * @param base - Dados base da tarefa
 * @param detalhes - Detalhes da tarefa
 * @returns Tarefa completa
 */
function criarTarefaCompleta(base: TarefaBase, detalhes: Detalhes): TarefaCompleta {
  return { ...base, ...detalhes };
}

/**
 * Type guard para verificar se é TarefaCompleta
 * @param tarefa - Tarefa a verificar
 * @returns true se tem todos os campos de TarefaCompleta
 */
function isTarefaCompleta(tarefa: TarefaBase | TarefaCompleta): tarefa is TarefaCompleta {
  return 'descricao' in tarefa;
}

/**
 * Interface para tarefa editável
 */
interface TarefaEditavel {
  id: number;
  titulo: string;
  descricao: string;
  concluida: boolean;
}

/**
 * Tipo Partial - todos os campos opcionais
 */
type TarefaParcial = Partial<TarefaEditavel>;

/**
 * Atualiza tarefa parcialmente
 * @param tarefa - Tarefa original
 * @param atualizacao - Campos a atualizar
 * @returns Tarefa atualizada
 */
function atualizarParcialmente(tarefa: TarefaEditavel, atualizacao: TarefaParcial): TarefaEditavel {
  return { ...tarefa, ...atualizacao };
}

/**
 * Tipo Pick - seleciona apenas alguns campos
 */
type TarefaResumo = Pick<TarefaEditavel, 'id' | 'titulo'>;

/**
 * Cria resumo da tarefa
 * @param tarefa - Tarefa completa
 * @returns Resumo com apenas id e titulo
 */
function criarResumo(tarefa: TarefaEditavel): TarefaResumo {
  return { id: tarefa.id, titulo: tarefa.titulo };
}

/**
 * Tipo Omit - remove alguns campos
 */
type TarefaSemId = Omit<TarefaEditavel, 'id'>;

/**
 * Prepara tarefa para criação (sem ID)
 * @param dados - Dados da nova tarefa
 * @returns Dados sem ID
 */
function prepararNovaTarefa(dados: TarefaSemId): TarefaSemId {
  return dados;
}

/**
 * Função genérica para obter primeiro elemento
 * @param array - Array de qualquer tipo
 * @returns Primeiro elemento ou undefined
 */
function primeiro<T>(array: T[]): T | undefined {
  return array[0];
}

/**
 * Union type para diferentes tipos de identificador
 */
type Identificador = number | string;

/**
 * Busca por identificador flexível
 * @param tarefas - Lista de tarefas
 * @param id - ID como número ou string
 * @returns Tarefa encontrada ou undefined
 */
function buscarPorId(tarefas: TarefaBase[], id: Identificador): TarefaBase | undefined {
  const idNumerico = typeof id === 'string' ? parseInt(id) : id;
  return tarefas.find(t => t.id === idNumerico);
}

export {
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
};
