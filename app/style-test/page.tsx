import styles from "./style-test.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = { robots: { index: false, follow: false } };

const writing = [
  ["2026", "Where AI Lands", "Where transformative AI lands in the real world — and how to make its consequences concrete enough for people and policymakers to act.", "https://arpini.substack.com"],
  ["2026", "Leverage, Not Frontier", "A strategy for Brazil to build influence in the global AI order from the assets it already has.", "https://ettorearpini.com/brazil-ai-analysis/"],
  ["2025", "WRI Brasil 2023–2027 Impact Strategy", "An institutional strategy connecting research, partnerships, funding, and management systems to impact.", "https://files.wri.org/d8/s3fs-public/2025-11/wri-brasil-2023-27-strategy.pdf"],
];

const projects = [
  ["Leverage Lab", "An interactive simulation of how middle-power countries can build leverage in the global AI order.", "Browser game · 2026", "https://ettorearpini.com/leverage-lab/", "Policy strategy"],
  ["AI Frontier Dependency Explorer", "An interactive explorer of the minerals, compute, energy, and capital behind frontier AI.", "Interactive research · 2026", "https://ettorearpini.com/frontier-ai-dependency-explorer/", "AI infrastructure"],
];

export default function StyleTestPage() {
  return <main className={styles.page}>
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerInner}`}>
        <a className={styles.wordmark} href="/style-test">Ettore Arpini<span /></a>
        <nav className={styles.nav}><a href="#writing">Writing</a><a href="#projects">Projects</a><a href="#about">About</a><a href="/">Current design ↗</a></nav>
      </div>
    </header>

    <section className={`${styles.container} ${styles.hero}`}>
      <span className={styles.eyebrow}>Strategy · Institutions · Advanced AI</span>
      <h1>From research<br />to <em>impact.</em></h1>
      <p className={styles.lead}>I develop impact strategies, funding channels, partnerships and management systems that contribute to positive change in the real world. I’m currently working on helping countries and organizations prepare for and shape the impacts of advanced AI.</p>
      <a className={styles.primaryButton} href="#writing">Explore the work <span>↓</span></a>
    </section>

    <section className={`${styles.container} ${styles.section}`} id="writing">
      <div className={styles.sectionHeading}><span className={styles.eyebrow}>Recent writing</span><h2>Ideas for where AI lands.</h2></div>
      <div className={styles.writingList}>{writing.map(([date,title,dek,href]) => <a href={href} target="_blank" rel="noreferrer" className={styles.writingRow} key={title}><time>{date}</time><div><h3>{title}</h3><p>{dek}</p></div><span>↗</span></a>)}</div>
    </section>

    <section className={`${styles.sunken} ${styles.section}`} id="projects">
      <div className={styles.container}>
        <div className={styles.sectionHeading}><span className={styles.eyebrow}>Featured projects</span><h2>Ideas you can play with.</h2></div>
        <div className={styles.projectGrid}>{projects.map(([title,body,meta,href,tag],i) => <a href={href} target="_blank" rel="noreferrer" className={`${styles.card} ${i === 1 ? styles.cardSlate : ""}`} key={title}><span className={styles.tag}>{tag}</span><h3>{title}</h3><p>{body}</p><div>{meta}<b>↗</b></div></a>)}</div>
      </div>
    </section>

    <section className={`${styles.container} ${styles.about}`} id="about">
      <span className={styles.eyebrow}>About</span>
      <div className={styles.aboutGrid}><h2>Making AI governance real.</h2><div><p>Before turning to AI governance, I spent nine years at the World Resources Institute. I started as an intern and became Director of Strategy and Impact at WRI Brasil.</p><p>That experience taught me that research and evidence alone rarely change reality. They have to “land” in the real world and mobilize the right people to inform strategies, shape institutions, and unlock funding.</p><a className={styles.textLink} href="/about2/">Learn more →</a></div></div>
    </section>

    <footer className={styles.footer}><div className={`${styles.container} ${styles.footerInner}`}><div><a className={styles.wordmark} href="/style-test">Ettore Arpini<span /></a><p>Research, strategy, and institutions for real-world impact.</p></div><div><a href="https://calendar.app.google/AcWvu4dFP3UNBZir7" target="_blank" rel="noreferrer">Book a call</a><a href="mailto:ettore.arpini@gmail.com">Email</a><a href="https://www.linkedin.com/in/arpini" target="_blank" rel="noreferrer">LinkedIn</a></div></div></footer>
  </main>;
}
