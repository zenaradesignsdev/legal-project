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

You can deploy this project using any static hosting service that supports Vite/React applications, such as Vercel, Netlify, or GitHub Pages.

### Routing Configuration

This project uses client-side routing (React Router). To ensure direct navigation to routes (e.g., `/services`, `/about`) works correctly, the following configuration files are included:

- **Netlify**: `public/_redirects` - Automatically handles SPA routing
- **Vercel**: `vercel.json` - Configured for SPA routing
- **Apache**: `.htaccess` - Included for Apache servers
- **Nginx**: `nginx.conf.example` - Example configuration provided

These files ensure that all routes serve `index.html`, allowing React Router to handle the routing client-side.
