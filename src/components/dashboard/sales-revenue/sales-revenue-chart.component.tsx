import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  Legend,
} from "recharts";
import { Card, CardContent } from "@mui/material";
import "./sales-revenue-chart.component.css";

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

interface OwnProps {
  sales: {
    month: string;
    selling: number;
    newCustomers: number;
  }[];
}

const SalesRevenueChart: React.FC<OwnProps> = ({ sales }) => {
  return (
    <Card
      sx={{
        padding: "32px 24px 8px",
        boxShadow: "0px 5px 22px 0px #0000000A",
        borderRadius: "20px",
      }}
    >
      <CardContent sx={{ padding: "0px" }}>
        <div className="salesRevenueTitle">Sales Revenue</div>
        <AreaChart
          width={869}
          height={501}
          data={sales}
          className="salesRevenueChart"
        >
          <defs>
            <linearGradient id="colorNewCustomers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity={0.2} />
              <stop offset="50%" stopColor="#6366F1" stopOpacity={0.1} />
              <stop offset="75%" stopColor="#6366F1" stopOpacity={0.01} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 2000]} hide={true} />
          <Tooltip />
          <Legend
            align="right"
            verticalAlign="top"
            content={renderCustomLegend}
          />
          <Area
            type="monotone"
            dataKey="selling"
            stroke="#4338CA"
            strokeWidth={2}
            dot={false}
            fill="none"
          />
          <Area
            type="monotone"
            dataKey="newCustomers"
            stroke="#6366F1"
            strokeWidth={2}
            dot={false}
            fill="url(#colorNewCustomers)"
          />
        </AreaChart>
      </CardContent>
    </Card>
  );
};

export default SalesRevenueChart;
