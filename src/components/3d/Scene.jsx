/*
  Scene.jsx — Minimal + Stable R3F Canvas
  Scatter pozisyonları JSX'te baked (flash yok).
  useFrame: floating + scroll-driven lerp, hiç setState yok (re-render yok).

  FAZ 1+2: Parçalar ekranda dağılmış → scroll ile anakarta oturur (Hero + About + Experience)
  FAZ 3: Anakart → Laptop geçişi (Projects scroll)
  FAZ 4: Kamera zoom (Contact scroll)
*/

'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Environment, PerspectiveCamera } from '@react-three/drei'
import MotherboardModel, { CPU_ASSEMBLED, RAM_ASSEMBLED, M2_ASSEMBLED, BRACKET_ASSEMBLED, COVER_ASSEMBLED, CHIPSET_ASSEMBLED, PLATE_ASSEMBLED } from './MotherboardModel'
import LaptopModel from './LaptopModel'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger)

// ─── Scatter başlangıç pozisyonları (tamamen XY, pz=assembled) ───────────────
const CPU_SCATTER = { px: CPU_ASSEMBLED.px + 5, py: CPU_ASSEMBLED.py + 4, pz: CPU_ASSEMBLED.pz, rz: 1.1 }
const RAM_SCATTER = { px: RAM_ASSEMBLED.px - 1, py: RAM_ASSEMBLED.py - 2, pz: RAM_ASSEMBLED.pz, rx: 0.8 }
const M2_SCATTER = { px: M2_ASSEMBLED.px + 6, py: M2_ASSEMBLED.py - 3.5, pz: M2_ASSEMBLED.pz, ry: 1.4 }
const BRACKET_SCATTER = { px: BRACKET_ASSEMBLED.px - 5, py: BRACKET_ASSEMBLED.py - 3, pz: BRACKET_ASSEMBLED.pz, rx: 1.3 }
const COVER_SCATTER = { px: COVER_ASSEMBLED.px + 5, py: COVER_ASSEMBLED.py + 1, pz: COVER_ASSEMBLED.pz, rx: 0.5 }
const CHIPSET_SCATTER = { px: CHIPSET_ASSEMBLED.px - 6, py: CHIPSET_ASSEMBLED.py + 2, pz: CHIPSET_ASSEMBLED.pz, rx: 0.9 }
const PLATE_SCATTER = { px: PLATE_ASSEMBLED.px + 4, py: PLATE_ASSEMBLED.py - 2, pz: PLATE_ASSEMBLED.pz, rz: 1.0 }

const lerp = (a, b, t) => a + (b - a) * t

// ─── SceneContent ─────────────────────────────────────────────────────────────
function SceneContent() {
    const { camera } = useThree()

    const motherboardRef = useRef()
    const mbGroupRef = useRef()
    const laptopRef = useRef()
    const laptopGroupRef = useRef()

    const p2 = useRef(0)
    const p3 = useRef(0)
    const p4 = useRef(0)
    const p5 = useRef(0) // form section yaklaşıyor mu?
    const camStart = useRef({ x: 0, y: 0, z: 10 })
    const lookAtTarget = useRef({ x: 2.5, y: 0, z: 0 })
    const portalRef = useRef(null)

    useEffect(() => {
        camStart.current = { x: camera.position.x, y: camera.position.y, z: camera.position.z }
        portalRef.current = document.getElementById('three-html-portal')

        const projectsSection = document.querySelector('#projects')
        const contactSection = document.querySelector('#contact')
        const aboutSection = document.querySelector('#about')

        // Parça birleşimi: Hero başından About ortasına kadar, tam birleşmiş görünsün
        // endTrigger: about veya fallback
        ScrollTrigger.create({
            trigger: document.body,
            start: 'top top',
            endTrigger: aboutSection || document.body,
            end: aboutSection ? 'center center' : '+=200%',
            scrub: 1.5,
            onUpdate: (self) => { p2.current = self.progress },
        })

        if (projectsSection) {
            ScrollTrigger.create({
                trigger: projectsSection, start: 'top 75%', end: 'top 5%', scrub: 1.2,
                onUpdate: (self) => { p3.current = self.progress },
            })
        }
        if (contactSection) {
            ScrollTrigger.create({
                trigger: contactSection, start: 'top 90%', end: '35% center', scrub: 1.5,
                onUpdate: (self) => { p4.current = self.progress },
            })
        }

        // Form section viewport'a girerken ikonları gizle
        const formSection = document.querySelector('#contact-form-section')
        if (formSection) {
            ScrollTrigger.create({
                trigger: formSection,
                start: 'top bottom',   // form alt viewport'a girince başla
                end: 'top 60%',        // form üstü viewport %60'a gelince bitsin
                scrub: true,
                onUpdate: (self) => { p5.current = self.progress },
            })
        }

        return () => ScrollTrigger.getAll().forEach((t) => t.kill())
    }, [camera])

    useFrame((state) => {
        const t = state.clock.elapsedTime
        const v2 = p2.current
        const v3 = p3.current
        const v4 = p4.current

        const parts = motherboardRef.current
        const cpu = parts?.cpu?.current
        const ram = parts?.ram?.current
        const m2 = parts?.m2?.current
        const bracket = parts?.bracket?.current
        const cover = parts?.cover?.current
        const chipset = parts?.chipset?.current
        const plate = parts?.plate?.current

        // lerp hızı: v2 > 0.8 olunca daha agresif snapleme
        const snapSpeed = v2 > 0.85 ? 0.12 : 0.05

        // ── FAZ 1 + 2: Scatter → Assembled + floating ────────────────────────
        if (cpu && v3 < 0.05) {
            const tx = lerp(CPU_SCATTER.px, CPU_ASSEMBLED.px, v2)
            const ty = lerp(CPU_SCATTER.py, CPU_ASSEMBLED.py, v2)
            const tz = lerp(CPU_SCATTER.pz, CPU_ASSEMBLED.pz, v2)
            const fa = (1 - v2) * 0.15
            cpu.position.x = lerp(cpu.position.x, tx + Math.sin(t * 0.7) * fa, snapSpeed)
            cpu.position.y = lerp(cpu.position.y, ty + Math.cos(t * 0.5) * fa, snapSpeed)
            cpu.position.z = lerp(cpu.position.z, tz, snapSpeed)
            cpu.rotation.z = lerp(cpu.rotation.z, lerp(CPU_SCATTER.rz, CPU_ASSEMBLED.rz, v2), snapSpeed)
        }
        if (ram && v3 < 0.05) {
            const tx = lerp(RAM_SCATTER.px, RAM_ASSEMBLED.px, v2)
            const ty = lerp(RAM_SCATTER.py, RAM_ASSEMBLED.py, v2)
            const tz = lerp(RAM_SCATTER.pz, RAM_ASSEMBLED.pz, v2)
            const fa = (1 - v2) * 0.12
            ram.position.x = lerp(ram.position.x, tx + Math.cos(t * 0.6) * fa, snapSpeed)
            ram.position.y = lerp(ram.position.y, ty + Math.sin(t * 0.8) * fa, snapSpeed)
            ram.position.z = lerp(ram.position.z, tz, snapSpeed)
            ram.rotation.x = lerp(ram.rotation.x, lerp(RAM_SCATTER.rx, RAM_ASSEMBLED.rx, v2), snapSpeed)
        }
        if (m2 && v3 < 0.05) {
            const tx = lerp(M2_SCATTER.px, M2_ASSEMBLED.px, v2)
            const ty = lerp(M2_SCATTER.py, M2_ASSEMBLED.py, v2)
            const tz = lerp(M2_SCATTER.pz, M2_ASSEMBLED.pz, v2)
            const fa = (1 - v2) * 0.1
            m2.position.x = lerp(m2.position.x, tx + Math.sin(t * 1.1) * fa, snapSpeed)
            m2.position.y = lerp(m2.position.y, ty + Math.cos(t * 0.7) * fa, snapSpeed)
            m2.position.z = lerp(m2.position.z, tz, snapSpeed)
            m2.rotation.y = lerp(m2.rotation.y, lerp(M2_SCATTER.ry, M2_ASSEMBLED.ry, v2), snapSpeed)
        }
        if (bracket && v3 < 0.05) {
            const tx = lerp(BRACKET_SCATTER.px, BRACKET_ASSEMBLED.px, v2)
            const ty = lerp(BRACKET_SCATTER.py, BRACKET_ASSEMBLED.py, v2)
            const tz = lerp(BRACKET_SCATTER.pz, BRACKET_ASSEMBLED.pz, v2)
            const fa = (1 - v2) * 0.15
            bracket.position.x = lerp(bracket.position.x, tx + Math.cos(t * 0.8) * fa, snapSpeed)
            bracket.position.y = lerp(bracket.position.y, ty + Math.sin(t * 1.2) * fa, snapSpeed)
            bracket.position.z = lerp(bracket.position.z, tz, snapSpeed)
            bracket.rotation.x = lerp(bracket.rotation.x, lerp(BRACKET_SCATTER.rx, BRACKET_ASSEMBLED.rx, v2), snapSpeed)
        }
        if (cover && v3 < 0.05) {
            const tx = lerp(COVER_SCATTER.px, COVER_ASSEMBLED.px, v2)
            const ty = lerp(COVER_SCATTER.py, COVER_ASSEMBLED.py, v2)
            const tz = lerp(COVER_SCATTER.pz, COVER_ASSEMBLED.pz, v2)
            const fa = (1 - v2) * 0.13
            cover.position.x = lerp(cover.position.x, tx + Math.sin(t * 0.6) * fa, snapSpeed)
            cover.position.y = lerp(cover.position.y, ty + Math.cos(t * 0.9) * fa, snapSpeed)
            cover.position.z = lerp(cover.position.z, tz, snapSpeed)
            cover.rotation.x = lerp(cover.rotation.x, lerp(COVER_SCATTER.rx, COVER_ASSEMBLED.rx, v2), snapSpeed)
        }
        if (chipset && v3 < 0.05) {
            const tx = lerp(CHIPSET_SCATTER.px, CHIPSET_ASSEMBLED.px, v2)
            const ty = lerp(CHIPSET_SCATTER.py, CHIPSET_ASSEMBLED.py, v2)
            const tz = lerp(CHIPSET_SCATTER.pz, CHIPSET_ASSEMBLED.pz, v2)
            const fa = (1 - v2) * 0.14
            chipset.position.x = lerp(chipset.position.x, tx + Math.cos(t * 1.1) * fa, snapSpeed)
            chipset.position.y = lerp(chipset.position.y, ty + Math.sin(t * 0.7) * fa, snapSpeed)
            chipset.position.z = lerp(chipset.position.z, tz, snapSpeed)
            chipset.rotation.x = lerp(chipset.rotation.x, lerp(CHIPSET_SCATTER.rx, CHIPSET_ASSEMBLED.rx, v2), snapSpeed)
        }
        if (plate && v3 < 0.05) {
            const tx = lerp(PLATE_SCATTER.px, PLATE_ASSEMBLED.px, v2)
            const ty = lerp(PLATE_SCATTER.py, PLATE_ASSEMBLED.py, v2)
            const tz = lerp(PLATE_SCATTER.pz, PLATE_ASSEMBLED.pz, v2)
            const fa = (1 - v2) * 0.11
            plate.position.x = lerp(plate.position.x, tx + Math.sin(t * 0.8) * fa, snapSpeed)
            plate.position.y = lerp(plate.position.y, ty + Math.cos(t * 1.0) * fa, snapSpeed)
            plate.position.z = lerp(plate.position.z, tz, snapSpeed)
            plate.rotation.z = lerp(plate.rotation.z, lerp(PLATE_SCATTER.rz, PLATE_ASSEMBLED.rz, v2), snapSpeed)
        }

        // ── FAZ 1+2: Grup pozisyonu — sağ tarafta sabit ──────────────────────
        const mb = mbGroupRef.current
        if (mb && v3 < 0.05) {
            mb.position.x = lerp(mb.position.x, 8, 0.04)
            mb.position.y = lerp(mb.position.y, lerp(0.3, -0.3, v2), 0.05)
        }

        // ── FAZ 3: Anakart → Laptop (çok eksenli spiral dönüş) ────────────────
        if (mb) {
            mb.rotation.y = lerp(mb.rotation.y, v3 * Math.PI * 3.0, 0.04)
            mb.rotation.x = lerp(mb.rotation.x, v3 * Math.PI * 0.6, 0.04)
            mb.rotation.z = lerp(mb.rotation.z, v3 * Math.PI * -0.35, 0.04)
            mb.scale.setScalar(lerp(mb.scale.x, Math.max(0.001, 1 * (1 - v3)), 0.05))
            mb.position.z = lerp(mb.position.z, -3 * v3, 0.05)
        }

        const lg = laptopGroupRef.current
        if (lg) {
            lg.scale.setScalar(lerp(lg.scale.x, Math.max(0.001, v3 * 1.88), 0.05))
            const targetRotY = v3 < 0.1 ? -Math.PI * 0.3 : 0
            lg.rotation.y = lerp(lg.rotation.y, targetRotY, 0.04)
        }

        // ── HTML portal: Contact zoom'da görünsün, form yaklaşınca gizle ──────
        if (portalRef.current) {
            const showPortal = v4 > 0.05 && p5.current < 0.15
            portalRef.current.style.visibility = showPortal ? 'visible' : 'hidden'
        }

        // ── FAZ 4: Kamera zoom — contact'ta laptop ekranını çerçeveler ────────
        if (v4 > 0.001) {
            camera.position.x = lerp(camera.position.x, lerp(camStart.current.x, 0, v4), 0.05)
            camera.position.y = lerp(camera.position.y, lerp(camStart.current.y, -3.5, v4), 0.05)
            camera.position.z = lerp(camera.position.z, lerp(camStart.current.z, 7, v4), 0.05)

            lookAtTarget.current.x = lerp(lookAtTarget.current.x, 0, 0.05)
            lookAtTarget.current.y = lerp(lookAtTarget.current.y, lerp(0, -4.5, v4), 0.05)
            lookAtTarget.current.z = lerp(lookAtTarget.current.z, 0, 0.05)
        } else {
            camera.position.x = lerp(camera.position.x, camStart.current.x, 0.05)
            camera.position.y = lerp(camera.position.y, camStart.current.y, 0.05)
            camera.position.z = lerp(camera.position.z, camStart.current.z, 0.05)

            lookAtTarget.current.x = lerp(lookAtTarget.current.x, 2.5, 0.05)
            lookAtTarget.current.y = lerp(lookAtTarget.current.y, 0, 0.05)
            lookAtTarget.current.z = lerp(lookAtTarget.current.z, 0, 0.05)
        }
        camera.lookAt(lookAtTarget.current.x, lookAtTarget.current.y, lookAtTarget.current.z)
    })

    return (
        <>
            {/* Kamera: sağa offset — sol kısımda metin, sağda 3D model */}
            <PerspectiveCamera makeDefault position={[2.5, 0, 10]} fov={52} />

            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={2} castShadow />
            <directionalLight position={[-5, 3, -5]} intensity={0.6} color="#6366f1" />
            <pointLight position={[0, 4, 2]} intensity={1.2} color="#818cf8" />
            <pointLight position={[3, -2, 3]} intensity={0.5} color="#06b6d4" />

            <Environment preset="city" />

            {/* Anakart: Hero'da sağ tarafta — yazıların dışında */}
            <MotherboardModel
                ref={motherboardRef}
                groupRef={mbGroupRef}
                scale={0.60}
                position={[8, 0.5, 0]}
                rotation={[-0.2, 0.3, 0]}
            />

            {/* Laptop: contact aşamasına kadar invisible (scale≈0) */}
            <LaptopModel
                ref={laptopRef}
                groupRef={laptopGroupRef}
                scale={0.001}
                position={[0, -8, 0]}
                rotation={[0, 0.1, 0]}
            />
        </>
    )
}

// ─── Canvas ───────────────────────────────────────────────────────────────────
export default function Scene() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    if (isMobile) return null

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
            <Canvas shadows gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }} dpr={[1, 1.5]}>
                <SceneContent />
            </Canvas>
        </div>
    )
}

