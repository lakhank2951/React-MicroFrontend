# Microfrontend Application with Module Federation

This project consists of three applications: **Container**, **Articles**, and **Courses**. The main application, **Container**, integrates **Articles** and **Courses** using Module Federation. Each application can be run independently, but the Container app serves as the main entry point.

## Applications

- **Container (Main Application)**: Serves as the host application, running on port `3000`. This app integrates the **Articles** and **Courses** apps.
- **Articles**: A microfrontend application providing articles functionality.
- **Courses**: A microfrontend application providing courses functionality.

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

## Running the Applications

1. **Container App (Main Application)**

   - Navigate to the `container` directory.
   - Install dependencies (if not already installed):
     ```bash
     npm install
     ```
   - Start the application:
     ```bash
     npm run start
     ```
   - The **Container** app will run on [http://localhost:3000](http://localhost:3000).

2. **Articles App**

   - Navigate to the `articles` directory.
   - Install dependencies (if not already installed):
     ```bash
     npm install
     ```
   - Start the application:
     ```bash
     npm run start
     ```

3. **Courses App**

   - Navigate to the `courses` directory.
   - Install dependencies (if not already installed):
     ```bash
     npm install
     ```
   - Start the application:
     ```bash
     npm run start
     ```

## Module Federation

The **Container** app uses **Webpack Module Federation** to integrate the **Articles** and **Courses** apps. This allows each microfrontend to be independently deployed while being consumed by the Container app.

### Important Note

Make sure each application is running in parallel for the Container app to access and render the microfrontends correctly.

## Project Structure

- `container/`: Main application that hosts the microfrontends.
- `articles/`: Microfrontend for articles.
- `courses/`: Microfrontend for courses.