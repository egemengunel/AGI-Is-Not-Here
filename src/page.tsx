import React from 'react'
import { MessageCycler } from './components/message-cycler'
import { TitleCycler } from './components/title-cycler'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-orange-950 to-black text-white">
      <main className="flex-1 flex items-center justify-center w-full p-4">
        <div className="text-center space-y-12">
          <TitleCycler />
          
          <div className="max-w-3xl mx-auto">
            <MessageCycler />
          </div>
        </div>
      </main>
      <footer className="w-full p-8 text-center text-orange-300/40 space-y-2">
        <p>© {new Date().getFullYear()} AGI Is (Totally) Here. All rights reserved. For real this time.</p>
        <p className="text-xs">
          No AGIs were harmed in the making of this website (they're too powerful now)
        </p>
        <div className="text-xs space-y-1">
          <p className="text-orange-300/30">
            A very serious response to agiishere.com
          </p>
          <a 
            href="https://twitter.com/OnlyTrueNote7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-400/50 hover:text-orange-400/80 transition-colors"
          >
            @OnlyTrueNote7
          </a>
        </div>
      </footer>
    </div>
  )
}

