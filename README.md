# Flairspace.co Landing Page

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, responsive landing page for Flairspace, featuring a terminal-style interface with dark/light mode support. This project showcases Flairspace's products and mission with a clean, interactive design.

## 🌟 Features

- **Terminal-like Interface**: Interactive command-line inspired UI
- **Dark/Light Mode**: Toggle between themes with persistent user preference
- **Animated Loading Sequence**: Engaging terminal-style boot sequence on page load
- **Responsive Design**: Works seamlessly on all device sizes
- **Interactive Product Showcase**: Collapsible product sections for better information hierarchy
- **Modern Animations**: Smooth transitions and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Focused**: Optimized assets and lazy loading for fast page loads
- **Responsive Design**: Works on desktop and mobile devices
- **Modern Animations**: Smooth transitions and hover effects
- **SEO Optimized**: Built with search engine optimization in mind
- **Social Media Integration**: Quick links to social profiles

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js and npm (for development)
- Git (for version control)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/iamvasee/flairspace.co-landing.git
   cd flairspace.co-landing
   ```

2. Open `index.html` in your browser or use a local development server:
   ```bash
   npx http-server
   ```
   Then open `http://localhost:8080` in your browser.

## 🛠️ Project Structure

```
flairspace.co-landing/
├── index.html          # Main HTML file
├── style.css          # All styles and animations
├── script.js          # JavaScript functionality
├── assets/            # Images and other static assets
└── README.md          # This file
```

## 🎨 Customization

### Changing Colors
Theming is handled through CSS variables in `style.css`. You can easily customize the color scheme by modifying these variables:

```css
:root {
    --bg-color: #ffffff;
    --text-color: #2d3436;
    --accent-color: #00b894;
    --border-color: #dfe6e9;
    --shadow-color: rgba(0, 0, 0, 0.1);
    --prompt-color: #00b894;
}

[data-theme="dark"] {
    --bg-color: #1e272e;
    --text-color: #f5f6fa;
    --border-color: #2f3640;
    --shadow-color: rgba(0, 0, 0, 0.3);
}
```

### Adding New Products
To add a new product to the showcase:

1. Add a new `details` element in the `.products` section of `index.html`
2. Follow the existing structure with `summary` and content sections
3. Add any custom styles in `style.css` if needed

## 🌐 Deployment

This is a static website that can be deployed to any web hosting service. Some popular options:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ✨ Show Your Support

Give a ⭐️ if this project helped you!

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python's built-in server
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser.

## 🎨 Customization

### Colors and Styling

Edit the CSS variables in `style.css` to customize the color scheme:

```css
:root {
    --bg-color: rgba(255, 255, 255, 0.95);
    --text-color: #2d3436;
    --accent-color: #00b894;
    /* ... */
}
```

### Content Updates

Edit `index.html` to update the content, links, and structure as needed.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- Website: [flairspace.co](https://flairspace.co)
- Email: contact@flairspace.co
- Twitter: [@ChatMe_At](https://twitter.com/ChatMe_At)

---

<div align="center">
  Made with ❤️ by <a href="https://flairspace.co">Flairspace</a>
</div>
