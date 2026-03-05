# Legal Project

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Vercel (Recommended)

This project is optimized for Vercel deployment:

1. Connect your repository to Vercel
2. Vercel will automatically detect the Vite framework
3. The `vercel.json` configuration handles:
   - SPA routing (all routes serve `index.html`)
   - Build optimizations
   - Security headers
   - Asset caching (1 year for static assets)

**Deploy command:**
```sh
vercel
```

### Other Platforms

You can also deploy to:
- **Netlify**: Uses `public/_redirects` for SPA routing
- **Apache**: Uses `.htaccess` for routing
- **Nginx**: See `nginx.conf.example` for configuration

### Routing Configuration

This project uses client-side routing (React Router). The configuration files ensure that direct navigation to routes (e.g., `/services`, `/about`) works correctly by serving `index.html` for all routes, allowing React Router to handle routing client-side.
