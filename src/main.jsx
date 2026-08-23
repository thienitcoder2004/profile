import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PersonalProjects from './PersonalProjects'
import './index.css'

const CONTACT_EMAIL = 'thiendznro2010@gmail.com'
const OLD_EMAIL = 'thien.nguyen@example.com'

const EXTRA_SKILLS = {
  'C# / .NET': ['OOP', 'MVC'],
  Database: [],
  'Backend & Integration': ['JWT'],
  'Tools & Practices': [],
}

const FRONTEND_SKILLS = [
  ['React', 'R'],
  ['TypeScript', 'TS'],
  ['JavaScript', 'JS'],
  ['HTML5', '5'],
  ['CSS3', '3'],
  ['Bootstrap', 'B'],
  ['Tailwind CSS', 'TW'],
  ['Vite', 'V'],
]

function ContactEmailSync() {
  React.useEffect(() => {
    const syncEmail = () => {
      document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
        link.setAttribute('href', `mailto:${CONTACT_EMAIL}`)

        link.childNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.includes(OLD_EMAIL)) {
            node.textContent = node.textContent.replace(OLD_EMAIL, CONTACT_EMAIL)
          }
        })
      })
    }

    syncEmail()
    const observer = new MutationObserver(syncEmail)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  return null
}

function SkillsSync() {
  React.useEffect(() => {
    const pillClass = 'skill-pill rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-sky-800 dark:hover:text-sky-400'

    const syncSkills = () => {
      const skillsSection = document.getElementById('skills')
      if (!skillsSection) return

      skillsSection.querySelectorAll('h3').forEach((heading) => {
        const extras = EXTRA_SKILLS[heading.textContent.trim()]
        if (!extras?.length) return

        const card = heading.parentElement
        const existingPills = [...card.querySelectorAll('.skill-pill')]
        const pillContainer = existingPills[0]?.parentElement
        if (!pillContainer) return

        const existing = new Set(existingPills.map((pill) => pill.textContent.trim()))
        extras.forEach((skill) => {
          if (existing.has(skill)) return
          const span = document.createElement('span')
          span.className = pillClass
          span.textContent = skill
          span.dataset.extraSkill = 'true'
          pillContainer.appendChild(span)
        })
      })

      if (!skillsSection.querySelector('[data-frontend-card="true"]')) {
        const grid = skillsSection.querySelector('.mt-12.grid')
        if (!grid) return

        const wrapper = document.createElement('div')
        wrapper.className = 'md:col-span-2'
        wrapper.setAttribute('data-frontend-card', 'true')
        wrapper.innerHTML = `
          <div class="skill-card group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50/70 p-6 transition duration-500 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-[0_20px_60px_rgba(15,23,42,0.07)] sm:p-7 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-sky-900/80 dark:hover:bg-white/[0.045]">
            <div class="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-sky-200/20 blur-3xl dark:bg-sky-500/10"></div>
            <div class="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div class="flex items-center gap-4 lg:min-w-[300px]">
                <div class="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20 transition duration-300 group-hover:-rotate-3 group-hover:scale-105">
                  <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="13" rx="2"></rect>
                    <path d="M8 21h8"></path>
                    <path d="M12 17v4"></path>
                    <path d="m9 9-2 2 2 2"></path>
                    <path d="m15 9 2 2-2 2"></path>
                  </svg>
                </div>
                <div>
                  <div class="flex flex-wrap items-center gap-2.5">
                    <h3 class="text-xl font-extrabold tracking-tight text-slate-950 dark:text-white">Frontend</h3>
                    <span class="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-sky-600 dark:border-sky-900/70 dark:bg-sky-950/30 dark:text-sky-400">Web UI</span>
                  </div>
                  <p class="mt-1.5 text-sm leading-6 text-slate-500 dark:text-slate-400">Responsive interfaces, component-based UI and frontend integration.</p>
                </div>
              </div>

              <span class="absolute right-0 top-0 text-xs font-black text-slate-300 dark:text-slate-700">05</span>

              <div class="flex max-w-3xl flex-wrap gap-2.5 lg:justify-end lg:pr-8">
                ${FRONTEND_SKILLS.map(([skill, mark]) => `
                  <span class="skill-pill inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-sky-800 dark:hover:text-sky-400">
                    <span class="grid h-6 min-w-6 place-items-center rounded-md bg-slate-100 px-1 text-[9px] font-black text-slate-700 dark:bg-white/10 dark:text-slate-200">${mark}</span>
                    ${skill}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        `
        grid.appendChild(wrapper)
      }
    }

    syncSkills()
    const observer = new MutationObserver(syncSkills)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  return null
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <PersonalProjects />
    <ContactEmailSync />
    <SkillsSync />
  </React.StrictMode>,
)
