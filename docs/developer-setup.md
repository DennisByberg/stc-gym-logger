# 🛠️ Developer Setup

This guide explains how to set up the project locally and run the mobile app during development.

## ✅ Install Required Tools

Install these tools before working on the project:

```text
Git
GitHub CLI
Node.js + npm
Ionic CLI
.NET SDK
Docker Desktop / Docker in WSL
```

The Ionic CLI is used to run and manage the mobile app. Install it globally if it is not already installed:

```bash
npm install -g @ionic/cli
```

## 📦 Clone the Repository

Clone the project from GitHub and move into the repository folder:

```bash
gh repo clone DennisByberg/stc-gym-logger
cd stc-gym-logger
```

## 📥 Install Frontend Dependencies

The mobile app lives in `apps/mobile`. Install its npm dependencies before running it:

```bash
cd apps/mobile
npm install
```

## 📱 Run the Mobile App

Start the Ionic development server from `apps/mobile`:

```bash
ionic serve
```

The app should now be available at:

```text
http://localhost:8100
```

Stop the development server with `Ctrl+C`.

## 📝 Note

_This setup guide will be updated as more parts of the project are added..._
