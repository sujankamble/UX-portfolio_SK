/* No-Code Configurator
   Edit this file to update case study content.
   Only NoCodePage.jsx imports this file. */

export const nocode = {
  slug: 'nocode',
  accentColor: '#e69138',
  accentColorRgb: '230,145,56',

  hero: {
    tag: 'Product & App Design',
    title: 'No-Code Configurator',
    subtitle: 'Insurance Underwriting Tool',
    spine: '"Two months. One designer. Replace something that took a team to maintain."',
    meta: [
      { key: 'Role',     value: 'Solo UX Designer' },
      { key: 'Team',     value: '1 (Solo ownership)' },
      { key: 'Duration', value: 'February – March 2022' },
      { key: 'Platform', value: 'Web · Responsive desktop · Adaptive mobile & tablet' },
    ],
  },

  intro: 'The brief was deceptively simple: replace a manual, rulebook-dependent process with a tool underwriters could use themselves. Two months. No other designer. Everything from research to prototype.',

  chapters: [
    {
      id: 'ch-replace',
      hook: 'The existing process wasn\'t broken. It was fundamentally the wrong approach.',
      title: 'Replace, Not Patch',
      paragraphs: [
        'Insurance underwriters were configuring product journeys by manually interpreting a rulebook — a process that was slow, error-prone, and dependent on institutional knowledge that lived in people\'s heads rather than a system. Every configuration required navigating dense documentation, consuming more cognitive load than the task warranted, and waiting on others who understood the rules.',
        'The business didn\'t need a better rulebook. It needed to eliminate the rulebook entirely — replacing it with a no-code configurator that gave underwriters direct control over defining and managing journeys, without requiring technical expertise or dependency on other teams.',
      ],
      pullQuote: 'There\'s a meaningful difference between improving a broken process and replacing it with something that makes the process unnecessary.',
      artifactLabel: null,
      artifactImage: null,
    },
    {
      id: 'ch-solo',
      hook: 'When you\'re the only designer, every decision is yours — and so is every mistake.',
      title: 'What Solo Ownership Actually Demands',
      paragraphs: [
        'Solo end-to-end ownership is a different mode of working. There\'s no one to challenge your assumptions in a design review. No one to catch the gap in your IA before you\'ve built 30 screens on top of it. The discipline has to come from within — structured checkpoints with stakeholders replacing the peer review you\'d have on a larger team.',
        'I validated business requirements directly with product owners before any design work began. Not to get sign-off — to pressure-test my understanding of the problem. Then I moved fast, but in a defined sequence: competitive analysis before persona, IA before wireframes, wireframes before high fidelity. Each stage built on the one before it.',
      ],
      pullQuote: 'The discipline of solo design isn\'t about working harder. It\'s about sequencing decisions so that each one is built on solid ground.',
      artifactLabel: null,
      artifactImage: null,
    },
    {
      id: 'ch-research-fast',
      hook: 'Two months doesn\'t leave room for a full discovery phase. It leaves room for the right questions.',
      title: 'Research Without the Luxury of Time',
      paragraphs: [
        'I benchmarked two established no-code platforms against Nielsen\'s heuristics across eight dimensions: system visibility, navigation, user control, consistency and standards, recognition, design, and help. This gave the design decisions an objective foundation — not \'I think this feels better\' but \'this approach scores higher on the dimensions that matter most to this user type.\'',
        'The primary persona — the insurance underwriter — was defined with specific goals, constraints, and mental models around the configuration process. Not a marketing persona. A design persona that every subsequent decision was measured against.',
      ],
      pullQuote: 'Good research under time pressure isn\'t less rigorous. It\'s more focused.',
      artifactLabel: 'Add screens/competitive-analysis.png — competitive analysis against Nielsen heuristics',
      artifactImage: null,
    },
    {
      id: 'ch-ia-first',
      hook: 'A no-code tool lives or dies by navigational clarity. Get the IA wrong and no amount of good UI saves it.',
      title: 'Structure Before Screens',
      paragraphs: [
        'Before a single screen was designed, I mapped the full information architecture — five core sections: Home, Journey Definition, Data Model, Channel, and UI Configuration. Each section mapped to its sub-actions: Summary, Create, Edit, Delete, and contextual flows including Runtime, Approval/Updates, Task Reminders, and Reports.',
        'This wasn\'t a deliverable for the client. It was a design decision tool — a way of validating that the structure made sense before committing to it in pixels. An underwriter shouldn\'t have to think about where to go. The navigation should make the next step feel obvious.',
      ],
      pullQuote: 'Designing the navigation before designing the screens is how you avoid building beautiful dead ends.',
      artifactLabel: 'Add screens/information-architecture.png — full IA map',
      artifactImage: null,
    },
    {
      id: 'ch-accessibility',
      hook: 'WCAG AA wasn\'t a requirement to check off. It was a design constraint that made everything better.',
      title: 'Accessibility as Foundation',
      paragraphs: [
        'Accessibility compliance was embedded from the first design decision — not reviewed at the end. Colour contrast ratios were verified at the palette stage. Interactive states — normal, hover, pressed, focused, selected, disabled — were designed for every component. Touch targets were sized for real use, not ideal conditions.',
        'This approach meant the component library was built on accessible foundations. Every dropdown, radio button, checkbox, tab, and input field was designed across all states before any screen composition began. The style guide that emerged wasn\'t just documentation — it was a transferable system.',
      ],
      pullQuote: 'Accessibility built in from the start is invisible to users — in the best possible way.',
      artifactLabel: 'Add screens/colour-palette-ui-elements.png — colour system and UI elements',
      artifactImage: null,
    },
    {
      id: 'ch-handover',
      hook: 'The measure of a two-month engagement isn\'t what was designed. It\'s what can be built from it.',
      title: 'What Was Handed Over',
      paragraphs: [
        'The final deliverable was a high-fidelity clickable prototype — not static screens, but an interactive artefact stakeholders could walk through against real underwriting scenarios. Alongside it: a complete IA, module-wise wireframes, a documented UI style guide, and a component library covering every element the development team would need.',
        'The configurator replaced the manual rulebook process entirely — giving underwriters direct control over configuring journeys without technical dependency. The process that once required specialist knowledge and documentation interpretation became self-serve.',
      ],
      pullQuote: null,
      artifactLabel: 'Add screens/final-design.png — final high-fidelity designs',
      artifactImage: null,
    },
  ],

  pagination: {
    prev: { path: '/case/audit', label: 'Audit Platform' },
    next: { path: '/case/mes',   label: 'MES Application' },
  },
};
