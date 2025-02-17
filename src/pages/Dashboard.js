import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import MainFilterDashboard from "./MainFilterDashboard";
import EventLog from "./EventLog";
import CameraView from "./CameraView";

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #f7f7f7;
`;

const Content = styled.div`
  width: 97%;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  width: 97%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1024px) {
 margin-top: 100px;
}
`;

const Dashboard = () => {
  // Track the selected page
  const [selectedPage, setSelectedPage] = useState("dashboard");

  // Function to render content based on selection
  const renderContent = () => {
    switch (selectedPage) {
      case "dashboard":
        return <MainFilterDashboard />;
      case "event-log":
        return <EventLog />;
      case "camera-view":
        return <CameraView />;
      default:
        return <MainFilterDashboard />;
    }
  };

  return (
    <DashboardContainer>
      {/* Pass setSelectedPage to Sidebar so it can update the state */}
      <Sidebar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Content>
        <Navbar />
        <ContentWrapper>{renderContent()}</ContentWrapper>
      </Content>
    </DashboardContainer>
  );
};

export default Dashboard;
