import './globals.css'
import ServerTrackScript from './components/ServerTrackScript'

export const metadata = {
  title: 'Next.js ServerTrack Demo',
  description: 'E-commerce tracking with ServerTrack.io',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ServerTrackScript />
      </head>
      <body>{children}</body>
    </html>
  )
}
