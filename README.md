# 📚 Book Search App

A modern and intuitive web application for searching books using the Open Library API. Discover books with beautiful covers and find digital versions through multiple sources.

![Book Search App](https://img.shields.io/badge/Book-Search%20App-blue?style=for-the-badge&logo=books)
![Open Library](https://img.shields.io/badge/Powered%20by-Open%20Library-green?style=flat-square&logo=library)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-Latest-orange?style=flat-square&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Styled-blue?style=flat-square&logo=css3)

## ✨ Features

- **🔍 Smart Search**: Real-time book search with instant results
- **🖼️ Cover Display**: Shows only books with available cover images
- **📱 Responsive Design**: Works perfectly on desktop and mobile devices
- **⚡ Fast Performance**: Optimized API calls with loading indicators
- **🔗 Multiple Sources**: Direct links to Open Library and Project Gutenberg
- **🎨 Clean UI**: Modern, user-friendly interface
- **⌨️ Keyboard Support**: Search with Enter key for better UX

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API access)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/book-search-app.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd book-search-app
   ```

3. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

4. **Start searching!**
   - Enter a book title in the search box
   - Press Enter or click the "Rechercher" button

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| ![HTML5](https://img.shields.io/badge/HTML5-Structure-E34F26?logo=html5) | Page structure and semantics |
| ![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?logo=css3) | Responsive design and styling |
| ![JavaScript](https://img.shields.io/badge/JavaScript-Logic-F7DF1E?logo=javascript) | API integration and interactivity |
| ![Open Library API](https://img.shields.io/badge/Open%20Library-API-lightgrey) | Book data and cover images |

## 📖 How to Use

1. **Search for Books**
   - Type any book title in the search field
   - Results appear automatically with cover images

2. **View Book Details**
   - See book title, author, publication year, and ISBN
   - Browse high-quality cover images

3. **Access Digital Versions**
   - Click "Voir sur Open Library" for detailed information
   - Use "Chercher sur Gutenberg" for public domain books

## 🎯 API Information

This app uses the [Open Library API](https://openlibrary.org/developers/api) to fetch book data:
- **Search Endpoint**: `https://openlibrary.org/search.json`
- **Cover Images**: `https://covers.openlibrary.org/b/id/`
- **Rate Limiting**: No API key required, generous limits

## 🌟 Features in Detail

### 🖼️ Image Filtering
- Automatically filters out books without cover images
- Ensures visually appealing results

### 📚 Comprehensive Information
- Title and author details
- Publication year
- ISBN numbers when available
- Multiple author support

### 🔍 Advanced Search
- Real-time search with error handling
- Loading indicators for better UX
- Empty state messages

## 🐛 Troubleshooting

**No results found?**
- Check your internet connection
- Try different search terms
- Ensure the book exists in the Open Library database

**Images not loading?**
- The API might be temporarily unavailable
- Try refreshing the page
- Check browser console for errors

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 🐛 Reporting Issues
Found a bug? [Open an issue](https://github.com/yourusername/book-search-app/issues) with:
- Description of the problem
- Steps to reproduce
- Browser and OS information

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Open Library** for providing free book data and covers
- **Project Gutenberg** for digital book access
- **Contributors** and users who help improve this app

## 📞 Support

If you need help or have questions:
- 📧 Email: your-email@example.com
- 🐛 [Issue Tracker](https://github.com/yourusername/book-search-app/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/book-search-app/discussions)

---

<div align="center">

**Made with ❤️ for book lovers everywhere**

![Books](https://img.shields.io/badge/Read-More%20Books-red?style=for-the-badge&logo=book)

*Happy reading! 📖✨*

</div>
