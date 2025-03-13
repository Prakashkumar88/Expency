import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useUserAuth } from "../../hooks/useUserAuth";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import InfoCards from "../../components/cards/InfoCards";
import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";
import { IoMdCard } from "react-icons/io";
import { addThousandsSeparator } from "../../utils/helper";
import RecentTransaction from "../../components/dashboard/RecentTransaction";
import FinanceOverview from "../../components/dashboard/FinanceOverview";
import ExpenseTransactions from "../../components/dashboard/ExpenseTransactions";
import Last30DaysExpenses from "../../components/dashboard/Last30DaysExpenses";
import RecentIncomeWithChart from "../../components/dashboard/RecentIncomeWithChart";
import RecentIncome from "../../components/dashboard/RecentIncome";

const Home = () => {
  useUserAuth();
  const navigate = useNavigate();
  const [DashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `${API_PATHS.DASHBOARD.GET_DATA}`
      );
      if (response.data) {
        setDashboardData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong. Please try again later.", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCards
            icon={<IoMdCard />}
            label="Total Balance"
            value={addThousandsSeparator(DashboardData?.totalBalance || 0)}
            color="bg-primary"
          />
          <InfoCards
            icon={<LuWalletMinimal />}
            label="Total Income"
            value={addThousandsSeparator(DashboardData?.totalIncome || 0)}
            color="bg-orange-500"
          />
          <InfoCards
            icon={<LuHandCoins />}
            label="Total Expense"
            value={addThousandsSeparator(DashboardData?.totalExpenses || 0)} // Fixed typo
            color="bg-red-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <RecentTransaction
            transactions={DashboardData?.recentTransactions || []}
            onSeeMore={() => navigate("/expense")}
          />

          <FinanceOverview
            totalBalance={DashboardData?.totalBalance || 0}
            totalIncome={DashboardData?.totalIncome || 0}
            totalExpenses={DashboardData?.totalExpenses || 0}
          />

          <ExpenseTransactions
            transactions={DashboardData?.last30DaysExpenses?.transactions || []}
            onSeeMore={() => navigate("/expense")}
          />

          <Last30DaysExpenses
            data={DashboardData?.last30DaysExpenses?.transactions || []}
          />

          <RecentIncomeWithChart
            data={
              DashboardData?.last60DaysIncome?.transactions?.slice(0, 4) || []
            }
            totalIncome={DashboardData?.totalIncome || 0}
          />

          <RecentIncome
            transactions={ DashboardData?.last60DaysIncome?.transactions || []}
            onSeeMore={() => navigate("/income")}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;
