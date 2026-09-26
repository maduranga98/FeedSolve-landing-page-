import { BarChart3, Hash, Inbox, MessageCircle, QrCode, UserCheck } from "lucide-react";
import BrLandingPage from "@/components/br/BrLandingPage";
import { brMetadata } from "@/components/br/brMetadata";

const PATH = "/br/software-de-gestao-de-reclamacoes/";
const TITLE = "Sistema de Gestão de Reclamações para Empresas";
const DESCRIPTION =
  "Software de gestão de reclamações para PMEs: receba por QR Code ou link, gere protocolo automático, atribua responsáveis e resolva tudo. Teste grátis.";

export const metadata = brMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  cluster: "complaintManagement",
});

const faqs = [
  {
    q: "O que é um sistema de gestão de reclamações?",
    a: "É uma ferramenta que centraliza as reclamações de clientes em um só lugar para registrar, atribuir, acompanhar e resolver cada caso. Em vez de reclamações espalhadas por WhatsApp, e-mail e planilhas, cada uma recebe um protocolo, um responsável e um status até ser resolvida.",
  },
  {
    q: "Qual o melhor software de gestão de reclamações para pequenas empresas?",
    a: "Para uma pequena ou média empresa, o melhor sistema é o que a equipe consegue usar no mesmo dia: recebimento sem login para o cliente, atribuição de responsáveis, protocolo por reclamação e uma taxa de resolução visível. O FeedSolve foi feito para esse cenário, sem a complexidade e o custo de plataformas corporativas de atendimento.",
  },
  {
    q: "Existe software de gestão de reclamações gratuito?",
    a: "O FeedSolve pode ser testado grátis por 7 dias, com acesso completo e sem cartão de crédito. Depois, os planos começam em US$19 por mês, com cobrança mensal ou anual.",
  },
  {
    q: "O cliente precisa criar conta para registrar uma reclamação?",
    a: "Não. O cliente escaneia o QR Code ou abre o link, descreve o problema em menos de um minuto e recebe um código de protocolo. Com esse código ele acompanha o andamento sem precisar ligar ou mandar mensagem.",
  },
  {
    q: "Como o FeedSolve ajuda a evitar reclamações no Reclame Aqui?",
    a: "A maioria dos clientes só recorre a plataformas públicas quando não encontra um canal próprio que responda. Com um QR Code visível no ponto de atendimento e um protocolo de acompanhamento, o cliente tem um caminho direto e rápido, e sua equipe tem a chance de resolver antes que a reclamação se torne pública.",
  },
  {
    q: "Qual a diferença entre o FeedSolve e um sistema de SAC ou help desk?",
    a: "Sistemas de help desk como Zendesk ou Freshdesk são pensados para centrais de atendimento com agentes e tickets por e-mail. O FeedSolve foca no ciclo de reclamação de pequenas e médias empresas: recebimento por QR Code sem login, quadro Kanban simples, protocolo para o cliente e taxa de resolução, sem cobrança por agente.",
  },
];

export default function BrComplaintManagementPage() {
  return (
    <BrLandingPage
      path={PATH}
      englishHref="/complaint-management-software/"
      seoTitle={TITLE}
      seoDescription={DESCRIPTION}
      badge="Gestão de reclamações"
      h1="Software de gestão de reclamações que resolve de verdade"
      lead="Receba reclamações por QR Code ou link, gere um protocolo para cada caso, atribua responsáveis e acompanhe tudo até a resolução, sem o custo e a complexidade de um sistema de SAC corporativo."
      quickAnswer="O FeedSolve é um sistema de gestão de reclamações para pequenas e médias empresas. O cliente registra a reclamação por QR Code ou link, sem login e sem aplicativo, e recebe um código de protocolo. Sua equipe atribui cada reclamação a um responsável, define a prioridade, move o caso em um quadro Kanban (recebida, em andamento, resolvida) e responde ao cliente. O painel mostra a taxa de resolução em tempo real, para você saber se o processo realmente funciona."
      problemHeading="Sinais de que sua gestão de reclamações precisa de um sistema"
      problems={[
        "Reclamações chegam por WhatsApp, e-mail, telefone e balcão, e ninguém sabe quantas estão abertas",
        "O mesmo cliente reclama duas ou três vezes porque não teve retorno",
        "Não existe um responsável claro para cada caso, então o problema fica parado",
        "A primeira notícia de um problema grave é uma avaliação negativa no Google ou no Reclame Aqui",
        "Relatórios de reclamação são montados à mão em planilhas no fim do mês",
      ]}
      featuresHeading="Recursos para registrar, acompanhar e resolver reclamações"
      features={[
        { icon: <QrCode size={22} />, title: "Registro por QR Code ou link", body: "Coloque o QR Code no balcão, na nota, na embalagem ou no site. O cliente registra a reclamação em menos de um minuto." },
        { icon: <Hash size={22} />, title: "Protocolo automático", body: "Cada reclamação recebe um código único. O cliente consulta o status a qualquer momento, sem ligar para a empresa." },
        { icon: <UserCheck size={22} />, title: "Responsável e prioridade", body: "Atribua cada caso a uma pessoa, defina a prioridade e registre notas internas que o cliente não vê." },
        { icon: <Inbox size={22} />, title: "Quadro Kanban", body: "Visualize todas as reclamações por status, de recebida a resolvida. Nada fica esquecido em uma caixa de entrada." },
        { icon: <MessageCircle size={22} />, title: "Resposta ao cliente", body: "Publique uma resposta que o cliente vê na página de acompanhamento do protocolo e feche o ciclo." },
        { icon: <BarChart3 size={22} />, title: "Taxa de resolução", body: "Acompanhe quantas reclamações entram e quantas são resolvidas. Uma meta saudável é resolver mais de 80%." },
      ]}
      localHeading="Gestão de reclamações no contexto brasileiro"
      localIntro="O consumidor brasileiro é exigente, conhece seus direitos e compartilha experiências em público. Um processo organizado de reclamações é uma vantagem competitiva."
      localPoints={[
        { title: "Código de Defesa do Consumidor", body: "O CDC dá ao consumidor o direito de reclamar de produtos e serviços. Registrar cada reclamação com data, responsável e resposta cria um histórico organizado do que foi feito em cada caso." },
        { title: "Protocolo como no SAC", body: "O número de protocolo já é prática consolidada no SAC brasileiro. O código de acompanhamento do FeedSolve segue a mesma lógica e dá ao cliente a segurança de que a reclamação foi registrada." },
        { title: "Antes do Reclame Aqui e do Google", body: "Um canal próprio, visível e fácil de usar tende a receber a reclamação antes que ela vá para plataformas públicas, e dá à sua equipe a chance de resolver primeiro." },
        { title: "LGPD e coleta mínima", body: "O cliente não precisa criar conta, e você decide quais dados pedir no formulário. Menos dados coletados significa menos risco no tratamento de dados pessoais." },
      ]}
      useCasesHeading="Gestão de reclamações para"
      useCases={["Restaurantes e delivery", "Lojas e e-commerce", "Clínicas e consultórios", "Academias e escolas", "Condomínios e administradoras", "Indústrias e distribuidores"]}
      faqs={faqs}
      ctaHeading="Organize suas reclamações ainda hoje"
      ctaSub="Crie o quadro de reclamações, gere o QR Code e comece a resolver em minutos. Teste grátis por 7 dias, sem cartão de crédito."
      breadcrumbLabel="Gestão de reclamações"
    />
  );
}
