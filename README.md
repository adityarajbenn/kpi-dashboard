# 📊 KPI Dashboard

A dynamic **KPI tracking dashboard** built using **React.js**, **Recharts**, and **React-Select**. This dashboard provides **real-time data visualization** with interactive **filters, charts, and tables**.

---

## 🚀 Features

✅ **Dynamic Filtering** – Filter by **Application, Line Number, Rejection Reason, and Date Range**  
✅ **React-Select for Dropdowns** – User-friendly multi-select dropdowns  
✅ **Live Data Updates** – Filters affect **KPIs, Charts, and Table** in real-time  
✅ **Persistent State** – Filters remain intact even after a page refresh (localStorage)  
✅ **KPI Cards** – Displays **Total Processed, Passed, Rejected Units, and Throughput**  
✅ **Data Visualization** – **Bar & Pie Charts** update dynamically  
✅ **Sidebar Navigation** – Switch between **Dashboard, Camera View, and Event Log**  
✅ **Styled Components** – **Fully responsive** UI with consistent styling  

---

## 🛠 Tech Stack

- **React.js** – Core framework  
- **Recharts** – Interactive charts  
- **React-Select** – Custom dropdown filters  
- **Styled-Components** – CSS-in-JS for styling  
- **LocalStorage** – To persist user-selected filters  

---


## 📡 Final Stage Implementation

### 🎯 Filtering & Data Persistence

- **Filters dynamically update** all charts and the table.
- **Selected filters are stored in localStorage**, so they **persist after page refresh**.
- **KPIs, Charts, and Tables auto-update** whenever filters are changed.

### 🔄 Sidebar Navigation (Dynamic Page Switching)

- Sidebar allows navigation between:
  1. **KPI Dashboard (Main Component)**
  2. **Camera View**
  3. **Event Log**
- The displayed content updates **based on the selected sidebar option**.

### 📊 Charts & Tables

- **Recharts Bar & Pie Charts** reflect filtered data.
- The **Data Table** updates to show only filtered results.

---

## 🚀 How to Run Locally

### 1️⃣ Clone the Repository

git clone https://github.com/adityarajbenn/kpi-dashboard.git
cd kpi-dashboard

### 2️⃣ Install Dependencies
npm install

### 3️⃣ Start the Development Server
npm start

The project will run on http://localhost:3000/


🌍 Deployment
The dashboard is deployed on Netlify.
🔗 Live Demo: https://kpidemo.netlify.app/

📌 Credits
Developed by Aditya Raj Benn 🚀