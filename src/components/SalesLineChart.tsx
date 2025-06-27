import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Define the structure for a single data point
interface SalesDataPoint {
  date: string;
  sales: number;
}

// Sample data for demonstration purposes
const sampleSalesData: SalesDataPoint[] = [
  { date: 'Jan', sales: 4000 },
  { date: 'Feb', sales: 3000 },
  { date: 'Mar', sales: 5000 },
  { date: 'Apr', sales: 4500 },
  { date: 'May', sales: 6000 },
  { date: 'Jun', sales: 5500 },
  { date: 'Jul', sales: 7000 },
];

interface SalesLineChartProps {
  /**
   * The data to display on the chart. If not provided, sample data will be used.
   */
  data?: SalesDataPoint[];
  /**
   * Optional title for the chart card.
   */
  title?: string;
  /**
   * Optional description for the chart card.
   */
  description?: string;
}

const SalesLineChart: React.FC<SalesLineChartProps> = ({
  data = sampleSalesData,
  title = "Sales Overview",
  description = "A visual summary of your sales performance over time."
}) => {
  console.log('SalesLineChart loaded');

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 20,
                left: -10,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="date" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                }}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ r: 4, fill: "hsl(var(--primary))" }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesLineChart;