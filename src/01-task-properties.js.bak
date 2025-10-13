/**
 * SOLUÇÃO KOAN 01: Propriedades de Tarefas
 *
 * Este arquivo contém as soluções completas para o Koan 01.
 * Use apenas para consulta se ficar travado!
 */

/**
 * Cria uma tarefa simples com apenas título
 * @returns {Object} Tarefa com titulo e concluida
 */
function criarTarefaSimples() {
  return {
    titulo: 'Minha tarefa',
    concluida: false
  };
}

/**
 * Cria uma tarefa com ID e título
 * @param {string} titulo - O título da tarefa
 * @returns {Object} Tarefa com id, titulo e concluida
 */
function criarTarefaComId(titulo) {
  return {
    id: 1,
    titulo: titulo,
    concluida: false
  };
}

/**
 * Cria uma tarefa completa com todos os campos
 * @param {number} id - ID da tarefa
 * @param {string} titulo - Título da tarefa
 * @param {string} descricao - Descrição da tarefa
 * @returns {Object} Tarefa completa
 */
function criarTarefaCompleta(id, titulo, descricao) {
  return {
    id: id,
    titulo: titulo,
    descricao: descricao,
    criadaEm: new Date()
  };
}

/**
 * Obtém o título de uma tarefa
 * @param {Object} tarefa - A tarefa
 * @returns {string} O título da tarefa
 */
function obterTituloTarefa(tarefa) {
  return tarefa.titulo;
}

/**
 * Marca uma tarefa como completa
 * @param {Object} tarefa - A tarefa a ser marcada
 * @returns {Object} A tarefa modificada
 */
function marcarComoCompleta(tarefa) {
  tarefa.concluida = true;
  return tarefa;
}

/**
 * Verifica se uma tarefa está completa
 * @param {Object} tarefa - A tarefa a verificar
 * @returns {boolean} true se completa, false caso contrário
 */
function estaCompleta(tarefa) {
  return tarefa.concluida;
}

module.exports = {
  criarTarefaSimples,
  criarTarefaComId,
  criarTarefaCompleta,
  obterTituloTarefa,
  marcarComoCompleta,
  estaCompleta
};
