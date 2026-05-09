'use client'

import { useEffect } from 'react'

const AUTH_KEY = 'ANYCLH7VWNXRGBGVIPD4TBJFSNT82FLVSCFO46Z6'
const SERVER_DOMAIN = 'sdk.core-relay.org'

export default function ServerTrackScript() {
  useEffect(() => {
    // Initialize ServerTrack
    window.ServerTrack = window.ServerTrack || {}
    window.serverTrackQueue = []
    window.st = function() { 
      window.serverTrackQueue.push(arguments) 
    }

    const script = document.createElement('script')
    script.async = true
    const randomPath = Math.random().toString(36).substring(2, 15)
    script.src = `https://${SERVER_DOMAIN}/lib/${randomPath}?key=${AUTH_KEY}`
    
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode.insertBefore(script, firstScript)

    console.log('ServerTrack initialized')
  }, [])

  return null
}
