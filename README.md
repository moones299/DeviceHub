# DeviceHub 🛍️

DeviceHub is a product catalog web application built with **Next.js** and **MongoDB**, designed to provide a simple and organized way to explore electronic devices.

## ✨ Features

- Browse electronic products by category.
- Filter products by brand.
- View product listings with reusable components.
- Fetch product data through API routes.
- Store and manage product data using MongoDB and Mongoose.
- Responsive user interface with CSS Modules.
- Dedicated pages for About, Articles, and Contact.

## 🛠️ Tech Stack

- **Frontend:** Next.js, React.js, CSS Modules
- **Backend:** Next.js API Routes
- **Database:** MongoDB
- **ODM:** Mongoose
- **Language:** JavaScript

## 📁 Project Structure

```text
DeviceHub/
├── components/
├── data/
├── models/
├── pages/
│   ├── api/
│   ├── about/
│   ├── articles/
│   ├── contact/
│   └── products/
├── public/
├── styles/
├── utils/
├── package.json
└── next.config.mjs
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/moones299/DeviceHub.git
   ```

2. Navigate to the project directory:

   ```bash
   cd DeviceHub
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Make sure MongoDB is running locally and the database connection is configured in `utils/connectDB.js`.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database

DeviceHub uses MongoDB to store product data, with Mongoose models for laptops, mobile phones, and cameras.

The default local database connection is:

```text
mongodb://localhost:27017/store
```

Make sure MongoDB is running before using features that require database access.

## 🎯 Purpose

This project was built to practice frontend development, reusable React components, API development, database integration, and full-stack application structure using Next.js.

## 👨‍💻 Author

**Moones**

GitHub: [@moones299](https://github.com/moones299)
