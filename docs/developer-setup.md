# 🛠️ Developer Setup

Minimal local setup for STC Gym Logger.

## ✅ Install Required Tools

```text
Git
GitHub CLI
Node.js + npm
Ionic CLI
.NET SDK
Docker Desktop / Docker in WSL
DataGrip, optional for database browsing
```

```bash
npm install -g @ionic/cli
```

Installs the Ionic CLI used by `apps/mobile`.

## 📦 Clone the Repository

```bash
gh repo clone DennisByberg/stc-gym-logger
cd stc-gym-logger
```

Clones the repository and enters the project root.

## 📥 Install Frontend Dependencies

```bash
cd apps/mobile
npm install
```

Installs dependencies for the Ionic/Angular app.

## 🗄️ Start Local Backend and PostgreSQL

```bash
cd ../..
docker compose up -d
```

Starts the ASP.NET Core API and local PostgreSQL database from `docker-compose.yml`.

```text
API: http://localhost:5173
Health: http://localhost:5173/api/health
```

The API runs EF Core migrations automatically when started through Docker Compose.

```text
Host: localhost
Port: 5432
Database: stc_gym_logger
User: gymuser
Password: gympass
```

DataGrip connection values.

```bash
docker compose down
```

Stops the API and PostgreSQL without deleting data.

```bash
docker compose down -v
```

Stops the API and PostgreSQL and deletes the local database volume.

## 🧩 Run the API

```bash
cd apps/api
dotnet run
```

Optional manual API run for local debugging outside Docker.

```text
http://localhost:5173/api/health
```

Health check endpoint.

```bash
dotnet ef database update
```

Applies EF Core migrations to the local PostgreSQL database.

## 📱 Run the Mobile App

```bash
cd apps/mobile
ionic serve
```

Starts the Ionic app at `http://localhost:8100`.
