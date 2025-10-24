/**
 * KOAN 08: TypeScript - Tipos Avançados
 *
 * Neste koan você aprenderá sobre:
 * - Generics (tipos genéricos)
 * - Union Types (tipos união)
 * - Intersection Types (tipos interseção)
 * - Type Guards (guardas de tipo)
 * - Utility Types (Pick, Omit, Partial, Required)
 *
 * Substitua cada ____ pelo código correto para fazer os testes passarem.
 */

/**
 * Interface genérica para resposta de API
 */
interface ApiResponse<T> {
  data: ____;      // Dica: tipo genérico T
  success: ____;   // Dica: tipo boolean
  message?: ____;  // Dica: tipo string (opcional)
}

/**
 * Cria uma resposta de sucesso
 * @param data - Dados da resposta
 * @returns Resposta de API com sucesso
 */
function criarResposta<T>(data: ____): ApiResponse<____> {
  // Dica: parâmetro e retorno usam tipo genérico T
  return {
    data: ____,
    success: ____
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
type ResultadoBusca = ____ | ____;  // Dica: TarefaBase | null

/**
 * Busca tarefa por ID (pode retornar null)
 * @param tarefas - Lista de tarefas
 * @param id - ID a buscar
 * @returns Tarefa encontrada ou null
 */
function buscarTarefa(tarefas: TarefaBase[], id: number): ResultadoBusca {
  // Dica: use find() e retorne o resultado (que pode ser undefined)
  const resultado = tarefas.find(t => t.id === id);
  return ____ || ____;  // Dica: resultado || null
}

/**
 * Tipo de interseção para tarefa completa
 */
type TarefaCompleta = ____ & ____;  // Dica: TarefaBase & Detalhes

/**
 * Cria uma tarefa completa
 * @param base - Dados base da tarefa
 * @param detalhes - Detalhes da tarefa
 * @returns Tarefa completa
 */
function criarTarefaCompleta(base: TarefaBase, detalhes: Detalhes): TarefaCompleta {
  // Dica: use spread operator para combinar os dois objetos
  return ____;
}

/**
 * Type guard para verificar se é TarefaCompleta
 * @param tarefa - Tarefa a verificar
 * @returns true se tem todos os campos de TarefaCompleta
 */
function isTarefaCompleta(tarefa: TarefaBase | TarefaCompleta): tarefa is TarefaCompleta {
  // Dica: verifique se 'descricao' existe no objeto
  return ____;
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
type TarefaParcial = ____;  // Dica: Partial<TarefaEditavel>

/**
 * Atualiza tarefa parcialmente
 * @param tarefa - Tarefa original
 * @param atualizacao - Campos a atualizar
 * @returns Tarefa atualizada
 */
function atualizarParcialmente(tarefa: TarefaEditavel, atualizacao: TarefaParcial): TarefaEditavel {
  // Dica: use spread para mesclar tarefa e atualizacao
  return ____;
}

/**
 * Tipo Pick - seleciona apenas alguns campos
 */
type TarefaResumo = ____<TarefaEditavel, ____ | ____>;  // Dica: Pick<TarefaEditavel, 'id' | 'titulo'>

/**
 * Cria resumo da tarefa
 * @param tarefa - Tarefa completa
 * @returns Resumo com apenas id e titulo
 */
function criarResumo(tarefa: TarefaEditavel): TarefaResumo {
  // Dica: retorne objeto com apenas id e titulo
  return ____;
}

/**
 * Tipo Omit - remove alguns campos
 */
type TarefaSemId = ____<TarefaEditavel, ____>;  // Dica: Omit<TarefaEditavel, 'id'>

/**
 * Prepara tarefa para criação (sem ID)
 * @param dados - Dados da nova tarefa
 * @returns Dados sem ID
 */
function prepararNovaTarefa(dados: TarefaSemId): TarefaSemId {
  // Dica: apenas retorne os dados recebidos
  return ____;
}

/**
 * Função genérica para obter primeiro elemento
 * @param array - Array de qualquer tipo
 * @returns Primeiro elemento ou undefined
 */
function primeiro<T>(array: ____[]): ____ | undefined {
  // Dica: parâmetro é T[], retorno é T | undefined
  return ____;
}

/**
 * Union type para diferentes tipos de identificador
 */
type Identificador = ____ | ____;  // Dica: number | string

/**
 * Busca por identificador flexível
 * @param tarefas - Lista de tarefas
 * @param id - ID como número ou string
 * @returns Tarefa encontrada ou undefined
 */
function buscarPorId(tarefas: TarefaBase[], id: Identificador): TarefaBase | undefined {
  // Dica: converta id para número se for string, depois use find
  const idNumerico = typeof id === 'string' ? ____ : id;
  return ____;
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
