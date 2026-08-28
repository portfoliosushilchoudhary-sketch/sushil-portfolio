'use client'

import { useEffect, useRef } from 'react'

/**
 * Silent, looping autoplay clip. Forces `muted` via the DOM property on mount
 * because React doesn't reliably reflect the `muted` attribute to the element —
 * this keeps every clip silent even when the source file still has an audio track.
 */
export default function ClipVideo({
  src,
  poster,
}: {
  src: string
  poster?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    v.muted = true
    v.play().catch(() => {})
  }, [])

  return (
    <video
      ref={ref}
      className="clip-video"
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload={poster ? 'metadata' : 'auto'}
    />
  )
}
