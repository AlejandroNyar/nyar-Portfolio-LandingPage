'use client'

import { motion } from 'framer-motion'
import { ExternalLink, GitBranch, ArrowRight } from 'lucide-react'
import type { Project } from '@/types/project'

const categoryLabels: Record<Project['category'], string> = {
  web_app: 'Web App',
  landing: 'Landing Page',
  ecommerce: 'E-commerce',
  audit: 'Performance Audit',
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative rounded-xl border border-border bg-surface/40 overflow-hidden hover:border-accent/30 transition-colors duration-300"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-surface">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-accent/10 to-highlight/5 flex items-center justify-center">
            <span className="text-4xl font-bold gradient-text opacity-30">
              {project.title[0]}
            </span>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-fg text-bg text-xs font-medium hover:bg-fg/90 transition-colors"
              >
                <ExternalLink size={12} />
                Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-fg text-xs font-medium hover:bg-surface/80 transition-colors"
              >
                <GitBranch size={12} />
                Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-fg">{project.title}</h3>
          <span className="text-xs text-fg-muted shrink-0 mt-0.5">
            {categoryLabels[project.category]}
          </span>
        </div>
        <p className="text-sm text-fg-secondary leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-surface border border-border text-fg-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.caseStudyUrl && (
          <a
            href={project.caseStudyUrl}
            className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent-hover font-medium transition-colors"
          >
            Case Study <ArrowRight size={12} />
          </a>
        )}
      </div>
    </motion.div>
  )
}
