/**
 * SOLUÇÃO KOAN 10: Programação Funcional
 *
 * Este arquivo contém as soluções completas para o Koan 10.
 * Use apenas para consulta se ficar travado!
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
 */
const criarTarefa = (id: number, titulo: string): TarefaImutavel => {
  return {
    id: id,
    titulo: titulo,
    concluida: false
  };
};

/**
 * Função pura: marca tarefa como concluída (retorna nova tarefa)
 */
const marcarConcluida = (tarefa: TarefaImutavel): TarefaImutavel => {
  return { ...tarefa, concluida: true };
};

/**
 * Função pura: adiciona tag a uma tarefa
 */
const adicionarTag = (tarefa: TarefaImutavel, tag: string): TarefaImutavel => {
  const novasTags = [...(tarefa.tags || []), tag];
  return { ...tarefa, tags: novasTags };
};

/**
 * Higher-order function: cria função de filtro por propriedade
 */
const criarFiltro = <T>(prop: keyof T, valor: any) => {
  return (item: T): boolean => item[prop] === valor;
};

/**
 * Filtra tarefas concluídas usando higher-order function
 */
const filtrarConcluidas = (tarefas: TarefaImutavel[]): TarefaImutavel[] => {
  return tarefas.filter(criarFiltro<TarefaImutavel>('concluida', true));
};

/**
 * Composição de funções: executa f depois g
 */
const compor = <A, B, C>(f: (b: B) => C, g: (a: A) => B) => {
  return (x: A): C => f(g(x));
};

/**
 * Extrai título de uma tarefa
 */
const extrairTitulo = (tarefa: TarefaImutavel): string => {
  return tarefa.titulo;
};

/**
 * Converte string para maiúsculas
 */
const maiusculas = (str: string): string => {
  return str.toUpperCase();
};

/**
 * Obtém título em maiúsculas usando composição
 */
const obterTituloMaiusculo = compor(maiusculas, extrairTitulo);

/**
 * Currying: cria tarefa com ID fixo
 */
const criarComId = (id: number) => {
  return (titulo: string): TarefaImutavel => criarTarefa(id, titulo);
};

/**
 * Recursão: conta tarefas concluídas
 */
const contarConcluidasRecursivo = (tarefas: TarefaImutavel[]): number => {
  if (tarefas.length === 0) {
    return 0;
  }
  
  const [primeira, ...resto] = tarefas;
  const contaPrimeira = primeira.concluida ? 1 : 0;
  return contaPrimeira + contarConcluidasRecursivo(resto);
};

/**
 * Reduce: soma IDs de todas as tarefas
 */
const somarIds = (tarefas: TarefaImutavel[]): number => {
  return tarefas.reduce((soma, tarefa) => soma + tarefa.id, 0);
};

/**
 * Map + Filter + Reduce: pipeline funcional
 */
const contarCaracteresConcluidas = (tarefas: TarefaImutavel[]): number => {
  return tarefas
    .filter(t => t.concluida)
    .map(t => t.titulo.length)
    .reduce((soma, len) => soma + len, 0);
};

/**
 * Função de ordem superior: aplica transformação a cada tarefa
 */
const mapearTarefas = (transformacao: (t: TarefaImutavel) => TarefaImutavel) => {
  return (tarefas: TarefaImutavel[]): TarefaImutavel[] => tarefas.map(transformacao);
};

/**
 * Cria função que marca todas como concluídas
 */
const marcarTodasConcluidas = mapearTarefas(marcarConcluida);

/**
 * Função pura que remove duplicatas
 */
const removerDuplicatas = (tarefas: TarefaImutavel[]): TarefaImutavel[] => {
  return tarefas.reduce((unicas: TarefaImutavel[], tarefa) => {
    const jaExiste = unicas.some(t => t.id === tarefa.id);
    return jaExiste ? unicas : [...unicas, tarefa];
  }, []);
};

/**
 * Currying avançado: filtra por múltiplas condições
 */
const filtrarPor = <T>(prop: keyof T) => {
  return (valor: any) => {
    return (lista: T[]): T[] => lista.filter(item => item[prop] === valor);
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
