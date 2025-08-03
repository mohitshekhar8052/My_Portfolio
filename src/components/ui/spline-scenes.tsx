
'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  priority?: boolean
}

export function SplineScene({ scene, className, priority = false }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-background/5">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary opacity-50"></div>
        </div>
      }
    >
      <div style={{ transform: 'translateZ(0)' }}>
        <Spline
          scene={scene}
          className={className}
          style={{ 
            willChange: priority ? 'transform' : 'auto',
            transform: 'translateZ(0)'
          }}
        />
      </div>
    </Suspense>
  )
}

// Hero background scene - Reduced opacity for better performance
export function HeroSplineScene() {
  return (
    <div className="absolute inset-0 opacity-15 pointer-events-none">
      <SplineScene 
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="w-full h-full"
        priority={true}
      />
    </div>
  )
}

// About section interactive element - Only load when in view
export function AboutSplineScene() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden bg-secondary/20">
      <SplineScene 
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  )
}

// Skills visualization - Simplified
export function SkillsSplineScene() {
  return (
    <div className="w-full h-[350px] rounded-lg overflow-hidden bg-secondary/20">
      <SplineScene 
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  )
}

// Contact section background - Very subtle
export function ContactSplineScene() {
  return (
    <div className="absolute inset-0 opacity-8 pointer-events-none">
      <SplineScene 
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  )
}
