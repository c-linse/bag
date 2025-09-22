# Christoph Linse – Links Landing Page

A minimal personal landing page built with React, TypeScript, Tailwind CSS, and Vite. It showcases links to professional profiles, social media, and fitness accounts, and includes handy buttons to share the page, copy the link, or schedule a meeting via Calendly.

## Features

- **Share this page**: Uses the Web Share API when available, with a fallback to copy the link to the clipboard.
- **Copy link**: Copy the current page URL to the clipboard with a single click.
- **Schedule meeting**: Opens your Calendly scheduling page in a new tab.
- **Link cards**: Display links with icons and hints for quick access to profiles (LinkedIn, YouTube, Strava, Udemy, etc.).

## Tech Stack

- [Vite](https://vitejs.dev/) – Fast build tool and development server
- [React](https://reactjs.org/) & [TypeScript](https://www.typescriptlang.org/) – UI library with type safety
- [Tailwind CSS](https://tailwindcss.com/) – Utility‑first CSS framework
- [Lucide‑React](https://lucide.dev/) – Icon library

## Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development

Start the development server with live reload:

```bash
npm run dev
```

### Production Build

Build the production assets:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Linting

```bash
npm run lint
```

## License

All rights reserved.
