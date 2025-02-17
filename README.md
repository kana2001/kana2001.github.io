# Adi's Personal Website

This project is a personal website built with React. It showcases my work experience, projects, and skills. The site features a clean and responsive design with a dark mode toggle for enhanced user experience.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Redux Toolkit:** For state management, including dark mode persistence.
- **React Router DOM:** For navigation and routing within the application.
- **React Vertical Timeline Component:** For displaying work experience in a timeline format.
- **gh-pages:** For deploying the website to GitHub Pages.

## Features

- **Responsive Design:** The website is designed to adapt to different screen sizes and devices.
- **Dark Mode Toggle:** Users can switch between light and dark themes for a comfortable viewing experience. The preference is saved using `localStorage`.
- **Work Experience Timeline:** A visual timeline showcasing my work history.
- **Project Portfolio:**
- **About Me Section:**
- **Contact Information:**

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/kana2001/kana2001.github.io.git
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm start
    ```

    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

To build the application for production, run:

```bash
npm run build 
```

This will create an optimized build in the `build` directory.

## Deployment

This project is set up for deployment to GitHub Pages. To deploy:

1.  **Update `homepage` in `package.json`:** Make sure the `homepage` field in your `package.json` file is set to your GitHub Pages URL (e.g., `"http://yourusername.github.io/your-repository-name"`).

2.  **Deploy to GitHub Pages:**

    ```bash
    npm run deploy
    ```

    This will build the project and deploy it to the `gh-pages` branch of your GitHub repository.
