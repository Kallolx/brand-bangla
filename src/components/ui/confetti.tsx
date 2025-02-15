import React, { useCallback, useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

interface ConfettiProps {
  className?: string
}

export const Confetti = ({ className }: ConfettiProps) => {
  const refAnimationInstance = useRef<confetti.CreateTypes | null>(null)

  const getInstance = useCallback(() => {
    if (refAnimationInstance.current === null) {
      refAnimationInstance.current = confetti.create(undefined, {
        resize: true,
        useWorker: true,
      })
    }

    return refAnimationInstance.current
  }, [])

  const makeShot = useCallback((particleRatio: number, opts: confetti.Options) => {
    const instance = getInstance()
    const particleCount = 50 * particleRatio
    instance({
      ...opts,
      particleCount,
      colors: ['#0F5F38', '#4A5C2F', '#B1894A', '#F8F2E7'],
    })
  }, [getInstance])

  const fire = useCallback(() => {
    // First burst
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
      origin: { y: 0.7, x: 0.3 }
    })

    // Second burst
    makeShot(0.2, {
      spread: 60,
      origin: { y: 0.7, x: 0.7 }
    })

    // Third burst
    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      origin: { y: 0.6, x: 0.5 }
    })

    // Fourth burst
    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      origin: { y: 0.5, x: 0.4 }
    })
  }, [makeShot])

  useEffect(() => {
    // Fire confetti immediately when component mounts
    fire()

    // Fire two more times with a delay
    const timer1 = setTimeout(() => fire(), 750)
    const timer2 = setTimeout(() => fire(), 1500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      if (refAnimationInstance.current) {
        refAnimationInstance.current.reset()
      }
    }
  }, [fire])

  return <canvas className={className} id="confetti-canvas" />
} 