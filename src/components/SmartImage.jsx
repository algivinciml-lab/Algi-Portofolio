import { useState } from 'react'

// <img> yang otomatis memakai placeholder jika file asli belum ada.
export default function SmartImage({ src, fallback, alt, ...rest }) {
  const [failed, setFailed] = useState(false)
  return (
    <img
      src={failed ? fallback : src}
      alt={alt}
      onError={() => setFailed(true)}
      {...rest}
    />
  )
}
