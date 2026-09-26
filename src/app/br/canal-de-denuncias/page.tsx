import { BarChart3, EyeOff, Hash, Lock, QrCode, UserCheck } from "lucide-react";
import BrLandingPage from "@/components/br/BrLandingPage";
import { brMetadata } from "@/components/br/brMetadata";

const PATH = "/br/canal-de-denuncias/";
const TITLE = "Canal de Denúncias Anônimo para Empresas";
const DESCRIPTION =
  "Canal de denúncias anônimo por QR Code ou link: sem login, com protocolo para o denunciante acompanhar e fluxo de apuração para a equipe. Teste grátis.";

// Brazil-only page: no English equivalent, so no hreflang cluster.
export const metadata = brMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const faqs = [
  {
    q: "O que é um canal de denúncias?",
    a: "É um meio seguro para funcionários, fornecedores e clientes relatarem condutas irregulares, como assédio, fraude, discriminação ou violações de regras internas. Um bom canal permite denúncias anônimas, registra cada relato com protocolo e garante que alguém seja responsável pela apuração.",
  },
  {
    q: "Minha empresa é obrigada a ter canal de denúncias?",
    a: "A Lei nº 14.457/2022 exige que empresas obrigadas a ter CIPA adotem medidas de prevenção e combate ao assédio sexual e a outras formas de violência no trabalho, incluindo procedimentos para recebimento e acompanhamento de denúncias com garantia de anonimato do denunciante. Programas de integridade previstos na Lei Anticorrupção também costumam incluir canais de denúncia. Consulte seu jurídico para confirmar as obrigações do seu caso.",
  },
  {
    q: "A denúncia pelo FeedSolve é realmente anônima?",
    a: "Com o modo anônimo ativado no quadro, o formulário não pede nome, e-mail nem conta. O denunciante recebe apenas um código de protocolo, que usa para acompanhar o andamento e ler as respostas sem se identificar.",
  },
  {
    q: "Como o denunciante acompanha a denúncia?",
    a: "Após o envio, o sistema gera um código de protocolo. Com ele, o denunciante consulta o status (recebida, em apuração, concluída) e as respostas públicas da empresa, sem login e sem revelar a identidade.",
  },
  {
    q: "Quem da empresa vê as denúncias?",
    a: "Apenas os membros da equipe que você adicionar ao quadro, como RH, compliance ou a comissão responsável. Cada denúncia pode ser atribuída a uma pessoa, com notas internas que o denunciante não vê.",
  },
  {
    q: "O FeedSolve substitui uma assessoria jurídica?",
    a: "Não. O FeedSolve é a ferramenta para receber, registrar e acompanhar denúncias. A apuração, as medidas disciplinares e a adequação legal do seu programa devem ser definidas com seu jurídico ou consultoria de compliance.",
  },
];

export default function BrWhistleblowingPage() {
  return (
    <BrLandingPage
      path={PATH}
      seoTitle={TITLE}
      seoDescription={DESCRIPTION}
      badge="Canal de denúncias"
      h1="Canal de denúncias anônimo, simples de implantar"
      lead="Funcionários, fornecedores e clientes relatam condutas irregulares por QR Code ou link, sem se identificar. Cada denúncia recebe um protocolo e um responsável pela apuração."
      quickAnswer="O FeedSolve funciona como canal de denúncias anônimo para pequenas e médias empresas. O denunciante escaneia um QR Code ou abre um link, relata o ocorrido sem login e sem dados pessoais, e recebe um código de protocolo para acompanhar a apuração. Apenas as pessoas autorizadas (RH, compliance ou comissão) veem as denúncias, que são atribuídas a um responsável e acompanhadas por status até a conclusão."
      problemHeading="Por que muitos canais de denúncia não funcionam"
      problems={[
        "O denunciante precisa se identificar por e-mail ou telefone e desiste por medo de retaliação",
        "A denúncia chega, mas ninguém sabe quem deve apurar",
        "Quem denunciou nunca recebe retorno e deixa de confiar no canal",
        "Não existe registro organizado do que foi recebido e das providências tomadas",
        "Soluções corporativas de compliance são caras para uma empresa de pequeno ou médio porte",
      ]}
      featuresHeading="Recursos do canal de denúncias"
      features={[
        { icon: <EyeOff size={22} />, title: "Denúncia anônima", body: "Modo anônimo por quadro: sem nome, e-mail ou conta. O denunciante decide se quer se identificar." },
        { icon: <Hash size={22} />, title: "Protocolo de acompanhamento", body: "Um código único por denúncia para consultar o status e as respostas sem revelar a identidade." },
        { icon: <Lock size={22} />, title: "Acesso restrito", body: "Só as pessoas adicionadas ao quadro veem as denúncias. Notas internas nunca aparecem para o denunciante." },
        { icon: <UserCheck size={22} />, title: "Responsável pela apuração", body: "Atribua cada caso a um membro do RH, compliance ou comissão, com prioridade e histórico." },
        { icon: <QrCode size={22} />, title: "QR Code e link", body: "Divulgue em murais, refeitórios, crachás, intranet ou WhatsApp. Acesso em segundos, sem aplicativo." },
        { icon: <BarChart3 size={22} />, title: "Registro das providências", body: "Cada denúncia mantém status e histórico, facilitando relatórios para a diretoria e auditorias internas." },
      ]}
      localHeading="Canal de denúncias e a legislação brasileira"
      localIntro="Estas informações são gerais e não substituem orientação jurídica."
      localPoints={[
        { title: "Lei nº 14.457/2022", body: "Para empresas obrigadas a ter CIPA, a lei prevê procedimentos para recebimento e acompanhamento de denúncias de assédio e violência no trabalho, com garantia de anonimato do denunciante." },
        { title: "Programas de integridade", body: "A Lei Anticorrupção (Lei nº 12.846/2013) e sua regulamentação valorizam programas de integridade, que normalmente incluem canais de denúncia abertos a funcionários e terceiros." },
        { title: "LGPD", body: "No modo anônimo, o formulário não coleta dados pessoais do denunciante. Menos dados significa menos exposição, em linha com o princípio da necessidade da LGPD." },
      ]}
      useCasesHeading="Quem usa um canal de denúncias"
      useCases={["Indústrias e fábricas", "Varejo com várias lojas", "Clínicas e hospitais", "Escolas e faculdades", "Empresas de logística", "Prestadores de serviço"]}
      faqs={faqs}
      ctaHeading="Implante seu canal de denúncias em minutos"
      ctaSub="Crie um quadro anônimo, gere o QR Code e divulgue para a equipe. Teste grátis por 7 dias, sem cartão de crédito."
      breadcrumbLabel="Canal de denúncias"
    />
  );
}
