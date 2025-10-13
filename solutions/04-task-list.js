/**
 * SOLUÇÃO KOAN 04: Listas de Tarefas
 *
 * Este arquivo contém as soluções completas para o Koan 04.
 * Use apenas para consulta se ficar travado!
 */

/**
 * Cria uma lista vazia de tarefas
 * @returns {Array} Array vazio
 */
function criarListaVazia() {
  return [];
}

/**
 * Adiciona uma tarefa ao final da lista
 * @param {Array} lista - A lista de tarefas
 * @param {Object} tarefa - A tarefa a adicionar
 * @returns {Array} A lista modificada
 */
function adicionarTarefa(lista, tarefa) {
  lista.push(tarefa);
  return lista;
}

/**
 * Conta quantas tarefas existem na lista
 * @param {Array} lista - A lista de tarefas
 * @returns {number} Número de tarefas
 */
function contarTarefas(lista) {
  return lista.length;
}

/**
 * Obtém a primeira tarefa da lista
 * @param {Array} lista - A lista de tarefas
 * @returns {Object|undefined} A primeira tarefa ou undefined se vazia
 */
function obterPrimeiraTarefa(lista) {
  return lista[0];
}

/**
 * Obtém a última tarefa da lista
 * @param {Array} lista - A lista de tarefas
 * @returns {Object|undefined} A última tarefa ou undefined se vazia
 */
function obterUltimaTarefa(lista) {
  return lista[lista.length - 1];
}

/**
 * Encontra o índice de uma tarefa pelo ID
 * @param {Array} lista - A lista de tarefas
 * @param {number} id - O ID procurado
 * @returns {number} Índice da tarefa ou -1 se não encontrada
 */
function encontrarIndicePorId(lista, id) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === id) {
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
  lista.splice(indice, 1);
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
