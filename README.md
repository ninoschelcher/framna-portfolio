# Nino's Portfolio

A modern portfolio website built with Next.js 16, showcasing projects and professional skills with a full-featured admin panel.

## Features

- **Projects Showcase** - Display projects in a responsive grid layout with images and descriptions
- **About Page** - Personal information with skills organized by categories (Frontend, Tools & Workflows, CMS)
- **Admin Panel** - Full CRUD operations for managing projects (create, edit, delete)
- **Responsive Design** - Mobile-friendly interface that works across all devices

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16 with App Router
- **Language**: TypeScript
- **Styling**: Styled Components
- **Form Handling**: React Hook Form + Yup validation
- **Icons**: Heroicons
- **Testing**: Jest + React Testing Library

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
pnpm build
pnpm start
```

## Available Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `pnpm dev`        | Start development server       |
| `pnpm build`      | Build for production           |
| `pnpm start`      | Start production server        |
| `pnpm lint`       | Run ESLint                     |
| `pnpm test`       | Run tests                      |
| `pnpm test:watch` | Run tests in watch mode        |

## API

The project uses [MockAPI](https://mockapi.io/) as a backend service. The API functions are located in `lib/data/projects.ts`:

- `getProjects()` - Fetch all projects
- `getProject(id)` - Fetch a single project
- `createProject(data)` - Create a new project
- `updateProject(id, data)` - Update an existing project
- `deleteProject(id)` - Delete a project

## Configuration

## License

MIT
