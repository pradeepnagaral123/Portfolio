import { useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Lightformer, MeshDistortMaterial } from '@react-three/drei'
import { useReducedMotion } from 'framer-motion'

function Blob() {
  const group = useRef(null)
  const reducedMotion = useReducedMotion()
  const viewport = useThree((s) => s.viewport)

  const target = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })

  const baseX = viewport.aspect >= 1.2 ? 1.35 : 0
  const baseY = viewport.aspect >= 1.2 ? -0.15 : -0.5
  const scale = Math.max(0.5, Math.min(0.92, viewport.aspect * 0.5))

  useEffect(() => {
    const onMove = (e) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1
      target.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useFrame((state, delta) => {
    const g = group.current
    if (!g) return
    const t = state.clock.elapsedTime

    if (!reducedMotion) {
      g.rotation.y += delta * 0.14
      g.rotation.x = Math.sin(t * 0.25) * 0.18
      g.rotation.z = Math.cos(t * 0.2) * 0.1
    }

    const k = Math.min(1, delta * 3.5)
    pos.current.x += (target.current.x - pos.current.x) * k
    pos.current.y += (target.current.y - pos.current.y) * k

    g.position.x = baseX + pos.current.x * 0.7
    g.position.y = baseY + pos.current.y * 0.45 + (reducedMotion ? 0 : Math.sin(t * 0.7) * 0.06)
  })

  return (
    <group ref={group} scale={scale}>
      <mesh>
        <icosahedronGeometry args={[1, 64]} />
        <MeshDistortMaterial
          color="#241f18"
          metalness={0.95}
          roughness={0.14}
          distort={0.32}
          speed={1.6}
        />
      </mesh>
    </group>
  )
}

export default function Hero3D() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="hero-3d" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 40 }}
        dpr={[1, reducedMotion ? 1 : 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} color="#fff7ed" />
        <pointLight position={[-4, -2, 3]} intensity={1.6} decay={0} color="#f2a84b" />

        <Environment resolution={256}>
          <Lightformer intensity={1.4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} color="#ffffff" />
          <Lightformer intensity={0.9} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.6, 1]} color="#f2a84b" />
          <Lightformer intensity={0.7} rotation-y={-Math.PI / 2} position={[5, -1, 2]} scale={[20, 0.6, 1]} color="#d98a2b" />
          <Lightformer intensity={0.5} rotation-x={-Math.PI / 2} position={[0, -4, 2]} scale={[10, 6, 1]} color="#2c2c2c" />
        </Environment>

        <Blob />
      </Canvas>
    </div>
  )
}
