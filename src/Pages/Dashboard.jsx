import React from "react";
import { NavBar } from "../Components/NavBar";
import { Container, Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Context } from "../Components/Context";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const stockData = [
  { symbol: "AAPL", price: 145.60, change: 1.23, percentChange: 0.85 },
  { symbol: "GOOG", price: 2729.30, change: -10.00, percentChange: -0.36 },
  { symbol: "AMZN", price: 3345.60, change: 30.25, percentChange: 0.91 },
  { symbol: "TSLA", price: 688.45, change: -5.60, percentChange: -0.81 },
];

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Price Over Time",
      data: [145, 150, 160, 170, 180, 190],
      fill: false,
      borderColor: "rgba(75,192,192,1)",
      tension: 0.1,
    },
  ],
};

export function Dashboard() {
  return (
    <>
      <NavBar />
      <Context mensaje="Use IA para crear Datos"/>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Stock Dashboard
        </Typography>
        <Grid container spacing={3}>
          {stockData.map((stock, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6">{stock.symbol}</Typography>
                  <Typography variant="h5">${stock.price.toFixed(2)}</Typography>
                  <Typography
                    variant="body1"
                    color={stock.change > 0 ? "green" : "red"}
                  >
                    {stock.change > 0 ? "+" : ""}
                    {stock.change.toFixed(2)} ({stock.percentChange.toFixed(2)}%)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

          <Grid item xs={12} md={12}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Stock Price Trends
                </Typography>
                <Box sx={{ height: 300 }}>
                  <Line data={data} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
