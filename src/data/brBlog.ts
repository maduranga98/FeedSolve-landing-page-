// Portuguese (Brazil) blog posts, rendered at /br/blog/<slug>/.
// Paragraphs may contain inline [âncora](/url) links; internal URLs must keep
// their trailing slash (scripts/check-seo.mjs fails the build otherwise).

import type { HreflangCluster } from "@/lib/seo/hreflang";

export type BrPost = {
  slug: string;
  /** <title> without the " | FeedSolve" suffix. Keep under 48 characters. */
  title: string;
  description: string;
  h1: string;
  keyword: string;
  datePublished: string;
  dateModified: string;
  /** Short summary for the hub card. */
  excerpt: string;
  quickAnswer: string;
  sections: { h2: string; paragraphs: string[]; list?: string[] }[];
  faqs: { q: string; a: string }[];
  /** The money page this post feeds. */
  solution: { href: string; label: string };
  /** Native English equivalent, when one exists (drives hreflang). */
  cluster?: HreflangCluster;
  englishHref?: string;
};

export const BR_POSTS: BrPost[] = [
  {
    slug: "como-lidar-com-reclamacoes-em-restaurante",
    title: "Como Lidar com Reclamações em Restaurante",
    description:
      "Guia prático para lidar com reclamação de cliente em restaurante: o que dizer na mesa, quem resolve, como registrar e como evitar a avaliação negativa.",
    h1: "Como lidar com reclamações em restaurante: o guia para o dono e o gerente",
    keyword: "como lidar com reclamações em restaurante",
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    excerpt: "O que dizer na mesa, quem resolve e como registrar para o mesmo erro não voltar na semana seguinte.",
    quickAnswer:
      "Para lidar bem com uma reclamação em restaurante, siga sempre a mesma sequência: ouça sem interromper, agradeça por o cliente ter falado na hora, resolva o problema concreto (refaça o prato, corrija a conta), ofereça uma compensação proporcional e volte à mesa antes de o cliente ir embora. Para os clientes que não reclamam em voz alta, ofereça um canal privado, como um QR Code na mesa, e registre cada reclamação para corrigir a causa, e não só pedir desculpas toda semana.",
    sections: [
      {
        h2: "As duas janelas da reclamação",
        paragraphs: [
          "Toda reclamação de restaurante acontece em uma de duas janelas. Na primeira, o cliente ainda está na mesa: a carne passou do ponto, a espera passou de quarenta minutos, veio um prato na conta que ninguém pediu. Tudo nessa janela tem solução em minutos e a baixo custo: refazer o prato, corrigir a conta, oferecer uma sobremesa.",
          "Na segunda janela, o cliente já foi embora. A mesma reclamação virou uma avaliação de uma estrela no Google ou no iFood, um cliente que não volta, uma história contada para os amigos. Nada disso se resolve com um prato novo. Todo o trabalho de gestão de reclamações é trazer os problemas da segunda janela para a primeira.",
          "O problema é que a maioria dos clientes pula a primeira janela. Reclamar com um garçom apressado parece confronto, então muita gente come calada, paga e desabafa depois, em público.",
        ],
      },
      {
        h2: "A sequência que funciona na mesa",
        paragraphs: [
          "Quando o cliente reclama em voz alta, use sempre a mesma sequência. Ela funciona porque tira a improvisação da mão de um garçom nervoso no meio do serviço:",
        ],
        list: [
          "Ouça até o fim, sem interromper e sem se justificar.",
          "Agradeça: \"Obrigado por nos avisar agora, assim dá tempo de resolver.\"",
          "Resolva o problema concreto: refaça o prato, corrija a conta, troque a mesa.",
          "Ofereça algo proporcional: um café, uma sobremesa, o prato por conta da casa se o erro foi grave.",
          "Volte à mesa antes da conta para confirmar que ficou tudo certo.",
        ],
      },
      {
        h2: "O que dizer em cada tipo de reclamação",
        paragraphs: [
          "Comida: não discuta o gosto. \"Vou pedir para refazerem agora, do jeito que o senhor pediu.\" Discutir se a carne estava ou não ao ponto só piora a experiência.",
          "Demora: dê um tempo concreto, não um \"já está saindo\". \"A cozinha está com fila; seu prato sai em dez minutos. Enquanto isso, trago uma entrada por nossa conta.\"",
          "Conta errada: corrija primeiro, explique nunca. O cliente não quer saber por que o sistema lançou duas vezes; quer a conta certa.",
          "Atendimento: leve a conversa para longe da mesa e do garçom envolvido. Quem resolve é o gerente, não a pessoa de quem o cliente está reclamando.",
        ],
      },
      {
        h2: "Dê um canal para quem não reclama em voz alta",
        paragraphs: [
          "Como a maioria dos clientes não reclama na mesa, o restaurante precisa de um canal privado, que o cliente use sem constrangimento. O mais simples é um QR Code na mesa ou na comanda: o cliente escaneia, escreve o problema em segundos, sem login, e o gerente é avisado na hora. Veja como montar isso na página de [avaliação de restaurante por QR Code](/br/restaurantes/).",
          "Mantenha o formulário curto. Uma nota para a comida, uma para o atendimento e uma pergunta aberta bastam. Se quiser perguntas prontas, use nosso [modelo de pesquisa de satisfação para restaurante](/br/blog/pesquisa-de-satisfacao-restaurante-modelo/).",
        ],
      },
      {
        h2: "Registre tudo para corrigir a causa",
        paragraphs: [
          "Pedir desculpas pela mesma coisa toda sexta-feira não é gestão de reclamações. Registre cada reclamação, mesmo as resolvidas na hora, com o tipo do problema, quem resolveu e como. Uma vez por semana, olhe a lista: uma reclamação de demora é uma noite ruim; cinco na mesma semana são um problema de escala ou de cozinha.",
          "Um [sistema de gestão de reclamações](/br/software-de-gestao-de-reclamacoes/) faz isso sozinho: cada relato vira um caso com responsável, status e histórico, e o painel mostra quais problemas se repetem.",
        ],
      },
    ],
    faqs: [
      {
        q: "Qual a primeira coisa a fazer quando um cliente reclama no restaurante?",
        a: "Ouvir até o fim sem interromper e agradecer por ele ter falado na hora. Só depois resolva o problema concreto. Justificar-se antes de ouvir é o erro mais comum.",
      },
      {
        q: "O restaurante deve dar desconto sempre que o cliente reclama?",
        a: "Não sempre. A compensação deve ser proporcional ao problema: um café para uma espera, o prato por conta da casa para um erro grave. O mais importante é resolver o problema em si.",
      },
      {
        q: "Como saber das reclamações que o cliente não fala?",
        a: "Ofereça um canal privado, como um QR Code na mesa ou na comanda, que o cliente usa em segundos e sem se identificar. O gerente recebe o relato e ainda pode resolver antes de o cliente sair.",
      },
    ],
    solution: { href: "/br/restaurantes/", label: "Avaliação de restaurante por QR Code" },
    cluster: "restaurantComplaints",
    englishHref: "/blog/how-to-handle-restaurant-complaints/",
  },
  {
    slug: "pesquisa-de-satisfacao-restaurante-modelo",
    title: "Pesquisa de Satisfação para Restaurante: Modelo",
    description:
      "Modelo de pesquisa de satisfação para restaurante com 18 perguntas prontas sobre comida, atendimento, espera e preço, e como aplicar por QR Code na mesa.",
    h1: "Pesquisa de satisfação para restaurante: modelo com 18 perguntas prontas",
    keyword: "pesquisa de satisfação restaurante modelo",
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    excerpt: "18 perguntas para copiar e um modelo curto de 60 segundos para usar no QR Code da mesa.",
    quickAnswer:
      "Uma boa pesquisa de satisfação para restaurante tem de quatro a seis perguntas, não vinte. Faça uma pergunta de nota para cada ponto que o cliente avalia (comida, atendimento, tempo de espera e custo-benefício), inclua uma pergunta aberta (\"O que poderíamos ter feito melhor hoje?\") e deixe o contato opcional. Aplique por QR Code na mesa, para o cliente responder ainda no restaurante, e encaminhe toda nota baixa para um responsável resolver.",
    sections: [
      {
        h2: "Por que a maioria das pesquisas de restaurante não funciona",
        paragraphs: [
          "Pesquisas de satisfação costumam falhar por três motivos. São longas demais, e o cliente desiste no meio. Chegam tarde demais, por e-mail dias depois, quando o cliente lembra do clima geral, mas não de que a batata veio fria. Ou geram uma nota que ninguém assume: a média cai de 4,4 para 4,1, alguém comenta na reunião de segunda e nada muda na sexta à noite.",
          "Uma boa pesquisa resolve os três problemas: é curta o suficiente para terminar antes da conta, está na mesa por meio de um QR Code e transforma toda nota baixa em uma tarefa com responsável.",
        ],
      },
      {
        h2: "As 18 perguntas, organizadas pelo que o cliente avalia",
        paragraphs: [
          "Escolha uma ou duas de cada grupo, nunca todas. Use uma escala de 1 a 5: no celular, é mais rápida que de 0 a 10.",
        ],
        list: [
          "Comida: (1) Como você avalia o sabor do prato? (2) A comida chegou na temperatura certa? (3) O pedido veio como você pediu? (4) Como você avalia o tamanho da porção?",
          "Atendimento: (5) O garçom foi cordial? (6) Você precisou esperar para ser atendido? (7) Suas dúvidas sobre o cardápio foram bem respondidas? (8) Como você avalia a agilidade do atendimento?",
          "Tempo de espera: (9) Quanto tempo você esperou por uma mesa? (10) Quanto tempo o prato demorou depois do pedido? (11) Você esperou muito pela conta?",
          "Ambiente: (12) A mesa e o salão estavam limpos? (13) O banheiro estava limpo? (14) O nível de barulho estava confortável?",
          "Custo-benefício e fidelidade: (15) Como você avalia o custo-benefício? (16) Você voltaria? (17) Você nos recomendaria a um amigo?",
          "Pergunta aberta: (18) O que poderíamos ter feito melhor hoje?",
        ],
      },
      {
        h2: "Modelo de 60 segundos para o QR Code da mesa",
        paragraphs: [
          "Se for usar só uma versão, use esta: Como estava a comida? (1 a 5). Como foi o atendimento? (1 a 5). Como foi o tempo de espera? (1 a 5). O que poderíamos ter feito melhor hoje? (resposta livre). Quer que a gente entre em contato? (e-mail ou telefone, opcional).",
          "Deixe o contato opcional. Muitos clientes só contam a verdade se puderem ficar anônimos, e uma reclamação anônima que você consegue resolver vale mais do que uma identificada que nunca chega. Com um código de protocolo, até o cliente anônimo acompanha o que foi feito. Veja como aplicar em uma [pesquisa de satisfação por QR Code](/br/pesquisa-de-satisfacao-qr-code/).",
        ],
      },
      {
        h2: "O que fazer com as respostas",
        paragraphs: [
          "A pesquisa é a parte fácil. O valor está no que acontece com a nota baixa. Defina um limite (para a maioria dos restaurantes, qualquer nota 2 ou menor) e transforme toda resposta abaixo dele em uma tarefa com responsável: comida para o chef, atendimento para o maître ou gerente de salão, limpeza para quem fecha a casa. Se o cliente ainda estiver no salão, o gerente vai até a mesa. É quando a reclamação custa menos para resolver. Nosso guia sobre [como lidar com reclamações em restaurante](/br/blog/como-lidar-com-reclamacoes-em-restaurante/) mostra o que dizer.",
          "Uma vez por semana, leia as respostas abertas e procure repetições. Acompanhe também quantas notas baixas foram resolvidas, e não só a média. É isso que mostra se a pesquisa está mudando alguma coisa.",
        ],
      },
      {
        h2: "Erros que estragam o resultado",
        paragraphs: [
          "Não ofereça desconto em troca de nota alta e não peça avaliação só aos clientes satisfeitos: os dois geram números bonitos que escondem os problemas. Não coloque login ou aplicativo entre o cliente e o formulário. E não colete respostas que você nunca responde: o cliente que reclama e não tem retorno é justamente o que publica a avaliação negativa.",
        ],
      },
    ],
    faqs: [
      {
        q: "Quantas perguntas deve ter uma pesquisa de satisfação de restaurante?",
        a: "De quatro a seis para uma pesquisa na mesa: uma nota para comida, atendimento, espera e custo-benefício, uma pergunta aberta e o contato opcional. Mais do que isso faz o cliente desistir.",
      },
      {
        q: "Qual a melhor pergunta para fazer ao cliente do restaurante?",
        a: "\"O que poderíamos ter feito melhor hoje?\". Ela traz uma resposta específica, nas palavras do cliente, que dá para resolver. Uma escala de notas não faz isso.",
      },
      {
        q: "A pesquisa de satisfação deve ser anônima?",
        a: "Deixe a identificação opcional. Pesquisas anônimas recebem respostas mais sinceras, e um código de protocolo permite que o cliente anônimo acompanhe a resposta.",
      },
      {
        q: "Quando aplicar a pesquisa de satisfação no restaurante?",
        a: "Durante ou logo depois da refeição, por QR Code na mesa, na comanda ou na nota. Pesquisas enviadas dias depois captam uma lembrança vaga, e o cliente já decidiu se vai publicar uma avaliação.",
      },
    ],
    solution: { href: "/br/pesquisa-de-satisfacao-qr-code/", label: "Pesquisa de satisfação por QR Code" },
    cluster: "restaurantSurvey",
    englishHref: "/blog/restaurant-customer-satisfaction-survey-questions/",
  },
  {
    slug: "avaliacao-negativa-restaurante-google-ifood",
    title: "Avaliação Negativa no Google e iFood: Como Agir",
    description:
      "Como evitar e responder avaliação negativa de restaurante no Google e no iFood: resolva na mesa, responda com método e corrija a causa do problema.",
    h1: "Avaliação negativa no Google e no iFood: como evitar e como responder",
    keyword: "avaliação negativa restaurante google ifood",
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    excerpt: "Como evitar a avaliação de uma estrela e o que responder quando ela aparece, sem brigar com o cliente.",
    quickAnswer:
      "A forma mais eficaz de reduzir avaliações negativas de restaurante no Google e no iFood é dar ao cliente insatisfeito um canal privado e rápido enquanto ele ainda está no restaurante, como um QR Code na mesa, e resolver o problema na hora. Quando a avaliação negativa já foi publicada, responda em até 24 horas, em público, com educação: agradeça, reconheça o problema sem discutir, diga o que foi corrigido e convide o cliente a falar em privado.",
    sections: [
      {
        h2: "Por que a avaliação negativa acontece",
        paragraphs: [
          "A maioria das avaliações de uma estrela não é sobre um problema grave. É sobre um problema pequeno que ninguém resolveu: o prato frio que o garçom não percebeu, a espera sem explicação, o pedido de delivery que veio sem o refrigerante. O cliente não encontrou um jeito fácil de reclamar na hora, então reclamou onde era fácil: na plataforma pública.",
          "Por isso, a melhor resposta a uma avaliação negativa é a que você não precisa escrever. Todo problema resolvido no salão é uma avaliação a menos para responder.",
        ],
      },
      {
        h2: "Como evitar: resolva antes de o cliente ir embora",
        paragraphs: [
          "Dê ao cliente um canal que ele use sem constrangimento: um QR Code na mesa, no cardápio ou na embalagem do delivery. Ele escaneia, escreve o problema em segundos, sem login, e o gerente recebe o aviso na hora. Veja como funciona na página de [avaliação de restaurante por QR Code](/br/restaurantes/).",
          "O canal só funciona se alguém responder rápido. Defina quem recebe cada tipo de problema e qual o prazo. Um relato durante o serviço deve ter alguém na mesa em minutos, não no dia seguinte. Nosso guia sobre [como lidar com reclamações em restaurante](/br/blog/como-lidar-com-reclamacoes-em-restaurante/) traz o roteiro.",
          "Importante: não peça avaliação só aos clientes satisfeitos nem ofereça vantagens em troca de nota alta. Além de distorcer seus números, as plataformas costumam proibir essas práticas nas suas regras.",
        ],
      },
      {
        h2: "Como responder uma avaliação negativa",
        paragraphs: [
          "Quando a avaliação já foi publicada, responda. Quem lê a avaliação também lê a resposta, e uma resposta educada muitas vezes pesa mais do que a própria reclamação. Siga este roteiro:",
        ],
        list: [
          "Responda rápido, de preferência em até 24 horas.",
          "Agradeça pelo retorno e use o nome do cliente, se aparecer.",
          "Reconheça o problema sem discutir e sem expor detalhes do pedido.",
          "Diga o que foi feito ou corrigido, em uma frase concreta.",
          "Convide o cliente para continuar a conversa em privado, pelo WhatsApp ou e-mail do restaurante.",
        ],
      },
      {
        h2: "Exemplo de resposta",
        paragraphs: [
          "\"Olá, Mariana. Obrigado por contar como foi sua visita. Você tem razão: a espera de sábado passou do aceitável, e o prato não deveria ter chegado frio. Reforçamos a equipe da cozinha no fim de semana para isso não se repetir. Gostaríamos de ouvir mais: chame a gente no WhatsApp do restaurante para conversarmos.\"",
          "Evite respostas copiadas e coladas, discussões sobre quem tem razão e qualquer tom irônico. O objetivo não é convencer o cliente que reclamou, e sim mostrar aos próximos leitores que o restaurante leva o problema a sério.",
        ],
      },
      {
        h2: "Corrija a causa, não só a resposta",
        paragraphs: [
          "Responder bem uma avaliação resolve a imagem, não o problema. Registre cada reclamação, as públicas e as que chegaram pelo QR Code, e revise a lista toda semana. Quando o mesmo problema aparece várias vezes, é hora de mudar o processo, a escala ou o fornecedor. Um [sistema de gestão de reclamações](/br/software-de-gestao-de-reclamacoes/) faz esse registro sozinho e mostra o que se repete.",
        ],
      },
    ],
    faqs: [
      {
        q: "É possível apagar uma avaliação negativa no Google ou no iFood?",
        a: "Em geral, não. O restaurante só pode denunciar avaliações que violem as regras da plataforma, como ofensas ou conteúdo falso, e a decisão é da plataforma. O caminho mais eficaz é resolver antes e responder bem depois.",
      },
      {
        q: "Vale a pena responder avaliação negativa?",
        a: "Sim. Quem pesquisa o restaurante lê a avaliação e a resposta. Uma resposta rápida, educada e concreta mostra que o restaurante resolve problemas, o que conta a favor para os próximos clientes.",
      },
      {
        q: "O FeedSolve filtra ou esconde avaliações negativas?",
        a: "Não. O FeedSolve não interfere em plataformas externas. Ele oferece um canal privado para o cliente relatar problemas enquanto ainda dá para resolver, e ajuda sua equipe a registrar e acompanhar cada caso.",
      },
    ],
    solution: { href: "/br/restaurantes/", label: "Avaliação de restaurante por QR Code" },
  },
];

export const brPostPath = (post: BrPost) => `/br/blog/${post.slug}/`;
