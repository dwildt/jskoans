/**
 * KOAN 03: Validações
 *
 * Neste koan você aprenderá sobre:
 * - Validações complexas
 * - Operadores lógicos (&& e ||)
 * - Early return (retorno antecipado)
 * - Verificação de tipos
 *
 * Substitua cada ____ pelo código correto para fazer os testes passarem.
 */

/**
 * Valida se um título é válido (não vazio e no mínimo 3 caracteres)
 * @param {string} titulo - O título a validar
 * @returns {boolean} true se válido
 */
function tituloValido(titulo) {
  // Dica: verifique se titulo existe, não é vazio e tem 3+ caracteres
  // Use: !!titulo && titulo.length >= 3
  return ____;
}

/**
 * Valida se um ID é válido (número positivo inteiro)
 * @param {number} id - O ID a validar
 * @returns {boolean} true se válido
 */
function idValido(id) {
  // Dica: verifique se é number, maior que 0 e é inteiro
  // Use: typeof id === 'number' && id > 0 && Number.isInteger(id)
  return ____;
}

/**
 * Valida se uma tarefa está completa e válida
 * @param {Object} tarefa - A tarefa a validar
 * @returns {boolean} true se tem id válido, titulo válido e concluida é boolean
 */
function tarefaValida(tarefa) {
  // Dica: use as funções anteriores e verifique typeof tarefa.concluida === 'boolean'
  return ____;
}

/**
 * Verifica se uma tarefa pode ser editada (não pode se estiver concluída)
 * @param {Object} tarefa - A tarefa
 * @returns {boolean} true se pode editar
 */
function podeEditar(tarefa) {
  // Dica: retorne true se tarefa.concluida for false
  return ____;
}

/**
 * Valida descrição opcional (pode ser null/undefined OU string com 10+ caracteres)
 * @param {string|null|undefined} descricao - A descrição
 * @returns {boolean} true se válida
 */
function descricaoOpcionalValida(descricao) {
  // Dica: retorne true se descricao é null/undefined OU (é string com 10+ chars)
  // Use: descricao == null || (typeof descricao === 'string' && descricao.length >= 10)
  return ____;
}

/**
 * Valida campos obrigatórios e retorna array com campos faltantes
 * @param {Object} tarefa - A tarefa
 * @returns {Array<string>} Array com nomes dos campos faltantes
 */
function validarCamposObrigatorios(tarefa) {
  const faltantes = [];

  // Dica: verifique cada campo e adicione ao array se não existir
  if (____) {
    faltantes.push('id');
  }

  if (____) {
    faltantes.push('titulo');
  }

  if (____) {
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
