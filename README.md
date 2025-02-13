📌 KPI Dashboard
A dynamic KPI tracking dashboard built using React.js, Recharts, and React-Select. This dashboard provides real-time data visualization with interactive filters, charts, and tables.

✨ Features
✅ Dynamic Filtering – Users can filter by Application, Line Number, Rejection Reason, and Date Range
✅ React-Select for Dropdowns – User-friendly multi-select dropdowns for seamless filtering
✅ Live Data Updates – Filters affect KPIs, Charts, and Table in real-time
✅ Persistent State – Filters remain intact even after a page refresh (localStorage used)
✅ KPI Cards – Displays Total Processed, Passed, Rejected Units, and Throughput
✅ Data Visualization – Bar & Pie Charts update dynamically based on filters
✅ Sidebar Navigation – Switch between Dashboard, Camera View, and Event Log
✅ Styled Components – Fully responsive UI with consistent styling

🛠 Tech Stack
React.js – Core framework
Recharts – For interactive charts
React-Select – Custom dropdown filters
Styled-Components – CSS-in-JS for styling
LocalStorage – To persist user-selected filters

📁 Folder Structure
bash
Copy
Edit
/kpi-dashboard
│── /src
│   ├── /components  // Reusable UI Components (KPICard, Sidebar, Navbar)
│   ├── /pages       // Different pages (Dashboard, CameraView, EventLog)
│   ├── /assets      // Icons & images
│   ├── /utils       // Utility functions
│   ├── App.js       // Main React App
│   ├── index.js     // Entry Point
│── /public
│── README.md
│── package.json


🚀 Final Stage Implementation
📊 Filtering & Data Persistence
The filters dynamically update all charts and the table.
Selected filters are stored in localStorage, so they persist even after a page refresh.
KPIs, Charts, and Tables auto-update whenever filters are changed.
📡 Sidebar Navigation (Dynamic Page Switching)
The sidebar allows seamless navigation between:
KPI Dashboard (Main Component)
Camera View
Event Log
The displayed content updates dynamically based on the selected sidebar option.
📈 Charts & Tables
Recharts Bar & Pie Charts reflect filtered data.
The Data Table updates to show only filtered results.


🚀 How to Run Locally
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/adityarajbenn/kpi-dashboard.git
cd kpi-dashboard
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Start the Development Server
bash
Copy
Edit

npm start
The project will run on http://localhost:3000/

🌐 Deployment
The dashboard is deployed on Netlify for easy access.
Live Demo: https://kpidemo.netlify.app/


📝 Credits
Developed by Aditya Raj Benn 🚀