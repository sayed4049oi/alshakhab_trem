type MediaImageProps = { media?: { url?: string } | string | null; className?: string; priority?: boolean }

export function MediaImage({ media, className }: MediaImageProps) {
  const source = typeof media === 'string' ? media : media?.url
  return <div className={`bg-[#174760] ${className ?? ''}`} style={source ? { backgroundImage: `url(${source})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined} aria-label="صورة" />
}