# VEROSA Beauty Frontend

## Overview

This repository hosts the **VEROSA Beauty** web frontend, built with React and Vite. It provides the user interface for browsing beauty services, managing profiles, viewing catalogs, and interacting with support features via the ASP.NET Core backend API.

## Table of Contents

* [Project Structure](#project-structure)
* [Tech Stack](#tech-stack)
* [Prerequisites](#prerequisites)
* [Setup Instructions](#setup-instructions)
* [Environment Configuration](#environment-configuration)
* [Available Scripts](#available-scripts)
* [Development Guidelines](#development-guidelines)
* [Styling & Theming](#styling--theming)
* [Contributing](#contributing)
* [License](#license)

## Project Structure

```bash
VEROSA-FE-PROJECT/
├── public/             # Static assets (favicon, index.html)
├── src/
│   ├── assets/         # Images, icons, fonts
│   ├── components/     # Reusable React components
│   ├── pages/          # Page-level components (routes)
│   ├── layouts/        # Layout wrappers (Nav, Footer)
│   ├── hooks/          # Custom React hooks
│   ├── services/       # API client modules
│   ├── store/          # State management (Context or Redux)
│   ├── styles/         # Global styles & variables
│   ├── utils/          # Utility functions/helpers
│   └── main.jsx        # App entry point
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies & scripts
```

## Tech Stack

* **Framework:** React 18
* **Bundler:** Vite
* **Language:** TypeScript (optional JS fallback)
* **State Management:** Context API / Redux Toolkit
* **Routing:** React Router v6
* **HTTP Client:** Axios or Fetch API
* **Styling:** CSS Modules / Tailwind CSS / Styled Components
* **Linting & Formatting:** ESLint, Prettier

## Prerequisites

* **Node.js** v16 or later
* **npm** v8 or later (or **yarn**)

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <frontend-repo-url>
   cd VEROSA-FE-PROJECT
   ```
2. Install dependencies:

   ```bash
   npm install
   # or yarn install
   ```
3. Start the development server:

   ```bash
   npm run dev
   ```
4. Open your browser at `http://localhost:5173` (default Vite port).

## Environment Configuration

Create a `.env` file at the project root with the following variables:

```bash
VITE_BACKEND_URL=https://localhost:7006
```

## Available Scripts

* `npm run dev` — Start dev server with hot reload.
* `npm run build` — Bundle for production.
* `npm run preview` — Preview production build locally.
* `npm run lint` — Run ESLint on source files.
* `npm run format` — Run Prettier to format code.

## Development Guidelines

* **Code Style:** Follow ESLint and Prettier rules.
* **Naming Conventions:** Use PascalCase for components and camelCase for variables.
* **Folder Organization:** Keep components and pages modular.
* **Error Handling:** Gracefully handle API errors with user feedback.
* **Testing:** Write unit tests with Jest and React Testing Library.
* **Pull Requests:** Ensure passing checks before merging.

## Styling & Theming

* Leverage CSS variables or Tailwind configuration for theme customization.
* Create reusable UI components with consistent spacing and typography.
* Use design tokens for colors, font sizes, and breakpoints.

## Contributing

1. Fork this repository.
2. Create a feature branch: `git checkout -b feature/YourFeature`.
3. Commit changes: `git commit -m "Add YourFeature"`.
4. Push branch: `git push origin feature/YourFeature`.
5. Open a pull request.
