import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import KPICard from "../components/KPICard";
import DataTable from "../components/DataTable";
import Select from "react-select";
// import { useState } from "react";
import styled from "styled-components";
import pageIcon from "../assets/icons/file.png";
import checkIcon from "../assets/icons/check.png";
import BarChartComponent from "../components/BarChartComponent";
import PieChartComponent from "../components/PieChartComponent";
import downloadIcon from "../assets/icons/Download.png";

// Custom styles for React Select
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    minHeight: "48px",
    borderRadius: "10px",
    border: state.isFocused ? "2px solid #002BC5" : "1px solid #ccc",
    boxShadow: state.isFocused ? "0px 0px 4px rgba(0, 43, 197, 0.4)" : "none",
    "&:hover": { borderColor: "#002BC5" },
  }),
};

// Mock Data
const allData = [
  {
    id: 1,
    application: "Application 1",
    lineNumber: "Line 1",
    product: "Party Pack",
    rejectionReason: "Wrong Coding",
    unitsProcessed: 1200,
    unitsPassed: 800,
    unitsRejected: 20,
    throughput: 50,
    date: "2024-02-01",
  },
  {
    id: 2,
    application: "Application 2",
    lineNumber: "Line 2",
    product: "Tub",
    rejectionReason: "Wrong Price",
    unitsProcessed: 1500,
    unitsPassed: 1100,
    unitsRejected: 40,
    throughput: 60,
    date: "2024-01-15",
  },
  {
    id: 3,
    application: "Application 3",
    lineNumber: "Line 3",
    product: "Party Pack",
    rejectionReason: "Wrong Factory Code",
    unitsProcessed: 1800,
    unitsPassed: 1400,
    unitsRejected: 30,
    throughput: 70,
    date: "2023-12-20",
  },
  {
    id: 4,
    application: "Application 1",
    lineNumber: "Line 2",
    product: "Tub",
    rejectionReason: "Incorrect Label",
    unitsProcessed: 2000,
    unitsPassed: 1700,
    unitsRejected: 50,
    throughput: 80,
    date: "2024-02-10",
  },
  {
    id: 5,
    application: "Application 2",
    lineNumber: "Line 1",
    product: "Party Pack",
    rejectionReason: "Missing Coding",
    unitsProcessed: 2200,
    unitsPassed: 1900,
    unitsRejected: 20,
    throughput: 90,
    date: "2024-02-05",
  },
];

// Filters Data
const filterOptions = {
  application: [
    { value: "all", label: "All Applications" },
    { value: "Application 1", label: "Application 1" },
    { value: "Application 2", label: "Application 2" },
    { value: "Application 3", label: "Application 3" },
  ],
  lineNumber: [
    { value: "all", label: "All Lines" },
    { value: "Line 1", label: "Line 1" },
    { value: "Line 2", label: "Line 2" },
    { value: "Line 3", label: "Line 3" },
  ],
  rejectionReason: [
    { value: "all", label: "All Reasons" },
    { value: "Wrong Coding", label: "Wrong Coding" },
    { value: "Wrong Price", label: "Wrong Price" },
    { value: "Wrong Factory Code", label: "Wrong Factory Code" },
    { value: "Incorrect Label", label: "Incorrect Label" },
    { value: "Missing Coding", label: "Missing Coding" },
  ],
  dateRange: [
    { value: "last_week", label: "Last Week" },
    { value: "last_month", label: "Last Month" },
    { value: "last_year", label: "Last Year" },
  ],
};


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
`;

const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-bottom: 20px;
  align-items: center;
`;

const DownloadButton = styled.button`
  background: #002bc5;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  min-width: 180px;
  justify-content: center;
  transition: background 0.3s ease;

  &:hover {
    background: #001a80;
  }
`;

const KPIContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 30px;
`;


const Dashboard = () => {
    // const [selectedFilters, setSelectedFilters] = useState({
    //     application: "all",
    //     lineNumber: "all",
    //     rejectionReason: "all",
    //     dateRange: "last_month",
    //   });
  const filteredData =allData;
  const kpiMetrics = {
    totalProcessed: 0,
    totalPassed: 0,
    totalRejected: 0,
    avgThroughput: 0,
};

  // Handle filter change
  const handleFilterChange = (filter, value) => {
    console.log("filter")
    // setSelectedFilters((prev) => ({
    //   ...prev,
    //   [filter]: value,
    // }));
  };

  return (
    <DashboardContainer>
      <Sidebar />
      <Content>
        <Navbar />
        <ContentWrapper>
          {/* Filters */}
          <FilterContainer>
            <Select styles={customStyles} options={filterOptions.application} onChange={(option) => handleFilterChange("application", option.value)} />
            <Select styles={customStyles} options={filterOptions.lineNumber} onChange={(option) => handleFilterChange("lineNumber", option.value)} />
            <Select styles={customStyles} options={filterOptions.rejectionReason} onChange={(option) => handleFilterChange("rejectionReason", option.value)} />
            <Select styles={customStyles} options={filterOptions.dateRange} onChange={(option) => handleFilterChange("dateRange", option.value)} />
            <DownloadButton><img src={downloadIcon} alt="Download Icon" /> Download Data</DownloadButton>
          </FilterContainer>

          {/* KPI Metrics */}
          <KPIContainer>
            <KPICard icon={pageIcon} title="Units Processed" value={kpiMetrics.totalProcessed} />
            <KPICard icon={checkIcon} title="Units Passed" value={kpiMetrics.totalPassed} />
            <KPICard icon={pageIcon} title="Units Rejected" value={kpiMetrics.totalRejected} />
            <KPICard icon={pageIcon} title="Throughput (Units/Min)" value={kpiMetrics.avgThroughput.toFixed(2)} />
          </KPIContainer>

          {/* Charts & Table */}
          <ChartsContainer>
            <BarChartComponent data={filteredData} />
            <PieChartComponent data={filteredData} />
          </ChartsContainer>
          <DataTable data={filteredData} />
        </ContentWrapper>
      </Content>
    </DashboardContainer>
  );
};

export default Dashboard;
