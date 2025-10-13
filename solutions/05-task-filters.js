/**
 * SOLUÇÃO KOAN 05: Filtros e Buscas
 *
 * Este arquivo contém as soluções completas para o Koan 05.
 * Use apenas para consulta se ficar travado!
 */

/**
 * Filtra e retorna apenas tarefas concluídas
 * @param {Array} lista - Lista de tarefas
 * @returns {Array} Array com tarefas concluídas
 */
function filtrarConcluidas(lista) {
  return lista.filter(tarefa => tarefa.concluida === true);
}

/**
 * Filtra e retorna apenas tarefas pendentes
 * @param {Array} lista - Lista de tarefas
 * @returns {Array} Array com tarefas pendentes
 */
function filtrarPendentes(lista) {
  return lista.filter(tarefa => tarefa.concluida === false);
}

/**
 * Busca uma tarefa pelo ID
 * @param {Array} lista - Lista de tarefas
 * @param {number} id - ID procurado
 * @returns {Object|undefined} Tarefa encontrada ou undefined
 */
function buscarPorId(lista, id) {
  return lista.find(tarefa => tarefa.id === id);
}

/**
 * Busca o índice de uma tarefa pelo ID
 * @param {Array} lista - Lista de tarefas
 * @param {number} id - ID procurado
 * @returns {number} Índice encontrado ou -1
 */
function buscarIndicePorId(lista, id) {
  return lista.findIndex(tarefa => tarefa.id === id);
}

/**
 * Busca uma tarefa pelo título (busca parcial, case-sensitive)
 * @param {Array} lista - Lista de tarefas
 * @param {string} texto - Texto a buscar no título
 * @returns {Object|undefined} Primeira tarefa que contém o texto
 */
function buscarPorTitulo(lista, texto) {
  return lista.find(tarefa => tarefa.titulo.includes(texto));
}

/**
 * Verifica se existe pelo menos uma tarefa concluída
 * @param {Array} lista - Lista de tarefas
 * @returns {boolean} true se existe pelo menos uma concluída
 */
function existeTarefaConcluida(lista) {
  return lista.some(tarefa => tarefa.concluida === true);
}

/**
 * Verifica se todas as tarefas estão concluídas
 * @param {Array} lista - Lista de tarefas
 * @returns {boolean} true se todas estão concluídas
 */
function todasConcluidas(lista) {
  return lista.every(tarefa => tarefa.concluida === true);
}

module.exports = {
  filtrarConcluidas,
  filtrarPendentes,
  buscarPorId,
  buscarIndicePorId,
  buscarPorTitulo,
  existeTarefaConcluida,
  todasConcluidas
};
