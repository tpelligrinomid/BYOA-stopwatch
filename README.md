# Stopwatch

A simple stopwatch built with HTML, CSS, and JavaScript.

## Features

- Start, stop, and reset the stopwatch.
- Display the elapsed time in seconds.
- Responsive design for mobile and desktop.

## Branch Structure

- `main` - Production branch (live version)
- `dev` - Development/staging branch for testing
- Feature branches - Individual features/fixes

## Development Workflow

1. Create a feature branch from `dev`:
   ```bash
   git checkout dev
   git checkout -b feature-name
   ```

2. Make changes in your feature branch:
   ```bash
   # Make your code changes
   git add .
   git commit -m "Description of changes"
   ```

3. Merge feature branch into dev:
   ```bash
   # Switch back to dev branch
   git checkout dev
   
   # Get the latest version of dev branch (in case others made changes)
   git pull origin dev
   
   # Merge your feature branch into dev
   git merge feature-name
   
   # Push your merged changes back to dev
   git push origin dev
   ```

4. Once tested in `dev`, merge to `main`:
   ```bash
   git checkout main
   git merge dev
   ```

## Development Options

### 1. GitHub Desktop (Recommended for Beginners)
- Download GitHub Desktop from: https://desktop.github.com/
- Provides a visual interface for:
  - Creating branches
  - Switching between branches
  - Committing changes
  - Merging branches
  - Pushing/pulling changes

### 2. GitHub Web Interface
- Can perform merges directly on GitHub.com
- Create pull requests
- Review changes visually
- Merge branches with a few clicks

### 3. Terminal Commands
- For advanced users
- Provides more control
- See workflow steps above for commands

## Development Notes

### Building Commercial Applications
You can absolutely build professional, commercial applications using visual tools like:
- GitHub Desktop for version control
- Visual Studio Code for coding
- Database management GUIs
- Deployment platforms with visual interfaces (Vercel, Netlify, etc.)

The terminal is just one tool among many. What matters is:
- Code quality
- User experience
- Solving real problems
- Reliable hosting
- Good documentation

Many successful SaaS products are built using primarily visual tools. The terminal is optional!
