type GlyphProps = { className?: string }

const base = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' } as const

export function GlyphTelegram({ className }: GlyphProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.94 3.4a1.2 1.2 0 0 0-1.27-.2L2.9 10.47c-.9.36-.86 1.66.06 1.96l4.2 1.37 1.6 5.03c.23.72 1.14.93 1.66.38l2.3-2.42 4.3 3.16c.6.44 1.45.12 1.62-.6l3.68-14.7a1.2 1.2 0 0 0-.38-1.25ZM9.6 13.9l8.1-5.03-6.3 6.6c-.15.16-.24.37-.25.6l-.1 2.1-1.05-3.3a.9.9 0 0 0-.4-.97Z" />
    </svg>
  )
}

/* OTC Analyzer — synthetic pair: two interlocking arcs around a cut diamond core */
export function GlyphOtc({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M13.2 8.2a8.4 8.4 0 1 0 0 15.6" {...base} strokeWidth="2.3" />
      <path d="M18.8 23.8a8.4 8.4 0 1 0 0-15.6" {...base} strokeWidth="2.3" opacity="0.5" />
      <path d="M16 11.4 20.4 16 16 20.6 11.6 16 16 11.4Z" fill="currentColor" />
      <path d="M4.4 6.2V4.2h2M27.6 25.8v2h-2" {...base} strokeWidth="2" opacity="0.6" />
    </svg>
  )
}

/* Real Chart — outlined candles inside a bracketed viewport, trend ray breaking out */
export function GlyphReal({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M4.2 10.6V6.8a2.6 2.6 0 0 1 2.6-2.6h4M27.8 21.4v3.8a2.6 2.6 0 0 1-2.6 2.6h-4" {...base} strokeWidth="2" opacity="0.5" />
      <path d="M10.4 9.6v12.8M20.4 7.8v13.4" {...base} strokeWidth="1.5" opacity="0.55" />
      <rect x="7.9" y="12.6" width="5" height="7.2" rx="1.5" {...base} strokeWidth="2.1" />
      <rect x="17.9" y="10.4" width="5" height="9.6" rx="1.5" fill="currentColor" />
      <path d="M5.6 26.2c3.6-.6 5.4-4.6 8.4-5.2s4.2 2.6 6.8 1.8 3.8-3.8 5.6-5" {...base} strokeWidth="2.2" opacity="0.85" />
    </svg>
  )
}

/* Live Signals — beacon mast broadcasting expanding arcs */
export function GlyphLive({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M16 27.5V14.8" {...base} strokeWidth="2.3" />
      <path d="M11.4 27.5l4.6-8.4 4.6 8.4" {...base} strokeWidth="2" opacity="0.55" />
      <circle cx="16" cy="11.4" r="2.6" fill="currentColor" />
      <path d="M10.9 6.3a7.2 7.2 0 0 0 0 10.2M21.1 6.3a7.2 7.2 0 0 1 0 10.2" {...base} strokeWidth="2.1" />
      <path d="M6.6 2.9a12.2 12.2 0 0 0 0 17M25.4 2.9a12.2 12.2 0 0 1 0 17" {...base} strokeWidth="1.7" opacity="0.38" />
    </svg>
  )
}

/* Future Signals — projected forecast: candles with a dashed breakout projection */
export function GlyphFuture({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M4.4 27h23.2" {...base} strokeWidth="1.5" opacity="0.32" />
      <path d="M9.6 11.8v14.2M16.4 9.2v17.8" {...base} strokeWidth="1.4" opacity="0.45" />
      <rect x="7.3" y="14.6" width="4.6" height="8.4" rx="1.4" fill="currentColor" />
      <rect x="14.1" y="12" width="4.6" height="10.4" rx="1.4" {...base} strokeWidth="2.1" />
      <path d="M20.6 20.2 27 11.2" {...base} strokeWidth="2.3" strokeDasharray="3.6 3.4" />
      <path d="M22.4 10.4h5.2v5.2" {...base} strokeWidth="2.2" />
      <circle cx="20.6" cy="20.2" r="1.8" fill="currentColor" />
    </svg>
  )
}

/* News Signals — folded broadcast sheet with a headline waveform */
export function GlyphNews({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M6 7.4h16.4a2.4 2.4 0 0 1 2.4 2.4v13.4a3 3 0 0 0 3 3H8.4A2.4 2.4 0 0 1 6 23.8V7.4Z" {...base} strokeWidth="2.1" />
      <path d="M24.8 13.2h1.6a1.6 1.6 0 0 1 1.6 1.6v8.4a3 3 0 0 0 3 3" {...base} strokeWidth="1.7" opacity="0.4" />
      <rect x="9.4" y="11" width="6.4" height="5" rx="1.3" fill="currentColor" />
      <path d="M18.6 11.8h3M18.6 15.2h3" {...base} strokeWidth="1.9" opacity="0.65" />
      <path d="M9.4 21.2h2.2l1.4-2.6 2 5 1.7-3.4 1.2 2.2h3.5" {...base} strokeWidth="2.2" />
    </svg>
  )
}

/* Risk Guard — octagonal aegis with a locked crosshair */
export function GlyphRisk({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M11.4 3.6h9.2l7.8 7.8v9.2l-7.8 7.8h-9.2L3.6 20.6v-9.2l7.8-7.8Z" {...base} strokeWidth="2.1" opacity="0.55" />
      <circle cx="16" cy="16" r="6.4" {...base} strokeWidth="2.2" />
      <path d="M16 6.6v3.4M16 22v3.4M6.6 16h3.4M22 16h3.4" {...base} strokeWidth="2" opacity="0.6" />
      <path d="M12.9 16.2l2.4 2.4 4-4.6" {...base} strokeWidth="2.4" />
    </svg>
  )
}

/* Market Feed — uplink dish streaming data packets */
export function GlyphFeed({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M5.6 27.4 18 15" {...base} strokeWidth="2.2" />
      <path d="M3.2 27.4h7.6" {...base} strokeWidth="2.2" opacity="0.6" />
      <path d="M9.4 12.2a9.2 9.2 0 0 1 12.8 12.8L9.4 12.2Z" fill="currentColor" />
      <path d="M20.6 11.4a6 6 0 0 1 6-6" {...base} strokeWidth="2.1" opacity="0.55" />
      <path d="M22.4 15.6a10.2 10.2 0 0 1 10.2-10.2" {...base} strokeWidth="1.8" opacity="0.3" />
      <circle cx="26.2" cy="5.4" r="2.1" fill="currentColor" />
    </svg>
  )
}
