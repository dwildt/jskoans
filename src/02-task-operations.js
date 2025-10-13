/**
 * KOAN 02: Operações com Tarefas
 *
 * Neste koan você aprenderá sobre:
 * - Operadores de comparação (===, !==)
 * - Operadores lógicos (&&, ||, !)
 * - Condicionais (if/else)
 * - Template literals (strings com backticks)
 *
 * Substitua cada ____ pelo código correto para fazer os testes passarem.
 */

/**
 * Compara duas tarefas verificando se têm o mesmo ID
 * @param {Object} tarefa1 - Primeira tarefa
 * @param {Object} tarefa2 - Segunda tarefa
 * @returns {boolean} true se os IDs são iguais
 */
function compararTarefas(tarefa1, tarefa2) {
  // Dica: use === para comparar tarefa1.id com tarefa2.id
  return ____;
}

/**
 * Verifica se duas tarefas têm o mesmo status de conclusão
 * @param {Object} t1 - Primeira tarefa
 * @param {Object} t2 - Segunda tarefa
 * @returns {boolean} true se ambas têm o mesmo valor em concluida
 */
function tarefasPossuemMesmoStatus(t1, t2) {
  // Dica: compare t1.concluida com t2.concluida
  return ____;
}

/**
 * Inverte o status de conclusão de uma tarefa
 * @param {Object} tarefa - A tarefa
 * @returns {boolean} O status invertido
 */
function inverterStatus(tarefa) {
  // Dica: use o operador ! para inverter o valor booleano
  return ____;
}

/**
 * Formata uma tarefa para exibição
 * @param {Object} tarefa - A tarefa (deve ter id, titulo, concluida)
 * @returns {string} String formatada: "[ID] Titulo - Status: concluída" ou "pendente"
 */
function formatarTarefa(tarefa) {
  // Dica: use template literal com ${} e operador ternário
  // Formato: `[${tarefa.id}] ${tarefa.titulo} - Status: ${tarefa.concluida ? 'concluída' : 'pendente'}`
  return ____;
}

/**
 * Verifica se uma tarefa pode ser excluída (apenas tarefas concluídas podem)
 * @param {Object} tarefa - A tarefa
 * @returns {boolean} true se pode ser excluída
 */
function tarefaPodeSerExcluida(tarefa) {
  // Dica: retorne true se tarefa.concluida === true
  return ____;
}

/**
 * Verifica se uma tarefa tem prioridade alta
 * @param {Object} tarefa - A tarefa (deve ter propriedade prioridade)
 * @returns {boolean} true se prioridade é 'alta'
 */
function prioridadeAlta(tarefa) {
  // Dica: compare tarefa.prioridade com a string 'alta'
  return ____;
}

module.exports = {
  compararTarefas,
  tarefasPossuemMesmoStatus,
  inverterStatus,
  formatarTarefa,
  tarefaPodeSerExcluida,
  prioridadeAlta
};
