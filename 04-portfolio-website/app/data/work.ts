/** @format */

export type WorkLink = {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
  external?: boolean
}

export type WorkItemData = {
  title: string
  description: string
  stack: string
  linksTop: WorkLink[]
  linksBottom?: WorkLink[]
}

export const workItems: WorkItemData[] = [
  {
    title: 'HireFlow — Recruitment Dashboard (UI + Front-End)',
    description:
      'A desktop-first recruitment management dashboard built with React and TypeScript, focused on scalable layout architecture, reusable components, and real-world SaaS workflows.',
    stack: 'UI Design · Front-End Development · React · TypeScript · Tailwind',
    linksTop: [
      {
        label: 'Live',
        href: 'https://hireflow-ats.netlify.app/',
        variant: 'secondary',
        external: true,
      },
      {
        label: 'Case Study →',
        href: '/case-studies/hireflow-ats',
        variant: 'primary',
      },
    ],
    linksBottom: [
      {
        label: 'Figma',
        href: 'https://www.figma.com/proto/3g2dni5L0OqlG3kSuYUHpC/HireFlow-ATS?node-id=8624-4461&p=f&t=KbsGMG2QtZUHSV8l-0&scaling=min-zoom&content-scaling=fixed&page-id=8621%3A883&starting-point-node-id=8624%3A4461',
        external: true,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/webdev-deepak18/frontend-case-studies/tree/main/05-hireflow-ats/hireflow-app',
        external: true,
      },
    ],
  },

  {
    title: 'BudgetHive — SaaS Landing Page',
    description:
      'A clean, high-conversion SaaS landing page designed and built to communicate product value with clarity, restraint, and strong visual hierarchy.',
    stack: 'UI Design · Front-End Development',
    linksTop: [
      {
        label: 'Live',
        href: 'https://budget-hive.netlify.app/',
        variant: 'secondary',
        external: true,
      },
      {
        label: 'Case Study →',
        href: '/case-studies/budgethive',
        variant: 'primary',
      },
    ],
    linksBottom: [
      {
        label: 'Figma',
        href: 'https://www.figma.com/proto/q5BBDxNsBjYj8SWF6Kndzj/01-budget-hive?node-id=1-2&t=EDKYHb3PnvN7psIV-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4',
        external: true,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/webdev-deepak18/frontend-case-studies/tree/main/01-budget-hive',
        external: true,
      },
    ],
  },

  {
    title: 'Business Analytics Dashboard',
    description:
      'A functional, multi-page analytics dashboard designed and built to demonstrate clear information hierarchy, realistic interaction patterns, and scalable front-end structure.',
    stack: 'UI Design · Front-End Development',
    linksTop: [
      {
        label: 'Live',
        href: 'https://business-analytics-dashboard-ds.netlify.app/',
        variant: 'secondary',
        external: true,
      },
      {
        label: 'Case Study →',
        href: '/case-studies/business-analytics-dashboard',
        variant: 'primary',
      },
    ],
    linksBottom: [
      {
        label: 'Figma',
        href: 'https://www.figma.com/proto/QEZGHwbdSiscORiHcM9kMQ/02-Business-Analytics-Dashboard?node-id=1-2&p=f&t=gD9RanQ2Dt99s3qf-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        external: true,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/webdev-deepak18/frontend-case-studies/tree/main/02-business-analytics-dashboards',
        external: true,
      },
    ],
  },

  // {
  //   title: 'Creative Brand + Motion',
  //   description:
  //     'A compact brand system supported by social-first layouts and restrained motion, focused on communicating clarity, hierarchy, and tone without visual noise.',
  //   stack: 'Visual Design · Motion',
  //   linksTop: [
  //     {
  //       label: 'Case Study →',
  //       href: '/case-studies/creative-brand-motion',
  //       variant: 'primary',
  //     },
  //   ],
  //   linksBottom: [
  //     {
  //       label: 'Figma',
  //       href: 'https://www.figma.com/proto/aaUgvXnawpfyQxbGmtzoEM/PulsePilot?node-id=4002-21&p=f&t=gD9RanQ2Dt99s3qf-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4002%3A7',
  //       external: true,
  //     },
  //     {
  //       label: 'GitHub',
  //       href: 'https://github.com/webdev-deepak18/frontend-case-studies/tree/main/03-pulse-pilot',
  //       external: true,
  //     },
  //   ],
  // },

  {
    title: 'This Website',
    description:
      'A fast, multi-page portfolio website designed and built as a focused presentation of senior-level UI design, front-end execution, and decision-making.',
    stack: 'UI Design · Front-End Development',
    linksTop: [
      {
        label: 'Case Study →',
        href: '/case-studies/this-website',
        variant: 'primary',
      },
    ],
    linksBottom: [
      {
        label: 'Figma',
        href: 'https://www.figma.com/proto/GINMVXH4L3eg0ZTO9sF6eJ/04-portfolio?node-id=2017-1759&p=f&t=iC2NxNKgnN6dqpRm-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
        external: true,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/webdev-deepak18/frontend-case-studies/tree/main/04-portfolio-website',
        external: true,
      },
    ],
  },
]
