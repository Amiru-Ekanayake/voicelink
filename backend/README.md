# Notify Backend

This is a minimal backend for the Notify frontend. It provides a simple REST API and Socket.IO realtime events.

Quick start

1. cd backend
2. npm install
3. npm run dev   # requires nodemon (dev)

API

- GET /api/notifications -> returns array of notifications
- POST /api/notifications -> create notification, body: { title, description, status? }
- DELETE /api/notifications -> clear (development only)

Socket.IO

- Connect to the server and listen for `new_notification` events. On connect, the server sends `init` with current notifications.

Environment

Copy `.env.example` to `.env` to change PORT or CORS_ORIGIN.
