import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness, Check,
  CheckCircle2, Code2, Database, Download, ExternalLink, Github, GraduationCap,
  Layers3, Linkedin, Mail, Menu, MessageCircle, Moon, Palette, Send, Sparkles,
  Sun, Terminal, X, Zap
} from "lucide-react";
import "./styles.css";

const EMAIL = "sharmaji9742@gmail.com";
const GITHUB = "https://github.com/sharmaji2009";
const LINKEDIN = "";

const projects = [
  {
    number: "01",
    title: "Forest Fire Prediction",
    category: "Machine Learning + Web",
    desc: "A practical prediction system that combines a trained machine-learning workflow with a clean web interface for an easy prediction experience.",
    tech: ["Python", "Flask", "Scikit-learn", "Pandas"],
    icon: "◈",
  },
  {
    number: "02",
    title: "Student Placement & Career Recommendation",
    category: "AI / ML Product",
    desc: "A student-focused system concept for placement prediction, career recommendations, skill-gap analysis and data-driven decision support.",
    tech: ["Python", "Scikit-learn", "MySQL", "Streamlit"],
    icon: "⌘",
  },
  {
    number: "03",
    title: "Iterative Dragon",
    category: "Creative Frontend",
    desc: "An interactive browser experiment where a dragon follows the cursor, built to explore motion, interaction and memorable frontend experiences.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "↯",
  },
  {
    number: "04",
    title: "Mobile Price Prediction",
    category: "Data Science",
    desc: "A classification project covering preprocessing, exploratory analysis, model training and prediction of mobile price categories.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    icon: "✦",
  },
  {
    number: "05",
    title: "Diabetes Prediction",
    category: "Machine Learning",
    desc: "An end-to-end classification workflow with data preparation, EDA, model evaluation and prediction using a practical ML pipeline.",
    tech: ["Python", "Pandas", "Random Forest", "Jupyter"],
    icon: "＋",
  },
];

const skills = [
  { name: "Python", group: "Programming", level: "Strong", icon: Terminal },
  { name: "React", group: "Frontend", level: "Working", icon: Code2 },
  { name: "HTML / CSS / JavaScript", group: "Frontend", level: "Strong", icon: Palette },
  { name: "Pandas / NumPy", group: "Data", level: "Working", icon: Database },
  { name: "Scikit-learn / ML", group: "AI / ML", level: "Working", icon: BrainCircuit },
  { name: "SQL / MySQL", group: "Database", level: "Working", icon: Database },
  { name: "Git / GitHub", group: "Tools", level: "Working", icon: Github },
];

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Web Development",
    text: "Responsive websites and modern frontend experiences designed to look sharp, load fast and work smoothly across devices.",
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "Data Science & ML",
    text: "Practical data workflows, preprocessing, EDA, model training and prediction systems using Python and machine-learning tools.",
    tags: ["Python", "Pandas", "ML"],
  },
  {
    icon: Layers3,
    number: "03",
    title: "Product Thinking",
    text: "Turning an idea into a clear, usable project — from structure and interface to the logic that makes the product useful.",
    tags: ["UI", "Logic", "Problem Solving"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [active, setActive] = useState("home");
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scroll, setScroll] = useState(0);

  const sections = useMemo(() => ["home", "about", "services", "skills", "projects", "contact"], []);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] }
    );
    sections.forEach((id) => document.getElementById(id) && observer.observe(document.getElementById(id)));
    return () => observer.disconnect();
  }, [sections]);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Hello Karan,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from Karan Sharma's portfolio.`);
    setSent(true);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    window.setTimeout(() => setSent(false), 4500);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <div className={`site ${theme}`}>
      <div className="scroll-progress"><span style={{ width: `${scroll}%` }} /></div>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="noise" />

      <header className="nav-wrap">
        <nav className="nav" aria-label="Primary navigation">
          <button className="brand" onClick={() => go("home")} aria-label="Go to home">
            <span className="brand-mark">KS</span>
            <span>KARAN<span className="accent">.</span></span>
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {sections.slice(1).map((item) => (
              <button className={active === item ? "active" : ""} key={item} onClick={() => go(item)}>
                {item}
              </button>
            ))}
            <a className="nav-resume" href="/resume.pdf" download>
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="nav-actions">
            <button className="theme-btn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle color theme">
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="pulse-dot" /> Open to internships & opportunities</div>
            <p className="hero-kicker">WEB DEVELOPER <span>×</span> DATA SCIENCE</p>
            <h1>Building <span className="gradient-text">modern web</span><br />experiences & ML solutions.</h1>
            <p className="hero-text">I’m Karan Sharma — a developer focused on responsive interfaces, practical machine learning and turning ideas into polished, useful digital products.</p>
            <div className="hero-buttons">
              <button className="primary-btn" onClick={() => go("projects")}>Explore my work <ArrowUpRight size={18} /></button>
              <button className="ghost-btn" onClick={() => go("contact")}>Let’s work together <MessageCircle size={17} /></button>
            </div>
            <div className="hero-proof">
              <span><Check size={14} /> React & Frontend</span>
              <span><Check size={14} /> Python & ML</span>
              <span><Check size={14} /> SQL & Data</span>
            </div>
          </div>

          <div className="hero-visual reveal delay-1">
            <div className="visual-ring ring-one" />
            <div className="visual-ring ring-two" />
            <div className="visual-grid" />
            <div className="profile-card">
              <div className="profile-glow" />
              <img src="/profile.jpg" alt="Karan Sharma" className="profile-photo" onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextElementSibling.style.display = "grid"; }} />
              <div className="profile-fallback">KS</div>
              <div className="profile-shine" />
              <div className="profile-tag"><Sparkles size={15} /> Karan Sharma</div>
            </div>
            <div className="floating-card fc-one"><Code2 size={18} /><span>Frontend<br /><b>Developer</b></span></div>
            <div className="floating-card fc-two"><BrainCircuit size={18} /><span>Machine<br /><b>Learning</b></span></div>
            <div className="availability-card"><span className="status-dot" /> Available for work</div>
          </div>
        </section>

        <section className="marquee-strip" aria-label="Technology focus">
          <div className="marquee-track">
            <span>WEB DEVELOPMENT</span><i>✦</i><span>DATA SCIENCE</span><i>✦</i><span>MACHINE LEARNING</span><i>✦</i><span>UI / UX</span><i>✦</i><span>WEB DEVELOPMENT</span><i>✦</i><span>DATA SCIENCE</span><i>✦</i>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-label">01 — ABOUT ME</div>
          <div className="about-grid">
            <div>
              <h2>I don’t just write code.<br /><span className="muted">I build solutions.</span></h2>
              <div className="about-highlight"><Zap size={18} /><span>Design-minded developer with a data-driven approach.</span></div>
            </div>
            <div>
              <p className="large-copy">I’m a B.Tech Computer Science student who enjoys working where <b>development, data and problem-solving</b> meet.</p>
              <p className="body-copy">My projects range from responsive frontend experiences to machine-learning prediction systems. I like taking a rough idea, giving it structure, building the logic behind it and presenting it as a product people can actually use.</p>
              <div className="about-chips"><span>Clean interfaces</span><span>Practical ML</span><span>Problem solving</span><span>Always learning</span></div>
            </div>
          </div>
          <div className="quick-facts">
            <div><span className="fact-icon"><GraduationCap size={19} /></span><div><small>Education</small><strong>B.Tech CSE · 2023–2027</strong></div></div>
            <div><span className="fact-icon"><BriefcaseBusiness size={19} /></span><div><small>Focus</small><strong>Web Development + Data Science</strong></div></div>
            <div><span className="fact-icon"><Code2 size={19} /></span><div><small>Currently building</small><strong>Real-world portfolio projects</strong></div></div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="section-label">02 — WHAT I DO</div>
          <div className="section-heading"><h2>From idea<br /><span className="muted">to working product.</span></h2><p>I combine design, development and data to create projects that are useful — not just visually impressive.</p></div>
          <div className="service-grid">
            {services.map(({ icon: Icon, number, title, text, tags }, i) => (
              <article className={`service-card ${i === 0 ? "featured-service" : ""}`} key={title}>
                <span className="service-number">{number}</span>
                <div className="service-icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="service-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="section-label">03 — TECHNICAL TOOLKIT</div>
          <div className="skills-layout">
            <div>
              <h2>Tools I use<br /><span className="muted">to make things happen.</span></h2>
              <p className="body-copy">A practical stack across frontend development, Python, data analysis, machine learning and databases.</p>
              <div className="stack-pills"><span>Frontend</span><span>Python</span><span>ML</span><span>SQL</span><span>Git</span></div>
            </div>
            <div className="skill-list">
              {skills.map(({ name, group, level, icon: Icon }) => (
                <div className="skill-row" key={name}>
                  <span className="skill-icon"><Icon size={18} /></span>
                  <div><span className="skill-name">{name}</span><span className="skill-group">{group}</span></div>
                  <span className="skill-level">{level}</span>
                  <ArrowUpRight size={17} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-label">04 — SELECTED WORK</div>
          <div className="project-head"><div><h2>Projects that show<br /><span className="muted">how I think.</span></h2></div><p>Academic, creative and machine-learning work — selected to show both technical ability and product thinking.</p></div>
          <div className="project-grid">
            {projects.map((p) => (
              <article className="project-card" key={p.title}>
                <div className="project-top"><span>{p.number}</span><span>{p.category}</span></div>
                <div className="project-art">
                  <div className="art-grid" /><div className="art-glow" /><span className="art-symbol">{p.icon}</span>
                  <span className="art-caption">CASE STUDY</span>
                </div>
                <div className="project-content">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="project-tech">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                  <button className="project-link" onClick={() => go("contact")}>Discuss this project <ArrowUpRight size={16} /></button>
                </div>
              </article>
            ))}
          </div>
          <div className="project-cta"><div><span>Want to see more?</span><strong>Let’s talk about what I can build for you.</strong></div><button className="primary-btn" onClick={() => go("contact")}>Start a conversation <ArrowUpRight size={18} /></button></div>
        </section>

        <section className="resume-banner section">
          <div><span className="section-label">05 — RESUME</span><h2>The short version<br /><span className="muted">of my journey.</span></h2></div>
          <a className="primary-btn" href="/resume.pdf" download>Download Resume <Download size={18} /></a>
        </section>

        <section id="contact" className="section contact">
          <div className="section-label">06 — LET’S CONNECT</div>
          <div className="contact-layout">
            <div className="contact-copy">
              <div className="contact-badge"><span className="status-dot" /> Usually replies quickly</div>
              <h2>Have an idea?<br /><span className="gradient-text">Let’s build it.</span></h2>
              <p>Whether it’s a website, a frontend experience or a data/ML project, tell me what you’re working on and let’s start a conversation.</p>
              <div className="contact-actions">
                <button className="email-pill" onClick={copyEmail}><Mail size={18} /><span>{copied ? "Email copied" : EMAIL}</span>{copied ? <CheckCircle2 size={16} /> : <ArrowUpRight size={16} />}</button>
                <a className="social-pill" href={GITHUB} target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ExternalLink size={14} /></a>
                {LINKEDIN && <a className="social-pill" href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn <ExternalLink size={14} /></a>}
              </div>
            </div>

            <form className="contact-form" onSubmit={submit}>
              <div className="form-top"><div><span className="form-kicker">DIRECT CONTACT</span><strong>Start a conversation</strong></div><span className="form-status"><span /> Email ready</span></div>
              <div className="form-grid">
                <label>Your name<input required name="name" placeholder="Your name" /></label>
                <label>Your email<input required type="email" name="email" placeholder="you@example.com" /></label>
              </div>
              <label>What are you looking to build?<textarea required name="message" rows="6" placeholder="Tell me about your website, project, idea or opportunity..." /></label>
              <button className="send-btn" type="submit">{sent ? <><CheckCircle2 size={18} /> Opening email…</> : <><Send size={18} /> Send message</>}</button>
              <p className="form-note">No signup required. Your default email app will open with the message prepared for you.</p>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span className="brand-mark">KS</span><span>KARAN<span className="accent">.</span></span></div>
        <p>© {new Date().getFullYear()} Karan Sharma · Designed & built with intention.</p>
        <button onClick={() => go("home")} className="back-top">Back to top <ArrowUpDown /></button>
      </footer>
    </div>
  );
}

function ArrowUpDown() {
  return <ArrowDownRight size={16} className="back-icon" />;
}

createRoot(document.getElementById("root")).render(<App />);
