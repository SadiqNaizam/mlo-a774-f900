import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Users, CreditCard, Activity, Package } from 'lucide-react';

// Custom Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';
import StatsCard from '@/components/StatsCard';
import SalesLineChart from '@/components/SalesLineChart';
import RecentActivityFeed from '@/components/RecentActivityFeed';

// shadcn/ui Components
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';

// Mock data for the recent orders table
const recentOrders = [
  {
    orderId: "#1056",
    customer: "Liam Johnson",
    email: "liam@example.com",
    amount: "$250.00",
    status: "Fulfilled",
  },
  {
    orderId: "#1055",
    customer: "Olivia Smith",
    email: "olivia@example.com",
    amount: "$150.00",
    status: "Declined",
  },
  {
    orderId: "#1054",
    customer: "Noah Williams",
    email: "noah@example.com",
    amount: "$350.00",
    status: "Processing",
  },
  {
    orderId: "#1053",
    customer: "Emma Brown",
    email: "emma@example.com",
    amount: "$450.00",
    status: "Fulfilled",
  },
  {
    orderId: "#1052",
    customer: "Ava Jones",
    email: "ava@example.com",
    amount: "$550.00",
    status: "Fulfilled",
  },
];

const getStatusVariant = (status: string): 'default' | 'destructive' | 'secondary' => {
    switch (status) {
        case 'Fulfilled':
            return 'default'; // often mapped to a success-like color, default is green/blue
        case 'Declined':
            return 'destructive'; // red
        case 'Processing':
            return 'secondary'; // yellow/gray
        default:
            return 'secondary';
    }
}


const DashboardOverview = () => {
  console.log('DashboardOverview loaded');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(prevState => !prevState);
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[auto_1fr]">
      <LeftSidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col max-h-screen overflow-y-auto">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-8 bg-muted/40">
          {/* Stats Cards Section */}
          <section className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <StatsCard
              title="Total Revenue"
              value="$45,231.89"
              change="+20.1% from last month"
              changeType="positive"
              icon={<DollarSign className="h-5 w-5 text-muted-foreground" />}
            />
            <StatsCard
              title="New Customers"
              value="+125"
              change="+12% from last month"
              changeType="positive"
              icon={<Users className="h-5 w-5 text-muted-foreground" />}
            />
            <StatsCard
              title="Orders this month"
              value="1,245"
              change="-5.2% from last month"
              changeType="negative"
              icon={<CreditCard className="h-5 w-5 text-muted-foreground" />}
            />
             <StatsCard
              title="Products in Stock"
              value="3,402"
              change="2 low stock items"
              changeType="neutral"
              icon={<Package className="h-5 w-5 text-muted-foreground" />}
            />
          </section>

          {/* Main Chart and Activity Feed Section */}
          <section className="grid gap-4 md:gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <SalesLineChart />
            </div>
            <div className="lg:col-span-2">
              <RecentActivityFeed />
            </div>
          </section>
          
          {/* Recent Orders Table Section */}
          <section>
             <Card>
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>Recent Orders</CardTitle>
                        <CardDescription>
                            An overview of your most recent orders.
                        </CardDescription>
                    </div>
                    <Button asChild size="sm" className="ml-auto gap-1">
                        <Link to="/orders-management">
                            View All
                        </Link>
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Order</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentOrders.map((order) => (
                                <TableRow key={order.orderId}>
                                    <TableCell className="font-medium">{order.orderId}</TableCell>
                                    <TableCell>
                                      <div className="font-medium">{order.customer}</div>
                                      <div className="hidden text-sm text-muted-foreground md:inline">{order.email}</div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={getStatusVariant(order.status)}>
                                            {order.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">{order.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
             </Card>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardOverview;