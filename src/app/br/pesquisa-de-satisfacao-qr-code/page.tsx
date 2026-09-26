import { Hash, Languages, MapPin, QrCode, ScanLine, UserCheck } from "lucide-react";
import BrLandingPage from "@/components/br/BrLandingPage";
import { brMetadata } from "@/components/br/brMetadata";

const PATH = "/br/pesquisa-de-satisfacao-qr-code/";
const TITLE = "Pesquisa de Satisfação por QR Code, sem Login";
const DESCRIPTION =
  "Pesquisa de satisfação e avaliação de atendimento por QR Code: o cliente escaneia, responde sem login e recebe protocolo. Você resolve cada caso. Teste grátis.";

export const metadata = brMetadata({ title: TITLE, description: DESCRIPTION, path: PATH, cluster: "qrFeedback" });

const faqs = [
  {
    q: "Como funciona a pesquisa de satisfação por QR Code?",
    a: "Você gera um QR Code no FeedSolve e coloca no ponto de atendimento: mesa, balcão, recepção, nota fiscal ou embalagem. O cliente aponta a câmera do celular, abre o formulário e responde em segundos, sem baixar aplicativo e sem criar conta. A resposta chega na hora no painel da sua equipe.",
  },
  {
    q: "Como fazer um QR Code para avaliação de atendimento?",
    a: "Crie um quadro no FeedSolve, defina as perguntas ou categorias e clique para gerar o QR Code. Baixe a imagem e imprima em adesivos, displays de mesa ou cartões. Se tiver várias unidades, gere um QR Code por local para saber de onde vem cada avaliação.",
  },
  {
    q: "Qual a diferença entre o FeedSolve e uma pesquisa de satisfação comum?",
    a: "Uma pesquisa comum só coleta notas e comentários. No FeedSolve, cada resposta negativa vira um caso com protocolo, responsável e status, para ser resolvida enquanto o cliente ainda está no local ou logo depois. Você mede satisfação e resolve problemas no mesmo fluxo.",
  },
  {
    q: "O cliente precisa de aplicativo para responder?",
    a: "Não. Basta a câmera do celular. O formulário abre no navegador, funciona em português e em outros idiomas, e não pede login.",
  },
  {
    q: "Posso usar o mesmo formulário por link no WhatsApp?",
    a: "Sim. Cada quadro tem um QR Code e um link. Envie o link pelo WhatsApp após a entrega ou o atendimento, e todas as respostas caem no mesmo painel.",
  },
  {
    q: "Quanto custa?",
    a: "Você pode testar grátis por 7 dias, com acesso completo e sem cartão de crédito. Os planos pagos começam em US$19 por mês. QR Codes por local fazem parte do plano Growth.",
  },
];

export default function BrQrSurveyPage() {
  return (
    <BrLandingPage
      path={PATH}
      englishHref="/qr-code-feedback/"
      seoTitle={TITLE}
      seoDescription={DESCRIPTION}
      badge="Pesquisa de satisfação por QR Code"
      h1="Pesquisa de satisfação por QR Code que vira solução"
      lead="O cliente escaneia, avalia o atendimento e relata problemas em segundos, sem login. Cada relato gera um protocolo e vai direto para quem pode resolver, enquanto ainda dá tempo."
      quickAnswer="O FeedSolve cria pesquisas de satisfação e avaliações de atendimento por QR Code. O cliente escaneia com a câmera do celular, responde no navegador sem login e recebe um código de protocolo. Cada problema relatado vira um caso com responsável e status no painel da equipe, para ser resolvido rapidamente. O mesmo formulário também pode ser enviado por link no WhatsApp."
      problemHeading="Por que a maioria das pesquisas de satisfação não muda nada"
      problems={[
        "Formulários longos e com cadastro fazem o cliente desistir no meio",
        "As respostas ficam em uma planilha que ninguém analisa a tempo",
        "Uma nota baixa chega, mas ninguém é responsável por entrar em contato",
        "O cliente insatisfeito não recebe retorno e publica a avaliação no Google",
        "Com várias unidades, não dá para saber de qual loja veio cada avaliação",
      ]}
      featuresHeading="Recursos para pesquisa de satisfação por QR Code"
      features={[
        { icon: <ScanLine size={22} />, title: "Resposta em segundos", body: "Sem aplicativo e sem login. O formulário abre direto no navegador do celular do cliente." },
        { icon: <QrCode size={22} />, title: "QR Code pronto para imprimir", body: "Baixe e imprima para mesas, balcões, recepções, embalagens e notas. Também disponível como link." },
        { icon: <MapPin size={22} />, title: "QR Code por unidade", body: "No plano Growth, gere um QR Code por loja ou setor e compare os resultados de cada local." },
        { icon: <Hash size={22} />, title: "Protocolo para o cliente", body: "Quem relata um problema recebe um código e acompanha a solução, sem precisar ligar." },
        { icon: <UserCheck size={22} />, title: "Alerta para o responsável", body: "Cada relato é atribuído a alguém da equipe com prioridade. Notificação por e-mail em tempo real." },
        { icon: <Languages size={22} />, title: "Vários idiomas", body: "Formulários em português e em outros idiomas, ideal para turismo e clientes estrangeiros." },
      ]}
      localHeading="Onde colocar o QR Code de avaliação"
      localPoints={[
        { title: "Restaurantes, bares e cafés", body: "No display da mesa, no cardápio ou na comanda. O cliente relata o problema durante a refeição e o gerente resolve antes da conta." },
        { title: "Lojas e varejo", body: "No caixa, no provador ou na sacola. Capture a experiência de compra e as reclamações sobre produtos." },
        { title: "Clínicas, hotéis e serviços", body: "Na recepção, no quarto ou no comprovante de atendimento. Receba avaliações e resolva questões antes da próxima visita." },
      ]}
      faqs={faqs}
      ctaHeading="Crie seu QR Code de pesquisa de satisfação"
      ctaSub="Monte o formulário, gere o QR Code e comece a receber avaliações hoje. Teste grátis por 7 dias."
      breadcrumbLabel="Pesquisa de satisfação por QR Code"
    />
  );
}
