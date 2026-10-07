import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Code2, Database, Download, ExternalLink, Github,
  Instagram, Linkedin, Mail, Menu, X, Sparkles, Send, CheckCircle2,
  BrainCircuit, Globe2, Palette, ChevronDown
} from "lucide-react";
import "./styles.css";

const EMAIL = "sharmaji9742@gmail.com";

const projects = [
  {
    title: "Forest Fire Prediction",
    category: "AI / ML + Web",
    desc: "A machine-learning based prediction application with a polished web interface, model pipeline and user-friendly prediction workflow.",
    tech: ["Python", "Flask", "Scikit-learn", "Pandas"],
    featured: true
  },
  {
    title: "Student Placement & Career Recommendation",
    category: "AI / ML",
    desc: "An AI-driven concept for student placement prediction, career recommendations, resume parsing and skill-gap analysis.",
    tech: ["Python", "Scikit-learn", "MySQL", "Streamlit"],
    featured: true
  },
  {
    title: "Iterative Dragon",
    category: "Creative Frontend",
    desc: "An interactive browser experience where the dragon follows the cursor, turning a simple interaction into a memorable visual project.",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: true
  },
  {
    title: "Mobile Price Prediction",
    category: "Data Science",
    desc: "A machine-learning project focused on predicting mobile price categories through preprocessing, model training and evaluation.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    featured: false
  },
  {
    title: "Diabetes Prediction",
    category: "Machine Learning",
    desc: "End-to-end classification workflow covering preprocessing, EDA, multiple algorithms, evaluation and prediction.",
    tech: ["Python", "Pandas", "Random Forest", "Jupyter"],
    featured: false
  }
];

const skills = [
  { name: "Python", level: "Advanced", icon: Code2 },
  { name: "React", level: "Frontend", icon: Globe2 },
  { name: "HTML / CSS / JS", level: "Frontend", icon: Palette },
  { name: "Pandas / NumPy", level: "Data", icon: Database },
  { name: "Scikit-learn / ML", level: "AI", icon: BrainCircuit },
  { name: "SQL / MySQL", level: "Database", icon: Database },
  { name: "Git / GitHub", level: "Tools", icon: Github }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [theme, setTheme] = useState("dark");

  const nav = ["About", "Services", "Skills", "Projects", "Contact"];

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
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hello Karan,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from your portfolio website.`
    );
    setSent(true);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className={`site ${theme}`}>
      <div className="noise" />
      <header className="nav-wrap">
        <nav className="nav">
          <button className="brand" onClick={() => go("home")} aria-label="Home">
            <span className="brand-mark">KS</span>
            <span>KARAN<span className="accent">.</span></span>
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {nav.map((item) => (
              <button key={item} onClick={() => go(item.toLowerCase())}>{item}</button>
            ))}
            <a className="nav-resume" href="/resume.pdf" download>
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="nav-actions">
            <button className="theme-btn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
              {theme === "dark" ? "☼" : "☾"}
            </button>
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> Available for opportunities</div>
            <p className="hero-kicker">WEB DEVELOPER <span>×</span> DATA SCIENCE</p>
            <h1>
              I build digital
              <span className="gradient-text"> experiences</span>
              <br />that get remembered.
            </h1>
            <p className="hero-text">
              I’m Karan Sharma — a developer who blends clean frontend design,
              interactive experiences and practical machine learning to turn ideas into useful products.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn" onClick={() => go("projects")}>
                Explore my work <ArrowUpRight size={18} />
              </button>
              <button className="ghost-btn" onClick={() => go("contact")}>
                Let's talk <Mail size={17} />
              </button>
            </div>
            <div className="mini-stats">
              <div><strong>05+</strong><span>Featured projects</span></div>
              <div><strong>07</strong><span>Core technologies</span></div>
              <div><strong>100%</strong><span>Curiosity-driven</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="profile-card">
              <div className="profile-glow" />
              <img src="/profile.jpg" alt="Karan Sharma" className="profile-photo"
                   onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextElementSibling.style.display = "grid"; }} />
              <div className="profile-fallback">KS</div>
              <div className="profile-tag"><Sparkles size={15} /> Karan Sharma</div>
            </div>
            <div className="floating-card fc-one"><Code2 size={18}/><span>Frontend<br/><b>Developer</b></span></div>
            <div className="floating-card fc-two"><BrainCircuit size={18}/><span>Machine<br/><b>Learning</b></span></div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-label">01 — ABOUT ME</div>
          <div className="two-col">
            <div>
              <h2>More than a developer.<br /><span className="muted">I’m a problem solver.</span></h2>
            </div>
            <div>
              <p className="large-copy">
                I’m focused on building websites and applications that feel intentional —
                not just functional. My work sits at the intersection of <b>frontend development,
                data science and machine learning.</b>
              </p>
              <p className="body-copy">
                From responsive interfaces to prediction systems, I enjoy taking an idea from
                a rough concept to a working, presentable product. I care about visual polish,
                usability, performance and code that can actually be maintained.
              </p>
              <div className="about-chips">
                <span>Creative thinking</span><span>Clean UI</span><span>Data-driven</span><span>Always learning</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="section-label">02 — WHAT I DO</div>
          <div className="section-heading">
            <h2>Skills that turn ideas<br /><span className="muted">into real products.</span></h2>
          </div>
          <div className="service-grid">
            <article className="service-card featured-service">
              <span className="service-number">01</span><Code2 />
              <h3>Web Development</h3>
              <p>Responsive, modern websites and interactive frontend experiences with a strong focus on visual design and usability.</p>
              <div className="service-tags"><span>React</span><span>JavaScript</span><span>CSS</span></div>
            </article>
            <article className="service-card">
              <span className="service-number">02</span><BrainCircuit />
              <h3>Data Science & ML</h3>
              <p>Data preprocessing, EDA, model training, evaluation and practical prediction systems using Python and Scikit-learn.</p>
              <div className="service-tags"><span>Python</span><span>Pandas</span><span>ML</span></div>
            </article>
            <article className="service-card">
              <span className="service-number">03</span><Database />
              <h3>Data & Backend</h3>
              <p>Structured data workflows, SQL/MySQL integration and application logic that connects the interface with useful data.</p>
              <div className="service-tags"><span>MySQL</span><span>SQL</span><span>APIs</span></div>
            </article>
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="section-label">03 — TOOLKIT</div>
          <div className="skills-layout">
            <div>
              <h2>My everyday<br /><span className="muted">toolkit.</span></h2>
              <p className="body-copy">A practical stack for building interfaces, data workflows and machine-learning projects.</p>
            </div>
            <div className="skill-list">
              {skills.map(({name, level, icon: Icon}) => (
                <div className="skill-row" key={name}>
                  <span className="skill-icon"><Icon size={18}/></span>
                  <span className="skill-name">{name}</span>
                  <span className="skill-level">{level}</span>
                  <ArrowUpRight size={17} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-label">04 — SELECTED WORK</div>
          <div className="project-head">
            <h2>Work that shows<br /><span className="muted">how I think.</span></h2>
            <p>Selected academic, creative and machine-learning projects.</p>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <article className={`project-card ${p.featured ? "featured" : ""}`} key={p.title}>
                <div className="project-top">
                  <span className="project-index">0{i+1}</span>
                  <span className="project-category">{p.category}</span>
                </div>
                <div className="project-art">
                  <div className="art-grid" />
                  <span className="art-symbol">{i === 2 ? "↯" : i === 0 ? "◈" : i === 1 ? "⌘" : "✦"}</span>
                </div>
                <div className="project-content">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="project-tech">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
                  <button className="project-link" onClick={() => go("contact")}>Discuss project <ArrowUpRight size={16}/></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-banner section">
          <div>
            <span className="section-label">05 — RESUME</span>
            <h2>Want the full<br /><span className="muted">story?</span></h2>
          </div>
          <a className="primary-btn" href="/resume.pdf" download>
            Download Resume <Download size={18}/>
          </a>
        </section>

        <section id="contact" className="section contact">
          <div className="section-label">06 — LET'S CONNECT</div>
          <div className="contact-layout">
            <div className="contact-copy">
              <h2>Have an idea?<br /><span className="gradient-text">Let’s build it.</span></h2>
              <p>Tell me what you’re working on. The form opens your email app with the message already prepared, so your inquiry goes directly to me.</p>
              <a className="email-link" href={`mailto:${EMAIL}`}><Mail size={18}/> {EMAIL}</a>
              <div className="socials">
                <a href="https://github.com/sharmaji2009" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
                <a href="https://www.linkedin.com/in/karan-sharma-425ab6423?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={18}/> Instagram</a>
              </div>
            </div>

            <form className="contact-form" onSubmit={submit}>
              <div className="form-top">
                <span>Start a conversation</span><span className="form-status"><span /> Direct email</span>
              </div>
              <label>Your name<input required name="name" placeholder="John / Company" /></label>
              <label>Your email<input required type="email" name="email" placeholder="you@example.com" /></label>
              <label>What can I help with?<textarea required name="message" rows="6" placeholder="Tell me about your project, website or idea..." /></label>
              <button className="send-btn" type="submit">
                {sent ? <><CheckCircle2 size={18}/> Opening email…</> : <><Send size={18}/> Send me a message</>}
              </button>
              <p className="form-note">No account or signup required. Your message is sent through your email client.</p>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span className="brand-mark">KS</span><span>KARAN SHARMA<span className="accent">.</span></span></div>
        <p>© {new Date().getFullYear()} Karan Sharma. Designed & built with intention.</p>
        <button onClick={() => go("home")} className="back-top">Back to top <ChevronDown size={16} className="rotate"/></button>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
