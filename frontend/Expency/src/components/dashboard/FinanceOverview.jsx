import React from "react";
import CustomPieChart from "../charts/CustomPieChart";
const COLORS = ["#875CF5", "#FA2C37", "#FF6900"];

const FinanceOverview = ({ totalBalance, totalIncome, totalExpenses }) => {
  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Expense", amount: totalExpenses },
    { name: "Total Income", amount: totalIncome },
  ];
  
  return (
    <div className="card">
      <div className="flex items-center justify-center">
        <h5 className="text-lg">Finance Overview </h5>
      </div>
      
      <CustomPieChart
        data={balanceData}
        label="Total Balance"
        totalAmount={`₹${totalBalance}`}
        colors={COLORS}
        showTextAnchor = {true}
      />
    </div>
  );
};

export default FinanceOverview;
