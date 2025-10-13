/**
 * SOLUÇÃO KOAN 03: Validações
 *
 * Este arquivo contém as soluções completas para o Koan 03.
 * Use apenas para consulta se ficar travado!
 */

/**
 * Valida se um título é válido (não vazio e no mínimo 3 caracteres)
 * @param {string} titulo - O título a validar
 * @returns {boolean} true se válido
 */
function tituloValido(titulo) {
  return !!titulo && titulo.length >= 3;
}

/**
 * Valida se um ID é válido (número positivo inteiro)
 * @param {number} id - O ID a validar
 * @returns {boolean} true se válido
 */
function idValido(id) {
  return typeof id === 'number' && id > 0 && Number.isInteger(id);
}

/**
 * Valida se uma tarefa está completa e válida
 * @param {Object} tarefa - A tarefa a validar
 * @returns {boolean} true se tem id válido, titulo válido e concluida é boolean
 */
function tarefaValida(tarefa) {
  return idValido(tarefa.id) &&
         tituloValido(tarefa.titulo) &&
         typeof tarefa.concluida === 'boolean';
}

/**
 * Verifica se uma tarefa pode ser editada (não pode se estiver concluída)
 * @param {Object} tarefa - A tarefa
 * @returns {boolean} true se pode editar
 */
function podeEditar(tarefa) {
  return tarefa.concluida === false;
}

/**
 * Valida descrição opcional (pode ser null/undefined OU string com 10+ caracteres)
 * @param {string|null|undefined} descricao - A descrição
 * @returns {boolean} true se válida
 */
function descricaoOpcionalValida(descricao) {
  return descricao == null || (typeof descricao === 'string' && descricao.length >= 10);
}

/**
 * Valida campos obrigatórios e retorna array com campos faltantes
 * @param {Object} tarefa - A tarefa
 * @returns {Array<string>} Array com nomes dos campos faltantes
 */
function validarCamposObrigatorios(tarefa) {
  const faltantes = [];

  if (!tarefa.id) {
    faltantes.push('id');
  }

  if (!tarefa.titulo) {
    faltantes.push('titulo');
  }

  if (tarefa.concluida === undefined || tarefa.concluida === null) {
    faltantes.push('concluida');
  }

  return faltantes;
}

module.exports = {
  tituloValido,
  idValido,
  tarefaValida,
  podeEditar,
  descricaoOpcionalValida,
  validarCamposObrigatorios
};
