import { useEffect, useRef, useState } from 'react'
import SmartImage from './SmartImage.jsx'

// Balon sapaan:
//  - Mouse (laptop): muncul saat kursor masuk ke foto, hilang saat kursor keluar.
//  - Keyboard: muncul saat foto mendapat fokus (Tab), hilang saat fokus pergi.
//  - Layar sentuh (HP): tidak ada "hover", jadi
//      1) balon muncul LANGSUNG saat jari menyentuh foto (tidak menunggu jari diangkat),
//      2) balon muncul sendiri satu kali ketika foto terlihat di layar (juga di layar sempit),
//         sebagai petunjuk,
//      3) balon hilang sendiri setelah 2,5 detik.
// Selama balon tampil, root diberi class "is-lit" supaya bingkai neon di frame.css ikut menebal.
export default function HelloPhoto({ className = '', style, src, fallback, alt, text = 'Hai, saya Algi' }) {
  const [show, setShow] = useState(false)
  const [tick, setTick] = useState(0) // naik setiap disentuh, supaya hitungan 2,5 detik mulai ulang
  const jenisInput = useRef('mouse') // 'mouse' | 'touch' | 'pen'
  const rootRef = useRef(null)
  const sudahPetunjuk = useRef(false)

  // Hanya untuk layar sentuh: sembunyikan otomatis.
  useEffect(() => {
    if (!show || jenisInput.current !== 'touch') return
    const t = setTimeout(() => setShow(false), 2500)
    return () => clearTimeout(t)
  }, [show, tick])

  // Untuk perangkat tanpa hover ATAU layar sempit (HP/tablet, termasuk mode HP di DevTools):
  // tampilkan sapaan sekali saat foto terlihat.
  useEffect(() => {
    const tanpaHover = typeof window !== 'undefined' && window.matchMedia?.('(hover: none), (max-width: 900px)').matches
    if (!tanpaHover || !rootRef.current || typeof IntersectionObserver === 'undefined') return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !sudahPetunjuk.current) {
          sudahPetunjuk.current = true
          jenisInput.current = 'touch'
          setShow(true)
          setTick((n) => n + 1)
          obs.disconnect()
        }
      },
      { threshold: 0.6 },
    )
    obs.observe(rootRef.current)
    return () => obs.disconnect()
  }, [])

  const catatJenis = (e) => { jenisInput.current = e.pointerType }

  return (
    <div ref={rootRef} className={`greet ${className} ${show ? 'is-lit' : ''}`} style={style}>
      <span className={`greet__bubble ${show ? 'is-visible' : ''}`} role="status">
        {text}
      </span>
      <button
        type="button"
        className="greet__btn"
        aria-label={`${alt}. Arahkan kursor atau fokuskan untuk melihat sapaan`}
        onPointerDown={(e) => {
          catatJenis(e)
          // Sentuhan: tampil saat jari menyentuh, tanpa menunggu klik selesai.
          if (e.pointerType === 'touch') {
            setShow(true)
            setTick((n) => n + 1)
          }
        }}
        onPointerEnter={(e) => {
          catatJenis(e)
          if (e.pointerType !== 'touch') setShow(true)
        }}
        onPointerLeave={(e) => {
          if (e.pointerType !== 'touch') setShow(false)
        }}
        onFocus={(e) => {
          // Hanya fokus dari keyboard (Tab), bukan fokus akibat klik/ketuk.
          if (e.target.matches(':focus-visible')) setShow(true)
        }}
        onBlur={() => setShow(false)}
      >
        <SmartImage src={src} fallback={fallback} alt={alt} width="800" height="1000" />
      </button>
    </div>
  )
}