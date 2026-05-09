# Next.js ServerTrack Demo

E-commerce demo with ServerTrack.io integration using Next.js 14 App Router.

## Installation

```bash
npm install
```

## Configuration

Update `app/components/ServerTrackScript.js`:

```javascript
const AUTH_KEY = 'YOUR_AUTH_KEY'
const SERVER_DOMAIN = 'subdomain.example.com'
```

## Usage

**Development:**
```bash
npm run dev
```

**Production:**
```bash
npm run build
npm start
```

## Features

- ✅ Next.js 14 App Router
- ✅ Server Components + Client Components
- ✅ ViewContent, AddToCart, InitiateCheckout, Purchase events
- ✅ Advanced matching with user data

## Project Structure

```
app/
├── components/
│   ├── ServerTrackScript.js  # SDK initialization
│   ├── ProductList.js
│   ├── ProductView.js
│   ├── Checkout.js
│   └── Success.js
├── utils/
│   └── servertrack.js        # Tracking helper
├── layout.js
├── page.js
└── globals.css
```

Visit `http://localhost:3000` after running `npm run dev`
