import { Box, Card, CardContent } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  YAxis,
} from "recharts";
import { useGetApiProducts } from "../../services/products/products";
import "./dashboard.component.css";
import RefreshButton from "../../shared/components/refresh-button/refresh-button.component";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import TopProductsMenuItem from "./top-selling/products-menu-item.component";

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

const renderCustomLegend = (): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        gap: "13px",
        justifyContent: "flex-end",
        marginBottom: "10px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            display: "inline-block",
            width: "10px",
            height: "10px",
            backgroundColor: "#6366F1",
            borderRadius: "50%",
            marginRight: "8px",
          }}
        ></span>
        <span
          style={{
            color: "#667085",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
          }}
        >
          New Customers
        </span>
      </div>
      <div
        style={{ marginRight: "20px", display: "flex", alignItems: "center" }}
      >
        <span
          style={{
            display: "inline-block",
            width: "10px",
            height: "10px",
            backgroundColor: "#4338CA",
            borderRadius: "50%",
            marginRight: "8px",
          }}
        ></span>
        <span
          style={{
            color: "#667085",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
          }}
        >
          Up/Cross-Selling
        </span>
      </div>
    </div>
  );
};

const DashboardComponent = () => {
  const { data: products } = useGetApiProducts();
  return (
    <Box className="dashboardContainer">
      <header className="dashboardHeader">
        <div className="dashboardTitle">E-commerce</div>
        <RefreshButton />
      </header>

      <main className="dashboardMainContent">
        <Card
          sx={{
            padding: "32px 24px 8px",
            boxShadow: "0px 5px 22px 0px #0000000A",
            borderRadius: "20px",
          }}
        >
          <CardContent
            sx={{
              padding: "0px",
            }}
          >
            <div className="salesRevenueTitle">Sales Revenue</div>
            <LineChart
              width={917}
              height={565}
              data={mockSales}
              className="salesRevenueChart"
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 2000]} hide={true} />
              <Tooltip />
              <Legend
                align="right"
                verticalAlign="top"
                content={renderCustomLegend}
              />
              <Line
                type="monotone"
                dataKey="selling"
                stroke="#4338CA"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="newCustomers"
                stroke="#6366F1"
                strokeWidth={2}
                dot={false}
                style={{
                  background:
                    "linear-gradient(180deg, #16B364 0%, rgba(22, 179, 100, 0.00520833) 95.54%)",
                }}
              />
            </LineChart>
          </CardContent>
        </Card>
        <Card
          sx={{
            padding: "0px",
            boxShadow: "0px 5px 22px 0px #0000000A",
            borderRadius: "20px",
          }}
        >
          <CardContent
            sx={{
              padding: "0px",
            }}
          >
            <div className="topSellingProductTitle">Top Selling Products</div>
            {products?.map((product) => (
              <TopProductsMenuItem product={product} />
            ))}
            <div className="seeAllProductsButton">
              <div className="seeAllProductsText">See All Products</div>
              <img src={ArrowRight} />
            </div>
          </CardContent>
        </Card>
      </main>
    </Box>
  );
};

export default DashboardComponent;
