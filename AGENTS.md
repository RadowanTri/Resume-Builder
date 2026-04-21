# AI Agent Instructions

This is a React + Vite resume builder application with Tailwind CSS v4.

## Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |

## Project Structure

```
src/
├── App.jsx              # Main router configuration
├── main.jsx             # Entry point with BrowserRouter
├── index.css            # Global styles (Tailwind)
├── pages/               # Route pages
│   ├── Home.jsx         # Landing page
│   ├── Dashboard.jsx    # App dashboard
│   ├── ResumeBuilder.jsx # Resume editor
│   ├── Preview.jsx      # Resume preview
│   └── Login.jsx        # Authentication
├── Components/          # Reusable components
│   ├── Navbar.jsx
│   ├── SectionTItle.jsx
│   ├── Home/            # Home page components
│   └── About/           # About section components
└── assets/              # Templates and assets
    └── templates/       # Resume templates
```

## Key Conventions

- **Routing**: Uses React Router v7 with `BrowserRouter` basename `/Resume-Builder/`
- **Styling**: Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin)
- **Components**: Functional components with hooks
- **Naming**: PascalCase for components, camelCase for functions/variables

## Important Notes

- The app uses a GitHub Pages deployment with base path `/Resume-Builder/`
- ESLint rules: `no-unused-vars` errors for variables not starting with uppercase
- React 19 with the new JSX transform