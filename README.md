
# React Mini Projects 🚀

This repository contains a collection of React-based mini projects that showcase various UI components, animations, form handling, and state management using popular libraries like Material UI, Redux, and Axios.

## Table of Contents
- [Birthday App 🎉](#birthday-app-)
- [Todo App ✅](#todo-app-)
- [Simple Form 📄](#simple-form-)
- [Weather App ☀️🌧](#weather-app-)

---

## Birthday App 🎉
A visually appealing birthday greeting app featuring animations and a gradient background. The app displays a personalized birthday message along with photos, combined with a confetti animation to create a celebratory effect.

### 🎈 Features:
- **Confetti Animation:** Adds a festive touch with animated confetti.
- **Gradient Background:** Clean and responsive design.
- **MUI Components:** For consistent layout and styling.

### 📸 Screenshot:
![Birthday App Screenshot]

### 📂 Key Files:
- `BirthdayApp.js` - Main component rendering the birthday card and animations.
- `BirthdayCard.js` - Displays the birthday message.
- `ConfettiAnimation.js` - Handles confetti animation.
- `PhotoCard.js` - Displays birthday-themed images.

---

## Todo App ✅
A simple but functional to-do list application where users can add, view, and remove tasks from their list. This app uses `React-Redux` for state management and Material UI for UI components.

### 📝 Features:
- **Add Tasks:** Users can add new tasks using a text input field.
- **Remove Tasks:** Tasks can be deleted from the list.
- **State Management with React-Redux:** Uses Redux for managing to-do state efficiently.
- **Material UI:** Provides a clean, responsive UI.

### 📂 Key Files:
- `TodoInput.js` - Handles input and adding new tasks.
- `TodoList.js` - Renders the list of tasks with options to delete.
- `todoSlice.js` - Redux slice managing the to-do list state.

---

## Simple Form 📄
A simple form submission app with field validation. Users can input store details, and upon successful submission, a success dialog box is shown. The form uses Material UI for layout and input fields.

### 🛠️ Features:
- **Form Validation:** Ensures all required fields are properly filled.
- **Success Dialog:** Displays a pop-up upon successful form submission.
- **Material UI Layout:** Provides a clean, responsive form layout.


### 📂 Key Files:
- `Form.js` - Main component for the form with inputs for store details.
- `Dialog` - Displays a success message after form submission.

---

## Weather App ☀️🌧
A weather app that allows users to search for real-time weather information by city. The app uses Axios to fetch weather data and dynamically changes the background based on temperature.

### 🌟 Features:
- **Real-time Weather Data:** Fetches weather info based on user input.
- **Dynamic Background:** Changes background color based on temperature.
- **Error Handling:** Displays an error message for invalid city names.
- **Axios for API Requests:** Retrieves weather data from the Weather API.


### 📂 Key Files:
- `Weather.js` - Main component that handles weather data fetching and UI display.
- `styles` - Contains dynamic styles based on temperature and weather conditions.

---

## Setup Instructions 💻

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/react-mini-projects.git
   ```
2. **Navigate into the project directory:**
   ```bash
   cd react-mini-projects
   ```
3. **Install the dependencies:**
   ```bash
   npm install
   ```
4. **Run the app:**
   ```bash
   npm start
   ```

Each app is self-contained in its respective directory. You can navigate to the individual project directories to test and modify them.

---

## 🛠 Technologies Used:
- React.js
- Material UI (MUI)
- React-Redux (for Todo App)
- Axios (for Weather App)
- CSS-in-JS (Material UI's styling solution)

---


