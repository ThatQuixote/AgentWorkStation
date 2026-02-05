const express = require('express');
const cors = require('cors');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Agent Workstation API is running',
    timestamp: new Date().toISOString()
  });
});

// API info endpoint
app.get('/api/info', (req, res) => {
  res.json({
    name: 'Agent Workstation API',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'production',
    server: {
      hostname: os.hostname(),
      platform: os.platform(),
      release: os.release(),
      cpus: os.cpus().length,
      totalmem: `${Math.round(os.totalmem() / 1024 / 1024)} MB`,
      uptime: `${Math.round(os.uptime() / 60)} minutes`
    }
  });
});

// Sample data endpoint
app.get('/api/data', (req, res) => {
  res.json({
    message: 'Welcome to Agent Workstation API!',
    data: [
      { id: 1, name: 'Feature A', status: 'active' },
      { id: 2, name: 'Feature B', status: 'pending' },
      { id: 3, name: 'Feature C', status: 'completed' }
    ],
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Agent Workstation API',
    endpoints: {
      health: '/health',
      info: '/api/info',
      data: '/api/data'
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested endpoint does not exist',
    path: req.path
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`API info: http://localhost:${PORT}/api/info`);
});
