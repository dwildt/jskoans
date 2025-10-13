/**
 * SOLUÇÃO KOAN 02: Operações com Tarefas
 *
 * Este arquivo contém as soluções completas para o Koan 02.
 * Use apenas para consulta se ficar travado!
 */

/**
 * Compara duas tarefas verificando se têm o mesmo ID
 * @param {Object} tarefa1 - Primeira tarefa
 * @param {Object} tarefa2 - Segunda tarefa
 * @returns {boolean} true se os IDs são iguais
 */
function compararTarefas(tarefa1, tarefa2) {
  return tarefa1.id === tarefa2.id;
}

/**
 * Verifica se duas tarefas têm o mesmo status de conclusão
 * @param {Object} t1 - Primeira tarefa
 * @param {Object} t2 - Segunda tarefa
 * @returns {boolean} true se ambas têm o mesmo valor em concluida
 */
function tarefasPossuemMesmoStatus(t1, t2) {
  return t1.concluida === t2.concluida;
}

/**
 * Inverte o status de conclusão de uma tarefa
 * @param {Object} tarefa - A tarefa
 * @returns {boolean} O status invertido
 */
function inverterStatus(tarefa) {
  return !tarefa.concluida;
}

/**
 * Formata uma tarefa para exibição
 * @param {Object} tarefa - A tarefa (deve ter id, titulo, concluida)
 * @returns {string} String formatada: "[ID] Titulo - Status: concluída" ou "pendente"
 */
function formatarTarefa(tarefa) {
  return `[${tarefa.id}] ${tarefa.titulo} - Status: ${tarefa.concluida ? 'concluída' : 'pendente'}`;
}

/**
 * Verifica se uma tarefa pode ser excluída (apenas tarefas concluídas podem)
 * @param {Object} tarefa - A tarefa
 * @returns {boolean} true se pode ser excluída
 */
function tarefaPodeSerExcluida(tarefa) {
  return tarefa.concluida === true;
}

/**
 * Verifica se uma tarefa tem prioridade alta
 * @param {Object} tarefa - A tarefa (deve ter propriedade prioridade)
 * @returns {boolean} true se prioridade é 'alta'
 */
function prioridadeAlta(tarefa) {
  return tarefa.prioridade === 'alta';
}

module.exports = {
  compararTarefas,
  tarefasPossuemMesmoStatus,
  inverterStatus,
  formatarTarefa,
  tarefaPodeSerExcluida,
  prioridadeAlta
};
