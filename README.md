# Nino's Portfolio

A modern portfolio website built with Next.js 16, showcasing projects, an about me page and an admin panel.

## Features

- **Projects Showcase** - Display projects in a grid layout with images and descriptions
- **About Page** - Personal information with skills and some about me text.
- **Admin Panel** - UI for managing projects (create, edit, delete)
- **Responsive Design** - Mobile-friendly interface that works across all devices

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Styled Components
- **Form Handling**: React Hook Form + Yup validation
- **Icons**: Heroicons
- **Testing**: Jest + React Testing Library

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Clone the repository

```bash
git clone git@github.com:ninoschelcher/framna-portfolio.git 
cd framna-portfolio/web
```

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

## Next.js Features & Rendering Strategy

### Static Site Generation (SSG)
The portfolio and the About Me page are statically generated at build time. Since the content does not change frequently, SSG provides faster load times, improved performance, and better SEO.

### Dynamic Rendering for the Admin Panel (SSR)

The admin page dynamically using Next.js Server Components and server-side data fetching. Unlike the portfolio pages (which are statically generated), the admin page always fetches the latest project data on each request.

- **Fresh data on every visit** – When creating, updating, or deleting projects, the ui reflects those changes immediately without relying on build-time content or long cache windows.
- **Safe handling of privileged operations** – Project mutations run on the server, keeping sensitive logic away from the client.
- **Better consistency with cache invalidation** – The admin page requests Next.js’ caching APIs (revalidation) so that changes made in the admin automatically invalidate cached project requests. On the next request, projects are rendered up to date.

### Performance Optimizations
- Optimized image handling using Next.js Image component
- Font optimization using `next/font`
- Efficient routing using the App Router

## Testing

The project includes a small but focused test suite using **Jest** and **React Testing Library**:

- **Component tests**
    - `__tests__/components/ProjectOverview.test.tsx`
        - Renders the `ProjectOverview` component with mock project data.
        - Asserts that project titles and cards are rendered correctly.

- **Fetch tests**
    - `__tests__/lib/projectActions.test.ts`
        - `getProjects` – verifies that all projects are fetched from the correct API URL and that a failed response throws an error.
        - `createProject` – checks that a new project is sent with the correct HTTP method and body, and that `revalidatePath('/', 'layout)` is called to invalidate cached project data.
        - `updateProject` – checks that updating a project uses the correct URL and payload and triggers `revalidatePath('/', 'layout)`.
        - `deleteProject` – checks that deletion calls the correct endpoint and also triggers `revalidatePath('/', 'layout)`.

To run the tests:

```bash
pnpm test 
```

## License

MIT
