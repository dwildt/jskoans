/**
 * SOLUÇÃO KOAN 06: Transformações
 *
 * Este arquivo contém as soluções completas para o Koan 06.
 * Use apenas para consulta se ficar travado!
 */

/**
 * Extrai apenas os títulos de todas as tarefas
 * @param {Array} lista - Lista de tarefas
 * @returns {Array<string>} Array com apenas os títulos
 */
function extrairTitulos(lista) {
  return lista.map(tarefa => tarefa.titulo);
}

/**
 * Extrai apenas os IDs de todas as tarefas
 * @param {Array} lista - Lista de tarefas
 * @returns {Array<number>} Array com apenas os IDs
 */
function extrairIds(lista) {
  return lista.map(tarefa => tarefa.id);
}

/**
 * Marca todas as tarefas como completas
 * @param {Array} lista - Lista de tarefas
 * @returns {Array} Nova lista com todas concluidas = true
 */
function marcarTodasCompletas(lista) {
  return lista.map(tarefa => ({ ...tarefa, concluida: true }));
}

/**
 * Conta quantas tarefas estão concluídas
 * @param {Array} lista - Lista de tarefas
 * @returns {number} Número de tarefas concluídas
 */
function contarConcluidas(lista) {
  return lista.reduce((total, tarefa) => tarefa.concluida ? total + 1 : total, 0);
}

/**
 * Soma todos os IDs das tarefas
 * @param {Array} lista - Lista de tarefas
 * @returns {number} Soma de todos os IDs
 */
function somarIds(lista) {
  return lista.reduce((soma, tarefa) => soma + tarefa.id, 0);
}

/**
 * Ordena tarefas por ID (crescente)
 * @param {Array} lista - Lista de tarefas
 * @returns {Array} Nova lista ordenada
 */
function ordenarPorId(lista) {
  return [...lista].sort((a, b) => a.id - b.id);
}

/**
 * Clona uma lista de tarefas (cópia superficial)
 * @param {Array} lista - Lista de tarefas
 * @returns {Array} Nova lista com os mesmos elementos
 */
function clonarLista(lista) {
  return [...lista];
}

/**
 * Mescla duas listas de tarefas
 * @param {Array} lista1 - Primeira lista
 * @param {Array} lista2 - Segunda lista
 * @returns {Array} Nova lista com elementos de ambas
 */
function mesclarListas(lista1, lista2) {
  return [...lista1, ...lista2];
}

/**
 * Extrai id e titulo de uma tarefa usando destructuring
 * @param {Object} tarefa - A tarefa
 * @returns {Object} Objeto com apenas {id, titulo}
 */
function extrairPropriedades(tarefa) {
  const { id, titulo } = tarefa;
  return { id, titulo };
}

module.exports = {
  extrairTitulos,
  extrairIds,
  marcarTodasCompletas,
  contarConcluidas,
  somarIds,
  ordenarPorId,
  clonarLista,
  mesclarListas,
  extrairPropriedades
};
