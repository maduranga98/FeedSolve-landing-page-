import Link from "next/link";
import { BarChart3, Clock, Hash, MapPin, QrCode, UserCheck } from "lucide-react";
import BrLandingPage from "@/components/br/BrLandingPage";
import { brMetadata } from "@/components/br/brMetadata";

const PATH = "/br/restaurantes/";
const TITLE = "Avaliação de Restaurante por QR Code na Mesa";
const DESCRIPTION =
  "QR Code na mesa para o cliente avaliar o restaurante e relatar problemas em segundos, sem login. Resolva antes da conta e antes da avaliação negativa.";

export const metadata = brMetadata({ title: TITLE, description: DESCRIPTION, path: PATH, cluster: "restaurants" });

const faqs = [
  {
    q: "Como funciona a avaliação por QR Code no restaurante?",
    a: "Você coloca um QR Code em cada mesa, no cardápio ou na comanda. O cliente aponta a câmera do celular, abre o formulário no navegador e avalia a comida, o atendimento e a espera em segundos, sem baixar aplicativo e sem cadastro. Se relatar um problema, o gerente é avisado na hora e pode ir até a mesa antes da conta.",
  },
  {
    q: "Quais perguntas colocar na pesquisa de satisfação do restaurante?",
    a: "Poucas: uma nota para a comida, uma para o atendimento, uma para o tempo de espera e uma pergunta aberta, como \"O que poderíamos ter feito melhor hoje?\". Temos um modelo pronto com 18 perguntas no nosso blog.",
  },
  {
    q: "Isso ajuda a evitar avaliação negativa no Google e no iFood?",
    a: "Ajuda porque dá ao cliente insatisfeito um canal privado e rápido enquanto ele ainda está no restaurante. Um problema resolvido na mesa raramente vira avaliação pública. O FeedSolve não remove nem filtra avaliações em plataformas externas: ele ajuda você a ouvir e resolver antes.",
  },
  {
    q: "Funciona para restaurante com várias unidades?",
    a: "Sim. No plano Growth você gera um QR Code por unidade e compara os resultados de cada loja em um só painel, com responsáveis diferentes por local.",
  },
  {
    q: "Serve para delivery?",
    a: "Sim. Coloque o QR Code em um adesivo na embalagem ou envie o link pelo WhatsApp depois da entrega. As avaliações de delivery chegam no mesmo painel, separadas por quadro.",
  },
  {
    q: "Quanto custa?",
    a: "Você pode testar grátis por 7 dias, com acesso completo e sem cartão de crédito. Os planos pagos começam em US$19 por mês.",
  },
];

export default function BrRestaurantsPage() {
  return (
    <BrLandingPage
      path={PATH}
      englishHref="/restaurants/qr-feedback/"
      seoTitle={TITLE}
      seoDescription={DESCRIPTION}
      badge="Restaurantes, bares e cafés"
      h1="Avaliação por QR Code na mesa: resolva antes da conta"
      lead="O cliente escaneia o QR Code, avalia a comida e o atendimento e relata qualquer problema em segundos. O gerente é avisado na hora e resolve enquanto o cliente ainda está no salão."
      quickAnswer="O FeedSolve coloca um QR Code em cada mesa do restaurante. O cliente escaneia com o celular, avalia a refeição e relata problemas sem login e sem aplicativo, e recebe um código de protocolo. Cada relato vai direto para o gerente responsável, que pode resolver na própria mesa, antes da conta. Assim, o problema é resolvido no salão em vez de virar avaliação negativa no Google ou no iFood."
      problemHeading="Por que o restaurante só descobre o problema pela avaliação negativa"
      problems={[
        "A maioria dos clientes insatisfeitos não reclama com o garçom: vai embora calada e avalia depois",
        "Quando a avaliação aparece no Google ou no iFood, o cliente já saiu e não dá mais para resolver",
        "Reclamações feitas ao garçom se perdem na correria do serviço e não chegam ao gerente",
        "Ninguém registra os problemas, então o mesmo erro se repete toda semana",
        "Com várias unidades, o dono não sabe qual loja está com problema",
      ]}
      featuresHeading="Tudo o que o salão precisa"
      features={[
        { icon: <QrCode size={22} />, title: "QR Code em cada mesa", body: "Imprima em displays de mesa, cardápios, comandas ou adesivos. O cliente avalia em menos de um minuto." },
        { icon: <Clock size={22} />, title: "Alerta em tempo real", body: "O gerente recebe o relato na hora, por e-mail, e pode ir até a mesa antes do cliente pedir a conta." },
        { icon: <UserCheck size={22} />, title: "Responsável por área", body: "Comida para a cozinha, atendimento para o salão, limpeza para quem fecha. Cada caso tem um dono." },
        { icon: <Hash size={22} />, title: "Protocolo para o cliente", body: "O cliente acompanha a solução pelo código, mesmo que tenha preferido não se identificar." },
        { icon: <MapPin size={22} />, title: "Uma visão por unidade", body: "No plano Growth, QR Codes por loja para comparar unidades e achar onde está o problema." },
        { icon: <BarChart3 size={22} />, title: "Problemas que se repetem", body: "Veja quais reclamações voltam toda semana e corrija a causa, não só o sintoma." },
      ]}
      localHeading="Feito para restaurantes no Brasil"
      localPoints={[
        { title: "Antes do Google e do iFood", body: "Nota baixa em plataformas públicas afeta a escolha de novos clientes. Resolver na mesa é mais barato do que responder uma avaliação de uma estrela." },
        { title: "Delivery pelo WhatsApp", body: "Envie o link da avaliação pelo WhatsApp depois da entrega ou coloque o QR Code na embalagem. Tudo cai no mesmo painel." },
        { title: "Turistas e clientes estrangeiros", body: "Os formulários funcionam em vários idiomas: o turista avalia no idioma dele e sua equipe acompanha no mesmo lugar." },
      ]}
      useCasesHeading="Para todo tipo de estabelecimento"
      useCases={["Restaurantes", "Bares e botecos", "Cafeterias e padarias", "Pizzarias e hamburguerias", "Redes e franquias", "Delivery e dark kitchens"]}
      faqs={faqs}
      ctaHeading="Coloque o QR Code na mesa ainda hoje"
      ctaSub="Crie o quadro, imprima o QR Code e receba a primeira avaliação no próximo serviço. Teste grátis por 7 dias."
      breadcrumbLabel="Restaurantes"
    >
      <section className="br-section">
        <div className="container br-narrow">
          <h2 className="br-h2">Guias para restaurantes</h2>
          <p className="br-sub" style={{ margin: 0 }}>
            Comece pelo guia{" "}
            <Link href="/br/blog/como-lidar-com-reclamacoes-em-restaurante/">
              como lidar com reclamações em restaurante
            </Link>
            , use nosso{" "}
            <Link href="/br/blog/pesquisa-de-satisfacao-restaurante-modelo/">
              modelo de pesquisa de satisfação para restaurante
            </Link>{" "}
            com 18 perguntas prontas e veja{" "}
            <Link href="/br/blog/avaliacao-negativa-restaurante-google-ifood/">
              como evitar e responder avaliação negativa no Google e no iFood
            </Link>
            .
          </p>
        </div>
      </section>
    </BrLandingPage>
  );
}
