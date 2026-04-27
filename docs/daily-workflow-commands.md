# 🧾 Daily Workflow Commands

Recurring commands used while developing the project.

## 📱 Ionic / Angular

```bash
cd apps/mobile
ionic serve
```

Starts the mobile frontend at `http://localhost:8100`.

## 🧩 ASP.NET Core API

```bash
cd apps/api
dotnet run
```

Starts the API at `http://localhost:5173`.

```bash
curl http://localhost:5173/health
```

Checks that the API is responding.

## 🗄️ PostgreSQL

```bash
docker compose up -d
```

Starts the local PostgreSQL database.

```bash
docker compose down
```

Stops the local PostgreSQL database without deleting data.

```bash
docker ps
```

Lists running Docker containers.
