"use client";

import { useState } from "react";
import publicationCover from "../public/where-ai-lands-cover.png";

const copy = {
  en: {
    nav: ["About", "Projects", "Writing", "Contact"],
    eyebrow: "Strategy · Institutions · AI governance",
    headline: <>From research<br />to <em>impact.</em></>,
    intro: "I develop strategies, coalitions, and institutions that contribute to change in the real world. I'm currently working on helping countries prepare for advanced AI, influence global decisions, and protect their ability to shape their own futures.",
    status: "Currently co-founding",
    focusTitle: "Where transformative AI lands matters as much as where it is built.",
    focusBody: "I’m exploring how middle-power countries can turn their real assets into influence over the global AI order — and how public mobilization, strategy, and new institutions can make that agency durable.",
    pillars: [
      ["01", "Mobilization", "Turning technical evidence into public relevance, institutional urgency, and coalitions that can act."],
      ["02", "Middle powers", "Helping countries outside the frontier convert their real assets into leverage in the global AI order."],
      ["03", "Fieldbuilding", "Strengthening the people, organizations, strategies, and systems that make AI governance durable."],
    ],
    writingLabel: "Selected writing",
    writingTitle: "Where AI Lands",
    writingBody: "My Substack about where transformative AI lands in the real world — and how to talk about those impacts concretely enough that people and policymakers act.",
    read: "Read on Substack",
    workLabel: "Research & publications",
    projectsLabel: "Projects",
    projectsTitle: "Ideas you can play with.",
    projectsBody: "Interactive experiments for understanding the choices, dependencies, and pressure points in the global AI order.",
    aboutLabel: "About",
    aboutTitle: "I build the bridge between good ideas and real-world results.",
    aboutBody1: "Before turning to AI governance, I spent nine years at the World Resources Institute. I started as an intern and became Director of Strategy and Impact at WRI Brasil. Across nine countries, I designed strategies, theories of change, and learning systems to connect climate research with policy, coalitions, and institutional action.",
    aboutBody2: "That experience taught me that evidence alone rarely changes reality. It has to become strategy, institutions, political urgency, and a reason for people to move.",
    learnMore: "Learn more",
    aboutLong: [
      "I work at the intersection of AI governance, strategy, and institutional change.",
      "Before turning to AI governance, I spent nine years at the World Resources Institute, one of the world’s leading environmental policy institutions. I started as an intern and became Director of Strategy and Impact at WRI Brasil. My work was about one thing: turning research into decisions.",
      "That meant designing theories of change, strategies, and results systems that helped connect climate and environmental research to policy, coalitions, and institutional action across countries. It also meant working close to the machinery of global policy: governments, funders, CEOs, researchers, and teams trying to move from good ideas to real-world results.",
      "In 2026, I turned that experience toward AI governance. Climate taught me that evidence alone rarely changes the world. It has to be translated into strategy, institutions, coalitions, and political urgency. Advanced AI now faces a similar challenge — but with power concentrating faster than institutions are adapting.",
      "My current work focuses on how countries outside the frontier keep agency in the age of advanced AI: middle powers, multilateralism, fieldbuilding, and the practical policy work needed to make AI safer globally.",
      "I’m open to collaborations, advisory work, and consulting: strategy and theory of change, results and learning systems, fundraising cases, and getting governance ideas adopted."
    ],
    experienceLabel: "Experience",
    educationLabel: "Education",
    currentFocusLabel: "Current focus",
    currentFocus: "I’m exploring how middle-power countries can turn their real assets into influence over the global AI order — and how public mobilization, strategy, and new institutions can make that agency durable.",
    nextLabel: "What’s next",
    nextTitle: "Building agency where transformative AI lands.",
    nextBody: "I’m exploring how middle-power countries can turn their real assets into influence over the global AI order — and how public mobilization, strategy, and new institutions can make that agency durable.",
    available: "Open to collaborations, advisory work, and consulting",
    contactTitle: <>If you’re working on<br />any of this, <em>let’s talk.</em></>,
    email: "Email me",
    feedback: "Anonymous feedback",
    footer: "São Paulo · working globally",
  },
  pt: {
    nav: ["Sobre", "Projetos", "Escrita", "Contato"],
    eyebrow: "Estratégia · Instituições · Governança de IA",
    headline: <>Da pesquisa<br />ao <em>impacto.</em></>,
    intro: "Desenvolvo estratégias, coalizões e instituições que contribuem para mudanças no mundo real. Atualmente, trabalho para ajudar países a se prepararem para a IA avançada, influenciarem decisões globais e protegerem sua capacidade de moldar seus próprios futuros.",
    status: "Cofundando agora",
    focusTitle: "Onde a IA transformadora aterrissa importa tanto quanto onde ela é construída.",
    focusBody: "Estou explorando como potências médias podem transformar seus ativos reais em influência sobre a ordem global da IA — e como mobilização pública, estratégia e novas instituições podem tornar essa agência duradoura.",
    pillars: [
      ["01", "Mobilização", "Transformar evidência técnica em relevância pública, urgência institucional e coalizões capazes de agir."],
      ["02", "Potências médias", "Ajudar países fora da fronteira a converter seus ativos reais em alavancagem na ordem global da IA."],
      ["03", "Construção de campo", "Fortalecer pessoas, organizações, estratégias e sistemas que tornam a governança de IA duradoura."],
    ],
    writingLabel: "Escrita selecionada",
    writingTitle: "Where AI Lands",
    writingBody: "Minha Substack sobre onde a IA transformadora aterrissa no mundo real — e como falar sobre esses impactos de forma concreta o suficiente para que pessoas e formuladores de políticas ajam.",
    read: "Ler na Substack",
    workLabel: "Pesquisa e publicações",
    projectsLabel: "Projetos",
    projectsTitle: "Ideias com que você pode jogar.",
    projectsBody: "Experimentos interativos para entender escolhas, dependências e pontos de pressão na ordem global da IA.",
    aboutLabel: "Sobre",
    aboutTitle: "Construo a ponte entre boas ideias e resultados no mundo real.",
    aboutBody1: "Antes de me voltar para a governança de IA, passei nove anos no World Resources Institute. Comecei como estagiário e me tornei Diretor de Estratégia e Impacto do WRI Brasil. Em nove países, desenhei estratégias, teorias da mudança e sistemas de aprendizagem para conectar pesquisa climática a políticas, coalizões e ação institucional.",
    aboutBody2: "Essa experiência me ensinou que evidência sozinha raramente muda a realidade. Ela precisa se tornar estratégia, instituições, urgência política e uma razão para as pessoas se moverem.",
    learnMore: "Saiba mais",
    aboutLong: [
      "Trabalho na interseção entre governança de IA, estratégia e mudança institucional.",
      "Antes de me voltar para a governança de IA, passei nove anos no World Resources Institute, uma das principais instituições de política ambiental do mundo. Comecei como estagiário e me tornei Diretor de Estratégia e Impacto do WRI Brasil. Meu trabalho era sobre uma coisa: transformar pesquisa em decisão.",
      "Isso significava desenhar teorias da mudança, estratégias e sistemas de resultados que ajudavam a conectar pesquisa climática e ambiental a políticas, coalizões e ação institucional em diversos países. Também significava trabalhar perto da engrenagem da política global: governos, financiadores, CEOs, pesquisadores e equipes tentando ir de boas ideias a resultados concretos.",
      "Em 2026, apontei essa experiência para a governança de IA. O clima me ensinou que evidência sozinha raramente muda o mundo. Ela precisa ser traduzida em estratégia, instituições, coalizões e urgência política. A IA avançada enfrenta agora um desafio parecido — mas com o poder se concentrando mais rápido do que as instituições estão se adaptando.",
      "Meu trabalho atual foca em como países fora da fronteira mantêm agência na era da IA avançada: potências médias, multilateralismo, construção de campo e o trabalho prático de políticas necessário para tornar a IA mais segura globalmente.",
      "Estou aberto a colaborações, trabalho de assessoria e consultoria: estratégia e teoria da mudança, sistemas de resultados e aprendizagem, casos de captação de recursos e a adoção de ideias de governança."
    ],
    experienceLabel: "Experiência",
    educationLabel: "Formação",
    currentFocusLabel: "Foco atual",
    currentFocus: "Estou explorando como potências médias podem transformar seus ativos reais em influência sobre a ordem global da IA — e como mobilização pública, estratégia e novas instituições podem tornar essa agência duradoura.",
    nextLabel: "Próximos passos",
    nextTitle: "Construir agência onde a IA transformadora aterrissa.",
    nextBody: "Estou explorando como potências médias podem transformar seus ativos reais em influência sobre a ordem global da IA — e como mobilização pública, estratégia e novas instituições podem tornar essa agência duradoura.",
    available: "Aberto a colaborações, assessoria e consultoria",
    contactTitle: <>Se você trabalha com<br />algo disso, <em>vamos conversar.</em></>,
    email: "Me escreva",
    feedback: "Feedback anônimo",
    footer: "São Paulo · trabalhando globalmente",
  },
};

const publications = [
  ["Leverage, Not Frontier: Brazil in the Global AI Order", "Working paper · 2026", "https://ettorearpini.com/brazil-ai-analysis/"],
  ["WRI Brasil 2023–2027 Impact Strategy", "WRI Brasil · 2025", "https://files.wri.org/d8/s3fs-public/2025-11/wri-brasil-2023-27-strategy.pdf"],
  ["Urban Commons as a Driver of Social Inclusion", "TU Delft · 2022", "https://resolver.tudelft.nl/uuid:b57017ef-79a1-4af7-ac52-201af5988259"],
];

const experience = {
  en: [
    ["Director of Strategy and Impact", "WRI Brasil, São Paulo, 2025–2026"],
    ["Planning, Reporting & Learning Lead", "WRI, The Hague, 2023–2025"],
    ["Co-Founder & COO (exited)", "Drexfy, Lisbon, 2023–2025"],
    ["Intern → Program Management Specialist", "WRI Ross Center, Washington D.C., 2017–2023"],
  ],
  pt: [
    ["Diretor de Estratégia e Impacto", "WRI Brasil, São Paulo, 2025–2026"],
    ["Líder de Planejamento e Aprendizagem", "WRI, Haia, 2023–2025"],
    ["Cofundador e COO (com saída)", "Drexfy, Lisboa, 2023–2025"],
    ["Estagiário → Especialista em Gestão de Programas", "WRI Ross Center, Washington D.C., 2017–2023"],
  ],
};

const education = {
  en: [
    ["MSc Engineering and Policy Analysis, cum laude · 8.5/10", "TU Delft"],
    ["BSc Industrial Engineering and Management · 9.7/10", "UFRGS, Porto Alegre"],
  ],
  pt: [
    ["Mestrado em Engenharia e Análise de Políticas, cum laude · 8,5/10", "TU Delft"],
    ["Engenharia de Produção · 9,7/10", "UFRGS, Porto Alegre"],
  ],
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "pt">("en");
  const t = copy[lang];
  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="#top" aria-label="Ettore Arpini, home">Ettore Arpini<span>↗</span></a>
        <nav>{t.nav.map((item, i) => <a key={item} href={`#${["about", "projects", "writing", "contact"][i]}`}>{item}</a>)}</nav>
        <button className="language" onClick={() => setLang(lang === "en" ? "pt" : "en")} aria-label="Switch language">{lang === "en" ? "PT" : "EN"}</button>
      </header>

      <section className="hero shell" id="top">
        <div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" />
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.headline}</h1>
        <div className="hero-foot">
          <p>{t.intro}</p>
          <a className="current" href="https://plures.org" target="_blank" rel="noreferrer"><span>{t.status}</span><strong>Plures</strong><b>↗</b></a>
        </div>
      </section>

      <section className="about-story dark" id="about">
        <div className="shell">
          <div className="about-story-grid">
            <div><p className="section-number">01 / {t.aboutLabel}</p><h2>{lang === "en" ? <>Making AI<br />governance <em>real.</em></> : <>Tornando a governança<br />de IA <em>real.</em></>}</h2></div>
            <div className="about-story-copy compact-about">
              <p>{t.aboutBody1}</p>
              <p>{t.aboutBody2}</p>
              <a className="light-link" href="/about2">{t.learnMore} <span>→</span></a>
            </div>
          </div>
          <div className="current-agenda"><p className="section-number">{t.currentFocusLabel}</p><p>{t.currentFocus}</p></div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="shell projects-grid"><div><p className="section-number">02 / {t.projectsLabel}</p><h2>{t.projectsTitle}</h2><p>{t.projectsBody}</p></div>
          <div className="project-stack">
            <a href="https://ettorearpini.com/leverage-lab/" target="_blank" rel="noreferrer" className="project-card orange"><span>01 · Browser game</span><h3>Leverage<br />Lab</h3><p>An interactive simulation of how middle-power countries build leverage in the global AI order.</p><b>↗</b></a>
            <a href="https://ettorearpini.com/frontier-ai-dependency-explorer/" target="_blank" rel="noreferrer" className="project-card cream"><span>02 · Interactive explorer</span><h3>AI Frontier<br />Dependency Explorer</h3><p>An interactive explorer of the minerals, compute, energy, and capital behind frontier AI.</p><b>↗</b></a>
          </div>
        </div>
      </section>

      <section className="writing shell" id="writing">
        <div className="feature-card">
          <div className="publication-cover-column">
            <p className="section-number">03 / {t.writingLabel}</p>
            <a className="moving-cover" href="https://arpini.substack.com" target="_blank" rel="noreferrer" aria-label={`${t.writingTitle} — ${t.read}`}>
              <span className="cover-frame"><img src={publicationCover.src} alt="Where AI Lands publication cover" /></span>
            </a>
          </div>
          <div className="feature-copy"><h2>{t.writingTitle}</h2><p>{t.writingBody}</p><a className="arrow-link" href="https://arpini.substack.com" target="_blank" rel="noreferrer">{t.read} <span>↗</span></a></div>
        </div>
        <div className="publication-block">
          <p className="section-number">{t.workLabel}</p>
          <div>{publications.map(([title, meta, href]) => <a className="publication" href={href} target="_blank" rel="noreferrer" key={title}><h3>{title}</h3><span>{meta}</span><b>↗</b></a>)}</div>
        </div>
      </section>

      <section className="contact dark" id="contact">
        <div className="shell"><p className="section-number">04 / CONTACT</p><h2>{t.contactTitle}</h2><div className="contact-links"><a href="mailto:ettore.arpini@gmail.com">{t.email} <span>↗</span></a><a href="https://www.linkedin.com/in/arpini" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.admonymous.co/arpini" target="_blank" rel="noreferrer">{t.feedback} ↗</a></div></div>
      </section>

      <footer><div className="shell"><strong>Ettore Arpini</strong><span>{t.footer}</span><span>© 2026</span></div></footer>
    </main>
  );
}
