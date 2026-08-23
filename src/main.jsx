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
  'Backend & Integration': ['JWT', 'MQTT'],
  'Tools & Practices': ['React', 'React Native', 'Flutter', 'TypeScript', 'JavaScript'],
}

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
