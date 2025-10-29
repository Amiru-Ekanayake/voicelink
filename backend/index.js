const fs = require('fs').promises;
const path = require('path');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
});

const DATA_FILE = path.resolve(__dirname, 'notifications.json');
let notifications = [];

async function loadNotifications() {
  try {
    const txt = await fs.readFile(DATA_FILE, 'utf8');
    notifications = JSON.parse(txt || '[]');
    console.log('Loaded', notifications.length, 'notifications');
  } catch (err) {
    if (err.code === 'ENOENT') {
      notifications = [];
      await saveNotifications();
    } else {
      console.error('Failed to load notifications:', err);
    }
  }
}

async function saveNotifications() {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(notifications, null, 2), 'utf8');
  } catch (err) {
    console.error('Failed to save notifications:', err);
  }
}

app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Get all notifications
app.get('/api/notifications', (req, res) => {
  res.json(notifications);
});

// Create a new notification
app.post('/api/notifications', async (req, res) => {
  const { title, description, status = 'Pending' } = req.body || {};
  if (!title || !description) {
    return res.status(400).json({ error: 'title and description are required' });
  }

  const id = Date.now().toString(36) + Math.floor(Math.random() * 1000).toString(36);
  const newNotification = { id, title, description, status, createdAt: new Date().toISOString() };
  notifications.unshift(newNotification);
  await saveNotifications();

  // emit to connected clients
  io.emit('new_notification', newNotification);

  res.status(201).json(newNotification);
});

// Simple clear endpoint (for development)
app.delete('/api/notifications', async (req, res) => {
  notifications = [];
  await saveNotifications();
  io.emit('notifications_cleared');
  res.status(204).end();
});

io.on('connection', (socket) => {
  console.log('Client connected', socket.id);
  socket.emit('init', notifications);

  socket.on('disconnect', () => {
    console.log('Client disconnected', socket.id);
  });
});

const PORT = process.env.PORT || 4000;
loadNotifications().then(() => {
  server.listen(PORT, () => {
    console.log(`Notify backend listening on http://localhost:${PORT}`);
  });
});
