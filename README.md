# React + Node.js Full Stack Application

This is a full-stack application built with React.js (Vite) frontend and Node.js/Express backend.

## Project Structure

- `/client` - React frontend application (Vite)
- `/server` - Node.js/Express backend server
- `/server/public` - Production build output directory

## Prerequisites

- Node.js (v14 or higher)
- pnpm (v7 or higher)

## Setup Instructions

1. Install dependencies for all workspaces:
```bash
pnpm run install:all
```

2. Create a `.env` file in the server directory with the following content:
```
PORT=5000
NODE_ENV=development
```

## Running the Application

### Development Mode

To run both frontend and backend in development mode:
```bash
pnpm run dev
```

This will start:
- Frontend on http://localhost:5173 (Vite's default port)
- Backend on http://localhost:5000

### Running Separately

To run the backend server only:
```bash
pnpm run server
```

To run the frontend only:
```bash
pnpm run client
```

## Production Build

1. Build the React frontend:
```bash
pnpm run build
```

2. Start the production server:
```bash
pnpm start
```

The application will be served from the backend server on port 5000. 