# Best Report new Web app

## Project Structure

This project uses the following folder structure:

### assets

Store all static assets here, such as:
- Images
- Fonts
- Global CSS files
- Other media files (videos, audio, etc.)

### components

Place all reusable React components in this folder. This includes:
- UI components (buttons, inputs, modals, etc.)
- Layout components (headers, footers, sidebars)
- Complex components that are used across multiple pages

### lib

This folder is for utility functions, custom hooks, and other helper code:
- API service functions
- Custom React hooks
- Helper functions and utilities
- Constants and configuration files

### pages

This folder contains the main page components of your application, organized by route : home, about ...
Each page folder can have its own components and lib folders for page-specific code that shouldn't be shared across the application.

> Remember to use the appropriate alias when importing from these folders in your code.

