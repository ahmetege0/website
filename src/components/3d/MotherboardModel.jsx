/*
  MotherboardModel.jsx
  — Scatter pozisyonları JSX içinde başlangıçtan itibaren set edilir (flash yok)
  — cpu/ram/m2 için useImperativeHandle ile ref + assembled target pozisyonları açılır
  — groupRef prop'u ile root Three.js group'u Faz 3'te kontrol edilebilir

  Assembled (hedef) pozisyonlar (parent group [0.446, 0, 0] local space'inde):
    CPU : position [0.246, 1.89, -7.892] | rotation [PI/2, 0, 0] | scale [1.125, 1, 1.125]
    RAM : position [0.627, -0.007, -1.022] (slot 0 merkezi)
    M2  : position [0, 0, -0.085]
*/

import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import { useGLTF } from '@react-three/drei'

// Assembled (hedef) pozisyonlar — Scene.jsx bu sabitlerle lerp yapacak
export const CPU_ASSEMBLED = { px: 0.246, py: 1.89, pz: -7.892, rx: Math.PI / 2, ry: 0, rz: 0 }
export const RAM_ASSEMBLED = { px: 0, py: 0, pz: 0, rx: 0, ry: 0, rz: 0 }
export const M2_ASSEMBLED = { px: 0, py: 0, pz: 0.085, rx: 0, ry: 0, rz: 0 }
export const BRACKET_ASSEMBLED = { px: 0, py: 0, pz: -0.04, rx: 0, ry: 0, rz: 0 }
export const COVER_ASSEMBLED = { px: 0, py: 0, pz: 0.319, rx: 0, ry: 0, rz: 0 }
export const CHIPSET_ASSEMBLED = { px: 0, py: 0, pz: 0.017, rx: 0, ry: 0, rz: 0 }
export const PLATE_ASSEMBLED = { px: 0, py: 0, pz: 0.587, rx: 0, ry: 0, rz: 0 }

// Scatter offset'leri (local space, assembled'a eklenir)
const CPU_SCATTER = { px: 3.5, py: 6, pz: 1.5, rz: 0.9 }
const RAM_SCATTER = { px: -4, py: 5, pz: -2, rx: 0.6 }
const M2_SCATTER = { px: 2.5, py: -4, pz: 2.5, ry: 1.4 }
const BRACKET_SCATTER = { px: -2, py: 4, pz: 1, rx: 1.2 }
const COVER_SCATTER = { px: 2, py: 5, pz: -3, rx: 0.4 }
const CHIPSET_SCATTER = { px: -3, py: -2, pz: 2, rx: 0.7 }
const PLATE_SCATTER = { px: 4, py: -1, pz: 4, rz: 0.8 }

const MotherboardModel = forwardRef(function MotherboardModel({ groupRef, ...props }, ref) {
    const { nodes, materials } = useGLTF('/asus_motherboard.glb')

    const cpuRef = useRef()
    const ramRef = useRef()
    const m2Ref = useRef()
    const bracketRef = useRef()
    const coverRef = useRef()
    const chipsetRef = useRef()
    const plateRef = useRef()

    useImperativeHandle(ref, () => ({
        cpu: cpuRef,
        ram: ramRef,
        m2: m2Ref,
        bracket: bracketRef,
        cover: coverRef,
        chipset: chipsetRef,
        plate: plateRef,
    }))

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <group position={[0.446, 0, 0]}>

                {/* ── CPU — Scatter pozisyonundan başlar, Faz 2'de assembled'a gelir ──────── */}
                <group
                    ref={cpuRef}
                    position={[
                        CPU_ASSEMBLED.px + CPU_SCATTER.px,
                        CPU_ASSEMBLED.py + CPU_SCATTER.py,
                        CPU_ASSEMBLED.pz + CPU_SCATTER.pz,
                    ]}
                    rotation={[CPU_ASSEMBLED.rx, CPU_ASSEMBLED.ry, CPU_SCATTER.rz]}
                    scale={[1.125, 1, 1.125]}
                >
                    <mesh geometry={nodes.pCube841_CPULidM_0.geometry} material={materials.CPULidM} position={[0, 0.081, 0.033]} scale={[0.833, 0.111, 0.833]} />
                    <mesh geometry={nodes.pCube840_CPU_BaseM_0.geometry} material={materials.CPU_BaseM} position={[0, 0.017, 0]} scale={[1, 0.032, 1]} />
                </group>

                {/* ── M2 / SSD — Scatter pozisyonundan başlar ──────────────────────────────── */}
                <group
                    ref={m2Ref}
                    position={[
                        M2_ASSEMBLED.px + M2_SCATTER.px,
                        M2_ASSEMBLED.py + M2_SCATTER.py,
                        M2_ASSEMBLED.pz + M2_SCATTER.pz,
                    ]}
                    rotation={[0, M2_SCATTER.ry, 0]}
                >
                    <mesh geometry={nodes.pCube843_M2_Chip1m_0.geometry} material={materials.M2_Chip1m} position={[-1.081, -0.407, -7.639]} scale={[0.378, 0.378, 0.026]} />
                    <mesh geometry={nodes.pCube844_M2_Chip1m_0.geometry} material={materials.M2_Chip1m} position={[-0.633, -0.407, -7.639]} scale={[0.378, 0.378, 0.026]} />
                    <mesh geometry={nodes.pCube845_M2_Chip1m_0.geometry} material={materials.M2_Chip1m} position={[-0.033, -0.415, -7.639]} scale={[0.378, 0.378, 0.026]} />
                    <mesh geometry={nodes.pCube846_M2_Chip2m_0.geometry} material={materials.M2_Chip2m} position={[0.447, -0.403, -7.638]} scale={[0.378, 0.378, 0.026]} />
                    <mesh geometry={nodes.pCube847_lambert1_0.geometry} material={materials.lambert1} position={[-0.196, -0.128, -7.645]} scale={[0.026, 0.059, 0.007]} />
                    <mesh geometry={nodes.pCube848_lambert1_0.geometry} material={materials.lambert1} position={[-0.156, -0.128, -7.645]} scale={[0.026, 0.059, 0.007]} />
                    <mesh geometry={nodes.pCube849_lambert1_0.geometry} material={materials.lambert1} position={[-0.334, -0.128, -7.645]} scale={[0.026, 0.059, 0.007]} />
                    <mesh geometry={nodes.pCube850_lambert1_0.geometry} material={materials.lambert1} position={[-0.375, -0.128, -7.645]} scale={[0.026, 0.059, 0.007]} />
                    <mesh geometry={nodes.pCube851_M2_StickerM_0.geometry} material={materials.M2_StickerM} position={[-0.633, -0.393, -7.623]} scale={[0.378, 0.31, 0.009]} />
                    <mesh geometry={nodes.pCube842_M2_BaseM_0.geometry} material={materials.M2_BaseM} position={[0, 0, 0.085]} />
                </group>

                {/* ── RAM — Scatter pozisyonundan başlar ───────────────────────────────────── */}
                <group
                    ref={ramRef}
                    position={[
                        RAM_ASSEMBLED.px + RAM_SCATTER.px,
                        RAM_ASSEMBLED.py + RAM_SCATTER.py,
                        RAM_ASSEMBLED.pz + RAM_SCATTER.pz,
                    ]}
                    rotation={[RAM_SCATTER.rx, 0, 0]}
                >
                    <group position={[0.627, -0.007, -1.022]}>
                        <mesh geometry={nodes.pCube902_Ram3M_0.geometry} material={materials.Ram3M} position={[-0.689, 0, 0]} />
                        <mesh geometry={nodes.pCube910_Ram4M_0.geometry} material={materials.Ram4M} position={[3.88, 3.775, -0.044]} rotation={[0, 0, Math.PI]} scale={[0.58, 1, 1]} />
                        <mesh geometry={nodes.pCube911_RGBM_0.geometry} material={materials.RGBM} position={[-0.434, 0, 0]} />
                        <mesh geometry={nodes.pCube912_Ram4M_0.geometry} material={materials.Ram4M} position={[3.83, 3.775, -0.044]} rotation={[0, 0, Math.PI]} scale={[0.58, 1, 1]} />
                        <mesh geometry={nodes.pCube920_Ram2M_0.geometry} material={materials.Ram2M} position={[0.007, 0, 0]} />
                        <mesh geometry={nodes.pCube919_Ram2M_0.geometry} material={materials.Ram2M} position={[0.007, 0, 0]} />
                    </group>
                    <group position={[0.342, -0.007, -1.022]}>
                        <mesh geometry={nodes.pCube902_Ram3M_0_1.geometry} material={materials.Ram3M} position={[-0.689, 0, 0]} />
                        <mesh geometry={nodes.pCube910_Ram4M_0_1.geometry} material={materials.Ram4M} position={[3.88, 3.775, -0.044]} rotation={[0, 0, Math.PI]} scale={[0.58, 1, 1]} />
                        <mesh geometry={nodes.pCube911_RGBM_0_1.geometry} material={materials.RGBM} position={[-0.434, 0, 0]} />
                        <mesh geometry={nodes.pCube912_Ram4M_0_1.geometry} material={materials.Ram4M} position={[3.83, 3.775, -0.044]} rotation={[0, 0, Math.PI]} scale={[0.58, 1, 1]} />
                        <mesh geometry={nodes.pCube920_Ram2M_0_1.geometry} material={materials.Ram2M} position={[0.007, 0, 0]} />
                        <mesh geometry={nodes.pCube919_Ram2M_0_1.geometry} material={materials.Ram2M} position={[0.007, 0, 0]} />
                    </group>
                    <group position={[0.05, -0.007, -1.022]}>
                        <mesh geometry={nodes.pCube902_Ram3M_0_2.geometry} material={materials.Ram3M} position={[-0.689, 0, 0]} />
                        <mesh geometry={nodes.pCube910_Ram4M_0_2.geometry} material={materials.Ram4M} position={[3.88, 3.775, -0.044]} rotation={[0, 0, Math.PI]} scale={[0.58, 1, 1]} />
                        <mesh geometry={nodes.pCube911_RGBM_0_2.geometry} material={materials.RGBM} position={[-0.434, 0, 0]} />
                        <mesh geometry={nodes.pCube912_Ram4M_0_2.geometry} material={materials.Ram4M} position={[3.83, 3.775, -0.044]} rotation={[0, 0, Math.PI]} scale={[0.58, 1, 1]} />
                        <mesh geometry={nodes.pCube920_Ram2M_0_2.geometry} material={materials.Ram2M} position={[0.007, 0, 0]} />
                        <mesh geometry={nodes.pCube919_Ram2M_0_2.geometry} material={materials.Ram2M} position={[0.007, 0, 0]} />
                    </group>
                    <group position={[-0.248, -0.007, -1.022]}>
                        <mesh geometry={nodes.pCube902_Ram3M_0_3.geometry} material={materials.Ram3M} position={[-0.689, 0, 0]} />
                        <mesh geometry={nodes.pCube910_Ram4M_0_3.geometry} material={materials.Ram4M} position={[3.88, 3.775, -0.044]} rotation={[0, 0, Math.PI]} scale={[0.58, 1, 1]} />
                        <mesh geometry={nodes.pCube911_RGBM_0_3.geometry} material={materials.RGBM} position={[-0.434, 0, 0]} />
                        <mesh geometry={nodes.pCube912_Ram4M_0_3.geometry} material={materials.Ram4M} position={[3.83, 3.775, -0.044]} rotation={[0, 0, Math.PI]} scale={[0.58, 1, 1]} />
                        <mesh geometry={nodes.pCube920_Ram2M_0_3.geometry} material={materials.Ram2M} position={[0.007, 0, 0]} />
                        <mesh geometry={nodes.pCube919_Ram2M_0_3.geometry} material={materials.Ram2M} position={[0.007, 0, 0]} />
                    </group>
                </group>

                {/* ── Statik Anakart Parçaları ──────────────────────────────────────────────── */}
                <group position={[-0.016, -0.043, 0.086]}>
                    <mesh geometry={nodes.pCube437_USBMetalM_0.geometry} material={materials.USBMetalM} />
                    <mesh geometry={nodes.pCube437_USB3M_0.geometry} material={materials.USB3M} />
                </group>
                <group position={[0.079, -0.02, 0]}>
                    <mesh geometry={nodes.pCube425_USBMetalM_0.geometry} material={materials.USBMetalM} />
                    <mesh geometry={nodes.pCube425_USB3M_0.geometry} material={materials.USB3M} />
                    <mesh geometry={nodes.pCube425_USB1M_0.geometry} material={materials.USB1M} />
                    <mesh geometry={nodes.pCube425_AntennaM_0.geometry} material={materials.AntennaM} />
                </group>
                <group position={[-0.029, 0.014, 0]}>
                    <mesh geometry={nodes.pCube429_USBMetalM_0.geometry} material={materials.USBMetalM} />
                    <mesh geometry={nodes.pCube429_USB2M_0.geometry} material={materials.USB2M} />
                </group>
                <group position={[-1.136, 0.6, -0.988]} scale={[0.643, 0.749, 0.87]}>
                    <mesh geometry={nodes.pCube414_VideoPortBlackM_0.geometry} material={materials.VideoPortBlackM} />
                    <mesh geometry={nodes.pCube414_USBMetalM_0.geometry} material={materials.USBMetalM} />
                </group>
                <group position={[-1.483, -0.013, 0.027]} scale={[0.553, 1, 1]}>
                    <mesh geometry={nodes.pCube407_USBMetalM_0.geometry} material={materials.USBMetalM} />
                    <mesh geometry={nodes.pCube407_VideoPortBlackM_0.geometry} material={materials.VideoPortBlackM} />
                </group>
                <group position={[-0.387, 0.3, -0.42]} scale={0.885}>
                    <mesh geometry={nodes.pCube398_VideoPortBlackM_0.geometry} material={materials.VideoPortBlackM} />
                    <mesh geometry={nodes.pCube398_USBMetalM_0.geometry} material={materials.USBMetalM} />
                </group>

                {/* Eklenen yeni hareketli parçalar */}
                <group ref={bracketRef}
                    position={[BRACKET_ASSEMBLED.px + BRACKET_SCATTER.px, BRACKET_ASSEMBLED.py + BRACKET_SCATTER.py, BRACKET_ASSEMBLED.pz + BRACKET_SCATTER.pz]}
                    rotation={[BRACKET_SCATTER.rx, 0, 0]}>
                    <mesh geometry={nodes.pCube329_CPUBracketM_0.geometry} material={materials.CPUBracketM} />
                </group>
                <group ref={chipsetRef}
                    position={[CHIPSET_ASSEMBLED.px + CHIPSET_SCATTER.px, CHIPSET_ASSEMBLED.py + CHIPSET_SCATTER.py, CHIPSET_ASSEMBLED.pz + CHIPSET_SCATTER.pz]}
                    rotation={[CHIPSET_SCATTER.rx, 0, 0]}>
                    <mesh geometry={nodes.pCube315_BoardChipsetM_0.geometry} material={materials.BoardChipsetM} />
                </group>
                <group ref={coverRef}
                    position={[COVER_ASSEMBLED.px + COVER_SCATTER.px, COVER_ASSEMBLED.py + COVER_SCATTER.py, COVER_ASSEMBLED.pz + COVER_SCATTER.pz]}
                    rotation={[COVER_SCATTER.rx, 0, 0]}>
                    <mesh geometry={nodes.pCube304_BoardM2Cover1M_0.geometry} material={materials.BoardM2Cover1M} />
                </group>
                <group ref={plateRef}
                    position={[PLATE_ASSEMBLED.px + PLATE_SCATTER.px, PLATE_ASSEMBLED.py + PLATE_SCATTER.py, PLATE_ASSEMBLED.pz + PLATE_SCATTER.pz]}
                    rotation={[0, 0, PLATE_SCATTER.rz]}>
                    <mesh geometry={nodes.pCube340_BoardPlate1m_0.geometry} material={materials.BoardPlate1m} scale={[1, 1, 1.276]} />
                </group>

                {/* Sbt kalan parçalar */}
                <mesh geometry={nodes.pCube328_BoardPlate2m_0.geometry} material={materials.BoardPlate2m} />
                <mesh geometry={nodes.nurbsToPoly1_CPULatch_0.geometry} material={materials.CPULatch} position={[0, 0, -0.025]} />
                <mesh geometry={nodes.pCube44_BasePLasticM_0.geometry} material={materials.BasePLasticM} position={[0.5, 0, 0]} />
                <mesh geometry={nodes.pCube511_BaseBoardM_0.geometry} material={materials.BaseBoardM} />

                <mesh geometry={nodes.pCube476_I_O_Cover_0.geometry} material={materials.I_O_Cover} />
                <mesh geometry={nodes.pCube478_CPULatchMountM_0.geometry} material={materials.CPULatchMountM} />
                <mesh geometry={nodes.pCube2_Mertal1M_0.geometry} material={materials.Mertal1M} position={[-0.967, -2.751, -7.743]} scale={[2.707, 0.037, 0.411]} />
                <mesh geometry={nodes.pCube3_Mertal1M_0.geometry} material={materials.Mertal1M} position={[-0.988, -3.031, -7.743]} rotation={[0, 0, Math.PI]} scale={[2.707, 0.037, 0.411]} />
                <mesh geometry={nodes.polySurface1_Audio1m_0.geometry} material={materials.Audio1m} position={[-3.631, 0.438, -7.754]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[0.164, 0.097, 0.183]} />
                <mesh geometry={nodes.pCylinder62_Audio3m_0.geometry} material={materials.Audio3m} position={[-3.581, 0.06, -7.76]} rotation={[0, 0, Math.PI / 2]} scale={[0.096, 0.135, 0.096]} />
                <mesh geometry={nodes.pCylinder61_Audio4m_0.geometry} material={materials.Audio4m} position={[-3.581, 0.06, -7.432]} rotation={[0, 0, Math.PI / 2]} scale={[0.096, 0.135, 0.096]} />
                <mesh geometry={nodes.pCylinder60_Audio1m_0.geometry} material={materials.Audio1m} position={[-3.581, 0.437, -7.432]} rotation={[0, 0, Math.PI / 2]} scale={[0.096, 0.135, 0.096]} />
                <mesh geometry={nodes.pCylinder59_Audio2m_0.geometry} material={materials.Audio2m} position={[-3.581, 0.437, -7.114]} rotation={[0, 0, Math.PI / 2]} scale={[0.096, 0.135, 0.096]} />
                <mesh geometry={nodes.pCube444_RGBM_0.geometry} material={materials.RGBM} position={[-1.948, 2.071, -6.847]} scale={0.137} />
                <mesh geometry={nodes.pCylinder70_USBMetalM_0.geometry} material={materials.USBMetalM} position={[0.014, 0.997, 0.556]} />
                <mesh geometry={nodes.pCylinder69_USBMetalM_0.geometry} material={materials.USBMetalM} position={[0.014, 0, 0.556]} />
                <mesh geometry={nodes.pCylinder73_AntennaM_0.geometry} material={materials.AntennaM} position={[-3.841, 3.868, -7.075]} rotation={[0, 0, Math.PI / 2]} scale={[0.095, 0.074, 0.095]} />
                <mesh geometry={nodes.pCylinder72_AntennaM_0.geometry} material={materials.AntennaM} position={[-3.64, 3.868, -7.075]} rotation={[0, 0, Math.PI / 2]} scale={[0.114, 0.014, 0.114]} />
                <mesh geometry={nodes.pCylinder71_AntennaM_0.geometry} material={materials.AntennaM} position={[-3.783, 3.868, -7.075]} rotation={[0, 0, Math.PI / 2]} scale={[0.074, 0.156, 0.074]} />
            </group>
        </group>
    )
})

MotherboardModel.displayName = 'MotherboardModel'
useGLTF.preload('/asus_motherboard.glb')
export default MotherboardModel
