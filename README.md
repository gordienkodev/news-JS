# news-JS

Run application:

-   Copy `.env.example` to `.env` and set variables with your data
-   Run command in your terminal `npm start`

The application source in `src/` uses TypeScript with strict type checking. Webpack configuration files use JavaScript.

Checks and production build:

-   `npm run typecheck` checks TypeScript without emitting files.
-   `npm run lint` checks JavaScript and TypeScript.
-   `npm run build` creates the production bundle in `dist/`.
-   `npm run build -- --env envFile=.env.example` checks the build using example configuration without reading `.env`. A working API key is required to load news at runtime.
