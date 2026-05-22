/* MES Application
   Edit this file to update case study content.
   Only MESPage.jsx imports this file. */

export const mes = {
  slug: 'mes',
  accentColor: '#0070c0',
  accentColorRgb: '0,112,192',

  hero: {
    tag: 'Research & Strategy',
    title: 'MES Application',
    subtitle: 'Pharmaceutical Manufacturing · Native Desktop',
    spine: '"Designing for people who can\'t fully see, touch, or slow down."',
    meta: [
      { key: 'Role',     value: 'UX Designer' },
      { key: 'Team',     value: '8 UX/UI Designers' },
      { key: 'Duration', value: 'May – September 2021' },
      { key: 'Platform', value: 'Native Desktop · HD · 4K · Tablet · Light & Dark' },
    ],
  },

  intro: 'Most design challenges are abstract. This one was visceral. The users were pharmaceutical operators on a production floor — wearing goggles, gloves, and working under time pressure where a data entry error had real consequences.',

  chapters: [
    {
      id: 'ch-environment',
      hook: 'Before I looked at the interface, I needed to understand the world it lived in.',
      title: 'The Environment Changes Everything',
      paragraphs: [
        'Pharmaceutical manufacturing units operate under strict safety protocols. Operators on the production floor wore safety goggles — often fogged by moisture from the environment — and multiple layers of protective gloves. They worked under controlled lighting, against production timelines, capturing data that fed directly into regulatory compliance records.',
        'The existing Manufacturing Execution System had been built for accuracy, not usability. It captured the right data. But the way it asked operators to capture it ignored everything about the environment they worked in. Every extra click, every unclear label, every inconsistent interaction pattern had a compounding cost: slower data entry, higher error rates, and compromised production accuracy.',
      ],
      pullQuote: 'The interface wasn\'t designed for people wearing gloves and goggles under time pressure. But that\'s exactly who was using it.',
      artifactLabel: 'Add screens/heuristic-evaluation.png — existing system heuristic evaluation',
      artifactImage: null,
    },
    {
      id: 'ch-broken',
      hook: 'I didn\'t start with assumptions. I started with evidence.',
      title: 'What the Existing System Got Wrong',
      paragraphs: [
        'A systematic heuristic evaluation of the existing application documented specific violations — not vague complaints, but precise observations with consequences.',
        'Page titles carried no clear information or instructions — operators couldn\'t orient themselves quickly. Duplicate confirm buttons on the same page created decision paralysis. Image, date, and time information was visually separated with no logical grouping — forcing operators to mentally reconstruct context. Button nomenclature changed from \'select\' to \'load\' without consistency logic. Error messages were vague in moments that demanded clarity.',
        'None of these violations were trivial. In a gloved, goggled, time-pressured environment, each friction point compounded the next. A moment of confusion at the wrong step in a pharmaceutical batch process isn\'t a UX inconvenience. It\'s an operational risk.',
      ],
      pullQuote: 'Six heuristic violations. Each one a friction point. In this environment, friction has consequences beyond frustration.',
      artifactLabel: null,
      artifactImage: null,
    },
    {
      id: 'ch-workflow',
      hook: 'Three user groups. Different roles, different contexts, different failure modes.',
      title: 'Understanding Who Uses This — and How',
      paragraphs: [
        'Task flows were mapped across the full manufacturing process using swimlane diagrams — from Recipe Designer and Scientist through Manager to Operator, covering batch processing, image verification, and phase completion steps.',
        'This mapping revealed something important: the same interface served three fundamentally different working contexts. Recipe Designers worked methodically with time to think. Managers oversaw multiple operators simultaneously. Operators worked in real-time, on the floor, under production pressure. An interface optimised for one context created friction for the others.',
        'The design direction had to account for all three — prioritising the operator\'s physical constraints without removing the depth that Managers and Recipe Designers needed.',
      ],
      pullQuote: 'The same screen, seen through three different pairs of eyes, tells three completely different stories.',
      artifactLabel: 'Add screens/task-flows.png — swimlane task flow diagrams',
      artifactImage: null,
    },
    {
      id: 'ch-constraint-design',
      hook: 'Every design decision was measured against one question: can an operator do this in gloves?',
      title: 'Designing Under Physical Constraint',
      paragraphs: [
        'The design principles were direct: less scrolling, fewer clicks, less frustration. These weren\'t UX platitudes — they were engineering requirements for a physically demanding environment.',
        'Touch targets were sized for gloved interaction, not optimal finger conditions. Information density was managed so operators could see everything they needed without scrolling — because scrolling in gloves, under time pressure, is a failure mode. Interaction patterns were simplified and made consistent across every step — because cognitive load spent remembering where buttons are is cognitive load taken away from the task at hand.',
        'Edge cases were simulated at every design stage — running through manufacturing scenarios to stress-test the interface against real production conditions, not idealised ones.',
      ],
      pullQuote: 'Simplicity in a complex environment isn\'t a design preference. It\'s a safety consideration.',
      artifactLabel: 'Add screens/wireframe.png — wireframes showing layout decisions',
      artifactImage: null,
    },
    {
      id: 'ch-every-screen',
      hook: 'HD. 4K. Tablet. Light. Dark. Five configurations. One coherent experience.',
      title: 'One Interface, Every Screen',
      paragraphs: [
        'The application needed to perform across a range of hardware configurations present on different manufacturing floors — HD monitors, 4K displays, and tablet devices — each in both light and dark themes.',
        'This wasn\'t purely a visual exercise. Different resolutions changed the available information density. Different hardware contexts changed how operators interacted with the interface. Light and dark themes weren\'t aesthetic choices — they reflected different lighting conditions in different areas of the facility.',
        'Final designs were delivered across all five configurations — not adapted from a single master, but considered for each context from the wireframe stage.',
      ],
      pullQuote: null,
      artifactLabel: 'Add screens/final-design-light.png and final-design-dark.png — light & dark themes',
      artifactImage: null,
    },
    {
      id: 'ch-operators',
      hook: 'The best outcome of this project is the one operators will never think about.',
      title: 'What Changed for Operators',
      paragraphs: [
        'The redesigned application addressed the core accessibility failures of the original — improving legibility, reducing interaction steps, and bringing consistency to an interface used in one of the most demanding physical environments a digital product can operate in.',
        'Operator data entry became faster and less error-prone. The multi-resolution, dual-theme delivery meant the application performed consistently across different hardware configurations without requiring operators to adapt to the tool. Most importantly, the interface got out of the way — letting operators focus on the production process rather than the system documenting it.',
        'In pharmaceutical manufacturing, an interface that reduces cognitive load isn\'t a convenience. It\'s a quality control mechanism.',
      ],
      pullQuote: 'The goal was never a beautiful interface. It was an interface operators could forget about — because it just worked.',
      artifactLabel: 'Add screens/final-design-dark.png — dark theme final design',
      artifactImage: null,
    },
  ],

  pagination: {
    prev: { path: '/case/nocode', label: 'No-Code Configurator' },
    next: null,
  },
};
