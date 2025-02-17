# URL Shortener

A simple **URL Shortener** built using:
- **Frontend**: [Svelte](https://svelte.dev/) + [Vite](https://vitejs.dev/)
- **Backend**: [Go Fiber](https://gofiber.io/)
- **Database**: [Redis](https://redis.io/)
- **Containerized**: Runs via **Docker Compose**

## Features
✅ Shorten long URLs with a custom alias (optional)
✅ Fast and lightweight using Redis for storage
✅ Simple API with rate-limiting
✅ Fully containerized for easy deployment

---

## 🛠️ Setup & Installation
### **Prerequisites**
Ensure you have **Docker** and **Docker Compose** installed.

### **Running the Application**
To build and run the application, execute:
```bash
docker-compose up -d
```
This will:
- Build and start the **frontend**, **backend**, and **Redis** containers.
- Expose the frontend on `http://localhost:5173`.
- Expose the backend on `http://localhost:3000`.

To stop the application:
```bash
docker-compose down
```

---

## 📂 Project Structure
```
├── frontend/       # Svelte + Vite frontend
├── backend/        # Go Fiber backend
├── docker-compose.yml  # Docker Compose config
├── Dockerfile      # Frontend Dockerfile
|── db              # Location Of Dockerfile Configuration For Redis
├── backend.Dockerfile # Backend Dockerfile
└── README.md       # This file
```

---

## 🔗 API Endpoints
### **Shorten a URL**
**POST** `/api/shorten`
```json
{
  "url": "https://example.com",
  "short": "{ your own custom short } // Its Optional, You Can Omit This
}
```
#### **Typical Response:**
```json
{
  "url": "https://example.com",
  "short": "http://localhost:3000/myalias",
  "expiry": 3600,
  "rate-limit": 9,
  "rate-limit-reset": 60
}
```

### **Redirect to Original URL**
**GET** `/{short_url}`


---

## 🛠️ Development
For local development:
1. **Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
2. **Backend**
   ```bash
   cd backend
   go mod tidy
   go run main.go
   ```
3. **Redis** (if running locally)
   ```bash
   docker run --name redis -p 6379:6379 -d redis
   ```

---

## 🚀 Deployment
To deploy using **Docker Compose**:
```bash
docker-compose up -d --build
```
This will run the services in detached mode (`-d`).

---

## 📜 License
This project is licensed under the MIT License.

---

## 🤝 Contributing
Feel free to submit issues or PRs to improve this project!

