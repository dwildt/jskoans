/**
 * KOAN 01: Propriedades de Tarefas
 *
 * Neste koan você aprenderá sobre:
 * - Variáveis (const e let)
 * - Tipos primitivos (string, number, boolean)
 * - Objetos literais
 * - Acesso a propriedades de objetos
 *
 * Substitua cada ____ pelo código correto para fazer os testes passarem.
 */



/**
 * Cria uma tarefa simples com apenas título
 * @returns {Object} Tarefa com titulo e concluida
 */
function criarTarefaSimples() {
  // Dica: retorne um objeto com propriedades titulo (string) e concluida (boolean false)
  return ___;
}

/**
 * Cria uma tarefa com ID e título
 * @param {string} titulo - O título da tarefa
 * @returns {Object} Tarefa com id, titulo e concluida
 */
function criarTarefaComId(titulo) {
  // Dica: retorne um objeto com id: 1, titulo: (parâmetro), concluida: false
  return ____;
}

/**
 * Cria uma tarefa completa com todos os campos
 * @param {number} id - ID da tarefa
 * @param {string} titulo - Título da tarefa
 * @param {string} descricao - Descrição da tarefa
 * @returns {Object} Tarefa completa
 */
function criarTarefaCompleta(id, titulo, descricao) {
  // Dica: retorne um objeto com id, titulo, descricao e criadaEm: new Date()
  return ____;
}

/**
 * Obtém o título de uma tarefa
 * @param {Object} tarefa - A tarefa
 * @returns {string} O título da tarefa
 */
function obterTituloTarefa(tarefa) {
  // Dica: acesse a propriedade titulo do objeto tarefa
  return ____;
}

/**
 * Marca uma tarefa como completa
 * @param {Object} tarefa - A tarefa a ser marcada
 * @returns {Object} A tarefa modificada
 */
function marcarComoCompleta(tarefa) {
  // Dica: altere a propriedade concluida para true e retorne a tarefa
  ____ = true;
  return tarefa;
}

/**
 * Verifica se uma tarefa está completa
 * @param {Object} tarefa - A tarefa a verificar
 * @returns {boolean} true se completa, false caso contrário
 */
function estaCompleta(tarefa) {
  // Dica: retorne o valor da propriedade concluida
  return ____;
}

module.exports = {
  criarTarefaSimples,
  criarTarefaComId,
  criarTarefaCompleta,
  obterTituloTarefa,
  marcarComoCompleta,
  estaCompleta
};
