/* Audit Platform
   Edit this file to update case study content.
   Only AuditPage.jsx imports this file. */

export const audit = {
  slug: 'audit',
  accentColor: '#3a8a26',
  accentColorRgb: '58,138,38',

  hero: {
    tag: 'Product & App Design',
    title: 'Audit Platform',
    subtitle: 'Enterprise Financial Audit Application',
    spine: '"How do you design for a world you\'ve never worked in?"',
    meta: [
      { key: 'Role',     value: 'UX Designer' },
      { key: 'Team',     value: '4 UX/UI Designers' },
      { key: 'Duration', value: 'April 2022 – May 2024' },
      { key: 'Platform', value: 'Web Application · Desktop-primary · Responsive' },
    ],
  },

  intro: 'Financial auditing is a specialised discipline built on precision, compliance, and years of domain knowledge. I had none of that. What I had was a process for learning fast — and two years to prove it worked.',

  chapters: [
    {
      id: 'ch-dropped-in',
      hook: 'The hardest part of this project wasn\'t designing the screens. It was understanding the world the screens lived in.',
      title: 'Dropped Into Complexity',
      paragraphs: [
        'The platform was built for financial auditors managing high-stakes client engagements — large corporations, complex data, regulatory expectations. It integrated with multiple existing client systems, meaning the data flowing through it wasn\'t abstract. It was consequential.',
        'Four distinct user types interacted with the platform: Auditors running engagements, Specialists supporting analytical work, and two types of Content Authors managing data extraction. Each had different needs, different mental models, and different tolerances for complexity. The challenge wasn\'t just designing one good experience — it was designing a system that served all four without compromise.',
      ],
      pullQuote: 'You can\'t design for a domain you don\'t understand. Every hour spent learning the domain was an hour that saved days of redesign later.',
      artifactLabel: 'Add screens/brainstorming.png — early domain mapping and brainstorming',
      artifactImage: null,
    },
    {
      id: 'ch-learning',
      hook: 'I treated the first phase like an embedded journalist — observe, ask, challenge, repeat.',
      title: 'Learning the Domain',
      paragraphs: [
        'Before any design work began, I ran stakeholder demos and interviews to understand product vision, business logic, and how auditors actually made decisions within their workflows. Not how they described their work in meetings — how they actually worked.',
        'Workshops with users and product owners followed — structured sessions designed to surface real pain points rather than assumed ones. Insights were exchanged with product owners continuously, not batched at the end of a discovery phase. The goal was to compress the time between learning something and applying it.',
      ],
      pullQuote: 'The most valuable research isn\'t always the most structured. Sometimes it\'s simply watching someone do their job and asking why they did that.',
      artifactLabel: 'Add screens/user-journey-map.png — user journey mapping artifact',
      artifactImage: null,
    },
    {
      id: 'ch-process',
      hook: 'With 4 designers, multiple POs, and 2 years ahead — process wasn\'t overhead. It was survival.',
      title: 'Building a Process, Not Just Screens',
      paragraphs: [
        'Early in the engagement, I helped establish a UX delivery framework that made design thinking visible and trackable across the team. Weekly design showcases with product owners — 30 to 60 minutes, ending with 10 minutes of prioritisation. Internal design reviews between designers. Structured feedback tracking in shared documentation.',
        'This wasn\'t bureaucracy. It was the scaffolding that let 4 designers work across different modules without losing coherence. It aligned business stakeholders with the design thought process — so decisions weren\'t made in isolation, and surprises were rare.',
      ],
      pullQuote: 'A good design process doesn\'t slow you down. It prevents the kind of rework that does.',
      artifactLabel: 'Add screens/design-sprint.png — design sprint and delivery process',
      artifactImage: null,
    },
    {
      id: 'ch-north-star',
      hook: 'Every design decision on a 2-year project needs an anchor. Ours was a single sentence.',
      title: 'A North Star for a Complex System',
      paragraphs: [
        'The design north star guided every module: break the analytic process into simple, approachable steps that serve novice users through guidance, while enabling advanced mechanics and team collaboration for complex engagements.',
        'This sentence did real work. When a feature felt too complex, we returned to it. When a module risked fragmenting the experience, it pulled things back together. When stakeholders pushed for something that served power users at the expense of novices, it gave us a principled way to push back.',
      ],
      pullQuote: 'Break the analytic process into simple, approachable modules — guiding the novice, empowering the expert, enabling the team.',
      artifactLabel: null,
      artifactImage: null,
    },
    {
      id: 'ch-module-delivery',
      hook: 'The Analytics Center wasn\'t designed once. It was designed continuously, deliberately, across 24 months.',
      title: 'Module by Module',
      paragraphs: [
        'My ownership spanned the full Analytics Center — Journal Entry, Risk Assessment, Substantive Procedures, Tests of Control, Concluding and Reporting, Custom Analytic, and the Data Kitchen flows including Upload New Data and Engagement Request.',
        'Every module was built with explicit wireframe annotations — not as documentation afterthoughts, but as design deliverables. Developers and business stakeholders could understand the rationale, not just the visual output. This reduced handoff ambiguity significantly and kept implementation faithful to design intent.',
      ],
      pullQuote: null,
      artifactLabel: 'Add screens/wireframes-annotated.png — annotated wireframes',
      artifactImage: null,
    },
    {
      id: 'ch-legacy',
      hook: 'The best design work outlasts the designer.',
      title: 'Leaving Something Behind',
      paragraphs: [
        'Beyond the product itself, I delivered a documented UX/UI guideline and contributed to the evolution of the platform\'s design system — ensuring the consistency built over 2 years could be maintained by whoever worked on it next.',
        'The platform improved audit efficiency across the board — reducing task completion time, minimising errors, enabling better team coordination and faster decision-making. Audit quality was elevated while the organisation gained the ability to scale and modernise its operations without starting from scratch each time.',
      ],
      pullQuote: 'Design systems are how individual design decisions become institutional knowledge.',
      artifactLabel: 'Add screens/ui-guidelines.png — UI guideline documentation',
      artifactImage: null,
    },
  ],

  pagination: {
    prev: { path: '/case/banking2', label: 'Banking — Part 2' },
    next: { path: '/case/nocode',   label: 'No-Code Configurator' },
  },
};
