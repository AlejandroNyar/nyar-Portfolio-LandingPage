import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'nda-1',
    title: 'Client Project',
    description: 'Full redesign and development of a corporate web platform for a services company. Improved conversion rate and page speed significantly.',
    category: 'landing',
    status: 'nda',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    featured: true,
  },
  {
    id: 'nda-2',
    title: 'E-commerce Platform',
    description: 'Custom online store with inventory management, payment gateway integration, and admin dashboard built from scratch.',
    category: 'ecommerce',
    status: 'in_progress',
    tags: ['React', 'Node.js', 'Stripe'],
    featured: true,
  },
  {
    id: 'nda-3',
    title: 'Internal Dashboard',
    description: 'Business intelligence dashboard for real-time data visualization and operational reporting.',
    category: 'web_app',
    status: 'nda',
    tags: ['Angular', 'RxJS', 'Chart.js'],
    featured: false,
  },
]
