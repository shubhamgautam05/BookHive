# Book Hive - Premium Literary Collection

A breathtakingly modern, fully functional online digital library designed with high-end aesthetics. Book Hive features a complete e-commerce-style interface with real-time search, animated 3D hover effects, an interactive animated canvas background, and smooth Dark/Light mode theme switching.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### High-End UI/UX
- **Glassmorphism Design**: Frosted glass effects on the sticky navigation bar, cart sidebar, and toast notifications.
- **Interactive Canvas Background**: An advanced HTML5 Canvas background where glowing particles drift and connect to your cursor dynamically.
- **True 3D Hover Integrations**: Book covers calculate real-time mouse position to generate tilt (`rotateX`, `rotateY`) and moving glare effects.
- **Mesh Gradients**: A deep, animated ambient mesh gradient base layer.
- **Dark/Light Mode**: Fully responsive theme switching that adapts to system preferences and saves to `localStorage`.

### Core Functionality
- **Live Search**: Instantly filter books by title or author as you type.
- **Categorization**: Filter books smoothly by genre including Sci-Fi, Classics, Fantasy, Manga, and Kids.
- **Shopping Cart**: Add/remove books with a persistent cart interface saving data seamlessly to `localStorage`.
- **Book Quick View**: Click any book to open a beautifully styled modal detailing the book's pages, year, publisher, and summary.
- **Responsive Layout**: Works flawlessly on desktop, tablet, and mobile browsers.

## 📚 Book Collection
Our redesigned database is populated with universally recognized masterpieces across multiple genres, such as:
- **Classics & Sci-Fi**: *1984*, *The Great Gatsby*, *Dune*, *Fahrenheit 451*
- **Manga**: *Akira*, *Death Note*, *One Piece*
- **Kids**: *Where the Wild Things Are*, *Charlotte's Web*

## 🚀 Getting Started

No build tools, npm, or servers are strictly required—everything is written in pure Vanilla JavaScript, HTML, and CSS.

### Quick Start
1. **Clone or Download** the repository.
2. **Open the project**:
   Use a local HTTP server for the absolute best performance (to avoid CORS issues with local storage or module loading in some browsers).

   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   ```
3. Navigate to `http://localhost:8000` in your browser!

## 📁 Project Structure

```
book-hive/
│
├── index.html          # Main HTML structure with semantic tags and canvas element
├── styles.css          # Next-gen CSS design (CSS Variables, Glassmorphism, 3D Transforms)
├── script.js           # Core application logic, database, and canvas animation engine
└── README.md           # This file
```

## 🎨 Design System

### Modern Variables Engine
The UI relies heavily on modern CSS variables for effortless theming.
```css
/* Dark Theme Defaults */
:root {
    --bg: #09090b;
    --surface: rgba(24, 24, 27, 0.6);
    --border: rgba(255, 255, 255, 0.1);
    --text-primary: #f8fafc;
    --accent: #6366f1;
}

/* Light Theme Overrides */
:root[data-theme="light"] {
    --bg: #f8fafc;
    --surface: rgba(255, 255, 255, 0.7);
    --border: rgba(0, 0, 0, 0.1);
    --text-primary: #0f172a;
    /* ... */
}
```

### Typography
- **Heading Font**: `Outfit` (Bold, geometric, clean)
- **Body Font**: `Plus Jakarta Sans` (Highly legible for long descriptions)

## 🔧 Customization

### Adding New Books
Simply append a new object to the `books` array located in `script.js`. The color parameters automatically generate the 3D book cover graphics and badge colors:

```javascript
{
    id: 99,
    title: "Your Masterpiece",
    author: "Author Name",
    price: 19.99,
    rating: "4.9",
    category: "sci-fi", // Links to filter tabs
    description: "A summary goes here...",
    pages: 350,
    publisher: "Publishing House",
    year: 2024,
    color: "#yourHex", // Main gradient base
    accent: "#yourHex" // Pricing and button highlight
}
```

## ☀️ Support and Compatibility
Optimized for all major modern browsers:
- Google Chrome
- Mozilla Firefox 
- Apple Safari
- Microsoft Edge

## 📞 Contact

Created with ❤️ for book lovers everywhere by SHUBHAM SHARMA.

---

**Happy Reading! 📚**
