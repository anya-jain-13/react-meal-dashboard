# Meal Analytics Dashboard

## Project Overview

Meal Analytics Dashboard is a web application that allows users to search for meals, filter meals by category and cuisine, and view interactive charts.

The application uses TheMealDB API to retrieve meal information.

## Features

- Search meals by name.
- Filter meals by category.
- Filter meals by cuisine.
- Apply category and cuisine filters together.
- Reset filters.
- Display meal images and names.
- Show bar charts and pie charts.
- Display a message when no meals are found.
- Handle API errors with a retry option.

## Technologies Used

- React
- JavaScript
- Vite
- HTML
- CSS
- Recharts
- TheMealDB API
- npm

## API Used

The project uses TheMealDB API to retrieve meal information, categories, cuisines, and meal details.

API website: [TheMealDB](https://www.themealdb.com/api.php)

## Installation and Setup

### Prerequisites

Install Node.js and npm before running the project.

### 1. Open the Project Folder

Open the `meal-dashboard` folder in your terminal.

### 2. Install Dependencies

Run the following command:

```bash
npm install
```

### 3. Start the Development Server

Run:

```bash
npm run dev
```

Open the local URL displayed in the terminal to view the dashboard.

## Production Build

To create a production build, run:

```bash
npm run build
```

Vite generates the production files in the `dist` directory.

## Project Structure

```text
meal-dashboard/
├── public/
├── screenshots/
│   └── dashboard-overview.png
├── src/
│   ├── components/
│   │   └── MealChart.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Testing

The following features were tested:

- Browsing meals from multiple categories.
- Searching meals by name.
- Filtering meals by category.
- Filtering meals by cuisine.
- Applying category and cuisine filters together.
- Resetting filters.
- Displaying bar and pie charts.
- Displaying meal images and names.
- Handling empty search results.
- Building the application successfully using `npm run build`.

## Future Improvements

- Add pagination or a load-more feature.
- Display detailed meal ingredients and cooking instructions.
- Improve loading indicators and image error handling.
- Deploy the application online.

## Credits

- **Meal data API:** [TheMealDB](https://www.themealdb.com/api.php)
- **Charting library:** [Recharts](https://recharts.org/)
- **Frontend framework:** [React](https://react.dev/)
- **Build tool:** [Vite](https://vite.dev/)

Meal information and images are provided by TheMealDB. This project was developed for educational purposes.