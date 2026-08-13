import { Mail, MapPin, MessageCircle, Handshake, Calendar } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export const contactInfo = {
  brand: 'PRADEEP',
  email: 'hello@pradeepnagaral.dev',
  nav: [
    { id: 'projects', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact', active: true },
  ],
  hero: {
    label: "Let's work together",
    title: ['Get in', 'Touch.'],
    tagline: 'Share ideas.  Collaborate.  Create impact.',
    text: "I'm always open to new opportunities, exciting projects and meaningful conversations.",
  },
  cards: [
    {
      id: 'email',
      label: 'EMAIL',
      value: 'hello@pradeepnagaral.dev',
      href: 'mailto:hello@pradeepnagaral.dev',
      icon: Mail,
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      value: 'linkedin.com/in/pradeep',
      href: 'https://linkedin.com',
      icon: LinkedinIcon,
    },
    {
      id: 'github',
      label: 'GITHUB',
      value: 'github.com/pradeepnagaral123',
      href: 'https://github.com/pradeepnagaral123',
      icon: GithubIcon,
    },
    {
      id: 'location',
      label: 'LOCATION',
      value: 'India',
      icon: MapPin,
    },
  ],
  form: {
    title: 'Send me a message',
    subtitle: "Fill out the form and I'll get back to you as soon as possible.",
    fields: [
      { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Your name', autoComplete: 'name', half: true },
      { id: 'email', label: 'Your Email', type: 'email', placeholder: 'you@example.com', autoComplete: 'email', half: true },
      { id: 'subject', label: 'Subject', type: 'text', placeholder: 'What is this about?' },
      { id: 'message', label: 'Your Message', type: 'textarea', placeholder: 'Tell me about your project...' },
    ],
  },
  connect: {
    title: "Let's connect",
    rows: [
      { id: 'response', icon: MessageCircle, title: 'Quick Response', description: 'I usually reply within 24 hours.' },
      { id: 'opportunities', icon: Handshake, title: 'Open to Opportunities', description: 'Freelance, full-time or collaborations.' },
      { id: 'build', icon: Calendar, title: "Let's Build Something Great", description: 'Turn ideas into impactful products.' },
    ],
  },
  socials: {
    title: 'Find me on',
    items: [
      { id: 'github', label: 'GitHub', url: 'https://github.com/pradeepnagaral123', icon: GithubIcon },
      { id: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com', icon: LinkedinIcon },
      { id: 'email', label: 'Email', url: 'mailto:hello@pradeepnagaral.dev', icon: Mail },
    ],
  },
  cta: {
    title: 'Thanks for stopping by!',
    subtitle: 'Looking forward to hearing from you.',
  },
}
