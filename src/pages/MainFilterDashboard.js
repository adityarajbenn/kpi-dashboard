import React from 'react'
import KPICard from "../components/KPICard";
import DataTable from "../components/DataTable";
import Select from "react-select";
import { useState, useEffect } from "react";
import styled from "styled-components";
import pageIcon from "../assets/icons/file.png";
import checkIcon from "../assets/icons/check.png";
import BarChartComponent from "../components/BarChartComponent";
import PieChartComponent from "../components/PieChartComponent";
import downloadIcon from "../assets/icons/Download.png";
import moment from "moment";

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
      passed: 800,
      rejected: 400,
      throughput: 50,
      date: "2025-02-01",
    },
    {
      id: 2,
      application: "Application 2",
      lineNumber: "Line 2",
      product: "Tub",
      rejectionReason: "Wrong Price",
      unitsProcessed: 1500,
      passed: 1100,
      rejected: 400,
      throughput: 60,
      date: "2025-01-15",
    },
    {
      id: 3,
      application: "Application 3",
      lineNumber: "Line 3",
      product: "Party Pack",
      rejectionReason: "Wrong Factory Code",
      unitsProcessed: 1800,
      passed: 1400,
      rejected: 400,
      throughput: 70,
      date: "2024-12-20",
    },
    {
      id: 4,
      application: "Application 1",
      lineNumber: "Line 2",
      product: "Tub",
      rejectionReason: "Incorrect Label",
      unitsProcessed: 2000,
      passed: 1700,
      rejected: 300,
      throughput: 80,
      date: "2025-02-10",
    },
    {
      id: 5,
      application: "Application 2",
      lineNumber: "Line 1",
      product: "Party Pack",
      rejectionReason: "Missing Coding",
      unitsProcessed: 2200,
      passed: 1900,
      rejected: 300,
      throughput: 90,
      date: "2025-02-05",
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
      { value: "all", label: "All Previous Years" },
      { value: "last_week", label: "Last Week" },
      { value: "last_month", label: "Last Month" },
      { value: "last_year", label: "Last Year" },
    ],
  };

  
const FilterContainer = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 16px;
margin-bottom: 20px;
align-items: center;
@media (max-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 768px) {
  grid-template-columns: repeat(1, 1fr);
}
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

@media (max-width: 768px) {
  grid-template-columns: repeat(1, 1fr);
}
`;

  

function MainFilterDashboard() {
    const [selectedFilters, setSelectedFilters] = useState(JSON.parse(localStorage.getItem("filtersSet")) || 
    {
        application: "all",
        lineNumber: "all",
        rejectionReason: "all",
        dateRange: "all",
      });
      const [filteredData, setFilteredData] = useState(allData);
      const [kpiMetrics, setKpiMetrics] = useState({
          totalProcessed: 2528,
          totalPassed: 814,
          totalRejected: 12,
          avgThroughput: 110.14,
        });
        

        useEffect(() => {
            const applyFilters = () => {
              const filtered = allData.filter((entry) => {
                const matchesApplication = selectedFilters.application === "all" || entry.application === selectedFilters.application;
                const matchesLineNumber = selectedFilters.lineNumber === "all" || entry.lineNumber === selectedFilters.lineNumber;
                const matchesRejection = selectedFilters.rejectionReason === "all" || entry.rejectionReason === selectedFilters.rejectionReason;
                // Date Filtering
                const entryDate = moment(entry.date);
                let matchesDate = true;
                if (selectedFilters.matchesDate === "all"){
                    matchesDate = true;
                }
                else if (selectedFilters.dateRange === "last_week") {
                  matchesDate = entryDate.isAfter(moment().subtract(7, "days"));
                } else if (selectedFilters.dateRange === "last_month") {
                  matchesDate = entryDate.isAfter(moment().subtract(1, "months"));
                } else if (selectedFilters.dateRange === "last_year") {
                  matchesDate = entryDate.isAfter(moment().subtract(1, "years"));
                }
        
                return matchesApplication && matchesLineNumber && matchesRejection && matchesDate;
              });
        
              setFilteredData(filtered);
        
              // Calculate totals for KPI Cards
              const totalProcessed = filtered.reduce((sum, item) => sum + item.unitsProcessed, 0);
              const totalPassed = filtered.reduce((sum, item) => sum + item.passed, 0);
              const totalRejected = filtered.reduce((sum, item) => sum + item.rejected, 0);
              const avgThroughput =
                filtered.length > 0 ? filtered.reduce((sum, item) => sum + item.throughput, 0) / filtered.length : 0;
              setKpiMetrics({
                totalProcessed,
                totalPassed,
                totalRejected,
                avgThroughput,
              });
            };
            localStorage.setItem("filtersSet", JSON.stringify(selectedFilters));
        
            applyFilters();
          }, [selectedFilters]);
        
          // Handle filter change
          const handleFilterChange = (filter, value) => {
            setSelectedFilters((prev) => ({
              ...prev,
              [filter]: value,
            }));
          };
  return (
    <>
    {/* Filters */}
    <FilterContainer>
        <Select
        styles={customStyles}
        options={filterOptions.application}
        value={filterOptions.application.find(option => option.value === selectedFilters.application)}
        onChange={(option) => handleFilterChange("application", option.value)}
        />

        <Select
        styles={customStyles}
        options={filterOptions.lineNumber}
        value={filterOptions.lineNumber.find(option => option.value === selectedFilters.lineNumber)}
        onChange={(option) => handleFilterChange("lineNumber", option.value)}
        />

        <Select
        styles={customStyles}
        options={filterOptions.rejectionReason}
        value={filterOptions.rejectionReason.find(option => option.value === selectedFilters.rejectionReason)}
        onChange={(option) => handleFilterChange("rejectionReason", option.value)}
        />

        <Select
        styles={customStyles}
        options={filterOptions.dateRange}
        value={filterOptions.dateRange.find(option => option.value === selectedFilters.dateRange)}
        onChange={(option) => handleFilterChange("dateRange", option.value)}
        />
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
    </>
  )
}

export default MainFilterDashboard