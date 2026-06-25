const EXAM = {
  questionCount: 40,
  totalPoints: 44,
  passingPoints: 29,
  defaultMinutes: 60,
  extraMinutes: 75,
  storageKey: "ct-ai-simulado-history-v1",
};

const chapterTargets = [
  { chapter: 1, title: "Introdução à IA", questions: 6, points: 6 },
  { chapter: 2, title: "Características de qualidade", questions: 3, points: 3 },
  { chapter: 3, title: "Machine Learning", questions: 7, points: 8 },
  { chapter: 4, title: "Teste de sistemas com IA", questions: 7, points: 8 },
  { chapter: 5, title: "Teste de dados de entrada", questions: 6, points: 7 },
  { chapter: 6, title: "Teste de modelo ML", questions: 9, points: 10 },
  { chapter: 7, title: "Teste no desenvolvimento ML", questions: 2, points: 2 },
];

const questions = [
  {
    chapter: 1,
    topic: "AI-1.1.1",
    points: 1,
    question: "Qual alternativa melhor diferencia um sistema convencional de um sistema baseado em IA?",
    options: [
      "Sistemas convencionais dependem de regras explicitamente programadas; muitos sistemas de IA aprendem padrões a partir de dados.",
      "Sistemas convencionais sempre usam GPUs; sistemas de IA sempre usam CPUs.",
      "Sistemas de IA são determinísticos por definição; sistemas convencionais são probabilísticos.",
      "Sistemas de IA não precisam de testes porque se adaptam automaticamente.",
    ],
    correct: 0,
    explanation:
      "A syllabus destaca que sistemas convencionais seguem lógica definida por humanos, enquanto muitos sistemas de IA usam inferência estatística e padrões aprendidos.",
  },
  {
    chapter: 1,
    topic: "AI-1.1.2",
    points: 1,
    question: "Um classificador de imagens treinado apenas para detectar defeitos em peças industriais é exemplo de:",
    options: ["IA geral", "IA estreita ou narrow AI", "Super IA", "IA consciente"],
    correct: 1,
    explanation:
      "Narrow AI resolve tarefas específicas. General AI e super AI são conceitos mais amplos e não representam esse caso.",
  },
  {
    chapter: 1,
    topic: "AI-1.1.3",
    points: 1,
    question: "Qual conjunto contém exemplos de tecnologias associadas a IA e ML?",
    options: [
      "Redes neurais, modelos bayesianos, SVM e random forests.",
      "HTML, CSS, DNS e SMTP.",
      "Scrum, Kanban, XP e Lean.",
      "RAID, NAT, DHCP e VPN.",
    ],
    correct: 0,
    explanation:
      "Redes neurais, modelos bayesianos, SVM e random forests aparecem como tecnologias de ML no conteúdo da CT-AI.",
  },
  {
    chapter: 1,
    topic: "AI-1.1.4",
    points: 1,
    question: "O que caracteriza melhor a IA generativa?",
    options: [
      "A capacidade de criar novos conteúdos, como texto, imagem ou código, a partir de padrões aprendidos.",
      "A execução de comandos fixos sem qualquer variação de saída.",
      "A substituição completa de critérios de aceitação e testes.",
      "A garantia matemática de que toda resposta será correta.",
    ],
    correct: 0,
    explanation:
      "GenAI produz novos artefatos com base em padrões aprendidos, mas suas saídas podem ser incorretas, enviesadas ou inseguras.",
  },
  {
    chapter: 1,
    topic: "AI-1.1.6",
    points: 1,
    question: "Ao comparar opções de hospedagem de modelos de IA, qual trade-off é comum?",
    options: [
      "Hospedagem local pode aumentar controle e privacidade; cloud pode facilitar escala e serviços gerenciados.",
      "Cloud elimina todos os riscos regulatórios e de privacidade.",
      "Hospedagem local sempre é mais barata e mais escalável.",
      "A escolha de hospedagem não afeta teste, segurança ou operação.",
    ],
    correct: 0,
    explanation:
      "A escolha de desenvolvimento e hosting afeta controle, custo, escala, privacidade, segurança e estratégia de teste.",
  },
  {
    chapter: 1,
    topic: "AI-1.1.8",
    points: 1,
    question: "Como regulações e padrões influenciam o teste de sistemas baseados em IA?",
    options: [
      "Podem exigir evidências de qualidade, segurança, transparência, controle de risco e conformidade.",
      "Eliminam a necessidade de documentação do modelo.",
      "Aplicam-se apenas a sistemas sem machine learning.",
      "Servem apenas para equipes jurídicas, sem impacto em QA.",
    ],
    correct: 0,
    explanation:
      "Regulações e padrões orientam práticas de desenvolvimento, teste, documentação, gestão de risco e avaliação de qualidade.",
  },
  {
    chapter: 2,
    topic: "AI-2.1.1",
    points: 1,
    question: "Qual característica é especialmente relevante para sistemas baseados em IA?",
    options: ["Explicabilidade", "Cor da interface", "Número de branches no Git", "Tamanho do monitor do testador"],
    correct: 0,
    explanation:
      "Explicabilidade, robustez, equidade, autonomia e transparência são exemplos relevantes para avaliar sistemas com IA.",
  },
  {
    chapter: 2,
    topic: "AI-2.1.2",
    points: 1,
    question: "Em um sistema de IA safety-related, qual cuidado é mais adequado?",
    options: [
      "Definir limites operacionais, critérios de segurança, monitoramento e mecanismos de fallback.",
      "Aceitar qualquer saída se a acurácia média for alta.",
      "Testar apenas a interface gráfica.",
      "Remover rastreabilidade para acelerar o deploy.",
    ],
    correct: 0,
    explanation:
      "Sistemas safety-related exigem atenção a dano potencial, limites de uso, mitigação, monitoramento e evidências fortes.",
  },
  {
    chapter: 2,
    topic: "AI-2.2.1",
    points: 1,
    question: "Qual é um bom exemplo de critério de aceitação para um sistema de IA?",
    options: [
      "O modelo deve atingir recall mínimo de 92% para a classe crítica em dados representativos e aprovados.",
      "O modelo deve parecer moderno para os usuários.",
      "O algoritmo deve ser complexo o suficiente para impressionar stakeholders.",
      "A equipe deve usar a biblioteca mais famosa do mercado.",
    ],
    correct: 0,
    explanation:
      "Critérios de aceitação devem ser verificáveis e alinhados a risco, qualidade, desempenho funcional e contexto de uso.",
  },
  {
    chapter: 3,
    topic: "AI-3.1.1",
    points: 1,
    question: "Qual alternativa descreve corretamente aprendizado supervisionado?",
    options: [
      "O modelo aprende a partir de exemplos rotulados com entradas e saídas esperadas.",
      "O agente aprende apenas por recompensas e punições do ambiente.",
      "O modelo só descobre agrupamentos sem rótulos.",
      "O sistema executa regras if-then-else escritas manualmente.",
    ],
    correct: 0,
    explanation:
      "No aprendizado supervisionado, dados rotulados orientam o treinamento para prever classes ou valores.",
  },
  {
    chapter: 3,
    topic: "AI-3.1.2",
    points: 1,
    question: "Qual sequência representa melhor um workflow típico de ML?",
    options: [
      "Definir problema, preparar dados, treinar, validar, testar, implantar e monitorar.",
      "Implantar, escolher métrica, coletar dados, apagar logs e treinar.",
      "Codificar tela, escolher cor, publicar e depois pensar nos dados.",
      "Treinar em produção e dispensar validação.",
    ],
    correct: 0,
    explanation:
      "O workflow de ML envolve entendimento do problema, dados, treinamento, avaliação, implantação e monitoramento contínuo.",
  },
  {
    chapter: 3,
    topic: "AI-3.1.4",
    points: 1,
    question: "Qual afirmação sobre RAG está correta?",
    options: [
      "RAG combina geração com recuperação de informações externas para apoiar respostas mais contextualizadas.",
      "RAG elimina a necessidade de avaliar respostas geradas.",
      "RAG é sinônimo de aprendizado por reforço.",
      "RAG só funciona para imagens e nunca para texto.",
    ],
    correct: 0,
    explanation:
      "Retrieval-Augmented Generation usa recuperação de conhecimento para complementar a geração, mas ainda precisa de testes.",
  },
  {
    chapter: 3,
    topic: "AI-3.2.1",
    points: 1,
    question: "Qual atividade faz parte da preparação de dados para ML?",
    options: [
      "Limpeza, transformação, tratamento de valores ausentes e divisão adequada dos conjuntos.",
      "Ignorar outliers sempre, sem análise.",
      "Misturar dados de teste no treinamento para melhorar a pontuação.",
      "Usar apenas dados sintéticos sem critério.",
    ],
    correct: 0,
    explanation:
      "Preparação de dados inclui limpeza, transformação, rotulagem, análise de qualidade e separação correta dos datasets.",
  },
  {
    chapter: 3,
    topic: "AI-3.2.3",
    points: 1,
    question: "Qual é o papel do dataset de teste?",
    options: [
      "Avaliar o modelo final em dados não usados para treinamento ou ajuste.",
      "Ajustar hiperparâmetros durante todo o treinamento.",
      "Substituir os dados de produção sem monitoramento.",
      "Garantir que não existam vieses nos dados.",
    ],
    correct: 0,
    explanation:
      "O dataset de teste deve estimar o desempenho final em dados separados, reduzindo avaliação otimista por vazamento.",
  },
  {
    chapter: 3,
    topic: "AI-3.3.1",
    points: 2,
    question:
      "Em uma matriz de confusão com TP=80, FP=20 e FN=10, qual é aproximadamente a precisão?",
    options: ["80%", "88,9%", "90%", "20%"],
    correct: 0,
    explanation:
      "Precisão = TP / (TP + FP). Portanto, 80 / (80 + 20) = 0,80 ou 80%.",
  },
  {
    chapter: 3,
    topic: "AI-3.4.3",
    points: 1,
    question: "Para redes neurais, uma medida de cobertura pode ser usada para:",
    options: [
      "Avaliar quais partes ou comportamentos internos da rede foram exercitados por testes.",
      "Provar que o modelo não terá drift.",
      "Substituir todos os testes funcionais.",
      "Garantir explicabilidade completa para qualquer rede.",
    ],
    correct: 0,
    explanation:
      "Medidas de cobertura ajudam a entender o quanto os testes exercitam estruturas internas, mas não garantem ausência de defeitos.",
  },
  {
    chapter: 4,
    topic: "AI-4.1.1",
    points: 1,
    question: "Qual comparação entre sistemas de IA locked e adaptive está correta?",
    options: [
      "Locked não muda seu comportamento após release; adaptive pode continuar aprendendo ou ajustando-se em operação.",
      "Adaptive nunca precisa de monitoramento.",
      "Locked é sempre inseguro e adaptive é sempre seguro.",
      "Ambos sempre geram exatamente a mesma saída para qualquer entrada.",
    ],
    correct: 0,
    explanation:
      "Sistemas adaptive tendem a exigir maior controle de mudança, monitoramento e estratégia de teste em operação.",
  },
  {
    chapter: 4,
    topic: "AI-4.1.2",
    points: 1,
    question: "Por que uma abordagem estatística costuma ser necessária ao testar sistemas baseados em IA?",
    options: [
      "Porque o comportamento pode ser probabilístico e deve ser avaliado por distribuições, amostras e métricas.",
      "Porque testes unitários não podem existir em nenhum sistema de IA.",
      "Porque resultados estatísticos sempre provam correção total.",
      "Porque requisitos deixam de ser importantes.",
    ],
    correct: 0,
    explanation:
      "Muitos sistemas de IA exigem avaliação por amostras representativas, métricas e tolerâncias, não apenas exemplos isolados.",
  },
  {
    chapter: 4,
    topic: "AI-4.1.3",
    points: 1,
    question: "O que é um desafio comum de test oracle em IA?",
    options: [
      "Pode ser difícil saber a resposta esperada exata para todas as entradas possíveis.",
      "Oráculos sempre são triviais em GenAI.",
      "O oráculo deve ser o próprio modelo em teste.",
      "Todo teste de IA dispensa resultado esperado.",
    ],
    correct: 0,
    explanation:
      "Em IA, especialmente com saídas probabilísticas ou generativas, definir a saída correta pode ser difícil.",
  },
  {
    chapter: 4,
    topic: "AI-4.2.1",
    points: 1,
    question: "Qual técnica é útil para testar sistemas de GenAI e LLM?",
    options: [
      "Testes exploratórios com prompts variados, avaliação de segurança e análise de qualidade das respostas.",
      "Testar somente se a página carrega.",
      "Medir apenas tempo de build.",
      "Comparar apenas número de linhas de código.",
    ],
    correct: 0,
    explanation:
      "GenAI exige avaliação de utilidade, factualidade, robustez, segurança, vieses, privacidade e comportamento em prompts variados.",
  },
  {
    chapter: 4,
    topic: "AI-4.2.2",
    points: 2,
    question: "Em red teaming para GenAI, qual ação é mais apropriada?",
    options: [
      "Tentar induzir respostas inseguras, violação de política ou vazamento, documentando riscos e evidências.",
      "Executar apenas testes felizes definidos pelo time de produto.",
      "Desativar logs para evitar exposição de falhas.",
      "Usar uma única pergunta genérica e aprovar se houver resposta.",
    ],
    correct: 0,
    explanation:
      "Red teaming busca revelar comportamentos indesejados ou perigosos, usando cenários adversariais e documentação dos achados.",
  },
  {
    chapter: 4,
    topic: "AI-4.3.1",
    points: 1,
    question: "Qual nível de teste é específico no contexto de ML segundo a abordagem da syllabus?",
    options: [
      "Teste de dados de entrada e teste de modelo ML.",
      "Teste apenas de CSS.",
      "Teste de contrato social.",
      "Teste de branch naming.",
    ],
    correct: 0,
    explanation:
      "A CT-AI trata níveis como entrada de dados e modelo ML, além de níveis comuns de sistemas.",
  },
  {
    chapter: 4,
    topic: "AI-4.3.2",
    points: 1,
    question: "Como aplicar risk-based testing em sistemas de ML?",
    options: [
      "Priorizar testes conforme impacto e probabilidade de riscos como viés, drift, robustez e falha de desempenho.",
      "Testar tudo com a mesma profundidade, sem considerar criticidade.",
      "Testar só depois do deploy em produção.",
      "Trocar critérios de risco por opinião individual.",
    ],
    correct: 0,
    explanation:
      "Risk-based testing direciona esforço para riscos mais relevantes ao produto, usuário, segurança e negócio.",
  },
  {
    chapter: 5,
    topic: "AI-5.1.1",
    points: 1,
    question: "Qual é um risco típico relacionado a dados de entrada para ML?",
    options: [
      "Dados de treinamento incompletos, enviesados, desatualizados ou não representativos.",
      "Excesso de comentários no CSS.",
      "Uso de nomes longos para variáveis.",
      "Ausência de animação na tela inicial.",
    ],
    correct: 0,
    explanation:
      "A qualidade dos dados influencia diretamente a qualidade, robustez e equidade do sistema de ML.",
  },
  {
    chapter: 5,
    topic: "AI-5.1.2",
    points: 1,
    question: "Qual abordagem ajuda a testar viés em um dataset ou modelo?",
    options: [
      "Comparar métricas de desempenho entre grupos relevantes e investigar diferenças injustificadas.",
      "Usar somente acurácia global.",
      "Remover variáveis sensíveis sem analisar proxies.",
      "Aumentar o batch size até o viés desaparecer.",
    ],
    correct: 0,
    explanation:
      "Testar bias envolve analisar grupos, proxies, representatividade, métricas e impacto do comportamento do modelo.",
  },
  {
    chapter: 5,
    topic: "AI-5.1.3",
    points: 1,
    question: "O que data pipeline testing busca verificar?",
    options: [
      "Se coleta, transformação, validação, versionamento e entrega de dados mantêm integridade e qualidade.",
      "Se o pipeline tem o nome mais curto possível.",
      "Se o modelo usa sempre o algoritmo mais recente.",
      "Se a equipe consegue treinar sem requisitos.",
    ],
    correct: 0,
    explanation:
      "Defeitos no pipeline podem corromper dados, gerar vazamento, alterar distribuições e comprometer o modelo.",
  },
  {
    chapter: 5,
    topic: "AI-5.1.4",
    points: 1,
    question: "Quando um dataset é mais representativo?",
    options: [
      "Quando reflete adequadamente a população, os cenários e as condições esperadas de uso.",
      "Quando possui apenas dados fáceis de classificar.",
      "Quando exclui casos raros sem análise de risco.",
      "Quando é pequeno o bastante para revisão manual completa.",
    ],
    correct: 0,
    explanation:
      "Representatividade depende de cobrir a população e as condições relevantes ao uso pretendido do sistema.",
  },
  {
    chapter: 5,
    topic: "AI-5.1.5",
    points: 2,
    question:
      "Um campo idade deve aceitar valores de 0 a 120. Qual teste de constraint é mais direto?",
    options: [
      "Verificar valores como -1, 0, 120 e 121 para validar limites e rejeições.",
      "Aumentar o número de épocas de treinamento.",
      "Executar red teaming no chatbot.",
      "Comparar duas versões do modelo em produção.",
    ],
    correct: 0,
    explanation:
      "Dataset constraint testing verifica regras como domínio, limites, formato, unicidade, obrigatoriedade e consistência.",
  },
  {
    chapter: 5,
    topic: "AI-5.1.6",
    points: 1,
    question: "Qual é o foco de label correctness testing?",
    options: [
      "Verificar se os rótulos dos exemplos estão corretos, consistentes e adequados ao problema.",
      "Escolher a cor das etiquetas na interface.",
      "Garantir que todo modelo será explicável.",
      "Substituir a etapa de validação por treinamento adicional.",
    ],
    correct: 0,
    explanation:
      "Rótulos incorretos ou inconsistentes podem ensinar o comportamento errado ao modelo e distorcer métricas.",
  },
  {
    chapter: 6,
    topic: "AI-6.1.1",
    points: 1,
    question: "Qual mitigação está corretamente associada ao risco de modelo overfitted?",
    options: [
      "Testar desempenho em dados separados e comparar treino, validação e teste.",
      "Ignorar dados de teste para não reduzir a acurácia.",
      "Aumentar sempre a complexidade do modelo.",
      "Publicar o modelo sem monitoramento.",
    ],
    correct: 0,
    explanation:
      "Overfitting aparece quando o modelo aprende demais o treinamento e generaliza mal. Testes separados ajudam a detectar.",
  },
  {
    chapter: 6,
    topic: "AI-6.1.2",
    points: 1,
    question: "Qual item é relevante em uma revisão de documentação de modelo ML?",
    options: [
      "Propósito, dados usados, limitações, métricas, interface, riscos e condições de uso.",
      "Apenas o logotipo do fornecedor.",
      "Somente o número de linhas do notebook.",
      "A preferência pessoal do desenvolvedor por IDE.",
    ],
    correct: 0,
    explanation:
      "Documentação revisável apoia entendimento, rastreabilidade, manutenção, avaliação de risco e uso responsável.",
  },
  {
    chapter: 6,
    topic: "AI-6.1.3",
    points: 1,
    question: "Como testar desempenho funcional de um sistema probabilístico de ML?",
    options: [
      "Usar métricas definidas, datasets adequados, limiares de aceitação e análise estatística dos resultados.",
      "Executar uma única entrada e aprovar se o resultado parecer bom.",
      "Avaliar apenas cobertura de código.",
      "Confiar somente na opinião do fornecedor do modelo.",
    ],
    correct: 0,
    explanation:
      "Sistemas probabilísticos exigem avaliação por métricas, amostras, limiares e evidências estatísticas.",
  },
  {
    chapter: 6,
    topic: "AI-6.1.4",
    points: 1,
    question: "Qual é o objetivo de adversarial testing em ML?",
    options: [
      "Avaliar como o modelo se comporta diante de entradas manipuladas para explorar fraquezas.",
      "Testar somente o fluxo feliz.",
      "Medir satisfação do time com a ferramenta.",
      "Garantir que o dataset tem labels corretos.",
    ],
    correct: 0,
    explanation:
      "Adversarial testing procura revelar vulnerabilidades, falta de robustez e respostas inadequadas sob entradas adversariais.",
  },
  {
    chapter: 6,
    topic: "AI-6.1.5",
    points: 2,
    question:
      "Um tradutor automático deve preservar o significado quando a mesma frase recebe espaços extras. Que tipo de teste isso exemplifica?",
    options: ["Teste metamórfico", "A/B testing", "Smoke testing", "Teste de instalação"],
    correct: 0,
    explanation:
      "Teste metamórfico usa relações esperadas entre entradas e saídas quando o oráculo exato é difícil.",
  },
  {
    chapter: 6,
    topic: "AI-6.1.7",
    points: 1,
    question: "O que drift testing monitora em produção?",
    options: [
      "Mudanças na distribuição dos dados ou na relação entre dados e resultado esperado ao longo do tempo.",
      "Somente variações de cor na UI.",
      "A quantidade de commits no repositório.",
      "A versão do navegador do testador.",
    ],
    correct: 0,
    explanation:
      "Data drift e concept drift podem degradar o desempenho do modelo e exigem monitoramento e resposta operacional.",
  },
  {
    chapter: 6,
    topic: "AI-6.1.8",
    points: 1,
    question: "Qual sinal sugere underfitting?",
    options: [
      "Desempenho ruim tanto no treinamento quanto em dados de validação/teste.",
      "Excelente desempenho no treino e ruim no teste.",
      "Apenas queda de tráfego no site.",
      "Aumento do número de usuários ativos.",
    ],
    correct: 0,
    explanation:
      "Underfitting indica que o modelo não capturou padrões suficientes e performa mal até no conjunto de treinamento.",
  },
  {
    chapter: 6,
    topic: "AI-6.1.9",
    points: 1,
    question: "Como A/B testing é usado no contexto de ML?",
    options: [
      "Comparando versões de modelo ou estratégia com usuários/tráfego controlado e métricas definidas.",
      "Comparando apenas nomes de arquivos.",
      "Executando sempre no ambiente local sem usuários.",
      "Substituindo revisão de documentação.",
    ],
    correct: 0,
    explanation:
      "A/B testing compara alternativas em operação controlada para avaliar impacto em métricas de negócio e qualidade.",
  },
  {
    chapter: 6,
    topic: "AI-6.1.10",
    points: 1,
    question: "Qual é a ideia de back-to-back testing em ML?",
    options: [
      "Comparar saídas de duas versões/modelos para identificar diferenças relevantes ou regressões.",
      "Testar o mesmo botão duas vezes seguidas.",
      "Executar teste de carga antes do teste funcional.",
      "Treinar dois modelos com dados misturados de produção sem critério.",
    ],
    correct: 0,
    explanation:
      "Back-to-back testing compara comportamentos entre versões ou sistemas, útil quando o oráculo absoluto é difícil.",
  },
  {
    chapter: 7,
    topic: "AI-7.1.1",
    points: 1,
    question: "Qual risco é típico durante o desenvolvimento de ML?",
    options: [
      "Escolha inadequada de algoritmo, avaliação mal definida ou vulnerabilidade no framework de ML.",
      "Falta de slogan comercial.",
      "Uso de teclado diferente pelo time.",
      "Ausência de animações em relatórios.",
    ],
    correct: 0,
    explanation:
      "A CT-AI inclui riscos de desenvolvimento como algoritmo inadequado, avaliação ruim e problemas no framework.",
  },
  {
    chapter: 7,
    topic: "AI-7.1.2",
    points: 1,
    question: "Qual teste é relevante na implantação de um sistema de ML?",
    options: [
      "Smoke, shadow, API, rollback e monitoramento inicial de comportamento em produção.",
      "Apenas revisão ortográfica da documentação.",
      "Somente teste manual da home page.",
      "Nenhum teste, porque o modelo já foi treinado.",
    ],
    correct: 0,
    explanation:
      "Deployment testing em ML deve verificar integração, API, operação, monitoramento, rollback e estratégias como shadow testing.",
  },
];

let currentAttempt = null;
let currentIndex = 0;
let timerId = null;

const elements = {
  extraTime: document.querySelector("#extra-time"),
  startBtn: document.querySelector("#start-btn"),
  runsStat: document.querySelector("#runs-stat"),
  passFailStat: document.querySelector("#pass-fail-stat"),
  bestStat: document.querySelector("#best-stat"),
  lastStat: document.querySelector("#last-stat"),
  bestChapterStat: document.querySelector("#best-chapter-stat"),
  bestChapterDetail: document.querySelector("#best-chapter-detail"),
  focusChapterStat: document.querySelector("#focus-chapter-stat"),
  focusChapterDetail: document.querySelector("#focus-chapter-detail"),
  timer: document.querySelector("#timer"),
  progressBar: document.querySelector("#progress-bar"),
  progressText: document.querySelector("#progress-text"),
  scoreText: document.querySelector("#score-text"),
  alternativesText: document.querySelector("#alternatives-text"),
  chapterBreakdown: document.querySelector("#chapter-breakdown"),
  emptyState: document.querySelector("#empty-state"),
  questionState: document.querySelector("#question-state"),
  questionCounter: document.querySelector("#question-counter"),
  questionTopic: document.querySelector("#question-topic"),
  questionTitle: document.querySelector("#question-title"),
  options: document.querySelector("#options"),
  feedback: document.querySelector("#feedback"),
  prevBtn: document.querySelector("#prev-btn"),
  nextBtn: document.querySelector("#next-btn"),
  finishBtn: document.querySelector("#finish-btn"),
  resultPanel: document.querySelector("#result-panel"),
  resultTitle: document.querySelector("#result-title"),
  resultDetails: document.querySelector("#result-details"),
  reviewBtn: document.querySelector("#review-btn"),
  resetHistoryBtn: document.querySelector("#reset-history-btn"),
  historyList: document.querySelector("#history-list"),
};

function shuffle(list) {
  const shuffled = [...list];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function generateAttemptId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function prepareQuestion(question) {
  const shuffledOptions = shuffle(
    question.options.map((text, originalIndex) => ({
      text,
      isCorrect: originalIndex === question.correct,
    })),
  );

  return {
    ...question,
    options: shuffledOptions.map((option) => option.text),
    correct: shuffledOptions.findIndex((option) => option.isCorrect),
  };
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(EXAM.storageKey)) || [];
  } catch {
    return [];
  }
}

function saveHistory(history) {
  localStorage.setItem(EXAM.storageKey, JSON.stringify(history.slice(0, 12)));
}

function createAttempt() {
  const minutes = elements.extraTime.checked ? EXAM.extraMinutes : EXAM.defaultMinutes;
  const attemptQuestions = shuffle(questions).slice(0, EXAM.questionCount).map(prepareQuestion);

  return {
    id: generateAttemptId(),
    startedAt: new Date().toISOString(),
    durationSeconds: minutes * 60,
    remainingSeconds: minutes * 60,
    questions: attemptQuestions,
    answers: Array(attemptQuestions.length).fill(null),
    finished: false,
    timedOut: false,
  };
}

function createChapterStats() {
  const byChapter = new Map();
  chapterTargets.forEach((target) => {
    byChapter.set(target.chapter, { answered: 0, correct: 0, points: 0 });
  });

  return byChapter;
}

function calculateScore(attempt = currentAttempt) {
  const byChapter = createChapterStats();

  if (!attempt) {
    return { correct: 0, answered: 0, points: 0, byChapter };
  }

  let answered = 0;
  let correct = 0;
  let points = 0;

  attempt.questions.forEach((question, index) => {
    const selected = attempt.answers[index];
    const chapterStats = byChapter.get(question.chapter);

    if (selected !== null) {
      answered += 1;
      chapterStats.answered += 1;
    }

    if (selected === question.correct) {
      correct += 1;
      points += question.points;
      chapterStats.correct += 1;
      chapterStats.points += question.points;
    }
  });

  return { correct, answered, points, byChapter };
}

function getChapterTarget(chapter) {
  return chapterTargets.find((target) => target.chapter === Number(chapter));
}

function createChapterSnapshot(score) {
  return Object.fromEntries(
    chapterTargets.map((target) => {
      const stats = score.byChapter.get(target.chapter);

      return [
        target.chapter,
        {
          title: target.title,
          answered: stats.answered,
          correct: stats.correct,
          points: stats.points,
          targetQuestions: target.questions,
          targetPoints: target.points,
        },
      ];
    }),
  );
}

function aggregateHistoryPerformance(history) {
  const aggregate = new Map();
  chapterTargets.forEach((target) => {
    aggregate.set(target.chapter, {
      ...target,
      answered: 0,
      correct: 0,
      points: 0,
      attempts: 0,
    });
  });

  history.forEach((item) => {
    if (!item.byChapter) return;

    Object.entries(item.byChapter).forEach(([chapter, stats]) => {
      const chapterStats = aggregate.get(Number(chapter));
      if (!chapterStats) return;

      chapterStats.answered += stats.answered || 0;
      chapterStats.correct += stats.correct || 0;
      chapterStats.points += stats.points || 0;
      chapterStats.attempts += stats.answered ? 1 : 0;
    });
  });

  const chaptersWithAnswers = [...aggregate.values()].filter((chapter) => chapter.answered > 0);

  if (!chaptersWithAnswers.length) {
    return { best: null, focus: null };
  }

  const ranked = chaptersWithAnswers
    .map((chapter) => ({
      ...chapter,
      ratio: chapter.correct / chapter.answered,
    }))
    .sort((a, b) => b.ratio - a.ratio || b.answered - a.answered);

  return {
    best: ranked[0],
    focus: [...ranked].sort((a, b) => a.ratio - b.ratio || b.answered - a.answered)[0],
  };
}

function formatPercent(value) {
  return `${Math.round(value * 100)}%`;
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function renderDashboard() {
  const history = getHistory();
  const passed = history.filter((item) => item.passed).length;
  const failed = history.length - passed;
  const best = history.reduce((max, item) => Math.max(max, item.points), 0);
  const last = history[0];
  const performance = aggregateHistoryPerformance(history);

  elements.runsStat.textContent = history.length;
  elements.passFailStat.textContent = `${passed} / ${failed}`;
  elements.bestStat.textContent = `${best} / ${EXAM.totalPoints}`;
  elements.lastStat.textContent = last ? `${last.points}/${EXAM.totalPoints}` : "-";

  if (performance.best) {
    elements.bestChapterStat.textContent = `Cap. ${performance.best.chapter}`;
    elements.bestChapterDetail.textContent = `${performance.best.title} - ${formatPercent(performance.best.ratio)} de acerto`;
  } else {
    elements.bestChapterStat.textContent = "-";
    elements.bestChapterDetail.textContent = "Finalize uma tentativa para ver.";
  }

  if (performance.focus) {
    elements.focusChapterStat.textContent = `Cap. ${performance.focus.chapter}`;
    elements.focusChapterDetail.textContent = `${performance.focus.title} - ${formatPercent(performance.focus.ratio)} de acerto`;
  } else {
    elements.focusChapterStat.textContent = "-";
    elements.focusChapterDetail.textContent = "O sistema aprende com seus erros.";
  }

  renderHistory(history);
}

function renderHistory(history) {
  if (!history.length) {
    elements.historyList.innerHTML = '<p class="hero-text">Nenhuma tentativa finalizada ainda.</p>';
    return;
  }

  elements.historyList.innerHTML = history
    .map((item, index) => {
      const date = new Date(item.finishedAt).toLocaleString("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
      });
      const label = item.passed ? "Aprovado" : item.timedOut ? "Tempo esgotado" : "Reprovado";
      const badgeClass = item.passed ? "pass" : item.timedOut ? "time" : "fail";

      return `
        <div class="history-item">
          <div>
            <strong>Tentativa ${history.length - index}</strong>
            <div class="hero-text">${date} - ${item.correct}/${EXAM.questionCount} corretas - ${item.points}/${EXAM.totalPoints} pontos</div>
          </div>
          <span class="badge ${badgeClass}">${label}</span>
        </div>
      `;
    })
    .join("");
}

function renderChapterBreakdown() {
  const score = calculateScore();

  elements.chapterBreakdown.innerHTML = chapterTargets
    .map((target) => {
      const chapterStats = score.byChapter.get(target.chapter);
      const width = currentAttempt ? (chapterStats.answered / target.questions) * 100 : 0;
      const accuracy = chapterStats.answered ? formatPercent(chapterStats.correct / chapterStats.answered) : "0%";

      return `
        <div class="chapter-row">
          <strong>Cap. ${target.chapter}: ${target.title}</strong>
          <span>${chapterStats.answered}/${target.questions} respondidas - ${accuracy} acerto - ${chapterStats.points}/${target.points} pts</span>
          <div class="chapter-meter"><div style="width: ${width}%"></div></div>
        </div>
      `;
    })
    .join("");
}

function renderProgress() {
  const score = calculateScore();
  const percentage = currentAttempt ? (score.answered / EXAM.questionCount) * 100 : 0;

  elements.progressText.textContent = `${score.answered} / ${EXAM.questionCount} respondidas`;
  elements.scoreText.textContent = `${score.points} / ${EXAM.totalPoints} pontos`;
  elements.alternativesText.textContent = `Total de alternativas: ${EXAM.questionCount * 4}`;
  elements.progressBar.style.width = `${percentage}%`;

  renderChapterBreakdown();
}

function renderTimer() {
  if (!currentAttempt) {
    elements.timer.textContent = `${EXAM.defaultMinutes}:00`;
    return;
  }

  elements.timer.textContent = formatTime(currentAttempt.remainingSeconds);
}

function renderQuestion() {
  if (!currentAttempt) {
    elements.emptyState.classList.remove("hidden");
    elements.questionState.classList.add("hidden");
    renderProgress();
    return;
  }

  const question = currentAttempt.questions[currentIndex];
  const selected = currentAttempt.answers[currentIndex];

  elements.emptyState.classList.add("hidden");
  elements.questionState.classList.remove("hidden");
  elements.questionCounter.textContent = `Questão ${currentIndex + 1} de ${EXAM.questionCount}`;
  elements.questionTopic.textContent = `Cap. ${question.chapter} - ${question.topic} - ${question.points} ponto${question.points > 1 ? "s" : ""}`;
  elements.questionTitle.textContent = question.question;

  elements.options.innerHTML = question.options
    .map((option, optionIndex) => {
      const isAnswered = selected !== null;
      const isCorrect = optionIndex === question.correct;
      const isSelected = optionIndex === selected;
      const statusClass = isAnswered && isCorrect ? "correct" : isAnswered && isSelected ? "incorrect" : "";

      return `
        <button class="option-button ${statusClass}" data-option="${optionIndex}" ${isAnswered || currentAttempt.finished ? "disabled" : ""}>
          <span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span>
          <span>${option}</span>
        </button>
      `;
    })
    .join("");

  elements.options.querySelectorAll(".option-button").forEach((button) => {
    button.addEventListener("click", () => answerQuestion(Number(button.dataset.option)));
  });

  renderFeedback();
  elements.prevBtn.disabled = currentIndex === 0;
  elements.nextBtn.disabled = currentIndex === EXAM.questionCount - 1;
  renderProgress();
}

function renderFeedback() {
  const question = currentAttempt.questions[currentIndex];
  const selected = currentAttempt.answers[currentIndex];

  if (selected === null) {
    elements.feedback.className = "feedback hidden";
    elements.feedback.innerHTML = "";
    return;
  }

  const isCorrect = selected === question.correct;
  const correctLetter = String.fromCharCode(65 + question.correct);
  const selectedLetter = String.fromCharCode(65 + selected);
  const chapter = getChapterTarget(question.chapter);
  const studyHint = `Para memorizar: relacione ${question.topic} com ${chapter?.title || "o capítulo"} e explique em voz alta por que as outras alternativas são fracas.`;

  elements.feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
  elements.feedback.innerHTML = isCorrect
    ? `<strong>Você acertou: alternativa ${correctLetter}.</strong>${question.explanation}<small>${studyHint}</small>`
    : `<strong>Você marcou ${selectedLetter}. A correta é ${correctLetter}.</strong>${question.explanation}<small>${studyHint}</small>`;
}

function answerQuestion(optionIndex) {
  if (!currentAttempt || currentAttempt.finished) return;

  currentAttempt.answers[currentIndex] = optionIndex;
  renderQuestion();
}

function startTimer() {
  clearInterval(timerId);
  timerId = setInterval(() => {
    if (!currentAttempt || currentAttempt.finished) {
      clearInterval(timerId);
      return;
    }

    currentAttempt.remainingSeconds -= 1;
    renderTimer();

    if (currentAttempt.remainingSeconds <= 0) {
      currentAttempt.remainingSeconds = 0;
      currentAttempt.timedOut = true;
      finishAttempt();
    }
  }, 1000);
}

function startAttempt() {
  currentAttempt = createAttempt();
  currentIndex = 0;
  elements.resultPanel.className = "result-panel hidden";
  renderTimer();
  renderQuestion();
  startTimer();
}

function finishAttempt() {
  if (!currentAttempt || currentAttempt.finished) return;

  currentAttempt.finished = true;
  clearInterval(timerId);

  const score = calculateScore();
  const passed = score.points >= EXAM.passingPoints;
  const historyItem = {
    id: currentAttempt.id,
    finishedAt: new Date().toISOString(),
    points: score.points,
    correct: score.correct,
    answered: score.answered,
    passed,
    timedOut: currentAttempt.timedOut,
    byChapter: createChapterSnapshot(score),
  };

  saveHistory([historyItem, ...getHistory()]);
  renderDashboard();
  renderProgress();
  renderQuestion();

  elements.resultPanel.className = `result-panel ${passed ? "pass" : "fail"}`;
  elements.resultTitle.textContent = passed ? "Aprovado no simulado" : "Reprovado no simulado";
  elements.resultDetails.textContent = `${score.points}/${EXAM.totalPoints} pontos, ${score.correct}/${EXAM.questionCount} questões corretas e ${score.answered}/${EXAM.questionCount} respondidas. Critério: ${EXAM.passingPoints}/${EXAM.totalPoints} pontos.`;
  elements.resultPanel.scrollIntoView({ behavior: "smooth", block: "center" });
}

function resetHistory() {
  localStorage.removeItem(EXAM.storageKey);
  renderDashboard();
}

elements.startBtn.addEventListener("click", startAttempt);
elements.prevBtn.addEventListener("click", () => {
  currentIndex = Math.max(0, currentIndex - 1);
  renderQuestion();
});
elements.nextBtn.addEventListener("click", () => {
  currentIndex = Math.min(EXAM.questionCount - 1, currentIndex + 1);
  renderQuestion();
});
elements.finishBtn.addEventListener("click", finishAttempt);
elements.reviewBtn.addEventListener("click", () => {
  currentIndex = 0;
  renderQuestion();
  elements.questionState.scrollIntoView({ behavior: "smooth", block: "start" });
});
elements.resetHistoryBtn.addEventListener("click", resetHistory);

renderDashboard();
renderTimer();
renderProgress();
renderQuestion();
