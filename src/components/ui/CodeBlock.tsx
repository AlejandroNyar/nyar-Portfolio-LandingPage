'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const CODE_LINES = [
  { tokens: [{ text: 'import', color: 'text-purple-400' }, { text: ' { ', color: 'text-fg' }, { text: 'NextPage', color: 'text-highlight' }, { text: ' } ', color: 'text-fg' }, { text: "from", color: 'text-purple-400' }, { text: " 'next'", color: 'text-green-400' }] },
  { tokens: [] },
  { tokens: [{ text: 'const', color: 'text-purple-400' }, { text: ' App', color: 'text-highlight' }, { text: ': ', color: 'text-fg' }, { text: 'NextPage', color: 'text-accent' }, { text: ' = () => {', color: 'text-fg' }] },
  { tokens: [{ text: '  return', color: 'text-purple-400' }, { text: ' (', color: 'text-fg' }] },
  { tokens: [{ text: '    <', color: 'text-fg-muted' }, { text: 'main', color: 'text-red-400' }, { text: ' className', color: 'text-accent' }, { text: '=', color: 'text-fg' }, { text: '"nyar"', color: 'text-green-400' }, { text: '>', color: 'text-fg-muted' }] },
  { tokens: [{ text: '      <', color: 'text-fg-muted' }, { text: 'h1', color: 'text-red-400' }, { text: '>', color: 'text-fg-muted' }, { text: 'Frontend Dev', color: 'text-fg' }, { text: '</', color: 'text-fg-muted' }, { text: 'h1', color: 'text-red-400' }, { text: '>', color: 'text-fg-muted' }] },
  { tokens: [{ text: '    </', color: 'text-fg-muted' }, { text: 'main', color: 'text-red-400' }, { text: '>', color: 'text-fg-muted' }] },
  { tokens: [{ text: '  )', color: 'text-fg' }] },
  { tokens: [{ text: '}', color: 'text-fg' }] },
  { tokens: [] },
  { tokens: [{ text: 'export default', color: 'text-purple-400' }, { text: ' App', color: 'text-highlight' }] },
]

interface CodeBlockProps {
  className?: string
}

export function CodeBlock({ className }: CodeBlockProps) {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return
    const timer = setTimeout(() => {
      setVisibleLines((v) => v + 1)
    }, 80)
    return () => clearTimeout(timer)
  }, [visibleLines])

  return (
    <div
      className={cn(
        'relative rounded-xl border border-border bg-surface/80 backdrop-blur-sm',
        'font-mono text-sm overflow-hidden',
        className,
      )}
    >
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <span className="w-3 h-3 rounded-full bg-red-500/60" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <span className="w-3 h-3 rounded-full bg-green-500/60" />
        <span className="ml-2 text-xs text-fg-muted">page.tsx</span>
      </div>
      {/* Code */}
      <div className="p-4 space-y-0.5">
        {CODE_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex items-center gap-0 leading-6">
            <span className="w-6 text-fg-muted text-xs select-none mr-4 shrink-0">{i + 1}</span>
            <span>
              {line.tokens.map((token, j) => (
                <span key={j} className={token.color}>
                  {token.text}
                </span>
              ))}
              {i === visibleLines - 1 && (
                <span className="inline-block w-0.5 h-4 bg-accent ml-0.5 animate-pulse" />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
