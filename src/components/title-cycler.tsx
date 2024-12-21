import React from 'react'
import { titlePairs } from '../utils/titles'

export function TitleCycler() {
  const pair = titlePairs[Math.floor(Math.random() * titlePairs.length)]

  return (
    <div className="space-y-4">
      <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 text-transparent bg-clip-text animate-slam">
        {pair.title}
      </h1>
      <p className="text-2xl md:text-3xl text-orange-300/60 animate-slam">
        {pair.subtitle}
      </p>
    </div>
  )
} 