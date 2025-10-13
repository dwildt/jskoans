/**
 * KOAN 06: Transformações
 *
 * Neste koan você aprenderá sobre:
 * - map() - transforma cada elemento de um array
 * - reduce() - reduz array a um único valor
 * - sort() - ordena elementos de um array
 * - destructuring - extrai valores de objetos/arrays
 * - spread operator (...) - expande arrays/objetos
 *
 * Substitua cada ____ pelo código correto para fazer os testes passarem.
 */

/**
 * Extrai apenas os títulos de todas as tarefas
 * @param {Array} lista - Lista de tarefas
 * @returns {Array<string>} Array com apenas os títulos
 */
function extrairTitulos(lista) {
  // Dica: use lista.map(tarefa => tarefa.titulo)
  return ____;
}

/**
 * Extrai apenas os IDs de todas as tarefas
 * @param {Array} lista - Lista de tarefas
 * @returns {Array<number>} Array com apenas os IDs
 */
function extrairIds(lista) {
  // Dica: use lista.map(tarefa => tarefa.id)
  return ____;
}

/**
 * Marca todas as tarefas como completas
 * @param {Array} lista - Lista de tarefas
 * @returns {Array} Nova lista com todas concluidas = true
 */
function marcarTodasCompletas(lista) {
  // Dica: use map para criar novos objetos com concluida: true
  // lista.map(tarefa => ({ ...tarefa, concluida: true }))
  return ____;
}

/**
 * Conta quantas tarefas estão concluídas
 * @param {Array} lista - Lista de tarefas
 * @returns {number} Número de tarefas concluídas
 */
function contarConcluidas(lista) {
  // Dica: use reduce
  // lista.reduce((total, tarefa) => tarefa.concluida ? total + 1 : total, 0)
  return ____;
}

/**
 * Soma todos os IDs das tarefas
 * @param {Array} lista - Lista de tarefas
 * @returns {number} Soma de todos os IDs
 */
function somarIds(lista) {
  // Dica: use reduce para somar
  // lista.reduce((soma, tarefa) => soma + tarefa.id, 0)
  return ____;
}

/**
 * Ordena tarefas por ID (crescente)
 * @param {Array} lista - Lista de tarefas
 * @returns {Array} Nova lista ordenada
 */
function ordenarPorId(lista) {
  // Dica: primeiro clone com [...lista], depois use sort
  // [...lista].sort((a, b) => a.id - b.id)
  return ____;
}

/**
 * Clona uma lista de tarefas (cópia superficial)
 * @param {Array} lista - Lista de tarefas
 * @returns {Array} Nova lista com os mesmos elementos
 */
function clonarLista(lista) {
  // Dica: use spread operator [...lista]
  return ____;
}

/**
 * Mescla duas listas de tarefas
 * @param {Array} lista1 - Primeira lista
 * @param {Array} lista2 - Segunda lista
 * @returns {Array} Nova lista com elementos de ambas
 */
function mesclarListas(lista1, lista2) {
  // Dica: use spread operator [...lista1, ...lista2]
  return ____;
}

/**
 * Extrai id e titulo de uma tarefa usando destructuring
 * @param {Object} tarefa - A tarefa
 * @returns {Object} Objeto com apenas {id, titulo}
 */
function extrairPropriedades(tarefa) {
  // Dica: use destructuring
  // const { id, titulo } = tarefa;
  // return { id, titulo };
  const { ____, ____ } = tarefa;
  return { ____, ____ };
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
