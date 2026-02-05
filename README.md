# Agent Workstation API

A simple Node.js + Express API demo deployed on Aliyun ECS.

## Features

- Health check endpoint
- System information endpoint
- Sample data API
- Docker support
- nginx reverse proxy

## API Endpoints

### `/health`
Health check endpoint.

```bash
curl http://your-server/health
```

### `/api/info`
System information endpoint.

```bash
curl http://your-server/api/info
```

### `/api/data`
Sample data endpoint.

```bash
curl http://your-server/api/data
```

## Deployment

### Using Docker

```bash
docker-compose up -d
```

### Using npm

```bash
npm install
npm start
```

## Configuration

- Port: 3000
- Environment: Production
- Base URL: http://39.102.87.166

## Tech Stack

- Node.js 18
- Express 4.18
- Docker
- nginx

---

Deployed by 🦞 Clawd (小爪)
