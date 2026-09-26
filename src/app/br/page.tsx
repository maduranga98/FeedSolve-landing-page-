import { BarChart3, EyeOff, Hash, Languages, MessageCircle, QrCode } from "lucide-react";
import BrLandingPage from "@/components/br/BrLandingPage";
import { brMetadata } from "@/components/br/brMetadata";

const PATH = "/br/";
const TITLE = "Plataforma de Feedback e Gestão de Reclamações";
const DESCRIPTION =
  "Colete feedback, sugestões e reclamações por QR Code ou link, sem login. Cada envio gera um protocolo. Atribua, acompanhe e resolva tudo. Teste grátis.";

export const metadata = brMetadata({ title: TITLE, description: DESCRIPTION, path: PATH, cluster: "home" });

const faqs = [
  {
    q: "O que é o FeedSolve?",
    a: "O FeedSolve é uma plataforma de feedback e gestão de reclamações para pequenas e médias empresas. Clientes, funcionários e fornecedores enviam reclamações, sugestões ou elogios por QR Code ou link, sem criar conta. Cada envio recebe um código de protocolo, e sua equipe atribui, acompanha e resolve tudo em um único painel.",
  },
  {
    q: "Quanto custa o FeedSolve?",
    a: "Você pode testar grátis por 7 dias, com acesso completo e sem cartão de crédito. Depois, os planos custam US$19 por mês (Starter), US$49 (Growth) ou US$79 (Pro), com cobrança mensal ou anual (a anual sai cerca de 20% mais barata).",
  },
  {
    q: "O cliente precisa baixar um aplicativo ou criar conta?",
    a: "Não. O cliente escaneia o QR Code com a câmera do celular ou abre o link, preenche o formulário e recebe um código de protocolo. Só a sua equipe precisa de conta.",
  },
  {
    q: "Os formulários funcionam em português?",
    a: "Sim. Os formulários de envio suportam vários idiomas, então seus clientes enviam em português enquanto a equipe acompanha tudo no mesmo painel.",
  },
  {
    q: "Posso compartilhar o link pelo WhatsApp?",
    a: "Sim. Além do QR Code impresso, cada quadro tem um link que você pode enviar pelo WhatsApp, colocar na bio do Instagram, no e-mail pós-venda ou no rodapé do site.",
  },
  {
    q: "Qual a diferença entre o FeedSolve e um formulário do Google Forms?",
    a: "O Google Forms apenas coleta respostas. O FeedSolve cuida do que vem depois: atribui cada envio a um responsável, organiza tudo em um quadro Kanban, gera um protocolo para o cliente acompanhar e mede a sua taxa de resolução.",
  },
];

export default function BrHomePage() {
  return (
    <BrLandingPage
      path={PATH}
      englishHref="/"
      seoTitle={TITLE}
      seoDescription={DESCRIPTION}
      badge="FeedSolve Brasil"
      h1="Receba feedback e resolva reclamações antes que virem avaliação negativa"
      lead="Clientes, funcionários e fornecedores enviam reclamações e sugestões por QR Code ou link, sem login. Sua equipe atribui, acompanha e resolve tudo em um só painel, e cada envio ganha um protocolo."
      quickAnswer="O FeedSolve é uma plataforma de feedback e gestão de reclamações para pequenas e médias empresas no Brasil. O cliente escaneia um QR Code ou abre um link, envia a reclamação ou sugestão em menos de um minuto (sem aplicativo e sem cadastro) e recebe um código de protocolo para acompanhar o andamento. A equipe atribui cada caso a um responsável, move tudo em um quadro Kanban até a resolução e acompanha a taxa de resolução no painel. Dá para testar grátis por 7 dias, sem cartão de crédito."
      problemHeading="Por que reclamações se perdem na maioria das empresas"
      problems={[
        "Reclamações chegam por WhatsApp, Instagram, e-mail, telefone e balcão, sem um lugar único e sem dono",
        "Sem responsável definido, o problema passa de mão em mão e ninguém resolve",
        "O cliente não sabe se foi ouvido, então reclama de novo ou publica em sites de reclamação e no Google",
        "Ninguém consegue responder quantas reclamações foram realmente resolvidas no mês",
        "Sistemas de atendimento corporativos são caros e complexos demais para uma equipe pequena",
      ]}
      featuresHeading="Tudo o que você precisa, sem complicação"
      features={[
        { icon: <QrCode size={22} />, title: "QR Code para cada ponto", body: "Gere QR Codes para mesas, balcões, embalagens, notas e entregas. O cliente envia em segundos, sem login." },
        { icon: <Hash size={22} />, title: "Protocolo para cada envio", body: "Um código único por reclamação, como o protocolo do SAC. O cliente acompanha o status sem precisar ligar." },
        { icon: <MessageCircle size={22} />, title: "Link para WhatsApp e redes", body: "Compartilhe o mesmo quadro por link no WhatsApp, Instagram, e-mail ou site. Tudo cai no mesmo painel." },
        { icon: <EyeOff size={22} />, title: "Modo anônimo", body: "Ative o anonimato por quadro para sugestões de funcionários ou canais de denúncia." },
        { icon: <Languages size={22} />, title: "Formulários multilíngues", body: "Clientes enviam em português (ou no idioma deles) e a equipe gerencia tudo no mesmo lugar." },
        { icon: <BarChart3 size={22} />, title: "Taxa de resolução", body: "Veja quantas reclamações você recebe e quantas resolve. A métrica que mostra se o processo funciona." },
      ]}
      localHeading="Feito para a realidade das empresas brasileiras"
      localPoints={[
        { title: "Resolva antes do Reclame Aqui", body: "Quando o cliente não encontra um canal próprio que responda, ele procura plataformas públicas. Um QR Code no ponto de atendimento dá a ele um caminho mais rápido, e a você a chance de resolver antes." },
        { title: "Protocolo que o consumidor já conhece", body: "O brasileiro está acostumado a receber número de protocolo no atendimento. O código do FeedSolve segue a mesma lógica e reduz ligações e mensagens do tipo \"e aí, alguma novidade?\"." },
        { title: "Coleta mínima de dados", body: "Sem cadastro obrigatório e com modo anônimo opcional, você coleta só o necessário, em linha com o princípio da necessidade da LGPD." },
      ]}
      useCasesHeading="Usado em diversos segmentos"
      useCases={["Restaurantes e bares", "Varejo e lojas", "Clínicas e consultórios", "Condomínios e imobiliárias", "Indústria e fornecedores", "Logística e entregas"]}
      faqs={faqs}
      ctaHeading="Comece a resolver reclamações hoje"
      ctaSub="Crie um quadro, gere o QR Code e receba o primeiro feedback em minutos. Teste grátis por 7 dias, sem cartão de crédito."
      breadcrumbLabel="FeedSolve Brasil"
    />
  );
}
