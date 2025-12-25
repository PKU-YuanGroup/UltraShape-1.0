# Research Project Website Template

A clean and modern research project website template.

## Features

- Responsive design
- Material Icons integration
- Modern gradient backgrounds
- Clean typography with Segoe UI font

## Running the Project

**Important:** Due to CORS restrictions, you must run a local HTTP server to view the page (especially for GLB 3D models).

### Quick Start (Python)
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000 in your browser.

### Alternative Options
- **Node.js**: `npx http-server -p 8000`
- **VS Code**: Install "Live Server" extension and use it
- **Other**: Any local HTTP server will work

## Setup

1. Replace all `[PLACEHOLDER]` text with your actual content
2. Replace placeholder images and videos:
   - `placeholder-bg.mp4` - Background video
   - `placeholder-video.mp4` - Intro video
   - `placeholder-cover.webp` - Video cover image
   - `placeholder-*.png/webp/jpg` - Other images
   - `assets/models/*.glb` - 3D model files
3. Update links in the navigation and footer
4. Customize colors and styles in CSS files

## Structure

- `index.html` - Main HTML file
- `main.css` - Main stylesheet
- `style.css` - Icon font styles
- `carousel.css` - Carousel component styles
- `window.css` - Modal window styles
- `pv.css` - Video player styles

## License

[Add your license here]

