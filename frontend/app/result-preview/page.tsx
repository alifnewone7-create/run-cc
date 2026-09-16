'use client'

import { AnalysisResultCard } from '@/components/analysis-result'
import { CocoHeroBg } from '@/components/coco/coco-hero-bg'

const base = {
  validation: { isValidChart: true, isOtc: true, reason: 'ok' },
  description: {
    pair: 'EUR/USD (OTC)',
    timeframe: '1 Min',
    trend: 'Bullish',
    marketStructure: 'Higher highs and higher lows forming after a liquidity sweep of the prior low; price is retesting the broken structure level.',
    candlePattern: 'Bullish engulfing',
    indicatorsRead: 'EMA20: price above -> UP, RSI: 62 -> UP, Bollinger: mid-band bounce -> NEUTRAL',
    notes: '',
  },
  analysis: {
    probabilityScores: 'Trend: 84%, Structure: 78%, Pattern: 72%, Momentum: 66%, Total: 82%',
    signal: 'UP' as const,
    option: 'CALL' as const,
    confidence: 82,
    support: '1.08110',
    resistance: '1.08420',
    keyFocus: '',
    logic: 'Trend, structure and the engulfing pattern align to the upside; momentum confirms with RSI above 60 while price holds the EMA20.',
  },
}

const down = {
  ...base,
  description: { ...base.description, pair: 'GBP/JPY', trend: 'Bearish', candlePattern: 'Shooting star' },
  analysis: { ...base.analysis, signal: 'DOWN' as const, option: 'PUT' as const, confidence: 77 },
}
const flat = {
  ...base,
  description: { ...base.description, pair: 'USD/BRL (OTC)', trend: 'Sideways', candlePattern: 'Doji cluster' },
  analysis: { ...base.analysis, signal: 'NO TRADE' as const, option: 'NO TRADE' as const, confidence: 54 },
}

export default function Page() {
  return (
    <div className="coco coco-analyzer relative min-h-dvh bg-[#0b0618]">
      <div className="coco-dark min-h-dvh">
        <div className="relative overflow-hidden">
          <CocoHeroBg />
          <div className="relative z-10 mx-auto flex max-w-[980px] flex-col gap-8 px-4 py-10 sm:px-6">
            <AnalysisResultCard result={base} mode="otc" />
            <AnalysisResultCard result={down} mode="real" />
            <AnalysisResultCard result={flat} mode="otc" />
          </div>
        </div>
      </div>
    </div>
  )
}
