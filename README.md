# Node.js File Upload API (Multer)

A simple and efficient Node.js application built with Express and Multer to handle file uploads seamlessly from a frontend HTML form.

## Features
- **File Upload via Multipart Form**: Accepts files from standard HTML forms using `enctype="multipart/form-data"`.
- **Disk Storage Configuration**: Saves files with their original names inside a local `uploads/` directory.
- **Environment Configuration**: Uses `dotenv` to manage server ports securely.

---

## Project Structure
```text
├── uploads/               # Directory where uploaded files are stored
├── .env                   # Environment variables (Port configuration)
├── .gitignore             # Ignored files (node_modules, .env)
├── index.js               # Main server file
├── index.html             # Frontend upload form
└── package.json           # Project dependencies
