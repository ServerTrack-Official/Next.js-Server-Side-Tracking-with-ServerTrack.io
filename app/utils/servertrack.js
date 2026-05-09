export const trackEvent = (eventName, eventData = {}, userData = null) => {
  if (!window.st) {
    console.error('ServerTrack not initialized')
    return
  }

  if (userData) {
    window.st('track', eventName, eventData, userData)
  } else {
    window.st('track', eventName, eventData)
  }
}
