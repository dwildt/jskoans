/**
 * KOAN 07: TypeScript - Tipos Básicos
 *
 * Neste koan você aprenderá sobre:
 * - Anotações de tipo (type annotations)
 * - Tipos primitivos (string, number, boolean)
 * - Interfaces
 * - Tipos literais
 * - Optional properties
 *
 * Substitua cada ____ pelo código correto para fazer os testes passarem.
 */

/**
 * Interface para representar uma tarefa com tipos
 */
interface Tarefa {
  id: ____;      // Dica: tipo number
  titulo: ____;  // Dica: tipo string
  concluida: ____; // Dica: tipo boolean
  prioridade?: ____; // Dica: tipo string (opcional)
}

/**
 * Cria uma tarefa com tipos explícitos
 * @param id - ID da tarefa
 * @param titulo - Título da tarefa
 * @returns Tarefa tipada
 */
function criarTarefaTipada(id: ____, titulo: ____): Tarefa {
  // Dica: parâmetros são number e string
  return {
    id: ____,
    titulo: ____,
    concluida: false
  };
}

/**
 * Adiciona prioridade a uma tarefa
 * @param tarefa - Tarefa original
 * @param prioridade - Prioridade (alta, média, baixa)
 * @returns Nova tarefa com prioridade
 */
function adicionarPrioridade(tarefa: Tarefa, prioridade: string): Tarefa {
  // Dica: retorne nova tarefa com spread operator e prioridade
  return ____;
}

/**
 * Tipo literal para status de tarefa
 */
type StatusTarefa = ____ | ____ | ____;  // Dica: 'pendente' | 'em_progresso' | 'concluida'

/**
 * Interface para tarefa com status
 */
interface TarefaComStatus {
  id: number;
  titulo: string;
  status: ____;  // Dica: use o tipo StatusTarefa
}

/**
 * Cria tarefa com status inicial
 * @param id - ID da tarefa
 * @param titulo - Título da tarefa
 * @returns Tarefa com status pendente
 */
function criarTarefaComStatus(id: number, titulo: string): TarefaComStatus {
  // Dica: retorne objeto com status: 'pendente'
  return ____;
}

/**
 * Atualiza status da tarefa
 * @param tarefa - Tarefa original
 * @param novoStatus - Novo status
 * @returns Tarefa com status atualizado
 */
function atualizarStatus(tarefa: TarefaComStatus, novoStatus: StatusTarefa): TarefaComStatus {
  // Dica: retorne nova tarefa com spread e novo status
  return ____;
}

/**
 * Verifica se status é válido
 * @param status - Status a verificar
 * @returns true se é um StatusTarefa válido
 */
function isStatusValido(status: string): status is StatusTarefa {
  // Dica: verifique se status é 'pendente', 'em_progresso' ou 'concluida'
  return ____;
}

/**
 * Interface para configuração de tarefa
 */
interface ConfiguracaoTarefa {
  titulo: string;
  descricao?: string;
  prioridade?: 'alta' | 'media' | 'baixa';
  tags?: ____;  // Dica: array de strings
}

/**
 * Cria tarefa a partir de configuração
 * @param config - Configuração da tarefa
 * @returns Tarefa criada
 */
function criarDaConfiguracao(config: ConfiguracaoTarefa): Tarefa {
  // Dica: use valores do config, gere ID aleatório
  return {
    id: Math.floor(Math.random() * 1000),
    titulo: ____,
    concluida: false,
    prioridade: ____
  };
}

export {
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
};
