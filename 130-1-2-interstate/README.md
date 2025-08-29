# 130 1/2 INTERSTATE Website

## Overview
This project is a ReactJS-based website for the business named "130 1/2 INTERSTATE". It serves as an online presence to showcase the business, its services, and provide contact information to customers.

## Project Structure
The project is organized into several directories and files, each serving a specific purpose:

### Public Directory
- **public/index.html**: The main HTML file that serves as the entry point for the React application. It includes a root div where the React app will be rendered.

### Source Directory (src)
- **src/components**: Contains all the React components used in the application.
  - **Header.jsx**: Represents the header of the website, including navigation links and branding.
  - **Footer.jsx**: Represents the footer of the website, containing copyright information and links.
  - **Home.jsx**: The homepage component that displays introductory content and links to other sections.
  - **About.jsx**: Provides information about the business, its history, and values.
  - **Services.jsx**: Outlines the services offered by the business with descriptions.
  - **Contact.jsx**: Contains a contact form or contact information for user inquiries.
  - **NotFound.jsx**: Displays a message when a user navigates to a non-existent route.

- **src/modules**: Contains utility modules for the application.
  - **api.js**: Functions for making API calls to the backend or external services.
  - **utils.js**: Reusable utility functions for formatting and validation.

- **src/App.jsx**: The main application component that sets up routing and renders components based on the current route.

- **src/index.js**: The entry point for the React application, rendering the App component into the root div of the index.html file.

- **src/routes.jsx**: Defines the application routes using a routing library, mapping paths to components.

- **src/styles**: Contains styles for the application.
  - **main.css**: The main stylesheet for layout, typography, and component-specific styles.

### Root Directory
- **package.json**: Configuration file for npm, listing dependencies, scripts, and project metadata.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **README.md**: Documentation for the project, including setup instructions and usage.

## Getting Started
To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd 130-1-2-interstate
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.