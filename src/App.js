import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CameraView from "./pages/CameraView";
import EventLog from "./pages/EventLog";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Inter', sans-serif;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/camera-view" element={<CameraView />} />
        <Route path="/event-log" element={<EventLog />} />
      </Routes>
    </Router>
  );
}

export default App;
