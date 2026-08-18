[README (1).md](https://github.com/user-attachments/files/31190771/README.1.md)
# 📸 Post App Backend

A lightweight RESTful API built with Node.js and Express for creating and viewing posts with image uploads and captions.

## 🚀 Features

- **Post Creation:** Upload images alongside custom text captions.
- **Image Uploads:** Handled via Multer and routed to storage services.
- **Database Integration:** Store and retrieve post metadata with MongoDB & Mongoose.
- **CORS Enabled:** Ready to connect with frontend applications.

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB via Mongoose
- **File Uploads:** Multer
- **Configuration:** dotenv, CORS

---

## 📁 Project Structure

```text
project1backend/
├── config/
│   └── db.js                 # Database connection setup
├── Models/
│   └── post.js               # Mongoose schema for posts
├── services/
│   └── storage.services.js   # Image upload & storage handling
├── src/
│   └── app.js                # Express app configuration
├── uploads/                  # Temporary upload storage
├── views/                    # View templates
├── .env                      # Environment variables (Git-ignored)
├── .gitignore
├── package.json
└── server.js                 # Application entry point
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js installed locally
- MongoDB instance (Local or MongoDB Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sameer-azm/project1backend.git
   cd project1backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server:
   ```bash
   # Production
   node server.js

   # Development
   npx nodemon server.js
   ```

---

## 🔗 API Endpoints

### 1. Create a Post
- **Endpoint:** `POST /Createpost`
- **Content-Type:** `multipart/form-data`
- **Body Fields:**
  - `Image` (File) — *Field name must strictly be `Image`*
  - `caption` (Text)

### 2. Get All Posts
- **Endpoint:** `GET /posts`
- **Response:** Array of post objects containing `image` URLs and `caption` text.

---

## 🔒 Environment & Security

Ensure sensitive information is stored in `.env`. Verify your `.gitignore` includes:

```text
node_modules/
.env
uploads/
```

---

## 🔮 Future Improvements

- User authentication & accounts (JWT)
- Edit & delete post endpoints
- Pagination for image feeds
- Post interactions (likes & comments)

---

## 👨‍💻 Author

**Sameer**  
- GitHub: [@Sameer-azm](https://github.com/Sameer-azm)

---

## 📄 License

This project is created for learning and development purposes.
