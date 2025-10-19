#  Vue.js Feature-Based Architecture Project

This project is a frontend test built using **Vue 3**, **Vite**, **TailwindCSS**, and **Vue Router**, following a **feature-based architecture** approach for better scalability and maintainability.

---

##  Tech Stack

- **Vue 3** — Progressive JavaScript framework  
- **Vite** — Next generation frontend tooling  
- **Tailwind CSS** — Utility-first CSS framework  
- **Vue Router** — Routing solution for Vue.js  
- **TypeScript** — Static type checking for safer development  

---

##  Project Architecture

The project follows a **feature-based structure**, meaning each feature has its own isolated folder containing all relevant files (components, views, types, routes, etc.).  
This makes it easy to scale and maintain.

###  Folder Structure
```
src/
├─ features/
│ ├─ core/         # Application core: layout, constants, router, styles, utils
│ ├─ countries/    # Countries feature
│ │ ├─ api/        # API calls related to this feature
│ │ ├─ components/ # Feature-specific UI components
│ │ ├─ hooks/      # Composables and logic hooks
│ │ ├─ routes/     # Route definitions for this feature
│ │ ├─ types/      # TypeScript types and interfaces
│ │ └─ views/      # Views or pages for this feature
│ └─ theme/        # Theming feature
│
├─ App.vue         # Root component
├─ main.ts         # Application entry point
└─ ...
```

---

## Setup & Development

Clone the repository and install dependencies:

```bash
npm install
```
Run the development server:

```
npm run dev
```

The app will be available at http://localhost:5173


## Possible Improvements

- Add global state management (Pinia)
- Implement API data fetching with Axios
- Add unit and E2E testing (Vitest / Cypress)
- Improve theme customization