# REACT-structure-template
For bigger projects

## The Technology Stack
JS framework: React;
Build tool: Webpack;
UI style framework: Not included, can be chosen by demand;
Router: react-router-dom;
Style sheet type: Scss.

## Project Structure
- react-app-template
  - -public
  > A folder we do not recommend to use, just keep it for a specific need of static resources.

  - -src
    - assets
      - images
      - styles
      All scss files location.
    - components
      - tests
      Unit tests folder, tests can be added later according to the schedule requirement.
      - common
      All the common components for the application.
      - utils
      Tools js files for helping development.
    - router
      Application router configurations.
    - views
      All page views files.
      - App.vue
      Application entry vue file.
    - index.tsx
    Application entry file.
    - webpack
    Application build tool customized configuration file.
      - webpack.common.js
      common configuration
      - webpack.dev.js
      dev environment configuration
      - webpack.prod.js
      production environment configuration
    - .env.development
    development environment variables
    -  .eslintrc.cjs
    eslint configurations
    - package.json
    Application packages and version management file.
  
Recommended IDE Setup
VSCode + Volar (and disable Vetur) + TypeScript Vue Plugin (Volar).

Customize configuration
See Webpack5 Configuration Reference.

Project Setup
npm install
Compile and Hot-Reload for Development
npm run start
Compile and Minify for Production
npm run build
Run Unit Tests
npm run test
