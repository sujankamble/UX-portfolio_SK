/* Banking App — Part 1: Sprint Delivery
   Edit this file to update case study content.
   Only Banking1Page.jsx imports this file. */

export const banking1 = {
  slug: 'banking1',
  accentColor: '#811c81',
  accentColorRgb: '129,28,129',

  hero: {
    tag: 'Product & App Design',
    title: 'Banking Application',
    subtitle: 'Part 1 — Sprint-based Delivery',
    spine: '"How do you ship quality fast without losing either?"',
    meta: [
      { key: 'Role',     value: 'Lead UX Designer' },
      { key: 'Team',     value: '2 UX/UI Designers' },
      { key: 'Duration', value: 'May 2024 – Present' },
      { key: 'Platform', value: 'iOS & Android · Mobile-first' },
    ],
  },

  intro: 'A bank going digital. Younger users who expect banking to feel like any other app they love. Two platforms. Tight sprints. And a design quality problem no one had named yet.',

  chapters: [
    {
      id: 'ch-brief',
      hook: 'A bank going digital isn\'t just a technology problem — it\'s a culture shift.',
      title: 'The Brief',
      paragraphs: [
        'The mandate was clear: build a mobile-first banking experience for younger customers across iOS and Android, simultaneously, within sprint cycles that left little room for ambiguity. But beneath the delivery brief was a more nuanced challenge — younger users don\'t compare your banking app to other banking apps. They compare it to every app they use. The bar is high, and the margin for inconsistency is zero.',
        'I came in as the lead designer responsible for module-wise delivery — owning features from requirement to handoff, aligned to a design system, across two platforms, in both light and dark themes.',
      ],
      pullQuote: 'Younger users don\'t compare your banking app to other banking apps. They compare it to every app they love.',
      artifactLabel: 'Add hero-banner.png — project overview visual',
      artifactImage: null,
    },
    {
      id: 'ch-tension',
      hook: 'Speed and quality pull in opposite directions. Sprints reward the former. Users notice the latter.',
      title: 'The Tension',
      paragraphs: [
        'Sprint delivery has a quiet enemy: drift. When teams move fast across multiple value streams — loans, savings, account management, transfers — small inconsistencies accumulate. A button behaves differently here. A loading state is missing there. An error message sounds like it was written by a different team entirely. None of these feel critical in isolation. Together, they erode trust.',
        'The deeper problem I spotted early: there was no structured way to catch this drift before it reached users. Design reviews happened informally. QA focused on functionality, not experience. And with two platforms running in parallel, the surface area for inconsistency was doubling with every sprint.',
      ],
      pullQuote: 'Small inconsistencies accumulate quietly across sprints. By the time anyone notices, the damage to user trust is already done.',
      artifactLabel: 'Add screens/sprint-workflow.png — sprint delivery process',
      artifactImage: null,
    },
    {
      id: 'ch-how-i-worked',
      hook: 'Module ownership meant going deep, not wide — and making every handoff count.',
      title: 'How I Worked',
      paragraphs: [
        'Each sprint began before the design work did. Requirement gathering directly with stakeholders and product owners — translating business intent into design-ready briefs before a single screen was touched. This front-loading prevented the expensive rework that happens when designers and developers discover misalignment at the end of a sprint.',
        'Every screen I delivered came with three layers of documentation: interaction notes defining how components behave across states, annotations explaining design decisions for developers, and component mapping linking each element to its design system counterpart. Handoff wasn\'t a moment of ambiguity — it was a structured transfer of intent.',
        'Light and dark themes were designed in parallel, never retrofitted. iOS and Android conventions were respected without creating two entirely different design languages.',
      ],
      pullQuote: 'Handoff isn\'t the end of the design process. It\'s where the design process proves itself.',
      artifactLabel: 'Add screens/ios-android-screens.png — iOS & Android side by side',
      artifactImage: null,
    },
    {
      id: 'ch-audit-framework',
      hook: 'I named the problem, then built the system to solve it.',
      title: 'The Thing I Built That Didn\'t Exist',
      paragraphs: [
        'Halfway through the engagement, I formalised what I\'d been doing informally — and turned it into a structured UX audit and Visual QA reporting framework. This was new. It hadn\'t existed on this project before.',
        'The framework evaluated each value stream against two sets of criteria: heuristic principles assessing usability against established interaction standards, and design system guidelines verifying component and pattern consistency. The goal was simple but significant: uniformity across value streams. Banking applications suffer when different sections feel like they were designed by different teams — inconsistent patterns erode the trust that banking products depend on.',
        'Audit reports were documented with clear observations, flagged issues, and actionable recommendations — creating a paper trail of design quality decisions that any designer on the team could act on.',
      ],
      pullQuote: 'I named the problem no one had formalised. Then I built the framework to solve it systematically.',
      artifactLabel: 'Add screens/ux-audit-report.png — UX audit report artifact',
      artifactImage: null,
    },
    {
      id: 'ch-current-state',
      hook: 'This is a live project. The story isn\'t finished — but the foundation is solid.',
      title: 'Where It Stands',
      paragraphs: [
        'The sprint-based delivery model has produced a consistent, accessible mobile banking experience across iOS and Android — aligned to the design system in both light and dark themes across all delivered modules.',
        'The audit framework continues to serve the team as new modules ship and new value streams are added. It\'s become part of how the team works — not an add-on, but a built-in quality mechanism. That\'s the marker I\'m most proud of: building something that outlasts any individual sprint.',
      ],
      pullQuote: null,
      artifactLabel: 'Add screens/design-system.png — design system components',
      artifactImage: null,
    },
  ],

  pagination: {
    prev: null,
    next: { path: '/case/banking2', label: 'Banking — Part 2' },
  },
};
