
# 📘 User Management RESTful API

A simple RESTful API built with **Node.js** and **Express** to manage a list of users. This project demonstrates concepts such as routing, middleware, HTTP methods, error handling, and in-memory data storage.

---

## 🚀 Features

- ✅ Fetch all users
- ✅ Fetch a user by ID
- ✅ Add a new user
- ✅ Update an existing user
- ✅ Delete a user
- ✅ Request logging middleware
- ✅ Validation middleware for POST and PUT
- ✅ Proper HTTP status codes and error messages

---

## 🛠️ Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pankajvitaldeveloper/Build_RESTful_API.git
   cd Build_RESTful_API
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   node index.js
   ```

4. **Server runs on**:  
   `http://localhost:3000`

---

## 📦 API Endpoints

| Method | Endpoint       | Description                  | Request Body Required |
|--------|----------------|------------------------------|------------------------|
| GET    | `/users`       | Get all users                | ❌                     |
| GET    | `/users/:id`   | Get user by ID               | ❌                     |
| POST   | `/user`        | Add a new user               | ✅                     |
| PUT    | `/user/:id`    | Update existing user         | ✅                     |
| DELETE | `/user/:id`    | Delete user by ID            | ❌                     |

---

## 🧾 Sample User JSON

```json
{
  "firstName": "Anshika",
  "lastName": "Agarwal",
  "hobby": "Teaching"
}
```

---

## 🧰 Middleware

- **Request Logger**: Logs the request method, URL, and timestamp.
- **Validation Middleware**: Ensures that `firstName`, `lastName`, and `hobby` fields are present in POST and PUT requests.

---

## 🧪 Testing

- Test endpoints using **Postman** or **ThunderClient**.
- Include screenshots of:
  - Successful requests (e.g., 200, 201)
  - Error handling (e.g., 400, 404)
- Place screenshots in a `screenshots/` directory.

---

## 📁 Project Structure

```
/Build_RESTful_API
├── index.js           # Main application
├── package.json       # Dependencies and scripts
└── api_screenshots/       # Postman or ThunderClient test results
```


## 🖼️ API Test Screenshots

📌 **Note**: All API test screenshots are available in the `api_screenshots/` folder for reference.  
These include tests for:

- GET /users
- GET /users/:id
- POST /user
- PUT /user/:id
- DELETE /user/:id

