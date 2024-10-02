import { Box } from "@mui/material";
import { useGetApiProducts } from "../../services/products/products";
import "./dashboard.component.css";
import RefreshButton from "../../shared/components/refresh-button/refresh-button.component";
import TopProductsMenu from "./top-selling/products-menu.component";
import SalesRevenueChart from "./sales-revenue/sales-revenue-chart.component";

const mockSales = [
  { month: "Dec", selling: 570, newCustomers: 1067 },
  { month: "Jan", selling: 670, newCustomers: 1167 },
  { month: "Feb", selling: 800, newCustomers: 1300 },
  { month: "Mar", selling: 750, newCustomers: 1200 },
  { month: "Apr", selling: 900, newCustomers: 1400 },
  { month: "May", selling: 850, newCustomers: 1350 },
  { month: "Jun", selling: 1000, newCustomers: 1500 },
  { month: "Jul", selling: 950, newCustomers: 1450 },
  { month: "Aug", selling: 1100, newCustomers: 1600 },
  { month: "Sep", selling: 1050, newCustomers: 1550 },
  { month: "Oct", selling: 1150, newCustomers: 1700 },
  { month: "Nov", selling: 1200, newCustomers: 1750 },
  { month: "Dec", selling: 1300, newCustomers: 1800 },
];

const DashboardComponent = () => {
  const { data: products, refetch } = useGetApiProducts();
  return (
    <Box className="dashboardContainer">
      <header className="dashboardHeader">
        <div className="dashboardTitle">E-commerce</div>
        <RefreshButton onClick={refetch} />
      </header>

      <main className="dashboardMainContent">
        <SalesRevenueChart sales={mockSales} />
        {products && <TopProductsMenu products={products} />}
      </main>
    </Box>
  );
};

export default DashboardComponent;
