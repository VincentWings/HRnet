# WealthHealth - HRnet

![WealthHealth Logo](./src/assets/images/wealth-health-logo.jpg)

A complete modern rebuild of the HRnet application for employee management at WealthHealth. This version replaces legacy jQuery components with optimized React-based alternatives. 

> [Live Demo](https://vincentwings.github.io/HRnet-React/) | [React Modal Library](https://github.com/VincentWings/React-Modal)

---

## 🔍 About the Project

HRnet is an internal HR management tool used by the finance company **WealthHealth**. The original version was built with jQuery and had performance, accessibility, and maintainability issues. This project modernizes the application using **React** and modular components.

- The jQuery **modal plugin** has been fully re-implemented in React.
- The application is now 100% React — no jQuery dependency.
- Local storage is used to persist employee data.
- Fake data is injected optionally for testing.

---

## 🚀 Technologies Used

**Languages:**

[![HTML5](https://img.shields.io/badge/-HTML5-d96b3a?style=for-the-badge&logo=HTML5&logoColor=fff)](https://www.w3.org/html/)
[![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=fff)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**Frameworks & Libraries:**

[![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=React&logoColor=000)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=fff)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/-React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=fff)](https://reactrouter.com)

**Tools:**

[![Git](https://img.shields.io/badge/-Git-dd4c3a?style=for-the-badge&logo=Git&logoColor=fff)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/-GitHub-15191d?style=for-the-badge&logo=GitHub&logoColor=FFF)](https://github.com/)
[![VS Code](https://img.shields.io/badge/-VSCode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=fff)](https://code.visualstudio.com/)

---

## ✨ Features

- ✅ Fully modular modal system using Context API
- ✅ Create employee form with validation
- ✅ Persistent storage with `localStorage`
- ✅ Sortable, searchable, and paginated employee table
- ✅ Responsive and accessible UI (keyboard focus trap, ESC support)
- ✅ Modern CSS architecture

---

## 🛠️ Modal Usage (React Modal Library)

```js
import { useModal } from './components/Modal/ModalManager'

const { openModal, closeModal } = useModal()

openModal(
  <div>
    <h2>Employee Created</h2>
    <button onClick={closeModal}>Close</button>
  </div>,
  {
    backgroundColor: '#fefefe',
    textColor: '#111',
    fadeDuration: 300,
    overlayColor: 'rgba(0, 0, 0, 0.5)'
  }
)
```

---

## 📁 Project Structure

```
├── src
│   ├── components
│   │   ├── Modal
│   │   ├── Navbar
│   │   ├── Footer
│   │   ├── EmployeeForm
│   │   └── EmployeeTable
│   ├── pages
│   │   ├── CreateEmployee.jsx
│   │   └── EmployeeList.jsx
│   ├── data
│   │   ├── states.js
│   │   └── fake_employees_100.json
│   ├── styles
│   │   ├── variables.js
│   │   └── main.css
│   └── utils
│       └── employeeStorage.js
```

---

## 📦 Installation & Setup

```bash
git clone https://github.com/VincentWings/HRnet-React.git
cd HRnet-React
npm install
npm run dev
```

App is served at [http://localhost:5173](http://localhost:5173)

---

## 📊 Performance Audit

LightHouse reports show measurable performance improvement after converting the jQuery plugin to a fully optimized React component.
