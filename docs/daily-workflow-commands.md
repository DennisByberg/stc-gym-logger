# 🧾 Daily Workflow Commands

Recurring commands used while developing the project.

## 📱 Ionic / Angular

```bash
cd apps/mobile
ionic serve
```

Starts the mobile frontend at `http://localhost:8100`.

## 🧩 Backend and Database

```bash
docker compose up -d
```

Starts the API and PostgreSQL.

```bash
curl http://localhost:5173/api/health
```

Checks that the API is responding.

```bash
docker compose down
```

Stops the API and PostgreSQL without deleting data.

## 🧩 ASP.NET Core API

```bash
cd apps/api
dotnet run
```

Optional manual API run for local debugging outside Docker.

```bash
dotnet ef migrations add <Name>
```

Creates a new EF Core migration.

```bash
dotnet ef database update
```

Applies EF Core migrations to PostgreSQL.

## 🗄️ PostgreSQL

```bash
docker ps
```

Lists running Docker containers.
