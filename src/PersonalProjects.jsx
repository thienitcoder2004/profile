import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const personalProjects = [
  {
    title: 'E-commerce Management Platform',
    subtitle: 'Full-stack commerce system with backend-focused business logic',
    visibility: 'Public repository',
    repo: 'https://github.com/thienitcoder2004/website-e-commerce',
    description:
      'A personal ASP.NET Core e-commerce application covering customer shopping flows and back-office operations, with authentication, realtime features, payments and reporting.',
    highlights: [
      'Product, category, brand, promotion, flash-sale and order management',
      'ASP.NET Core Identity with role-based authorization and Google login',
      'Realtime support chat, news and order updates using SignalR',
      'MoMo/VNPay payment integration plus PDF and Excel reporting workflows',
    ],
    tech: ['C#', '.NET 9', 'ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Identity', 'SignalR', 'VNPay', 'MoMo'],
  },
  {
    title: 'Restaurant Management & Ordering System',
    subtitle: 'Restaurant operations, online ordering and revenue management',
    visibility: 'Public repository',
    repo: 'https://github.com/thienitcoder2004/websiterestaurant',
    description:
      'A personal ASP.NET Core restaurant system that combines customer ordering and reservations with operational tools for staff and administrators.',
    highlights: [
      'Online table reservation with automatic email confirmation',
      'Menu, shopping cart, checkout and customer order-history workflows',
      'VNPay online payment integration and order processing',
      'Role-based admin/employee management with revenue and best-selling dish analytics',
    ],
    tech: ['C#', '.NET 8', 'ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Identity', 'VNPay', 'MailKit'],
  },
]

function GithubIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.1.5S17.9.1 15 2a13.4 13.4 0 0 0-7 0C5.1.1 3.9.5 3.9.5A5.1 5.1 0 0 0 3.7 4a5.5 5.5 0 0 0-1.5 3.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
      <path d="M8 19c-3 .9-3-1.5-4-2" />
    </svg>
  )
}

function PersonalProjectsSection() {
  return (
    <section id="personal-projects" className="relative scroll-mt-20 overflow-hidden border-b border-slate-200/70 bg-[#f8fafc] py-28 dark:border-white/10 dark:bg-[#050816]">
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-sky-300/10 blur-3xl dark:bg-sky-500/5" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-violet-300/10 blur-3xl dark:bg-violet-500/5" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-sky-500" />
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-400">Personal projects</p>
          </div>
          <h2 className="text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[2.75rem] dark:text-white">
            Real-world systems built with .NET
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Personal projects where I applied backend architecture, database design, authentication, payments and real business workflows outside my internship work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {personalProjects.map((project, index) => (
            <article key={project.title} className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_22px_70px_rgba(15,23,42,0.08)] sm:p-8 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-sky-900/80">
              <div className="absolute right-6 top-5 text-5xl font-black tracking-[-0.06em] text-slate-100 transition duration-500 group-hover:text-sky-100 dark:text-white/[0.035] dark:group-hover:text-sky-400/10">
                0{index + 1}
              </div>

              <div className="relative">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-950/30 dark:text-emerald-300">
                    Personal Project
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-slate-500 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-400">
                    {project.visibility}
                  </span>
                </div>

                <h3 className="mt-6 pr-16 text-2xl font-black tracking-tight text-slate-950 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-sm font-bold text-sky-600 dark:text-sky-400">{project.subtitle}</p>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">{project.description}</p>

                <div className="mt-6 border-t border-slate-100 pt-5 dark:border-white/10">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Key features</p>
                  <div className="mt-4 grid gap-3">
                    {project.highlights.map((item) => (
                      <div key={item} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500 shadow-[0_0_0_4px_rgba(14,165,233,0.08)]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] font-bold text-slate-500 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7">
                  {project.repo ? (
                    <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-sky-600 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-400">
                      <GithubIcon /> View repository
                    </a>
                  ) : (
                    <span className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-500 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-400">
                      Repository unavailable
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function PersonalProjects() {
  const [mountNode, setMountNode] = useState(null)

  useEffect(() => {
    const productsSection = document.getElementById('products')
    if (!productsSection) return undefined

    const node = document.createElement('div')
    node.id = 'personal-projects-mount'
    productsSection.insertAdjacentElement('afterend', node)
    setMountNode(node)

    return () => {
      node.remove()
    }
  }, [])

  return mountNode ? createPortal(<PersonalProjectsSection />, mountNode) : null
}
