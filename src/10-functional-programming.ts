/**
 * KOAN 10: Programação Funcional
 *
 * Neste koan você aprenderá sobre:
 * - Funções puras
 * - Imutabilidade
 * - Higher-Order Functions (funções de ordem superior)
 * - Composição de funções
 * - Currying
 * - Recursão
 *
 * Substitua cada ____ pelo código correto para fazer os testes passarem.
 */

/**
 * Interface para tarefa imutável
 */
interface TarefaImutavel {
  readonly id: number;
  readonly titulo: string;
  readonly concluida: boolean;
  readonly tags?: readonly string[];
}

/**
 * Função pura: cria nova tarefa (não modifica nada externo)
 * @param id - ID da tarefa
 * @param titulo - Título da tarefa
 * @returns Nova tarefa
 */
const criarTarefa = (id: ____, titulo: ____): TarefaImutavel => {
  // Dica: retorne objeto com id, titulo e concluida: false
  return ____;
};

/**
 * Função pura: marca tarefa como concluída (retorna nova tarefa)
 * @param tarefa - Tarefa original
 * @returns Nova tarefa marcada como concluída
 */
const marcarConcluida = (tarefa: TarefaImutavel): TarefaImutavel => {
  // Dica: use spread operator e sobrescreva concluida
  return ____;
};

/**
 * Função pura: adiciona tag a uma tarefa
 * @param tarefa - Tarefa original
 * @param tag - Tag a adicionar
 * @returns Nova tarefa com tag adicionada
 */
const adicionarTag = (tarefa: TarefaImutavel, tag: string): TarefaImutavel => {
  // Dica: crie novo array de tags com spread [...(tarefa.tags || []), tag]
  const novasTags = ____;
  return { ...tarefa, tags: novasTags };
};

/**
 * Higher-order function: cria função de filtro por propriedade
 * @param prop - Nome da propriedade
 * @param valor - Valor esperado
 * @returns Função de filtro
 */
const criarFiltro = <T>(prop: keyof T, valor: any) => {
  // Dica: retorne função que compara item[prop] === valor
  return (item: T): boolean => ____;
};

/**
 * Filtra tarefas concluídas usando higher-order function
 * @param tarefas - Lista de tarefas
 * @returns Apenas tarefas concluídas
 */
const filtrarConcluidas = (tarefas: TarefaImutavel[]): TarefaImutavel[] => {
  // Dica: use criarFiltro('concluida', true) com filter
  return ____;
};

/**
 * Composição de funções: executa f depois g
 * @param f - Primeira função
 * @param g - Segunda função
 * @returns Função composta
 */
const compor = <A, B, C>(f: (b: B) => C, g: (a: A) => B) => {
  // Dica: retorne função que aplica g(x) e depois f(resultado)
  return (x: A): C => ____;
};

/**
 * Extrai título de uma tarefa
 * @param tarefa - Tarefa
 * @returns Título da tarefa
 */
const extrairTitulo = (tarefa: TarefaImutavel): string => {
  // Dica: retorne tarefa.titulo
  return ____;
};

/**
 * Converte string para maiúsculas
 * @param str - String original
 * @returns String em maiúsculas
 */
const maiusculas = (str: string): string => {
  // Dica: use str.toUpperCase()
  return ____;
};

/**
 * Obtém título em maiúsculas usando composição
 * @param tarefa - Tarefa
 * @returns Título em maiúsculas
 */
const obterTituloMaiusculo = compor(____, ____);  // Dica: compor(maiusculas, extrairTitulo)

/**
 * Currying: cria tarefa com ID fixo
 * @param id - ID fixo
 * @returns Função que cria tarefa com esse ID
 */
const criarComId = (id: number) => {
  // Dica: retorne função que recebe titulo e chama criarTarefa(id, titulo)
  return (titulo: ____): TarefaImutavel => ____;
};

/**
 * Recursão: conta tarefas concluídas
 * @param tarefas - Lista de tarefas
 * @returns Número de tarefas concluídas
 */
const contarConcluidasRecursivo = (tarefas: TarefaImutavel[]): number => {
  // Dica: caso base - se array vazio, retorne 0
  if (____) {
    return 0;
  }
  
  // Dica: pega primeira tarefa, conta 1 se concluida, soma com recursão no resto
  const [primeira, ...resto] = tarefas;
  const contaPrimeira = ____ ? 1 : 0;
  return ____ + contarConcluidasRecursivo(____);
};

/**
 * Reduce: soma IDs de todas as tarefas
 * @param tarefas - Lista de tarefas
 * @returns Soma dos IDs
 */
const somarIds = (tarefas: TarefaImutavel[]): number => {
  // Dica: use reduce para somar os IDs
  return ____;
};

/**
 * Map + Filter + Reduce: pipeline funcional
 * Conta caracteres totais dos títulos de tarefas concluídas
 * @param tarefas - Lista de tarefas
 * @returns Total de caracteres
 */
const contarCaracteresConcluidas = (tarefas: TarefaImutavel[]): number => {
  // Dica: filtre concluidas, mapeie para length do titulo, reduza somando
  return tarefas
    .filter(t => ____)
    .map(t => ____)
    .reduce((soma, len) => ____, ____);
};

/**
 * Função de ordem superior: aplica transformação a cada tarefa
 * @param transformacao - Função de transformação
 * @returns Função que transforma array de tarefas
 */
const mapearTarefas = (transformacao: (t: TarefaImutavel) => TarefaImutavel) => {
  // Dica: retorne função que aplica map com a transformação
  return (tarefas: ____[]): ____[] => ____;
};

/**
 * Cria função que marca todas como concluídas
 */
const marcarTodasConcluidas = mapearTarefas(____);  // Dica: use marcarConcluida

/**
 * Função pura que remove duplicatas
 * @param tarefas - Lista com possíveis duplicatas
 * @returns Lista sem duplicatas (baseado em ID)
 */
const removerDuplicatas = (tarefas: TarefaImutavel[]): TarefaImutavel[] => {
  // Dica: use reduce para acumular apenas tarefas com IDs únicos
  return tarefas.reduce((unicas: TarefaImutavel[], tarefa) => {
    const jaExiste = unicas.some(t => ____);
    return ____ ? unicas : [...unicas, ____];
  }, ____);
};

/**
 * Currying avançado: filtra por múltiplas condições
 * @param prop - Propriedade a verificar
 * @returns Função que recebe valor e retorna filtro
 */
const filtrarPor = <T>(prop: keyof T) => {
  // Dica: retorne função que recebe valor
  return (valor: any) => {
    // Dica: retorne função que recebe lista e filtra por prop === valor
    return (lista: T[]): T[] => ____;
  };
};

export {
  TarefaImutavel,
  criarTarefa,
  marcarConcluida,
  adicionarTag,
  criarFiltro,
  filtrarConcluidas,
  compor,
  extrairTitulo,
  maiusculas,
  obterTituloMaiusculo,
  criarComId,
  contarConcluidasRecursivo,
  somarIds,
  contarCaracteresConcluidas,
  mapearTarefas,
  marcarTodasConcluidas,
  removerDuplicatas,
  filtrarPor
};
