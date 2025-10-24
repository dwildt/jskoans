/**
 * SOLUÇÃO KOAN 07: TypeScript - Tipos Básicos
 *
 * Este arquivo contém as soluções completas para o Koan 07.
 * Use apenas para consulta se ficar travado!
 */

/**
 * Interface para representar uma tarefa com tipos
 */
interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
  prioridade?: string;
}

/**
 * Cria uma tarefa com tipos explícitos
 * @param id - ID da tarefa
 * @param titulo - Título da tarefa
 * @returns Tarefa tipada
 */
function criarTarefaTipada(id: number, titulo: string): Tarefa {
  return {
    id: id,
    titulo: titulo,
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
  return { ...tarefa, prioridade: prioridade };
}

/**
 * Tipo literal para status de tarefa
 */
type StatusTarefa = 'pendente' | 'em_progresso' | 'concluida';

/**
 * Interface para tarefa com status
 */
interface TarefaComStatus {
  id: number;
  titulo: string;
  status: StatusTarefa;
}

/**
 * Cria tarefa com status inicial
 * @param id - ID da tarefa
 * @param titulo - Título da tarefa
 * @returns Tarefa com status pendente
 */
function criarTarefaComStatus(id: number, titulo: string): TarefaComStatus {
  return {
    id: id,
    titulo: titulo,
    status: 'pendente'
  };
}

/**
 * Atualiza status da tarefa
 * @param tarefa - Tarefa original
 * @param novoStatus - Novo status
 * @returns Tarefa com status atualizado
 */
function atualizarStatus(tarefa: TarefaComStatus, novoStatus: StatusTarefa): TarefaComStatus {
  return { ...tarefa, status: novoStatus };
}

/**
 * Verifica se status é válido
 * @param status - Status a verificar
 * @returns true se é um StatusTarefa válido
 */
function isStatusValido(status: string): status is StatusTarefa {
  return status === 'pendente' || status === 'em_progresso' || status === 'concluida';
}

/**
 * Interface para configuração de tarefa
 */
interface ConfiguracaoTarefa {
  titulo: string;
  descricao?: string;
  prioridade?: 'alta' | 'media' | 'baixa';
  tags?: string[];
}

/**
 * Cria tarefa a partir de configuração
 * @param config - Configuração da tarefa
 * @returns Tarefa criada
 */
function criarDaConfiguracao(config: ConfiguracaoTarefa): Tarefa {
  return {
    id: Math.floor(Math.random() * 1000),
    titulo: config.titulo,
    concluida: false,
    prioridade: config.prioridade
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
