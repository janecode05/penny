# Penny Wallet

Penny is an Angular wallet application with a Node.js, Express, and PostgreSQL backend.

## Prerequisites

Install the following:

- Node.js 20 or newer
- npm
- PostgreSQL
- Angular CLI

```bash
npm install -g @angular/cli
node --version
npm --version
ng version
```

## Project Structure

```text
wallet/
├── src/                 # Angular client
├── public/              # Public client assets
├── server/
│   ├── pennyserver/     # Express server
│   ├── dbcred/          # PostgreSQL connection
│   └── package.json
├── angular.json
└── package.json
```

## Client Setup

From the project root:

```bash
npm install
```

Start the Angular development server:

```bash
npm start
```

Or use:

```bash
ng serve
```

Open:

```text
http://localhost:4200
```

### Client Commands

```bash
# Start development server
npm start

# Generate a component
ng generate component components/example

# Generate a service
ng generate service services/example

# Run unit tests
npm test

# Development build
npm run build -- --configuration development

# Production build
npm run build

# Watch for development changes
npm run watch
```

## Server Setup

Open a terminal and enter the server directory:

```bash
cd server
npm install
```

Create the PostgreSQL database:

```sql
CREATE DATABASE penny_db;
```

Connect to the database:

```sql
\c penny_db
```

The server connection is configured in:

```text
server/dbcred/db.js
```

Update the PostgreSQL host, port, username, password, and database name to match your local PostgreSQL configuration.

> Do not commit real database passwords or other secrets to Git.

### Start the Server

```bash
cd server
node pennyserver/penny.js
```

Or start it with Nodemon:

```bash
npx nodemon pennyserver/penny.js
```

The server runs at:

```text
http://localhost:3000
```

Check it by opening:

```text
http://localhost:3000
```

### Server Commands

```bash
cd server

# Install server dependencies
npm install

# Start the server
node pennyserver/penny.js

# Start with automatic restart
npx nodemon pennyserver/penny.js

# Install a server package
npm install package-name

# Install a development package
npm install --save-dev package-name
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Server health check |
| POST | `/register` | Register a user |
| POST | `/login` | Authenticate a user |

```

## Run the Full Application

Terminal 1 — PostgreSQL:

```bash
# Start PostgreSQL using Windows Services or pg_ctl
pg_isready
```

Terminal 2 — Backend:

```bash
cd server
node pennyserver/penny.js
```

Terminal 3 — Frontend:

```bash
npm start
```

## Git Setup

Initialize the repository:

```bash
git init
```

Add all files:

```bash
git add .
```

Create the first commit:

```bash
git commit -m "Initial commit"
```

Set the main branch:

```bash
git branch -M main
```

Add the remote repository:

```bash
git remote add origin https://github.com/USERNAME/penny.git
```

Push to GitHub:

```bash
git push -u origin main
```

### Daily Git Commands

```bash
# Check repository status
git status

# Add specific files
git add README.md
git add src
git add server

# Add all changes
git add .

# Commit changes
git commit -m "Describe the change"

# Push changes
git push

# Pull remote changes
git pull

# View branches
git branch

# Create and switch to a branch
git checkout -b feature-name

# Switch branches
git checkout main
```

## Important Files to Ignore

The following should not normally be committed:

```text
node_modules/
dist/
.angular/
server/node_modules/
server/dbcred/penny.env
*.log
```

If environment files contain secrets, add them to `.gitignore`:

```gitignore
server/dbcred/penny.env
.env
.env.*
server/node_modules/
node_modules/
dist/
.angular/
```