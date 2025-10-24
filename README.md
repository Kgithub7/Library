# Library

Library is a Single-Page Application built with React and Vite that functions as a feature-rich online bookstore. It enables users to browse a curated collection of books, view detailed information, and manage a shopping cart. The project is structured with a clear separation of components and pages, featuring reusable UI elements for a consistent user experience, and it is styled for a fully responsive layout.

## Features

* **Fully Responsive Layout:** The application is styled to ensure a seamless and consistent user experience across all devices.
* **Homepage:** A welcoming landing page with curated sections for "Featured Books" and "Discounted Books".
* **All Books Page:** A dedicated page where users can browse the entire collection of available books. It includes robust sorting capabilities, allowing users to organize the listings by price (low to high and high to low) and by rating.
* **Detailed Book Information:** Each book has a dedicated page that provides a placeholder summary and a list of "Recommended Books" to encourage further browsing.
* **Functional Shopping Cart:** The application features a complete shopping cart system where users can add books, change the quantity of each item, and remove books entirely, with a real-time summary of the total cost.
* **Client-Side Routing:** Utilizes `react-router` to create a smooth single-page application experience, allowing for seamless navigation between pages without a full page reload.
* **Iconography:** Employs Font Awesome React components for clean and scalable vector icons throughout the application.
* **Code Quality:** ESLint is configured to enforce a consistent code style and identify potential errors, ensuring the codebase is clean and maintainable.

## Tech stack

-   React
-   Vite
-   Font Awesome
-   React Router
-   ESLint

## Project structure

-   `index.html` — Application HTML shell
-   `src/` — Application source (components, pages, assets)
-   `src/main.jsx` — Application JavaScript entry point
-   `docs/`— Built static site files
-   `package.json` — Scripts and dependencies

## Getting started

Requirements: Node.js 16+ and npm

1.  Clone the repository.

2.  Install dependencies with `npm install`.

3.  Run the development server with `npm run dev`.

## License

This project is licensed under the MIT License.