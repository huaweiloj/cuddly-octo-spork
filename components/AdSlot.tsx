'use client';
/** Placeholder only. Replace contents with an approved ad provider's official code when ready. */
export default function AdSlot({ label = 'Advertisement', compact = false }: { label?: string; compact?: boolean }) {
  if (process.env.NEXT_PUBLIC_ADS_ENABLED !== 'true') return null;
  return <aside aria-label={label} className={`ad-slot ${compact ? 'ad-slot-compact' : ''}`}><span>{label}</span><div>Ad placement reserved</div></aside>;
}
