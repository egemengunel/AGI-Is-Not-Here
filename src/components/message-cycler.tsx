'use client'

import React from 'react'
import { agiMessages } from '../utils/messages'

export function MessageCycler() {
  const messageIndex = Math.floor(Math.random() * agiMessages.length)

  return (
    <p className="text-xl md:text-2xl text-orange-200/80 max-w-3xl mx-auto leading-relaxed animate-slam">
      {agiMessages[messageIndex]}
    </p>
  )
}

