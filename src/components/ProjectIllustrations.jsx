import { motion } from 'framer-motion'

export function EcommerceIllustration() {
  return (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-illustration">
      <rect width="400" height="200" fill="#16130f" />

      {/* Grid background */}
      <pattern id="ecom-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect width="20" height="20" fill="none" stroke="rgba(242,168,75,0.04)" strokeWidth="0.5"/>
      </pattern>
      <rect width="400" height="200" fill="url(#ecom-grid)" />

      {/* Storefront shape */}
      <motion.rect
        x="140" y="50" width="120" height="90" rx="4"
        stroke="#f2a84b" strokeWidth="1" fill="rgba(242,168,75,0.03)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Roof / awning */}
      <motion.path
        d="M130 50 L200 20 L270 50"
        stroke="#f2a84b" strokeWidth="1" fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      {/* Door */}
      <rect x="185" y="95" width="30" height="45" rx="2" stroke="rgba(242,168,75,0.3)" strokeWidth="0.75" fill="rgba(242,168,75,0.02)" />

      {/* Floating product cards */}
      <motion.g
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <rect x="60" y="65" width="50" height="40" rx="3" stroke="rgba(242,168,75,0.25)" strokeWidth="0.75" fill="rgba(242,168,75,0.02)" />
        <rect x="68" y="73" width="34" height="14" rx="1" fill="rgba(242,168,75,0.06)" />
        <rect x="68" y="91" width="22" height="4" rx="1" fill="rgba(242,168,75,0.1)" />
      </motion.g>

      <motion.g
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <rect x="290" y="55" width="50" height="40" rx="3" stroke="rgba(242,168,75,0.25)" strokeWidth="0.75" fill="rgba(242,168,75,0.02)" />
        <rect x="298" y="63" width="34" height="14" rx="1" fill="rgba(242,168,75,0.06)" />
        <rect x="298" y="81" width="22" height="4" rx="1" fill="rgba(242,168,75,0.1)" />
      </motion.g>

      {/* Cart icon */}
      <motion.g
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <circle cx="325" cy="140" r="20" stroke="rgba(242,168,75,0.15)" strokeWidth="0.75" fill="rgba(242,168,75,0.03)" />
        <path d="M316 136 h18 l-2 8 h-14 z" stroke="#f2a84b" strokeWidth="0.75" fill="none" />
        <circle cx="320" cy="148" r="1.5" fill="#f2a84b" />
        <circle cx="330" cy="148" r="1.5" fill="#f2a84b" />
      </motion.g>

      {/* Currency symbol */}
      <motion.g
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <circle cx="75" cy="140" r="20" stroke="rgba(242,168,75,0.15)" strokeWidth="0.75" fill="rgba(242,168,75,0.03)" />
        <text x="75" y="145" textAnchor="middle" fill="#f2a84b" fontSize="14" fontFamily="Space Grotesk, sans-serif" fontWeight="600">$</text>
      </motion.g>

      {/* Connecting lines */}
      <motion.path
        d="M110 85 L140 85"
        stroke="rgba(242,168,75,0.1)" strokeWidth="0.5" strokeDasharray="3 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
      <motion.path
        d="M260 75 L290 75"
        stroke="rgba(242,168,75,0.1)" strokeWidth="0.5" strokeDasharray="3 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      />

      {/* Floating particles */}
      <motion.circle cx="50" cy="30" r="1.5" fill="#f2a84b" opacity="0.3"
        animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
      <motion.circle cx="350" cy="40" r="1" fill="#f2a84b" opacity="0.2"
        animate={{ y: [0, 6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
      <motion.circle cx="200" cy="170" r="1" fill="#f2a84b" opacity="0.2"
        animate={{ y: [0, -5, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
    </svg>
  )
}

export function TaskManagerIllustration() {
  return (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-illustration">
      <rect width="400" height="200" fill="#16130f" />

      <pattern id="task-grid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
        <rect width="16" height="16" fill="none" stroke="rgba(242,168,75,0.04)" strokeWidth="0.5"/>
      </pattern>
      <rect width="400" height="200" fill="url(#task-grid)" />

      {/* Column headers */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <rect x="40" y="25" width="100" height="6" rx="3" fill="rgba(242,168,75,0.15)" />
        <rect x="150" y="25" width="100" height="6" rx="3" fill="rgba(242,168,75,0.1)" />
        <rect x="260" y="25" width="100" height="6" rx="3" fill="rgba(242,168,75,0.06)" />
      </motion.g>

      {/* Column lines */}
      <line x1="145" y1="20" x2="145" y2="185" stroke="rgba(242,168,75,0.06)" strokeWidth="0.5" />
      <line x1="255" y1="20" x2="255" y2="185" stroke="rgba(242,168,75,0.06)" strokeWidth="0.5" />

      {/* To Do cards */}
      <motion.g initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
        <rect x="48" y="45" width="84" height="32" rx="4" stroke="rgba(242,168,75,0.2)" strokeWidth="0.75" fill="rgba(242,168,75,0.03)" />
        <rect x="56" y="53" width="40" height="4" rx="1" fill="rgba(242,168,75,0.15)" />
        <rect x="56" y="61" width="56" height="3" rx="1" fill="rgba(242,168,75,0.06)" />
        <circle cx="120" cy="68" r="5" stroke="rgba(242,168,75,0.2)" strokeWidth="0.5" fill="rgba(242,168,75,0.05)" />
      </motion.g>

      <motion.g initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
        <rect x="48" y="85" width="84" height="32" rx="4" stroke="rgba(242,168,75,0.2)" strokeWidth="0.75" fill="rgba(242,168,75,0.03)" />
        <rect x="56" y="93" width="50" height="4" rx="1" fill="rgba(242,168,75,0.15)" />
        <rect x="56" y="101" width="42" height="3" rx="1" fill="rgba(242,168,75,0.06)" />
      </motion.g>

      {/* In Progress cards */}
      <motion.g initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }}>
        <rect x="158" y="45" width="84" height="32" rx="4" stroke="rgba(242,168,75,0.25)" strokeWidth="0.75" fill="rgba(242,168,75,0.05)" />
        <rect x="166" y="53" width="36" height="4" rx="1" fill="rgba(242,168,75,0.2)" />
        <rect x="166" y="61" width="50" height="3" rx="1" fill="rgba(242,168,75,0.08)" />
        {/* Progress bar */}
        <rect x="166" y="67" width="60" height="2" rx="1" fill="rgba(242,168,75,0.08)" />
        <rect x="166" y="67" width="36" height="2" rx="1" fill="rgba(242,168,75,0.25)" />
      </motion.g>

      {/* Done cards */}
      <motion.g initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }}>
        <rect x="268" y="45" width="84" height="32" rx="4" stroke="rgba(242,168,75,0.15)" strokeWidth="0.75" fill="rgba(242,168,75,0.02)" />
        <rect x="276" y="53" width="44" height="4" rx="1" fill="rgba(242,168,75,0.12)" />
        <rect x="276" y="61" width="38" height="3" rx="1" fill="rgba(242,168,75,0.05)" />
        <motion.path d="M340 60 L343 63 L349 57" stroke="#f2a84b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1.3 }} />
      </motion.g>

      {/* Drag arrow */}
      <motion.path
        d="M132 100 C145 100, 145 60, 158 60"
        stroke="rgba(242,168,75,0.3)" strokeWidth="1" strokeDasharray="4 3" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
      />
      <motion.polygon points="158,56 158,64 162,60" fill="rgba(242,168,75,0.3)"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} />

      {/* Cursor */}
      <motion.g
        initial={{ x: 60, y: 130, opacity: 0 }}
        animate={{ x: 110, y: 85, opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
      >
        <path d="M0 0 L0 14 L4 10 L8 16 L10 15 L6 9 L11 9 Z" fill="#f2a84b" />
      </motion.g>

      <motion.circle cx="200" cy="170" r="1" fill="#f2a84b" opacity="0.3"
        animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.circle cx="340" cy="160" r="1.2" fill="#f2a84b" opacity="0.2"
        animate={{ y: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.7 }} />
    </svg>
  )
}

export function WeatherIllustration() {
  return (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-illustration">
      <rect width="400" height="200" fill="#16130f" />

      {/* Chart grid */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1="40" y1={40 + i * 32} x2="360" y2={40 + i * 32} stroke="rgba(242,168,75,0.05)" strokeWidth="0.5" />
      ))}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <line key={i} x1={40 + i * 53} y1="40" x2={40 + i * 53} y2="168" stroke="rgba(242,168,75,0.05)" strokeWidth="0.5" />
      ))}

      {/* Area chart fill */}
      <motion.path
        d="M40 120 Q80 100, 93 95 T146 80 T199 65 T252 90 T305 55 T358 40 L358 168 L40 168 Z"
        fill="url(#weather-gradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <defs>
        <linearGradient id="weather-gradient" x1="0" y1="40" x2="0" y2="168" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f2a84b" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#f2a84b" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Main chart line */}
      <motion.path
        d="M40 120 Q80 100, 93 95 T146 80 T199 65 T252 90 T305 55 T358 40"
        stroke="#f2a84b" strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Data points */}
      {[
        [40, 120], [93, 95], [146, 80], [199, 65], [252, 90], [305, 55], [358, 40]
      ].map(([x, y], i) => (
        <motion.circle key={i} cx={x} cy={y} r="3" fill="#16130f" stroke="#f2a84b" strokeWidth="1"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 + i * 0.2, duration: 0.3 }}
        />
      ))}

      {/* Sun */}
      <motion.g
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <circle cx="330" cy="30" r="10" stroke="#f2a84b" strokeWidth="0.75" fill="rgba(242,168,75,0.05)" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180
          return (
            <motion.line key={angle}
              x1={330 + Math.cos(rad) * 13} y1={30 + Math.sin(rad) * 13}
              x2={330 + Math.cos(rad) * 16} y2={30 + Math.sin(rad) * 16}
              stroke="#f2a84b" strokeWidth="0.5" opacity="0.4"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: angle / 360 }}
            />
          )
        })}
      </motion.g>

      {/* Cloud */}
      <motion.g
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <circle cx="60" cy="35" r="8" stroke="rgba(242,168,75,0.2)" strokeWidth="0.75" fill="rgba(242,168,75,0.03)" />
        <circle cx="70" cy="32" r="10" stroke="rgba(242,168,75,0.2)" strokeWidth="0.75" fill="rgba(242,168,75,0.03)" />
        <circle cx="80" cy="35" r="7" stroke="rgba(242,168,75,0.2)" strokeWidth="0.75" fill="rgba(242,168,75,0.03)" />
      </motion.g>

      {/* Temperature label */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <rect x="190" y="55" width="48" height="18" rx="4" fill="rgba(242,168,75,0.08)" stroke="rgba(242,168,75,0.15)" strokeWidth="0.5" />
        <text x="214" y="67" textAnchor="middle" fill="#f2a84b" fontSize="8" fontFamily="Space Grotesk, sans-serif" fontWeight="500">28°C</text>
      </motion.g>

      {/* Rain drops */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 2.2 }}>
        <motion.line x1="120" y1="140" x2="118" y2="148" stroke="#f2a84b" strokeWidth="0.5"
          animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }} />
        <motion.line x1="135" y1="145" x2="133" y2="153" stroke="#f2a84b" strokeWidth="0.5"
          animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} />
        <motion.line x1="150" y1="142" x2="148" y2="150" stroke="#f2a84b" strokeWidth="0.5"
          animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }} />
      </motion.g>
    </svg>
  )
}

export function ApiGatewayIllustration() {
  return (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-illustration">
      <rect width="400" height="200" fill="#16130f" />

      {/* Central gateway node */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <rect x="165" y="75" width="70" height="50" rx="6" stroke="#f2a84b" strokeWidth="1" fill="rgba(242,168,75,0.05)" />
        <text x="200" y="104" textAnchor="middle" fill="#f2a84b" fontSize="9" fontFamily="Space Grotesk, sans-serif" fontWeight="600">GATEWAY</text>
      </motion.g>

      {/* Left service nodes */}
      {[
        { x: 40, y: 40, label: 'Auth', delay: 0.3 },
        { x: 40, y: 100, label: 'Users', delay: 0.4 },
        { x: 40, y: 155, label: 'Pay', delay: 0.5 },
      ].map((node, i) => (
        <motion.g key={i}
          initial={{ x: -15, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: node.delay }}
        >
          <rect x={node.x} y={node.y} width="60" height="28" rx="4" stroke="rgba(242,168,75,0.2)" strokeWidth="0.75" fill="rgba(242,168,75,0.02)" />
          <text x={node.x + 30} y={node.y + 17} textAnchor="middle" fill="rgba(242,168,75,0.5)" fontSize="7" fontFamily="Space Grotesk, sans-serif" fontWeight="500">{node.label}</text>
          {/* Connection line */}
          <motion.line
            x1={node.x + 60} y1={node.y + 14}
            x2={165} y2={100}
            stroke="rgba(242,168,75,0.12)" strokeWidth="0.75"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: node.delay + 0.3 }}
          />
        </motion.g>
      ))}

      {/* Right output nodes */}
      {[
        { x: 300, y: 40, label: 'DB', delay: 0.6 },
        { x: 300, y: 100, label: 'Cache', delay: 0.7 },
        { x: 300, y: 155, label: 'CDN', delay: 0.8 },
      ].map((node, i) => (
        <motion.g key={i}
          initial={{ x: 15, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: node.delay }}
        >
          <rect x={node.x} y={node.y} width="60" height="28" rx="4" stroke="rgba(242,168,75,0.2)" strokeWidth="0.75" fill="rgba(242,168,75,0.02)" />
          <text x={node.x + 30} y={node.y + 17} textAnchor="middle" fill="rgba(242,168,75,0.5)" fontSize="7" fontFamily="Space Grotesk, sans-serif" fontWeight="500">{node.label}</text>
          <motion.line
            x1={235} y1={100}
            x2={node.x} y2={node.y + 14}
            stroke="rgba(242,168,75,0.12)" strokeWidth="0.75"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: node.delay + 0.3 }}
          />
        </motion.g>
      ))}

      {/* Data packets traveling */}
      {[
        { from: [100, 54], to: [165, 90], delay: 1.5 },
        { from: [100, 114], to: [165, 100], delay: 1.8 },
        { from: [235, 100], to: [300, 54], delay: 2.1 },
        { from: [235, 100], to: [300, 114], delay: 2.4 },
      ].map(({ from }, i) => (
        <motion.circle key={i} r="2" fill="#f2a84b" opacity="0.6"
          animate={{
            cx: [from[0], from[0] + 30],
            cy: [from[1], from[1] + 10],
            opacity: [0, 0.6, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.6, ease: "linear" }}
        />
      ))}

      {/* Rate limit indicator */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <rect x="175" y="135" width="50" height="14" rx="3" fill="rgba(242,168,75,0.06)" stroke="rgba(242,168,75,0.12)" strokeWidth="0.5" />
        <text x="200" y="144" textAnchor="middle" fill="rgba(242,168,75,0.4)" fontSize="6" fontFamily="monospace">128 req/s</text>
      </motion.g>
    </svg>
  )
}

export function SocialAnalyticsIllustration() {
  return (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-illustration">
      <rect width="400" height="200" fill="#16130f" />

      <pattern id="social-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <rect width="24" height="24" fill="none" stroke="rgba(242,168,75,0.03)" strokeWidth="0.5"/>
      </pattern>
      <rect width="400" height="200" fill="url(#social-grid)" />

      {/* Bar chart */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        {[
          { x: 40, h: 60 }, { x: 58, h: 80 }, { x: 76, h: 45 },
          { x: 94, h: 95 }, { x: 112, h: 70 }, { x: 130, h: 55 },
        ].map((bar, i) => (
          <motion.rect key={i}
            x={bar.x} y={160 - bar.h} width="12" height={bar.h} rx="2"
            fill="rgba(242,168,75,0.12)" stroke="rgba(242,168,75,0.2)" strokeWidth="0.5"
            initial={{ height: 0, y: 160 }}
            animate={{ height: bar.h, y: 160 - bar.h }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: "easeOut" }}
          />
        ))}
      </motion.g>

      {/* Pie / donut chart */}
      <motion.g
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <circle cx="320" cy="100" r="35" stroke="rgba(242,168,75,0.08)" strokeWidth="12" fill="none" />
        <motion.circle cx="320" cy="100" r="35" stroke="#f2a84b" strokeWidth="12" fill="none"
          strokeDasharray="70 150" strokeDashoffset="0" strokeLinecap="round"
          initial={{ strokeDashoffset: 220 }}
          animate={{ strokeDashoffset: 150 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        />
        <motion.circle cx="320" cy="100" r="35" stroke="rgba(242,168,75,0.3)" strokeWidth="12" fill="none"
          strokeDasharray="50 170" strokeDashoffset="-70" strokeLinecap="round"
          initial={{ strokeDashoffset: 150 }}
          animate={{ strokeDashoffset: -70 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
        />
        <text x="320" y="97" textAnchor="middle" fill="#f2a84b" fontSize="12" fontFamily="Space Grotesk, sans-serif" fontWeight="600">73%</text>
        <text x="320" y="110" textAnchor="middle" fill="rgba(242,168,75,0.4)" fontSize="6" fontFamily="Space Grotesk, sans-serif">engagement</text>
      </motion.g>

      {/* Social graph nodes */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        {[
          [180, 50], [200, 35], [220, 50], [190, 70], [210, 70],
        ].map(([x, y], i) => (
          <motion.circle key={i} cx={x} cy={y} r="4" fill="rgba(242,168,75,0.2)" stroke="#f2a84b" strokeWidth="0.5"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
        {/* Connections */}
        <line x1="180" y1="50" x2="200" y2="35" stroke="rgba(242,168,75,0.1)" strokeWidth="0.5" />
        <line x1="200" y1="35" x2="220" y2="50" stroke="rgba(242,168,75,0.1)" strokeWidth="0.5" />
        <line x1="180" y1="50" x2="190" y2="70" stroke="rgba(242,168,75,0.1)" strokeWidth="0.5" />
        <line x1="220" y1="50" x2="210" y2="70" stroke="rgba(242,168,75,0.1)" strokeWidth="0.5" />
        <line x1="190" y1="70" x2="210" y2="70" stroke="rgba(242,168,75,0.1)" strokeWidth="0.5" />
      </motion.g>

      {/* Trending arrow */}
      <motion.path
        d="M175 140 L200 120 L225 130 L260 105"
        stroke="#f2a84b" strokeWidth="1" fill="none" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 1.5 }}
      />
      <motion.polygon points="260,101 260,109 265,105" fill="#f2a84b"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} />

      {/* Floating metric */}
      <motion.g initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }}>
        <rect x="170" y="155" width="60" height="16" rx="3" fill="rgba(242,168,75,0.06)" stroke="rgba(242,168,75,0.12)" strokeWidth="0.5" />
        <text x="200" y="165" textAnchor="middle" fill="rgba(242,168,75,0.5)" fontSize="7" fontFamily="Space Grotesk, sans-serif">+24.5%</text>
      </motion.g>
    </svg>
  )
}

export function AiContentIllustration() {
  return (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-illustration">
      <rect width="400" height="200" fill="#16130f" />

      {/* Neural network nodes */}
      {/* Input layer */}
      {[45, 75, 105, 135, 165].map((y, i) => (
        <motion.circle key={`in-${i}`} cx="60" cy={y} r="5" fill="rgba(242,168,75,0.1)" stroke="#f2a84b" strokeWidth="0.75"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }} />
      ))}
      {/* Hidden layer 1 */}
      {[55, 85, 115, 145].map((y, i) => (
        <motion.circle key={`h1-${i}`} cx="150" cy={y} r="5" fill="rgba(242,168,75,0.1)" stroke="#f2a84b" strokeWidth="0.75"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.1 }} />
      ))}
      {/* Hidden layer 2 */}
      {[65, 95, 125].map((y, i) => (
        <motion.circle key={`h2-${i}`} cx="240" cy={y} r="5" fill="rgba(242,168,75,0.1)" stroke="#f2a84b" strokeWidth="0.75"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 + i * 0.1 }} />
      ))}
      {/* Output layer */}
      {[85, 115].map((y, i) => (
        <motion.circle key={`out-${i}`} cx="330" cy={y} r="6" fill="rgba(242,168,75,0.15)" stroke="#f2a84b" strokeWidth="1"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 + i * 0.1 }} />
      ))}

      {/* Connections: input -> hidden1 */}
      {[45, 75, 105, 135, 165].map((y1) =>
        [55, 85, 115, 145].map((y2, j) => (
          <motion.line key={`c1-${y1}-${y2}`}
            x1="65" y1={y1} x2="145" y2={y2}
            stroke="rgba(242,168,75,0.06)" strokeWidth="0.5"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.3 + j * 0.05 }}
          />
        ))
      )}

      {/* Connections: hidden1 -> hidden2 */}
      {[55, 85, 115, 145].map((y1) =>
        [65, 95, 125].map((y2, j) => (
          <motion.line key={`c2-${y1}-${y2}`}
            x1="155" y1={y1} x2="235" y2={y2}
            stroke="rgba(242,168,75,0.06)" strokeWidth="0.5"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.8 + j * 0.05 }}
          />
        ))
      )}

      {/* Connections: hidden2 -> output */}
      {[65, 95, 125].map((y1) =>
        [85, 115].map((y2, j) => (
          <motion.line key={`c3-${y1}-${y2}`}
            x1="245" y1={y1} x2="324" y2={y2}
            stroke="rgba(242,168,75,0.06)" strokeWidth="0.5"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1.3 + j * 0.05 }}
          />
        ))
      )}

      {/* Pulse along connections */}
      <motion.circle r="2" fill="#f2a84b" opacity="0.5"
        animate={{
          cx: [60, 150, 240, 330],
          cy: [105, 95, 95, 100],
          opacity: [0, 0.5, 0.5, 0]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 2, ease: "linear" }}
      />

      {/* Output label */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <rect x="310" y="135" width="40" height="16" rx="3" fill="rgba(242,168,75,0.06)" stroke="rgba(242,168,75,0.15)" strokeWidth="0.5" />
        <text x="330" y="145" textAnchor="middle" fill="#f2a84b" fontSize="7" fontFamily="Space Grotesk, sans-serif" fontWeight="500">GPT-4</text>
      </motion.g>

      {/* Floating sparkles */}
      <motion.path d="M370 30 L372 26 L374 30 L378 32 L374 34 L372 38 L370 34 L366 32 Z"
        fill="#f2a84b" opacity="0.2"
        animate={{ rotate: [0, 180, 360], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.path d="M25 170 L27 166 L29 170 L33 172 L29 174 L27 178 L25 174 L21 172 Z"
        fill="#f2a84b" opacity="0.15"
        animate={{ rotate: [0, -180, -360], scale: [1, 0.7, 1] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
    </svg>
  )
}

const illustrations = {
  1: EcommerceIllustration,
  2: TaskManagerIllustration,
  3: WeatherIllustration,
  4: ApiGatewayIllustration,
  5: SocialAnalyticsIllustration,
  6: AiContentIllustration,
}

export default illustrations
