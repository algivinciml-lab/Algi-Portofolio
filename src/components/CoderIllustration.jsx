// Ilustrasi karakter: remaja laki-laki sedang memakai laptop.
// Digambar sendiri sebagai SVG (bukan gambar jadi), warnanya mengikuti tema website.
export default function CoderIllustration({ className = '' }) {
  return (
    <svg
      className={`coder ${className}`}
      viewBox="0 0 480 440"
      role="img"
      aria-label="Ilustrasi remaja laki-laki sedang menggunakan laptop"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Latar: lingkaran lembut + bingkai tipis */}
      <circle cx="240" cy="226" r="188" fill="var(--charcoal-2)" />
      <circle cx="240" cy="226" r="188" fill="none" stroke="var(--line)" strokeWidth="2" />
      <circle cx="240" cy="226" r="208" fill="none" stroke="var(--lime)" strokeWidth="1.5" strokeDasharray="3 11" opacity="0.55" />

      {/* Simbol kode melayang */}
      <g className="coder__float" fontFamily="'JetBrains Mono', ui-monospace, monospace" fontWeight="700" fill="var(--lime)">
        <text x="70" y="140" fontSize="34">{'{ }'}</text>
        <text x="372" y="118" fontSize="30" className="coder__float--b">{'</>'}</text>
        <text x="392" y="236" fontSize="30" className="coder__float--c">{'=>'}</text>
        <text x="58" y="262" fontSize="28" className="coder__float--c">{';'}</text>
      </g>

      {/* Meja */}
      <rect x="62" y="372" width="356" height="12" fill="var(--lime)" />
      <rect x="92" y="384" width="10" height="42" fill="var(--line)" />
      <rect x="378" y="384" width="10" height="42" fill="var(--line)" />

      {/* Badan: hoodie */}
      <path d="M126 372 C126 296 160 262 240 262 C320 262 354 296 354 372 Z" fill="#3b6fd8" />
      {/* Kerah / tudung hoodie */}
      <path d="M190 268 C206 296 274 296 290 268 C280 254 200 254 190 268 Z" fill="#2f5bb8" />
      {/* Tali hoodie */}
      <path d="M226 290 L224 318 M254 290 L256 318" stroke="#f3f3ea" strokeWidth="4" strokeLinecap="round" />

      {/* Leher */}
      <rect x="221" y="232" width="38" height="40" rx="14" fill="#b98058" />

      {/* Telinga */}
      <ellipse cx="190" cy="192" rx="9" ry="14" fill="#b98058" />
      <ellipse cx="290" cy="192" rx="9" ry="14" fill="#b98058" />

      {/* Kepala */}
      <ellipse cx="240" cy="186" rx="50" ry="62" fill="#cf9770" />

      {/* Rambut: jambul ke samping */}
      <path
        d="M184 178 C178 128 206 104 244 104 C286 104 304 134 298 178
           C290 160 280 150 262 146 C240 152 214 150 196 164 C190 168 186 172 184 178 Z"
        fill="#1d1a18"
      />
      <path d="M214 112 C226 96 258 94 274 112 C258 106 236 106 214 112 Z" fill="#1d1a18" />
      <path d="M198 150 C206 158 208 170 203 180 C195 172 192 160 198 150 Z" fill="#1d1a18" />

      {/* Alis */}
      <path d="M205 164 C212 159 223 159 230 163 M250 163 C257 159 268 159 275 164" stroke="#1d1a18" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Mata menunduk ke layar */}
      <path d="M208 188 C213 193 222 193 227 188 M253 188 C258 193 267 193 272 188" stroke="#1d1a18" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Kacamata bulat berbingkai tipis, dengan pantulan layar */}
      <g fill="rgba(255,255,255,0.07)" stroke="#d3d6db" strokeWidth="3">
        <circle cx="218" cy="188" r="20" />
        <circle cx="262" cy="188" r="20" />
      </g>
      <path d="M237 184 C240 181 240 181 243 184" stroke="#d3d6db" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M198 186 L190 188 M282 186 L290 188" stroke="#d3d6db" strokeWidth="3" strokeLinecap="round" />
      <path d="M208 196 L214 196 M252 196 L258 196" stroke="var(--lime)" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      {/* Hidung dan senyum */}
      <path d="M240 198 C238 205 236 208 242 209" stroke="#a46f48" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M228 224 C235 230 246 230 253 224" stroke="#6e4228" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* Lengan di samping laptop, tangan bertumpu di meja */}
      <path d="M132 308 C116 330 112 352 118 368 L146 368 C146 346 150 326 154 312 Z" fill="#3b6fd8" />
      <path d="M348 308 C364 330 368 352 362 368 L334 368 C334 346 330 326 326 312 Z" fill="#3b6fd8" />
      <ellipse cx="132" cy="368" rx="19" ry="8" fill="#cf9770" />
      <ellipse cx="348" cy="368" rx="19" ry="8" fill="#cf9770" />

      {/* Laptop: bagian belakang layar menghadap kita */}
      <rect x="148" y="278" width="184" height="86" rx="8" fill="#232720" stroke="var(--lime)" strokeWidth="3" />
      <rect x="156" y="286" width="168" height="70" rx="4" fill="#1a1d18" />
      {/* Logo di belakang layar */}
      <text x="240" y="332" textAnchor="middle" fontFamily="'JetBrains Mono', ui-monospace, monospace" fontWeight="700" fontSize="30" fill="var(--lime)">{'</>'}</text>
      {/* Engsel + alas laptop */}
      <rect x="132" y="364" width="216" height="10" rx="5" fill="#2e332b" />
    </svg>
  )
}