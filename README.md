# Shubham Kumar Sharma - Portfolio

Welcome to the source code of my personal portfolio website. This project showcases my skills, projects, and professional background, built with modern web technologies for performance and interactivity.

## 🚀 Live Demo
[Visit Portfolio](https://shubhamksharma.me/)

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Modern CSS3 (Variables, Flexbox/Grid, Responsive Design)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: GitHub Pages (via GitHub Actions)

## ✨ Features

- **Responsive Design**: Fully responsive layout optimized for all device sizes.
- **Interactive UI**: Smooth animations and transitions using Framer Motion.
- **Lightbox Gallery**: Custom-built lightbox context for viewing project images.
- **Project Showcase**: Detailed project cards with GitHub and live demo links.
- **Certification Badges**: Integration of professional certifications.
- **Contact Form**: Integrated contact section.
- **Security**: Implements Content Security Policy (CSP) for enhanced security.

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shubhamkumarsharma03/shubhamkumarsharma03.github.io.git
   cd shubhamkumarsharma03.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

### Build

Build the project for production:
```bash
npm run build
```

The output will be in the `dist` directory.

### Linting

Run ESLint to check for code quality issues:
```bash
npm run lint
```

## 🔐 Security

This project implements a strict **Content Security Policy (CSP)** to mitigate XSS risks.
- Scripts are restricted to 'self' and trusted sources.
- Inline styles are allowed but controlled.
- Deployment is automated via GitHub Actions to ensure integrity.

## 🚀 Deployment

Deployment is handled automatically via GitHub Actions.
- Pushing to the `main` branch triggers the `.github/workflows/deploy.yml` workflow.
- This builds the project and deploys the `dist` folder to the `gh-pages` environment.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
