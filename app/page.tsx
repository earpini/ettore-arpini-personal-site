"use client";

import { useState } from "react";

const copy = {
  en: {
    nav: ["Projects", "Writing", "Focus", "About"],
    eyebrow: "Strategy · Institutions · AI governance",
    headline: <>Making AI<br />governance <em>real.</em></>,
    intro: "I work on the strategy, coalitions, and institutions that turn evidence about advanced AI into real-world action — especially in countries outside the frontier.",
    status: "Currently co-founding",
    focusTitle: "Where transformative AI lands matters as much as where it is built.",
    focusBody: "I focus on the countries, institutions, industries, and people who will live with advanced AI — and on building the political agency to shape it.",
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
    aboutBody1: "Before turning to AI governance, I spent nine years at the World Resources Institute — from intern to Director of Strategy and Impact at WRI Brasil. Across nine countries, I designed strategies, theories of change, and learning systems to connect climate research with policy, coalitions, and institutional action.",
    aboutBody2: "That experience taught me that evidence alone rarely changes reality. It has to become strategy, institutions, political urgency, and a reason for people to move.",
    available: "Open to collaborations, advisory work, and consulting",
    contactTitle: <>If you’re working on<br />any of this, <em>let’s talk.</em></>,
    email: "Email me",
    feedback: "Anonymous feedback",
    footer: "São Paulo · working globally",
  },
  pt: {
    nav: ["Projetos", "Escrita", "Foco", "Sobre"],
    eyebrow: "Estratégia · Instituições · Governança de IA",
    headline: <>Tornando a governança<br />de IA <em>real.</em></>,
    intro: "Trabalho com as estratégias, coalizões e instituições que transformam evidências sobre IA avançada em ação no mundo real — especialmente em países fora da fronteira.",
    status: "Cofundando agora",
    focusTitle: "Onde a IA transformadora aterrissa importa tanto quanto onde ela é construída.",
    focusBody: "Meu foco são os países, instituições, indústrias e pessoas que viverão com a IA avançada — e como construir a agência política para moldá-la.",
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
    aboutBody1: "Antes de me voltar para a governança de IA, passei nove anos no World Resources Institute — de estagiário a Diretor de Estratégia e Impacto do WRI Brasil. Em nove países, desenhei estratégias, teorias da mudança e sistemas de aprendizagem para conectar pesquisa climática a políticas, coalizões e ação institucional.",
    aboutBody2: "Essa experiência me ensinou que evidência sozinha raramente muda a realidade. Ela precisa se tornar estratégia, instituições, urgência política e uma razão para as pessoas se moverem.",
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

export default function Home() {
  const [lang, setLang] = useState<"en" | "pt">("en");
  const t = copy[lang];
  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="#top" aria-label="Ettore Arpini, home">Ettore Arpini<span>↗</span></a>
        <nav>{t.nav.map((item, i) => <a key={item} href={`#${["projects", "writing", "focus", "about"][i]}`}>{item}</a>)}</nav>
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


      <section className="projects" id="projects">
        <div className="shell projects-grid"><div><p className="section-number">01 / {t.projectsLabel}</p><h2>{t.projectsTitle}</h2><p>{t.projectsBody}</p></div>
          <div className="project-stack">
            <a href="https://ettorearpini.com/leverage-lab/" target="_blank" rel="noreferrer" className="project-card orange"><span>01 · Browser game</span><h3>Leverage<br />Lab</h3><p>18 countries · 8 turns · 5 endings</p><b>↗</b></a>
            <a href="https://ettorearpini.com/frontier-ai-dependency-explorer/" target="_blank" rel="noreferrer" className="project-card cream"><span>02 · Interactive dashboard</span><h3>AI Frontier<br />Dependency Explorer</h3><p>Minerals · Compute · Energy · Capital</p><b>↗</b></a>
          </div>
        </div>
      </section>

      <section className="writing shell" id="writing">
        <div className="feature-card">
          <div><p className="section-number">02 / {t.writingLabel}</p><h2>{t.writingTitle}</h2></div>
          <div className="feature-copy"><p>{t.writingBody}</p><a className="arrow-link" href="https://arpini.substack.com" target="_blank" rel="noreferrer">{t.read} <span>↗</span></a></div>
        </div>
        <div className="publication-block">
          <p className="section-number">{t.workLabel}</p>
          <div>{publications.map(([title, meta, href]) => <a className="publication" href={href} target="_blank" rel="noreferrer" key={title}><h3>{title}</h3><span>{meta}</span><b>↗</b></a>)}</div>
        </div>
      </section>

      <section className="focus dark" id="focus">
        <div className="shell">
          <div className="section-intro"><p className="section-number">03 / FOCUS</p><h2>{t.focusTitle}</h2><p>{t.focusBody}</p></div>
          <div className="pillars">{t.pillars.map(([n, title, body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>

      <section className="about shell" id="about">
        <p className="section-number">04 / {t.aboutLabel}</p>
        <div className="about-grid"><h2>{t.aboutTitle}</h2><div className="about-copy"><p>{t.aboutBody1}</p><p>{t.aboutBody2}</p><div className="availability"><i />{t.available}</div></div></div>
      </section>

      <section className="contact dark">
        <div className="shell"><p className="section-number">05 / CONTACT</p><h2>{t.contactTitle}</h2><div className="contact-links"><a href="mailto:ettore.arpini@gmail.com">{t.email} <span>↗</span></a><a href="https://www.linkedin.com/in/arpini" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.admonymous.co/arpini" target="_blank" rel="noreferrer">{t.feedback} ↗</a></div></div>
      </section>

      <footer><div className="shell"><strong>Ettore Arpini</strong><span>{t.footer}</span><span>© 2026</span></div></footer>
    </main>
  );
}
