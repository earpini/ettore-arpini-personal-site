"use client";

import { useState } from "react";

const content = {
  en: {
    back: "Back to home",
    label: "About",
    title: <>Making AI<br />governance <em>real.</em></>,
    paragraphs: [
      "I work at the intersection of AI governance, strategy, and institutional change.",
      "Before turning to AI governance, I spent nine years at the World Resources Institute, one of the world’s leading environmental policy institutions. I started as an intern and became Director of Strategy and Impact at WRI Brasil. My work was about one thing: turning research into decisions.",
      "That meant designing theories of change, strategies, and results systems that helped connect climate and environmental research to policy, coalitions, and institutional action across countries. It also meant working close to the machinery of global policy: governments, funders, CEOs, researchers, and teams trying to move from good ideas to real-world results.",
      "In 2026, I turned that experience toward AI governance. Climate taught me that evidence alone rarely changes the world. It has to be translated into strategy, institutions, coalitions, and political urgency. Advanced AI now faces a similar challenge — but with power concentrating faster than institutions are adapting.",
      "My current work focuses on how countries outside the frontier keep agency in the age of advanced AI: middle powers, multilateralism, fieldbuilding, and the practical policy work needed to make AI safer globally.",
      "I’m open to collaborations, advisory work, and consulting: strategy and theory of change, results and learning systems, fundraising cases, and getting governance ideas adopted.",
    ],
    focusLabel: "Current focus",
    focus: "I’m exploring how middle-power countries can turn their real assets into influence over the global AI order — and how public mobilization, strategy, and new institutions can make that agency durable.",
    experience: "Experience",
    education: "Education",
  },
  pt: {
    back: "Voltar ao início",
    label: "Sobre",
    title: <>Tornando a governança<br />de IA <em>real.</em></>,
    paragraphs: [
      "Trabalho na interseção entre governança de IA, estratégia e mudança institucional.",
      "Antes de me voltar para a governança de IA, passei nove anos no World Resources Institute, uma das principais instituições de política ambiental do mundo. Comecei como estagiário e me tornei Diretor de Estratégia e Impacto do WRI Brasil. Meu trabalho era sobre uma coisa: transformar pesquisa em decisão.",
      "Isso significava desenhar teorias da mudança, estratégias e sistemas de resultados que ajudavam a conectar pesquisa climática e ambiental a políticas, coalizões e ação institucional em diversos países. Também significava trabalhar perto da engrenagem da política global: governos, financiadores, CEOs, pesquisadores e equipes tentando ir de boas ideias a resultados concretos.",
      "Em 2026, apontei essa experiência para a governança de IA. O clima me ensinou que evidência sozinha raramente muda o mundo. Ela precisa ser traduzida em estratégia, instituições, coalizões e urgência política. A IA avançada enfrenta agora um desafio parecido — mas com o poder se concentrando mais rápido do que as instituições estão se adaptando.",
      "Meu trabalho atual foca em como países fora da fronteira mantêm agência na era da IA avançada: potências médias, multilateralismo, construção de campo e o trabalho prático de políticas necessário para tornar a IA mais segura globalmente.",
      "Estou aberto a colaborações, trabalho de assessoria e consultoria: estratégia e teoria da mudança, sistemas de resultados e aprendizagem, casos de captação de recursos e a adoção de ideias de governança.",
    ],
    focusLabel: "Foco atual",
    focus: "Estou explorando como potências médias podem transformar seus ativos reais em influência sobre a ordem global da IA — e como mobilização pública, estratégia e novas instituições podem tornar essa agência duradoura.",
    experience: "Experiência",
    education: "Formação",
  },
};

const experience = {
  en: [["Director of Strategy and Impact", "WRI Brasil, São Paulo, 2025–2026"], ["Planning, Reporting & Learning Lead", "WRI, The Hague, 2023–2025"], ["Co-Founder & COO (exited)", "Drexfy, Lisbon, 2023–2025"], ["Intern → Program Management Specialist", "WRI Ross Center, Washington D.C., 2017–2023"]],
  pt: [["Diretor de Estratégia e Impacto", "WRI Brasil, São Paulo, 2025–2026"], ["Líder de Planejamento e Aprendizagem", "WRI, Haia, 2023–2025"], ["Cofundador e COO (com saída)", "Drexfy, Lisboa, 2023–2025"], ["Estagiário → Especialista em Gestão de Programas", "WRI Ross Center, Washington D.C., 2017–2023"]],
};

const education = {
  en: [["MSc Engineering and Policy Analysis, cum laude · 8.5/10", "TU Delft"], ["BSc Industrial Engineering and Management · 9.7/10", "UFRGS, Porto Alegre"]],
  pt: [["Mestrado em Engenharia e Análise de Políticas, cum laude · 8,5/10", "TU Delft"], ["Engenharia de Produção · 9,7/10", "UFRGS, Porto Alegre"]],
};

export default function AboutPage() {
  const [lang, setLang] = useState<"en" | "pt">("en");
  const t = content[lang];
  return <main className="about-page">
    <header className="site-header shell">
      <a className="wordmark" href="/">Ettore Arpini<span>↗</span></a>
      <a className="back-link" href="/">← {t.back}</a>
      <button className="language" onClick={() => setLang(lang === "en" ? "pt" : "en")}>{lang === "en" ? "PT" : "EN"}</button>
    </header>
    <article className="shell about-detail">
      <div className="about-detail-heading"><p className="section-number">01 / {t.label}</p><h1>{t.title}</h1></div>
      <div className="about-detail-copy">{t.paragraphs.map(p => <p key={p}>{p}</p>)}</div>
      <div className="current-agenda"><p className="section-number">{t.focusLabel}</p><p>{t.focus}</p></div>
      <div className="credentials">
        <div><p className="section-number">{t.experience}</p>{experience[lang].map(([role, place]) => <div className="credential" key={role}><strong>{role}</strong><span>→</span><p>{place}</p></div>)}</div>
        <div><p className="section-number">{t.education}</p>{education[lang].map(([degree, school]) => <div className="credential" key={degree}><strong>{degree}</strong><span>→</span><p>{school}</p></div>)}</div>
      </div>
    </article>
  </main>;
}
