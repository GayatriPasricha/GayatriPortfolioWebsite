# Gayatri | Personal Portfolio
Link: https://gayatripasricha.github.io/GayatriPortfolioWebsite/


A modern, responsive, and minimalist personal portfolio website built with HTML, CSS, and vanilla JavaScript.

<img width="1861" height="838" alt="image" src="https://github.com/user-attachments/assets/3e3daef3-2197-4d52-99d2-d5da0f6fe695" />

## 🚀 Features

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
- **Smooth Navigation:** Interactive navigation bar with active section highlighting and smooth scrolling.
- **Modern UI:** Soft, professional color palette with glassmorphism effects and smooth micro-animations.
- **Dynamic Contact Form:** A functional contact form that logs submissions directly to a Google Sheet and sends an automated email notification (via Google Apps Script).
- **Project Gallery:** Showcases personal projects and academic achievements, including published patents.
- **Animations:** Subtle fade-in animations using the Intersection Observer API.

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Icons:** [Remix Icon](https://remixicon.com/)
- **Backend:** Google Apps Script (for form handling)

## 📂 Project Structure

```text
├── index.html       # Main website structure
├── style.css        # Custom styles and animations
├── script.js       # Dynamic UI logic and form handling
└── README.md        # Project documentation
```

## ⚙️ Setup & Deployment

### 1. Google Sheets Integration

To enable the contact form to log data and send emails:

1.  Create a new Google Sheet.
2.  Go to **Extensions > Apps Script**.
3.  Add the script that handles `doPost(e)` (includes logging to sheet and `MailApp.sendEmail`).
4.  Deploy the script as a **Web App** and set access to **Anyone**.
5.  Copy the **Web App URL**.
6.  In `script.js`, replace the placeholder `YOUR_GOOGLE_SHEETS_EXEC_URL` with your actual URL.

### 2. Local Setup

Simply clone the repository and open `index.html` in any modern web browser.

```bash
git clone https://github.com/GayatriPasricha/GayatriWebsite.git
cd GayatriWebsite
# Open index.html in your browser
```
---

Built with ❤️ by [Gayatri](https://github.com/GayatriPasricha)
