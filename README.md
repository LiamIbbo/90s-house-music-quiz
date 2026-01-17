# 90's House Music Quiz

An interactive web-based quiz application that tests users' knowledge of 90's house music culture, featuring legendary artists, iconic clubs, and classic tracks from the golden era of house music.

## Live Demo

**[View Live Quiz](https://liamupnorth.github.io/90s-house-music-quiz/)**

---

## Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [File Structure](#file-structure)
- [Deployment](#deployment)
- [Testing](#testing)
- [Future Enhancements](#future-enhancements)
- [Credits](#credits)
- [License](#license)

---

## About The Project

This project is an interactive quiz application built as part of my Full Stack Developer course with The Learning People. The quiz focuses on 90's house music - covering legendary DJs like Frankie Knuckles and Daft Punk, iconic venues like The Hacienda and Paradise Garage, and the culture that defined a generation.

### Project Goals:

- Create an engaging, user-friendly quiz interface
- Demonstrate proficiency in HTML, CSS, and JavaScript
- Implement interactive functionality and dynamic content
- Follow accessibility guidelines and responsive design principles
- Meet all assessment criteria for the course project

---

## Features

### Core Functionality:

- Random Question Selection - 10 questions randomly selected from a pool of 15 questions each time
- Interactive Answer Selection - Visual feedback when selecting answers
- Progress Tracking - Visual progress bar and question counter
- Real-time Score Calculation - Automatic grading upon quiz completion
- Detailed Answer Review - See correct answers with explanations for each question
- Personalized Results - Custom messages based on performance level
- Retake Functionality - Take the quiz multiple times with different questions

### Design Features:

- Responsive Design - Works perfectly on desktop, tablet, and mobile devices
- Accessible Design - High contrast colors, keyboard navigation support
- Smooth Animations - Transitions and hover effects for better UX
- Clean UI - Pastel color scheme (Green, Beige, Brown) with Poppins font
- Clear Navigation - Easy-to-use interface with intuitive buttons

---

## Technologies Used

### Languages:
- **HTML5** - Structure and semantic markup
- **CSS3** - Styling, layout, and responsive design
- **JavaScript (ES6)** - Quiz logic and interactivity

### Design:
- **Google Fonts** - Poppins font family
- **CSS Variables** - For consistent color theming
- **Flexbox** - For responsive layouts
- **CSS Media Queries** - For mobile responsiveness

### Tools:
- **Git** - Version control
- **GitHub** - Code hosting and collaboration
- **GitHub Pages** - Free web hosting
- **VS Code** - Code editor (or your preferred editor)

---

## Getting Started

### Prerequisites

All you need is a modern web browser:
- Google Chrome (recommended)
- Firefox
- Safari
- Microsoft Edge

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/90s-house-music-quiz.git
   ```

2. Navigate to the project folder:
   ```bash
   cd 90s-house-music-quiz
   ```

3. Open the project:
   - Simply open `index.html` in your web browser
   - Or use a local server (e.g., Live Server extension in VS Code)

---

## How to Use

### Taking the Quiz:

1. **Start Page** - Click "Start Quiz" or view instructions via "How to Play"
2. **Answer Questions** - Read each question and select one of four answers
3. **Navigate** - Click "Next Question" to proceed (button activates after selecting an answer)
4. **Submit** - Click "Submit Quiz" on the final question
5. **View Results** - See your score, percentage, and personalized message
6. **Review Answers** - Scroll down to see all questions with correct answers and explanations
7. **Retake** - Click "Retake Quiz" to try again with new questions

### Quiz Scoring:

- **90-100%** - Outstanding! True 90's house music expert
- **70-89%** - Great job! Solid knowledge
- **50-69%** - Not bad! Keep learning
- **Below 50%** - Keep exploring the golden era of house music

---

## File Structure

```
90s-house-music-quiz/
│
├── index.html              # Home/welcome page
├── how-to.html            # Instructions page
├── quiz.html              # Main quiz interface
├── results.html           # Results and answer review page
│
├── style.css              # All styling and responsive design
│
├── questions.js           # Question bank (15 questions)
├── quiz.js                # Quiz logic and functionality
├── results.js             # Results display logic
│
├── README.md              # Project documentation (this file)
└── TESTING.md             # Testing documentation
```

---

## Deployment

### Deploy to GitHub Pages:

1. Create a GitHub repository:
   - Go to [GitHub](https://github.com)
   - Click "New Repository"
   - Name it `90s-house-music-quiz`
   - Make it Public
   - Create repository

2. Upload your files:
   - Click "Add file" → "Upload files"
   - Drag and drop all project files
   - Commit changes

3. Enable GitHub Pages:
   - Go to repository Settings
   - Click Pages in the left sidebar
   - Under "Source", select main branch
   - Click Save
   - Wait 1-2 minutes for deployment
   - Your quiz will be live at: `https://yourusername.github.io/90s-house-music-quiz/`

### Alternative Deployment Options:

- Netlify - Drag and drop deployment
- Vercel - Connect GitHub repo for automatic deployment
- Any web hosting - Upload files via FTP

---

## Testing

### Code Validation:

All code has been validated using official tools:

- HTML - [W3C Markup Validator](https://validator.w3.org/)
- CSS - [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- JavaScript - [JSHint](https://jshint.com/)

### Browser Testing:

Tested and working on:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Safari (latest)
- Microsoft Edge (latest)

### Device Testing:

- Desktop (1920x1080 and above)
- Laptop (1366x768)
- Tablet (768px - iPad)
- Mobile (375px - iPhone SE to 430px - iPhone Pro Max)

### Functionality Testing:

- All navigation links work correctly
- Quiz questions randomize on each load
- Answer selection provides visual feedback
- Progress bar updates accurately
- Score calculation is correct
- Results page displays properly
- Answer review shows all questions and explanations
- Retake quiz functionality works

See [TESTING.md](TESTING.md) for detailed testing documentation.

---

## Design Choices

### Color Scheme:
- Pastel Green (#A8D5BA) - Primary color, buttons, highlights
- Beige (#F5E6D3) - Backgrounds, secondary elements
- Brown (#8B7355) - Text, borders, accents

This palette creates a warm, vintage aesthetic that complements the 90's house music theme while maintaining excellent readability and accessibility.

### Typography:
- Poppins - Modern, clean sans-serif font from Google Fonts
- Font weights: 300 (light), 400 (regular), 600 (semi-bold), 700 (bold)

### Accessibility:
- High contrast between text and backgrounds
- Focus states for keyboard navigation
- Semantic HTML structure
- Alt text ready (can be added for images if used)
- Reduced motion support for users who prefer it

---

## Future Enhancements

Ideas for future development:

- Timer mode - Add optional time limit for competitive play
- Difficulty levels - Easy, Medium, Hard question sets
- Leaderboard - Track high scores with localStorage
- Sound effects - Add audio clips from 90's house tracks
- Social sharing - Share results on social media
- More questions - Expand to 50+ questions
- Image questions - Add album covers and artist photos
- Multiplayer mode - Compete with friends in real-time
- Category selection - Choose between Artists, Venues, Tracks, etc.
- Achievement badges - Unlock badges for milestones

---

## Credits

**Developer:** Liam Ibbetson  
**Course:** Full Stack Developer - The Learning People  
**Year:** 2026

### Resources Used:

- Google Fonts - [Poppins Font](https://fonts.google.com/specimen/Poppins)
- W3C Validators - HTML & CSS validation
- JSHint - JavaScript validation
- MDN Web Docs - JavaScript reference and tutorials
- Stack Overflow - Community support

### Question Sources:

All quiz questions and content were researched and written based on publicly available information about 90's house music history, including:
- Artist biographies and discographies
- Club histories and cultural documentation
- Music journalism and industry publications

---

## License

This project was created for educational purposes as part of a Full Stack Developer course.

Feel free to use this code for learning purposes. If you use significant portions of this code, please provide attribution.

---

## Contact

**Liam Ibbetson**

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

## Acknowledgments

- Thanks to The Learning People for the course structure and guidance
- Thanks to my mentor for support and feedback
- Thanks to the pioneers of house music who created the culture this quiz celebrates

---

**Built with care and a passion for 90's house music**

---

"House music is a feeling that words can't explain." - Frankie Knuckles
