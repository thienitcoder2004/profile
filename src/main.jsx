import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PersonalProjects from './PersonalProjects'
import './index.css'

const CONTACT_EMAIL = 'thiendznro2010@gmail.com'
const OLD_EMAIL = 'thien.nguyen@example.com'

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <PersonalProjects />
    <ContactEmailSync />
  </React.StrictMode>,
)
