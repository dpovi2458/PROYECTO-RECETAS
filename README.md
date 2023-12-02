# Proyecto Recetas

This is a simple project that showcases different recipes. The project is structured in a way that separates the recipes and utility functions from the main application logic.

## Installation

To install the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the project dependencies.

## Usage

To run the project, use the command `npm start` in the terminal. This will start the server and the application will be accessible at `localhost:3000`.

The application displays different recipes. The recipes are defined in the `src/recetas` directory. Each recipe is defined in its own file and they are all exported from the `src/recetas/index.js` file.

The `src/utils/index.js` file contains utility functions that are used across the application.

The `public` directory contains the HTML, CSS, and client-side JavaScript files. The `public/index.html` file is the main HTML file that is served to the client. The `public/css/styles.css` file contains the CSS styles for the application. The `public/js/main.js` file contains the client-side JavaScript that interacts with the HTML and CSS.

## Contributing

Contributions are welcome. Please make sure to update tests as appropriate.

## License

MIT