/* Banking App — Part 2: UX Strategy
   Edit this file to update case study content.
   Only Banking2Page.jsx imports this file. */

export const banking2 = {
  slug: 'banking2',
  accentColor: '#9b2d9b',
  accentColorRgb: '155,45,155',

  hero: {
    tag: 'Research & Strategy',
    title: 'Banking Application',
    subtitle: 'Part 2 — Product Page UX Strategy',
    spine: '"What if the real problem isn\'t the product — it\'s the user\'s confidence?"',
    meta: [
      { key: 'Role',     value: 'UX Strategist & Designer' },
      { key: 'Team',     value: '2 UX/UI Designers + Research team' },
      { key: 'Duration', value: 'May 2024 – Present' },
      { key: 'Platform', value: 'iOS & Android · Mobile-first' },
    ],
  },

  intro: 'Users weren\'t failing to find the right banking product. They were failing to trust themselves enough to choose one. That distinction changed everything.',

  chapters: [
    {
      id: 'ch-clarity',
      hook: 'The problem wasn\'t information. It was confidence.',
      title: 'The Moment of Clarity',
      paragraphs: [
        'Product pages in banking apps are where consequential decisions happen — loans, savings accounts, overdrafts. Yet most of these pages were built like catalogues: structured for the bank\'s logic, not the user\'s decision-making journey.',
        'Working alongside the research team, a clear pattern emerged. Users arrived at product pages in one of two states: they had a goal but weren\'t sure which product would help them achieve it, or they had a specific product in mind but lacked the knowledge to commit. Either way, the experience wasn\'t meeting them where they were.',
        'The existing pages provided information. What they failed to provide was understanding. And without understanding, users stalled, second-guessed, or left entirely.',
      ],
      pullQuote: 'Users weren\'t missing information. They were missing the confidence to act on it. That\'s a completely different design problem.',
      artifactLabel: 'Add screens/design-ideation.png — early ideation and problem framing',
      artifactImage: null,
    },
    {
      id: 'ch-competition',
      hook: 'I didn\'t just look at what competitors built. I looked at what they all missed.',
      title: 'Reading the Competition',
      paragraphs: [
        'A structured competitor analysis of Revolut, Monzo, and N26 examined how each approached product pages across four dimensions: features, usability, visual design, and goal-based flows. The analysis was benchmarked against established heuristics — not personal preference.',
        'All three apps had strengths worth noting. Revolut\'s visual clarity. Monzo\'s tone of voice. N26\'s structural simplicity. But across all three, one gap was consistent: none of them adequately addressed financial literacy at the exact moment a user needed it.',
        'APR. Variable interest rates. Repayment holiday eligibility. These are the concepts that determine whether a user can make a confident decision — and they were either absent, buried in fine print, or written for someone who already understood them.',
      ],
      pullQuote: 'All three competitors had the same blind spot: they assumed users arrived financially literate. Most don\'t.',
      artifactLabel: 'Add screens/competitor-analysis.png — competitor analysis matrix',
      artifactImage: null,
    },
    {
      id: 'ch-strategy',
      hook: 'A gap in three competing products became the foundation of our design direction.',
      title: 'The Gap That Became the Strategy',
      paragraphs: [
        'The insight from the competitive analysis became the strategic brief: design product pages that teach users what they need to know, at the exact moment they need to know it — not before, not after.',
        'The product page framework was defined around four interconnected layers. Product-specific information — clear, structured, scannable. Educational content — financial concepts explained at the moment of decision. Market trends and callouts — contextual signals that help users benchmark. Signposting — clear entry from the homepage, smooth return when users aren\'t ready.',
        'Every product in the portfolio was mapped: personal loans, loan top-ups, green loans, home energy upgrade loans, personal overdrafts. Each had different educational needs, different confidence barriers, different decision triggers.',
      ],
      pullQuote: 'The framework wasn\'t about showing more information. It was about showing the right information at the right moment.',
      artifactLabel: 'Add screens/loan-workflow.png — product page framework and loan workflow',
      artifactImage: null,
    },
    {
      id: 'ch-solution',
      hook: 'If users learn like they scroll — progressively, contextually — why wouldn\'t financial education work the same way?',
      title: 'Designing for Confidence',
      paragraphs: [
        'The competitor gap drove a clear design direction: move away from static information dumps toward an educational, story-driven approach that guides users through financial concepts as they become relevant to the decision at hand.',
        'Two primary concepts emerged from ideation. Interactive loan education stories — tappable, progressive micro-experiences explaining APR, variable interest rates, and repayment holidays at the moment users encounter those terms. And key loan fact carousels — surfacing the three or four facts that most influence a confident decision in a format users could scan and absorb in seconds.',
        'Every concept was scrutinised through a why-what-how framework. Why does this exist? What user need does it serve? How does it contribute to a confident decision? Nothing moved forward on visual appeal alone.',
      ],
      pullQuote: null,
      artifactLabel: 'Add screens/product-page-exploration.png — design explorations',
      artifactImage: null,
    },
    {
      id: 'ch-foundation',
      hook: 'The work built something that scales beyond any single product.',
      title: 'A New Way to Think About Product Pages',
      paragraphs: [
        'The product page strategy established a fundamentally different approach to how banking products are presented digitally — one built around user confidence rather than product cataloguing. The loan experience was the pilot. The framework extends to every product in the portfolio.',
        'The work is ongoing. But the strategic foundation is in place: a research-backed design brief, a competitor-informed direction, and a framework that any designer on the team can apply consistently as the product grows.',
      ],
      pullQuote: 'The best design strategies don\'t just solve today\'s problem. They create a repeatable way to solve tomorrow\'s.',
      artifactLabel: null,
      artifactImage: null,
    },
  ],

  pagination: {
    prev: { path: '/case/banking1', label: 'Banking — Part 1' },
    next: { path: '/case/audit',    label: 'Audit Platform' },
  },
};
