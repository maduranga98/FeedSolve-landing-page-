import { BarChart3, EyeOff, Hash, Lightbulb, MessageCircle, QrCode } from "lucide-react";
import BrLandingPage from "@/components/br/BrLandingPage";
import { brMetadata } from "@/components/br/brMetadata";

const PATH = "/br/caixa-de-sugestoes-online/";
const TITLE = "Caixa de Sugestões Online e Anônima";
const DESCRIPTION =
  "Caixa de sugestões online para clientes e funcionários: envio anônimo por QR Code ou link, sem login, com protocolo de acompanhamento. Teste grátis.";

export const metadata = brMetadata({ title: TITLE, description: DESCRIPTION, path: PATH, cluster: "suggestionBox" });

const faqs = [
  {
    q: "O que é uma caixa de sugestões online?",
    a: "É a versão digital da caixinha de sugestões de papel. As pessoas escaneiam um QR Code ou abrem um link, escrevem a sugestão ou reclamação em segundos e enviam, sem login e sem aplicativo. A empresa recebe tudo em um painel, responde e acompanha cada sugestão até uma decisão.",
  },
  {
    q: "A caixa de sugestões pode ser anônima?",
    a: "Sim. No FeedSolve você ativa o modo anônimo por quadro. O envio não pede nome, e-mail ou conta. Mesmo assim, a pessoa recebe um código de protocolo e pode acompanhar a resposta sem revelar a identidade.",
  },
  {
    q: "Como criar uma caixa de sugestões online?",
    a: "Crie uma conta, crie um quadro de sugestões, escolha se ele será anônimo, gere o QR Code e imprima ou compartilhe o link. Leva poucos minutos. Depois, defina quem da equipe revisa as sugestões e com que frequência.",
  },
  {
    q: "Existe caixa de sugestões online grátis?",
    a: "O FeedSolve pode ser testado grátis por 7 dias, com acesso completo e sem cartão de crédito. Depois, os planos começam em US$19 por mês. Ferramentas gratuitas como formulários genéricos coletam respostas, mas não oferecem protocolo, responsável nem acompanhamento.",
  },
  {
    q: "Serve como caixa de sugestões para funcionários?",
    a: "Sim. Muitas empresas usam um quadro anônimo para ideias de melhoria e preocupações da equipe. O anonimato aumenta a sinceridade, e o protocolo permite responder a quem enviou sem identificar a pessoa.",
  },
  {
    q: "Por que usar uma caixa de sugestões digital em vez da de papel?",
    a: "A caixa de papel não avisa quando alguém escreve, não tem responsável e não permite responder. A digital notifica a equipe, organiza as sugestões por status e mostra a quem enviou que a ideia foi lida, o que incentiva novas participações.",
  },
];

export default function BrSuggestionBoxPage() {
  return (
    <BrLandingPage
      path={PATH}
      englishHref="/digital-suggestion-box-software/"
      seoTitle={TITLE}
      seoDescription={DESCRIPTION}
      badge="Caixa de sugestões digital"
      h1="Caixa de sugestões online que ninguém ignora"
      lead="Clientes e funcionários enviam sugestões por QR Code ou link, de forma anônima se quiserem. Sua equipe lê, responde e acompanha cada ideia, e quem enviou vê que foi ouvido."
      quickAnswer="O FeedSolve é uma caixa de sugestões online e anônima. A pessoa escaneia o QR Code ou abre o link, escreve a sugestão sem login e recebe um código de protocolo. Com o modo anônimo ativado, nenhum dado pessoal é pedido. A equipe recebe a sugestão em um painel, define um responsável, responde e marca como implementada ou analisada. Quem enviou acompanha tudo pelo código, sem se identificar."
      problemHeading="Por que a caixinha de sugestões tradicional não funciona"
      problems={[
        "Ninguém sabe se as sugestões são lidas, então as pessoas param de participar",
        "Não há como responder a quem enviou, principalmente quando é anônimo",
        "As sugestões ficam semanas na caixa até alguém abrir",
        "Formulários genéricos coletam respostas, mas não definem responsável nem acompanham resultado",
        "Funcionários têm receio de ser identificados e deixam de apontar problemas reais",
      ]}
      featuresHeading="Recursos da caixa de sugestões do FeedSolve"
      features={[
        { icon: <EyeOff size={22} />, title: "Anonimato de verdade", body: "Sem nome, e-mail ou conta. Ative o modo anônimo por quadro e dê às pessoas segurança para falar." },
        { icon: <QrCode size={22} />, title: "QR Code e link", body: "Imprima o QR Code no refeitório, na recepção ou no balcão, ou envie o link pelo WhatsApp e e-mail interno." },
        { icon: <Hash size={22} />, title: "Protocolo de acompanhamento", body: "Cada sugestão ganha um código. Quem enviou vê a resposta e o status sem revelar quem é." },
        { icon: <MessageCircle size={22} />, title: "Resposta a quem enviou", body: "Responda publicamente cada sugestão. Mostrar que a ideia foi lida é o que mantém a caixa viva." },
        { icon: <Lightbulb size={22} />, title: "Organização por status", body: "Recebida, em análise, implementada. Um quadro simples para a equipe decidir o que fazer com cada ideia." },
        { icon: <BarChart3 size={22} />, title: "Métricas de participação", body: "Veja quantas sugestões chegam e quantas recebem resposta. Dados para mostrar que o programa funciona." },
      ]}
      localHeading="Onde usar a caixa de sugestões online"
      localPoints={[
        { title: "Com clientes", body: "QR Code na mesa, no caixa ou na embalagem para ideias de melhoria, elogios e reclamações, antes que virem avaliação pública." },
        { title: "Com funcionários", body: "Quadro anônimo para ideias, preocupações e problemas do dia a dia. Útil para pesquisas de clima e programas de melhoria contínua." },
        { title: "Com condôminos e alunos", body: "Condomínios, escolas e associações recebem sugestões de moradores, pais e alunos em um só lugar, com resposta visível para todos." },
      ]}
      faqs={faqs}
      ctaHeading="Crie sua caixa de sugestões online agora"
      ctaSub="Gere o QR Code, ative o modo anônimo e receba a primeira sugestão em minutos. Teste grátis por 7 dias."
      breadcrumbLabel="Caixa de sugestões online"
    />
  );
}
