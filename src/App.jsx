import { useEffect, useRef, useState } from 'react'

const profile = {
  name: 'Nguyen Ngoc Thien',
  role: 'C# / .NET Backend Developer Intern',
  email: 'thien.nguyen@example.com',
  githubLabel: 'github.com/thiencoder2004',
  github: 'https://github.com/thiencoder2004',
  location: 'Ho Chi Minh City, Vietnam',
}

const skills = {
  'C# / .NET': ['C#', '.NET', 'ASP.NET Core', 'Web API', 'Entity Framework Core', 'LINQ', 'Dependency Injection'],
  Database: ['SQL Server', 'MongoDB', 'Redis', 'Firebase', 'BigQuery'],
  'Backend & Integration': ['RESTful API', 'NestJS', 'Node.js', 'Express.js', 'Async Workflows', 'Third-party APIs'],
  'Tools & Practices': ['Git', 'GitHub', 'GitLab', 'Docker', 'Postman', 'OOP', 'MVC', 'CI/CD', 'Agile/Scrum'],
}

const experiences = [
  {
    company: 'VGames Studio',
    role: 'Software Engineer Intern',
    date: '04/2026 – 07/2026',
    shortDate: '2026',
    points: [
      'Developed backend modules and RESTful APIs for production web/mobile products.',
      'Worked with NestJS, Node.js, MongoDB, Firebase Analytics and BigQuery.',
      'Integrated frontend, backend, external services and asynchronous workflows.',
      'Implemented data processing, reporting, callbacks, status tracking and error handling.',
    ],
  },
  {
    company: 'SRC — Smart Robotics Center',
    role: 'Software Developer Intern',
    date: '08/2025 – 12/2025',
    shortDate: '2025',
    points: [
      'Developed a React Native application for drone configuration and real-time control.',
      'Integrated Bluetooth, MQTT and Firebase for device communication and synchronization.',
      'Assisted with testing embedded systems using STM32, IMU and GPS modules.',
      'Participated in debugging, system testing and technical documentation.',
    ],
  },
]

const products = [
  {
    number: '01',
    tag: 'AI Platform',
    title: 'AI Creator / Flowboard',
    description:
      'AI-powered video generation and workflow orchestration platform combining script planning, storyboard generation, image/video generation, text-to-speech and media processing.',
    contribution: ['Backend modules & REST APIs', 'AI service integration', 'Async job & callback handling', 'Workflow status and retry logic'],
    tech: ['NestJS', 'Node.js', 'MongoDB', 'REST API', 'AI Services'],
  },
  {
    number: '02',
    tag: 'Game Analytics',
    title: 'LiveOps Dashboard',
    description:
      'Analytics and operations dashboard for understanding player behavior, event funnels, user journeys and reporting across game products.',
    contribution: ['Firebase Analytics / BigQuery integration', 'Funnel & drop-off analysis', 'Player journey visualization', 'Dynamic filters and CSV export'],
    tech: ['React', 'Firebase', 'BigQuery', 'JavaScript', 'Analytics'],
  },
  {
    number: '03',
    tag: 'Sports Product',
    title: 'Football Prediction Platform',
    description:
      'Mobile and administration platform for football data, prediction content and automated match-related notifications.',
    contribution: ['Backend REST API development', 'Automated match data processing', 'Data crawling workflows', 'Push notification automation'],
    tech: ['NestJS', 'MongoDB', 'Flutter', 'React', 'REST API'],
  },
  {
    number: '04',
    tag: 'IoT / Robotics',
    title: 'Drone Control Application',
    description:
      'Mobile application used to configure and control drones with real-time communication between the application and embedded hardware.',
    contribution: ['React Native mobile development', 'Bluetooth & MQTT integration', 'Firebase synchronization', 'Embedded system testing support'],
    tech: ['React Native', 'MQTT', 'Bluetooth', 'Firebase', 'STM32'],
  },
]

const nav = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Products', 'products'],
  ['Contact', 'contact'],
]

function Icon({ name, className = 'h-5 w-5' }) {
  const common = { className, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (name === 'github') return <svg {...common}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.1.5S17.9.1 15 2a13.4 13.4 0 0 0-7 0C5.1.1 3.9.5 3.9.5A5.1 5.1 0 0 0 3.7 4a5.5 5.5 0 0 0-1.5 3.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4-2"/></svg>
  if (name === 'mail') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
  if (name === 'map') return <svg {...common}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
  if (name === 'arrow') return <svg {...common}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
  if (name === 'external') return <svg {...common}><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>
  if (name === 'sun') return <svg {...common}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
  if (name === 'moon') return <svg {...common}><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></svg>
  if (name === 'menu') return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16"/></svg>
  if (name === 'close') return <svg {...common}><path d="m6 6 12 12M18 6 6 18"/></svg>
  if (name === 'code') return <svg {...common}><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></svg>
  if (name === 'database') return <svg {...common}><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>
  if (name === 'layers') return <svg {...common}><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>
  if (name === 'tool') return <svg {...common}><path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6 8.4 7.2 6.1 4.9a4 4 0 0 0 5 5l-7.5 7.5a2 2 0 1 0 2.8 2.8l7.5-7.5a4 4 0 0 0 5-5l-2.3 2.3L13 6.4l1.7-1.7Z"/></svg>
  return <svg {...common}><circle cx="12" cy="12" r="9"/></svg>
}

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.unobserve(node)
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-sky-500" />
        <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-400">{eyebrow}</p>
      </div>
      <h2 className="text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[2.75rem] dark:text-white">{title}</h2>
      {description && <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">{description}</p>}
    </div>
  )
}

function App() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('about')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('portfolio-theme')
    const next = stored ? stored === 'dark' : true
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = nav.map(([, id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible[0]) setActive(visible[0].target.id)
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.1, 0.25] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    localStorage.setItem('portfolio-theme', next ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', next)
  }

  const skillIcons = ['code', 'database', 'layers', 'tool']

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-900 selection:bg-sky-200 selection:text-sky-950 dark:bg-[#050816] dark:text-slate-100 dark:selection:bg-sky-900 dark:selection:text-sky-100">
      <div className="fixed left-0 top-0 z-[70] h-[2px] bg-gradient-to-r from-sky-400 via-indigo-500 to-violet-500" style={{ width: `${scrollProgress}%` }} />

      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl px-3 transition-all duration-500 sm:px-4 ${scrolled ? 'border border-white/60 bg-white/80 shadow-[0_10px_45px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/75 dark:shadow-black/20' : 'bg-transparent'}`}>
          <a href="#top" className="group flex items-center gap-3 rounded-xl pr-2 font-extrabold tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-xs font-black text-white shadow-lg shadow-slate-950/10 transition duration-300 group-hover:-rotate-3 group-hover:scale-105 dark:bg-white dark:text-slate-950">NT</span>
            <span className="hidden text-sm sm:block">Nguyen Ngoc Thien</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} className={`relative rounded-xl px-3.5 py-2 text-sm font-semibold transition duration-300 ${active === id ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950' : 'text-slate-500 hover:bg-white/70 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white'}`}>
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200/80 bg-white/70 text-slate-600 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-sky-700 dark:hover:text-sky-400" aria-label="Toggle theme">
              <Icon name={dark ? 'sun' : 'moon'} className="h-4.5 w-4.5" />
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200/80 bg-white/70 md:hidden dark:border-white/10 dark:bg-white/5" aria-label="Toggle navigation">
              <Icon name={menuOpen ? 'close' : 'menu'} />
            </button>
          </div>
        </div>

        <div className={`mx-auto max-w-6xl overflow-hidden px-2 transition-all duration-300 md:hidden ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="mt-2 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95">
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${active === id ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5'}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-grid relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="hero-noise" />

          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-24">
            <div className="relative z-10">
              <div className="hero-enter hero-enter-1 mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/80 px-4 py-2 text-xs font-extrabold text-emerald-700 shadow-sm backdrop-blur dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                Open to .NET Backend opportunities
              </div>

              <p className="hero-enter hero-enter-2 mb-3 text-sm font-bold uppercase tracking-[0.22em] text-slate-400">Hello, I'm</p>
              <h1 className="hero-enter hero-enter-3 max-w-4xl text-[clamp(3.25rem,7.4vw,6.3rem)] font-black leading-[0.93] tracking-[-0.065em] text-slate-950 dark:text-white">
                Nguyen Ngoc <span className="text-gradient">Thien</span>
              </h1>
              <h2 className="hero-enter hero-enter-4 mt-6 max-w-2xl text-xl font-bold leading-tight text-slate-700 sm:text-2xl dark:text-slate-200">C# / .NET Backend Developer Intern</h2>
              <p className="hero-enter hero-enter-5 mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-[1.05rem] dark:text-slate-400">
                Software Engineering student focused on backend development with <strong className="font-bold text-slate-900 dark:text-white">C#, .NET and ASP.NET Core</strong>. I enjoy turning business logic into clean APIs, reliable integrations and maintainable systems.
              </p>

              <div className="hero-enter hero-enter-6 mt-9 flex flex-wrap gap-3">
                <a href="#products" className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_32px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.24)] dark:bg-white dark:text-slate-950">
                  View my work <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-5 py-3.5 text-sm font-bold text-slate-700 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:text-sky-600 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-sky-700 dark:hover:text-sky-400">
                  <Icon name="github" /> GitHub
                </a>
              </div>

              <div className="hero-enter hero-enter-7 mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-2"><Icon name="map" className="h-4 w-4 text-sky-500" />{profile.location}</span>
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition hover:text-sky-500"><Icon name="mail" className="h-4 w-4 text-sky-500" />{profile.email}</a>
              </div>
            </div>

            <div className="hero-enter hero-enter-5 relative mx-auto w-full max-w-[430px] lg:ml-auto">
              <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-sky-400/20 via-indigo-400/10 to-violet-500/20 blur-3xl" />
              <div className="profile-shell relative rounded-[2rem] border border-white/70 bg-white/75 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.055] dark:shadow-black/35">
                <div className="relative overflow-hidden rounded-[1.6rem] bg-slate-100 dark:bg-slate-900">
                  <img src="/profile-photo.png" alt="Nguyen Ngoc Thien" className="aspect-[4/5] w-full object-cover object-top transition duration-700 hover:scale-[1.025]" />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/55 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                    <div>
                      <p className="text-sm font-semibold text-white/75">Backend-focused</p>
                      <p className="mt-0.5 font-extrabold">APIs · Databases · Integrations</p>
                    </div>
                    <div className="rounded-xl border border-white/20 bg-white/15 px-3 py-2 text-xs font-black backdrop-blur-md">.NET</div>
                  </div>
                </div>
              </div>

              <div className="float-card float-card-one absolute -left-8 top-[18%] hidden rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-xl backdrop-blur-xl sm:block dark:border-white/10 dark:bg-slate-900/85">
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Core</p>
                <p className="mt-1 text-sm font-extrabold">ASP.NET Core</p>
              </div>
              <div className="float-card float-card-two absolute -right-6 bottom-[19%] hidden rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-xl backdrop-blur-xl sm:block dark:border-white/10 dark:bg-slate-900/85">
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Database</p>
                <p className="mt-1 text-sm font-extrabold">SQL Server</p>
              </div>
            </div>
          </div>

          <a href="#about" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 transition hover:text-sky-500 sm:flex">
            Scroll
            <span className="scroll-mouse"><span /></span>
          </a>
        </section>

        <section id="about" className="relative scroll-mt-24 py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal>
              <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
                <SectionHeading eyebrow="Profile" title="About me" description="A backend-focused developer who cares about clean logic, clear communication and reliable software." />
                <div>
                  <div className="space-y-5 text-[1.03rem] leading-8 text-slate-600 dark:text-slate-400">
                    <p>I am a Software Engineering student at HUTECH University of Technology with practical experience working on production software, including AI platforms, game analytics systems, mobile applications and robotics-related products.</p>
                    <p>My current development direction is <strong className="font-bold text-slate-950 dark:text-white">C# / .NET Backend</strong>. I am strengthening my skills in ASP.NET Core, Web API, Entity Framework Core, SQL Server, OOP and dependency injection while applying backend concepts learned from real project experience.</p>
                  </div>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[['2026', 'Expected graduation'], ['02', 'Internship environments'], ['04', 'Featured products']].map(([num, label], i) => (
                      <div key={label} className="stat-card group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-950/5 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-sky-900">
                        <div className="text-3xl font-black tracking-tight text-slate-950 transition group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">{num}</div>
                        <div className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="skills" className="relative scroll-mt-20 overflow-hidden border-y border-slate-200/70 bg-white py-28 dark:border-white/10 dark:bg-white/[0.018]">
          <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-sky-300/10 blur-3xl dark:bg-sky-500/5" />
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal><SectionHeading eyebrow="Tech stack" title="Skills & technologies" description="A practical toolkit for building backend services, data-driven applications and production integrations." /></Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {Object.entries(skills).map(([group, items], index) => (
                <Reveal key={group} delay={index * 80}>
                  <div className="skill-card group h-full rounded-3xl border border-slate-200/80 bg-slate-50/70 p-6 transition duration-500 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-[0_20px_60px_rgba(15,23,42,0.07)] dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-sky-900/80 dark:hover:bg-white/[0.045]">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white transition duration-300 group-hover:-rotate-3 group-hover:bg-sky-500 dark:bg-white dark:text-slate-950 dark:group-hover:bg-sky-400">
                        <Icon name={skillIcons[index]} className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-black text-slate-300 dark:text-slate-700">0{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-extrabold tracking-tight">{group}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {items.map((item) => <span key={item} className="skill-pill rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-sky-800 dark:hover:text-sky-400">{item}</span>)}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-20 py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal><SectionHeading eyebrow="Career" title="Experience" description="Hands-on experience across backend systems, analytics, mobile products and connected devices." /></Reveal>
            <div className="relative mt-14">
              <div className="absolute bottom-4 left-[21px] top-4 hidden w-px bg-gradient-to-b from-sky-400 via-indigo-400 to-transparent sm:block" />
              <div className="space-y-7">
                {experiences.map((item, idx) => (
                  <Reveal key={item.company} delay={idx * 100}>
                    <article className="group relative sm:pl-16">
                      <div className="absolute left-0 top-8 z-10 hidden h-11 w-11 place-items-center rounded-full border-4 border-[#f8fafc] bg-slate-950 text-[10px] font-black text-white shadow-lg sm:grid dark:border-[#050816] dark:bg-white dark:text-slate-950">{item.shortDate.slice(-2)}</div>
                      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_22px_70px_rgba(15,23,42,0.08)] sm:p-8 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-sky-900/80">
                        <div className="flex flex-col gap-3 border-b border-slate-100 pb-5 sm:flex-row sm:items-end sm:justify-between dark:border-white/10">
                          <div>
                            <h3 className="text-xl font-black tracking-tight sm:text-2xl">{item.company}</h3>
                            <p className="mt-1.5 font-bold text-sky-600 dark:text-sky-400">{item.role}</p>
                          </div>
                          <p className="w-fit rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-500 dark:bg-white/5 dark:text-slate-400">{item.date}</p>
                        </div>
                        <ul className="mt-5 grid gap-x-8 gap-y-3.5 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:grid-cols-2">
                          {item.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500 shadow-[0_0_0_4px_rgba(14,165,233,0.08)]" />{point}</li>)}
                        </ul>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="relative scroll-mt-20 overflow-hidden border-y border-slate-200/70 bg-slate-950 py-28 text-white dark:border-white/10">
          <div className="project-grid absolute inset-0 opacity-30" />
          <div className="absolute -left-36 top-10 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />
          <div className="absolute -right-36 bottom-10 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal>
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <SectionHeading eyebrow="Portfolio" title="Products I worked on" description="Real products and systems I participated in during internships — focused on what I actually built and contributed." />
                <span className="mb-1 w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-slate-400 backdrop-blur">04 selected works</span>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {products.map((project, index) => (
                <Reveal key={project.title} delay={index * 90}>
                  <article className="project-card group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1.5 hover:border-sky-400/35 hover:bg-white/[0.075] hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:p-7">
                    <div className="project-shine" />
                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-sky-300">{project.tag}</span>
                        <span className="text-4xl font-black tracking-[-0.05em] text-white/[0.07] transition duration-500 group-hover:text-sky-400/20">{project.number}</span>
                      </div>
                      <h3 className="mt-5 text-2xl font-black tracking-tight sm:text-[1.7rem]">{project.title}</h3>
                      <p className="mt-3 min-h-[84px] leading-7 text-slate-400">{project.description}</p>

                      <div className="mt-6 border-t border-white/10 pt-5">
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">My contribution</p>
                        <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                          {project.contribution.map((item) => <div key={item} className="flex items-center gap-2.5 text-sm text-slate-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />{item}</div>)}
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((tech) => <span key={tech} className="rounded-lg border border-white/10 bg-white/[0.025] px-2.5 py-1.5 text-[11px] font-bold text-slate-400 transition group-hover:border-white/15 group-hover:text-slate-300">{tech}</span>)}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
                <div className="relative">
                  <div className="mb-3 flex items-center gap-3"><span className="h-px w-8 bg-sky-500" /><p className="text-xs font-extrabold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-400">Education</p></div>
                  <h2 className="text-2xl font-black tracking-tight sm:text-3xl">HUTECH University of Technology</h2>
                  <p className="mt-2 font-medium text-slate-600 dark:text-slate-300">Bachelor of Information Technology — Software Engineering</p>
                  <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">Expected Graduation: 2026 · Japanese: JLPT N4 · English: Technical reading & communication</p>
                </div>
                <div className="relative mt-7 flex items-center gap-4 rounded-2xl bg-slate-950 px-6 py-5 text-white lg:mt-0 dark:bg-white dark:text-slate-950">
                  <div className="text-4xl font-black tracking-tight">2026</div>
                  <div className="h-8 w-px bg-white/20 dark:bg-slate-200" />
                  <div className="text-[10px] font-black uppercase leading-4 tracking-[0.17em] text-slate-400">Expected<br />graduation</div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="scroll-mt-16 pb-28">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <Reveal>
              <div className="rounded-[2rem] border border-slate-200/80 bg-white px-6 py-12 shadow-[0_24px_80px_rgba(15,23,42,0.07)] sm:px-10 sm:py-16 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-black/20">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400">Contact</p>
                <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">Let's build something <span className="text-gradient">useful.</span></h2>
                <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">I am looking for an internship or fresher opportunity where I can grow as a C# / .NET Backend Developer and contribute to real software products.</p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/20 transition duration-300 hover:-translate-y-1 hover:bg-sky-600"><Icon name="mail" />Send email <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:text-sky-600 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-sky-800 dark:hover:text-sky-400"><Icon name="github" />GitHub</a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/80 py-8 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-xs font-medium text-slate-400 sm:flex-row lg:px-8">
          <p>© 2026 Nguyen Ngoc Thien.</p>
          <p>Built with React · Tailwind CSS · attention to detail.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
