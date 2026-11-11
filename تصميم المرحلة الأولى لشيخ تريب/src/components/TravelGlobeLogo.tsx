'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export function TravelGlobeLogo({ variant = 'default' }: { variant?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100)
    camera.position.set(0, 0.15, 5.7)

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setClearColor(0x000000, 0)

    const starPositions = new Float32Array(360 * 3)
    for (let index = 0; index < 360; index += 1) {
      const angle = index * 2.39996
      const radius = 7 + (index % 11) * 0.7
      starPositions[index * 3] = Math.cos(angle) * radius
      starPositions[index * 3 + 1] = Math.sin(angle * 1.7) * radius * 0.7
      starPositions[index * 3 + 2] = Math.sin(angle) * radius
    }
    const starGeometry = new THREE.BufferGeometry()
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3))
    const starMaterial = new THREE.PointsMaterial({
      color: 0xd7efff,
      size: 0.035,
      transparent: true,
      opacity: 0.78,
    })
    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    scene.add(new THREE.AmbientLight(0x8bc4e2, 1.7))
    const sun = new THREE.DirectionalLight(0xffe6aa, 3.2)
    sun.position.set(-3, 4, 5)
    scene.add(sun)

    const globe = new THREE.Group()
    scene.add(globe)
    const textureLoader = new THREE.TextureLoader()
    const earthTexture = textureLoader.load('/textures/earth-day.jpg')
    earthTexture.colorSpace = THREE.SRGBColorSpace
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(1.55, 64, 64),
      new THREE.MeshStandardMaterial({ map: earthTexture, roughness: 0.95, metalness: 0.02 }),
    )
    globe.add(earth)

    const cloudTexture = textureLoader.load('/textures/earth-clouds.png')
    const clouds = new THREE.Mesh(
      new THREE.SphereGeometry(1.59, 64, 64),
      new THREE.MeshBasicMaterial({
        map: cloudTexture,
        color: 0xffffff,
        transparent: true,
        opacity: 0.28,
        depthWrite: false,
      }),
    )
    globe.add(clouds)

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.82, 64, 64),
      new THREE.MeshBasicMaterial({
        color: 0x55b9eb,
        transparent: true,
        opacity: 0.2,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    )
    globe.add(atmosphere)

    const atmosphereCore = new THREE.Mesh(
      new THREE.SphereGeometry(1.67, 64, 64),
      new THREE.MeshBasicMaterial({
        color: 0x7bd2f5,
        transparent: true,
        opacity: 0.07,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    )
    globe.add(atmosphereCore)

    const aircraftFleet: Array<{
      holder: THREE.Group
      path: THREE.CatmullRomCurve3
      phase: number
      speed: number
    }> = []
    const random = (seed: number) => {
      const value = Math.sin(seed * 12.9898) * 43758.5453
      return value - Math.floor(value)
    }
    const modelForward = new THREE.Vector3(1, 0, 0)
    const flightForward = new THREE.Vector3(0, 0, 1)
    let aircraftTemplate: THREE.Object3D | undefined
    new GLTFLoader().load('/models/aircraft/airbus-a340.glb', (result) => {
      aircraftTemplate = result.scene
      const bounds = new THREE.Box3().setFromObject(aircraftTemplate)
      const size = bounds.getSize(new THREE.Vector3())
      const largestSide = Math.max(size.x, size.y, size.z) || 1
      const aircraftCount = 72

      for (let index = 0; index < aircraftCount; index += 1) {
        const seed = index + 1
        const latitude = random(seed * 1.7) * 2 - 1
        const longitude = random(seed * 2.3) * Math.PI * 2
        const normal = new THREE.Vector3(
          Math.sqrt(1 - latitude * latitude) * Math.cos(longitude),
          latitude,
          Math.sqrt(1 - latitude * latitude) * Math.sin(longitude),
        ).normalize()
        const basisA = new THREE.Vector3(0, 1, 0).cross(normal)
        if (basisA.lengthSq() < 0.001) basisA.set(1, 0, 0).cross(normal)
        basisA.normalize()
        const basisB = normal.clone().cross(basisA).normalize()
        const radius = 1.61 + random(seed * 3.1) * 0.035
        const path = new THREE.CatmullRomCurve3(
          Array.from({ length: 48 }, (_, pointIndex) => {
            const angle = (pointIndex / 48) * Math.PI * 2
            return basisA
              .clone()
              .multiplyScalar(Math.cos(angle) * radius)
              .addScaledVector(basisB, Math.sin(angle) * radius)
          }),
          true,
          'centripetal',
        )
        const holder = new THREE.Group()
        const instance = aircraftTemplate.clone(true)
        instance.scale.setScalar(0.06 / largestSide)
        instance.quaternion.setFromUnitVectors(modelForward, flightForward)
        instance.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true
          }
        })
        holder.add(instance)
        globe.add(holder)
        aircraftFleet.push({
          holder,
          path,
          phase: random(seed * 4.7),
          speed: 0.0025 + random(seed * 5.9) * 0.002,
        })
      }
    }, undefined, () => canvas.classList.add('travel-globe-load-failed'))

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      if (!width || !height) return
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    resize()

    const clock = new THREE.Clock()
    let animationFrame = 0
    const flightPoint = new THREE.Vector3()
    const nextFlightPoint = new THREE.Vector3()
    const flightTangent = new THREE.Vector3()
    const surfaceNormal = new THREE.Vector3()
    const lateralAxis = new THREE.Vector3()
    const orientationMatrix = new THREE.Matrix4()
    const bankRotation = new THREE.Quaternion()
    let lastRenderTime = -1
    const animate = () => {
      const elapsed = clock.getElapsedTime()
      if (lastRenderTime >= 0 && elapsed - lastRenderTime < 1 / 45) {
        animationFrame = requestAnimationFrame(animate)
        return
      }
      lastRenderTime = elapsed
      globe.rotation.y = elapsed * 0.035
      for (const aircraft of aircraftFleet) {
        const progress = 1 - ((elapsed * aircraft.speed + aircraft.phase) % 1)
        aircraft.path.getPointAt(progress, flightPoint)
        aircraft.path.getPointAt((progress - 0.003 + 1) % 1, nextFlightPoint)
        flightTangent.copy(nextFlightPoint).sub(flightPoint).normalize()
        surfaceNormal.copy(flightPoint).normalize()
        lateralAxis.crossVectors(surfaceNormal, flightTangent).normalize()
        aircraft.holder.position.copy(flightPoint)
        orientationMatrix.makeBasis(lateralAxis, surfaceNormal, flightTangent)
        aircraft.holder.quaternion.setFromRotationMatrix(orientationMatrix)
        bankRotation.setFromAxisAngle(flightTangent, Math.sin(elapsed * 0.35 + aircraft.phase * 6) * 0.08)
        aircraft.holder.quaternion.premultiply(bankRotation)
      }
      clouds.rotation.y = elapsed * 0.06
      renderer.render(scene, camera)
      animationFrame = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationFrame)
      observer.disconnect()
      earthTexture.dispose()
      cloudTexture.dispose()
      earth.geometry.dispose()
      clouds.geometry.dispose()
      atmosphere.geometry.dispose()
      atmosphereCore.geometry.dispose()
      starGeometry.dispose()
      starMaterial.dispose()
      renderer.dispose()
      aircraftTemplate?.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose()
          if (Array.isArray(child.material)) child.material.forEach((material) => material.dispose())
          else child.material.dispose()
        }
      })
    }
  }, [])

  return (
    <div className={`travel-globe-logo travel-globe-logo--${variant}`} aria-label="الشيخاب للسفر والسياحة">
      <canvas ref={canvasRef} />
      <div className="globe-brand-label">
        <strong>الشيخاب</strong>
        <span>للسفر والسياحة</span>
      </div>
    </div>
  )
}