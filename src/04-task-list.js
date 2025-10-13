/**
 * KOAN 04: Listas de Tarefas
 *
 * Neste koan você aprenderá sobre:
 * - Arrays (listas)
 * - Métodos básicos de array (push, length, indexOf, splice)
 * - Loops for
 * - Acesso por índice
 *
 * Substitua cada ____ pelo código correto para fazer os testes passarem.
 */

/**
 * Cria uma lista vazia de tarefas
 * @returns {Array} Array vazio
 */
function criarListaVazia() {
  // Dica: retorne um array vazio []
  return ____;
}

/**
 * Adiciona uma tarefa ao final da lista
 * @param {Array} lista - A lista de tarefas
 * @param {Object} tarefa - A tarefa a adicionar
 * @returns {Array} A lista modificada
 */
function adicionarTarefa(lista, tarefa) {
  // Dica: use lista.push(tarefa) para adicionar ao final
  ____;
  return lista;
}

/**
 * Conta quantas tarefas existem na lista
 * @param {Array} lista - A lista de tarefas
 * @returns {number} Número de tarefas
 */
function contarTarefas(lista) {
  // Dica: use a propriedade length
  return ____;
}

/**
 * Obtém a primeira tarefa da lista
 * @param {Array} lista - A lista de tarefas
 * @returns {Object|undefined} A primeira tarefa ou undefined se vazia
 */
function obterPrimeiraTarefa(lista) {
  // Dica: acesse o índice 0 com lista[0]
  return ____;
}

/**
 * Obtém a última tarefa da lista
 * @param {Array} lista - A lista de tarefas
 * @returns {Object|undefined} A última tarefa ou undefined se vazia
 */
function obterUltimaTarefa(lista) {
  // Dica: use lista[lista.length - 1]
  return ____;
}

/**
 * Encontra o índice de uma tarefa pelo ID
 * @param {Array} lista - A lista de tarefas
 * @param {number} id - O ID procurado
 * @returns {number} Índice da tarefa ou -1 se não encontrada
 */
function encontrarIndicePorId(lista, id) {
  // Dica: use um loop for percorrendo lista.length
  // Compare lista[i].id === id e retorne i quando encontrar
  // Retorne -1 se não encontrar
  for (let i = 0; i < ____; i++) {
    if (____) {
      return i;
    }
  }
  return -1;
}

/**
 * Remove uma tarefa pelo índice
 * @param {Array} lista - A lista de tarefas
 * @param {number} indice - O índice a remover
 * @returns {Array} A lista modificada
 */
function removerTarefaPorIndice(lista, indice) {
  // Dica: use lista.splice(indice, 1) para remover 1 elemento no índice
  ____;
  return lista;
}

module.exports = {
  criarListaVazia,
  adicionarTarefa,
  contarTarefas,
  obterPrimeiraTarefa,
  obterUltimaTarefa,
  encontrarIndicePorId,
  removerTarefaPorIndice
};
