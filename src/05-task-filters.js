/**
 * KOAN 05: Filtros e Buscas
 *
 * Neste koan você aprenderá sobre:
 * - filter() - filtra elementos de um array
 * - find() - encontra o primeiro elemento que atende condição
 * - findIndex() - encontra o índice do primeiro elemento
 * - some() - verifica se pelo menos um elemento atende condição
 * - every() - verifica se todos elementos atendem condição
 *
 * Substitua cada ____ pelo código correto para fazer os testes passarem.
 */

/**
 * Filtra e retorna apenas tarefas concluídas
 * @param {Array} lista - Lista de tarefas
 * @returns {Array} Array com tarefas concluídas
 */
function filtrarConcluidas(lista) {
  // Dica: use lista.filter(tarefa => tarefa.concluida === true)
  return ____;
}

/**
 * Filtra e retorna apenas tarefas pendentes
 * @param {Array} lista - Lista de tarefas
 * @returns {Array} Array com tarefas pendentes
 */
function filtrarPendentes(lista) {
  // Dica: use lista.filter(tarefa => tarefa.concluida === false)
  return ____;
}

/**
 * Busca uma tarefa pelo ID
 * @param {Array} lista - Lista de tarefas
 * @param {number} id - ID procurado
 * @returns {Object|undefined} Tarefa encontrada ou undefined
 */
function buscarPorId(lista, id) {
  // Dica: use lista.find(tarefa => tarefa.id === id)
  return ____;
}

/**
 * Busca o índice de uma tarefa pelo ID
 * @param {Array} lista - Lista de tarefas
 * @param {number} id - ID procurado
 * @returns {number} Índice encontrado ou -1
 */
function buscarIndicePorId(lista, id) {
  // Dica: use lista.findIndex(tarefa => tarefa.id === id)
  return ____;
}

/**
 * Busca uma tarefa pelo título (busca parcial, case-sensitive)
 * @param {Array} lista - Lista de tarefas
 * @param {string} texto - Texto a buscar no título
 * @returns {Object|undefined} Primeira tarefa que contém o texto
 */
function buscarPorTitulo(lista, texto) {
  // Dica: use lista.find(tarefa => tarefa.titulo.includes(texto))
  return ____;
}

/**
 * Verifica se existe pelo menos uma tarefa concluída
 * @param {Array} lista - Lista de tarefas
 * @returns {boolean} true se existe pelo menos uma concluída
 */
function existeTarefaConcluida(lista) {
  // Dica: use lista.some(tarefa => tarefa.concluida === true)
  return ____;
}

/**
 * Verifica se todas as tarefas estão concluídas
 * @param {Array} lista - Lista de tarefas
 * @returns {boolean} true se todas estão concluídas
 */
function todasConcluidas(lista) {
  // Dica: use lista.every(tarefa => tarefa.concluida === true)
  return ____;
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
